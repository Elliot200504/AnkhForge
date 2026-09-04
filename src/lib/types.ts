/** when in the game u can get it. dont reorder, ui read it in order */
export type Tier =
	| 'pre-hardmode'
	| 'hardmode'
	| 'post-mech'
	| 'post-plantera'
	| 'post-golem'
	| 'post-moonlord';

/** what its for. one item can be more than one */
export type Slot =
	| 'movement'
	| 'wings'
	| 'melee'
	| 'ranged'
	| 'magic'
	| 'summon'
	| 'defense'
	| 'immunity'
	| 'health'
	| 'mana'
	| 'info'
	| 'build'
	| 'fishing'
	| 'yoyo'
	| 'utility';

export type Accent = 'arcane' | 'blood' | 'abyss' | 'moss' | 'gold';

/** how u get it. pick the icon and the color */
export type SourceKind =
	| 'chest'
	| 'crate'
	| 'drop'
	| 'boss'
	| 'bag'
	| 'buy'
	| 'quest'
	| 'gather'
	| 'shimmer'
	| 'craft';

export interface Ingredient {
	item: string;
	qty?: number;
}

export interface Recipe {
	/** where u craft it */
	at: string;
	needs: Ingredient[];
	note?: string;
}

export interface Source {
	kind: SourceKind;
	/** chest, mob, boss, npc.. whatever give it */
	from: string;
	/** classic chance, already formated like "1/6 (16.67%)" */
	chance?: string;
	/** expert chance, only if its different */
	expert?: string;
	/** price if u buy it */
	cost?: string;
	note?: string;
}

export interface Shimmer {
	/** throw this in shimmer, get that */
	to?: string;
	/** throw that in, get this back */
	from?: string;
	/** shimmer just give the ingredients back */
	decraft?: boolean;
	note?: string;
}

export interface Accessory {
	id: string;
	name: string;
	tier: Tier;
	slots: Slot[];
	/** the tooltip but one line */
	effect: string;
	sources: Source[];
	recipes?: Recipe[];
	shimmer?: Shimmer;
	/** expert world only */
	expertOnly?: boolean;
	/** desktop console mobile only */
	desktopOnly?: boolean;
	/** sprite name, PixelIcon look it up */
	sprite?: string;
	note?: string;
}

export interface TierDef {
	id: Tier;
	name: string;
	glyph: string;
	tagline: string;
	accent: Accent;
	order: number;
}

export type MobKind = 'enemy' | 'boss' | 'object';

/** a mob (or a thing u smash) and where it live */
export interface Mob {
	name: string;
	kind: MobKind;
	/** biome + layer */
	where: string;
	/** night, moon, event.. when it show up */
	when?: string;
	/** stage, only if its obvious */
	stage?: Tier;
	note?: string;
	/** other names it get called in the drop text */
	aliases?: string[];
}
