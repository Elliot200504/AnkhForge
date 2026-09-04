import type { Accessory, Mob, Source, SourceKind } from '$lib/types';
import { mobs } from '$data/mobs';
import { accessories } from '$data/index';

export const mobByName: Map<string, Mob> = new Map();
for (const mob of mobs) {
	mobByName.set(mob.name.toLowerCase(), mob);
	for (const alias of mob.aliases ?? []) mobByName.set(alias.toLowerCase(), mob);
}

/** only these kinds have mobs in the text. a chest or a npc is not a mob */
const CREATURE_KINDS = new Set<SourceKind>(['drop', 'boss', 'bag']);

export function namesCreatures(source: Source): boolean {
	return CREATURE_KINDS.has(source.kind);
}

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * one regex for every name + alias, longest first so "Giant Cursed Skull" win
 * over "Cursed Skull". letter lookaround not \b, some alias have brackets
 */
const pattern = new RegExp(
	'(?<![A-Za-z])(' +
		[...mobByName.keys()]
			.sort((a, b) => b.length - a.length)
			.map(escape)
			.join('|') +
		')(?![A-Za-z])',
	'gi'
);

export interface Segment {
	text: string;
	/** set if this bit of text is a mob we know */
	mob?: Mob;
}

/** cut the text in normal bits and mob bits */
export function splitMobs(text: string): Segment[] {
	const out: Segment[] = [];
	let last = 0;

	pattern.lastIndex = 0;
	for (let hit = pattern.exec(text); hit; hit = pattern.exec(text)) {
		const mob = mobByName.get(hit[0].toLowerCase());
		if (!mob) continue;
		if (hit.index > last) out.push({ text: text.slice(last, hit.index) });
		out.push({ text: hit[0], mob });
		last = hit.index + hit[0].length;
	}
	if (last < text.length) out.push({ text: text.slice(last) });
	return out;
}

export interface MobDrop {
	accessory: Accessory;
	source: Source;
}

/** other way round, what this mob drop */
export const dropsByMob: Map<string, MobDrop[]> = (() => {
	const map = new Map<string, MobDrop[]>();
	for (const accessory of accessories) {
		for (const source of accessory.sources) {
			if (!namesCreatures(source)) continue;
			for (const segment of splitMobs(source.from)) {
				if (!segment.mob) continue;
				const list = map.get(segment.mob.name) ?? [];
				if (!list.some((d) => d.accessory.id === accessory.id)) {
					list.push({ accessory, source });
				}
				map.set(segment.mob.name, list);
			}
		}
	}
	return map;
})();
