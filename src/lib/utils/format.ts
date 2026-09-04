import type { Accessory, Source } from '$lib/types';
import { chanceValue } from '$data/index';
import { buildTree, collectLeaves } from './tree';

/** one line version, like "Mimic · 16.67%" */
export function sourceSummary(source: Source): string {
	const bits = [source.from];
	if (source.chance) bits.push(source.chance);
	else if (source.cost) bits.push(source.cost);
	return bits.join(' · ');
}

/** best source to show. nicest chance first, craft last becuase the tree already say it */
export function bestSource(item: Accessory): Source | undefined {
	const ranked = [...item.sources].sort((a, b) => {
		const craft = Number(a.kind === 'craft') - Number(b.kind === 'craft');
		if (craft !== 0) return craft;
		return (chanceValue(b.chance) ?? -1) - (chanceValue(a.chance) ?? -1);
	});
	return ranked[0];
}

/** how hard just this one item is */
function ownGrind(item: Accessory): number {
	if (item.sources.some((s) => s.kind === 'buy')) return 1;
	const rates = item.sources
		.map((s) => chanceValue(s.chance))
		.filter((n): n is number => n !== null);
	if (rates.length === 0) return item.recipes?.length ? 1 : 2;
	const best = Math.max(...rates);
	if (best >= 50) return 1;
	if (best >= 15) return 2;
	if (best >= 5) return 3;
	if (best >= 1) return 4;
	return 5;
}

/**
 * 1 easy .. 5 pain. if u can craft it the crafting is the easy part so we score
 * the worst thing u still have to farm. saying ankh shield is easy would be a lie
 */
export function grindLevel(item: Accessory): number {
	if (item.recipes?.length) {
		const levels = collectLeaves(buildTree(item))
			.map((leaf) => leaf.item)
			.filter((leaf): leaf is Accessory => Boolean(leaf))
			.map(ownGrind);
		if (levels.length > 0) return Math.max(...levels);
	}
	return ownGrind(item);
}

export const grindLabel = ['', 'easy to get', 'quick', 'a few runs', 'a grind', 'a long grind'];
