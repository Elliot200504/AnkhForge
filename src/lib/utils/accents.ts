import type { Accent, Slot, SourceKind } from '$lib/types';

export const accentColor: Record<Accent, string> = {
	arcane: 'var(--color-arcane-500)',
	blood: 'var(--color-blood-400)',
	abyss: 'var(--color-abyss-400)',
	moss: 'var(--color-moss-400)',
	gold: 'var(--color-gold-400)'
};

export const accentSoft: Record<Accent, string> = {
	arcane: 'var(--color-arcane-800)',
	blood: 'var(--color-blood-800)',
	abyss: 'var(--color-abyss-800)',
	moss: 'var(--color-moss-800)',
	gold: 'color-mix(in srgb, var(--color-gold-500) 30%, black)'
};

export function accentStyle(accent: Accent): string {
	return `--af-accent:${accentColor[accent]};--af-accent-soft:${accentSoft[accent]}`;
}

/** craft purple, drop red, buy/found blue, shimmer gold */
export const sourceAccent: Record<SourceKind, Accent> = {
	craft: 'arcane',
	shimmer: 'gold',
	drop: 'blood',
	boss: 'blood',
	bag: 'blood',
	chest: 'abyss',
	crate: 'abyss',
	buy: 'moss',
	quest: 'moss',
	gather: 'moss'
};

export const sourceLabel: Record<SourceKind, string> = {
	craft: 'Craft',
	shimmer: 'Shimmer',
	drop: 'Drop',
	boss: 'Boss',
	bag: 'Bag',
	chest: 'Chest',
	crate: 'Crate',
	buy: 'Buy',
	quest: 'Angler',
	gather: 'Gather'
};

export const sourceSprite: Record<SourceKind, string> = {
	craft: 'anvil',
	shimmer: 'shimmer',
	drop: 'skull',
	boss: 'eye',
	bag: 'bag',
	chest: 'chest',
	crate: 'crate',
	buy: 'coin',
	quest: 'fish',
	gather: 'leaf'
};

export const slotLabel: Record<Slot, string> = {
	movement: 'Movement',
	wings: 'Wings',
	melee: 'Melee',
	ranged: 'Ranged',
	magic: 'Magic',
	summon: 'Summon',
	defense: 'Defence',
	immunity: 'Immunity',
	health: 'Health',
	mana: 'Mana',
	info: 'Info',
	build: 'Building',
	fishing: 'Fishing',
	yoyo: 'Yoyo',
	utility: 'Utility'
};

export const slotSprite: Record<Slot, string> = {
	movement: 'boot',
	wings: 'wing',
	melee: 'glove',
	ranged: 'quiver',
	magic: 'star',
	summon: 'scarab',
	defense: 'shield',
	immunity: 'ankh',
	health: 'heart',
	mana: 'flask',
	info: 'compass',
	build: 'hammer',
	fishing: 'fish',
	yoyo: 'yoyo',
	utility: 'ring'
};
