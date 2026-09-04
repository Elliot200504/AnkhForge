import type { TierDef } from '$lib/types';

/** the 6 stages. dont reorder, the grouping read it in order */
export const tiers: TierDef[] = [
	{
		id: 'pre-hardmode',
		name: 'Pre-Hardmode',
		glyph: 'I',
		order: 1,
		accent: 'moss',
		tagline: 'Chests, crates and the first bosses'
	},
	{
		id: 'hardmode',
		name: 'Hardmode',
		glyph: 'II',
		order: 2,
		accent: 'arcane',
		tagline: 'The Wall is down and everything hits harder'
	},
	{
		id: 'post-mech',
		name: 'Post-Mechanical',
		glyph: 'III',
		order: 3,
		accent: 'abyss',
		tagline: 'Hallowed bars, mimics and the road to the Temple'
	},
	{
		id: 'post-plantera',
		name: 'Post-Plantera',
		glyph: 'IV',
		order: 4,
		accent: 'moss',
		tagline: 'The Dungeon reopens — Paladins, Bone Lee, Tabi'
	},
	{
		id: 'post-golem',
		name: 'Post-Golem',
		glyph: 'V',
		order: 5,
		accent: 'gold',
		tagline: 'Martians, Fishron, the Empress and the Cultist'
	},
	{
		id: 'post-moonlord',
		name: 'Post-Moon Lord',
		glyph: 'VI',
		order: 6,
		accent: 'blood',
		tagline: 'Luminite wings and the very last upgrades'
	}
];

export const tierById = new Map(tiers.map((t) => [t.id, t]));

export function tierIndex(id: string): number {
	return tiers.findIndex((t) => t.id === id);
}
