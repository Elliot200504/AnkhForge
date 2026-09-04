import type { Accessory, Slot, Source } from '$lib/types';
import { movement } from './accessories/movement';
import { wings } from './accessories/wings';
import { combat } from './accessories/combat';
import { defense } from './accessories/defense';
import { utility } from './accessories/utility';
import { tierIndex } from './tiers';

export { tiers, tierById, tierIndex } from './tiers';

export const accessories: Accessory[] = [
	...movement,
	...wings,
	...combat,
	...defense,
	...utility
].sort((a, b) => tierIndex(a.tier) - tierIndex(b.tier) || a.name.localeCompare(b.name));

export const byId = new Map(accessories.map((a) => [a.id, a]));

/** name -> accessory so a ingredient can link to itself */
export const byName = new Map(accessories.map((a) => [a.name.toLowerCase(), a]));

/** what this craft into. read off the recipes so it cant get out of sync */
export const usedIn: Map<string, Accessory[]> = (() => {
	const map = new Map<string, Accessory[]>();
	for (const item of accessories) {
		for (const recipe of item.recipes ?? []) {
			for (const need of recipe.needs) {
				const target = byName.get(need.item.toLowerCase());
				if (!target || target.id === item.id) continue;
				const list = map.get(target.id) ?? [];
				if (!list.some((x) => x.id === item.id)) list.push(item);
				map.set(target.id, list);
			}
		}
	}
	return map;
})();

/** everything with a shimmer swap */
export const shimmerable = accessories.filter((a) => a.shimmer?.to || a.shimmer?.from);

export const decraftable = accessories.filter((a) => a.shimmer?.decraft);

export interface DropRow {
	accessory: Accessory;
	source: Source;
}

/** one row per source that got a chance */
export const dropRows: DropRow[] = accessories
	.flatMap((accessory) => accessory.sources.map((source) => ({ accessory, source })))
	.filter((row) => Boolean(row.source.chance));

export const allSlots: Slot[] = [
	'movement',
	'wings',
	'melee',
	'ranged',
	'magic',
	'summon',
	'defense',
	'immunity',
	'health',
	'mana',
	'info',
	'build',
	'fishing',
	'yoyo',
	'utility'
];

/** "1/6 (16.67%)" -> 16.67 so we can sort. null if theres none */
export function chanceValue(chance?: string): number | null {
	if (!chance) return null;
	const match = chance.match(/([\d.]+)\s*%/);
	if (!match) return null;
	return Number(match[1]);
}

/**
 * search text made once. doing it per keystroke was joining thousands of
 * strings every single letter u type
 */
export const searchText: Map<string, string> = new Map(
	accessories.map((item) => {
		const sources = item.sources
			.map((s) => [s.from, s.chance, s.expert, s.cost, s.note].filter(Boolean).join(' '))
			.join(' ');
		const recipes = (item.recipes ?? [])
			.map((r) => `${r.at} ${r.needs.map((n) => n.item).join(' ')}`)
			.join(' ');
		const shimmer = [item.shimmer?.to, item.shimmer?.from].filter(Boolean).join(' ');
		const slots = item.slots.join(' ');
		return [
			item.id,
			`${item.name} ${item.effect} ${slots} ${sources} ${recipes} ${shimmer} ${item.note ?? ''}`.toLowerCase()
		];
	})
);
