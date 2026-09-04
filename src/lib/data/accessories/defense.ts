import type { Accessory } from '$lib/types';
import { TW } from './stations';

/** immunity, shields, damage reduce, life and mana */
export const defense: Accessory[] = [
	// the ten base immunity accessories
	{
		id: 'blindfold',
		name: 'Blindfold',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Darkness.',
		sprite: 'ankh',
		sources: [
			{
				kind: 'drop',
				from: 'Corrupt Slime, Crimslime, Slimeling, Slimer, Dark Mummy, Blood Mummy',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Pocket Mirror', from: 'Pocket Mirror' }
	},
	{
		id: 'pocket-mirror',
		name: 'Pocket Mirror',
		tier: 'post-golem',
		slots: ['immunity'],
		effect: 'Grants immunity to Stoned.',
		sprite: 'ankh',
		sources: [
			{
				kind: 'drop',
				from: 'Medusa',
				chance: '1/40 (2.5%)',
				expert: '1/20 (5%)',
				note: 'must be a naturally spawned Medusa'
			}
		],
		shimmer: { to: 'Blindfold', from: 'Blindfold' }
	},
	{
		id: 'reflective-shades',
		name: 'Reflective Shades',
		tier: 'post-golem',
		slots: ['immunity'],
		effect: 'Grants immunity to Darkness and Stoned.',
		sprite: 'ankh',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Blindfold' }, { item: 'Pocket Mirror' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'fast-clock',
		name: 'Fast Clock',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Slow.',
		sprite: 'ankh',
		sources: [
			{
				kind: 'drop',
				from: 'Mummy, Pixie, Wraith',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)',
				note: 'not from Light, Dark, Blood, Shadow or Spectral Mummies'
			}
		],
		shimmer: { to: 'Trifold Map', from: 'Trifold Map' }
	},
	{
		id: 'trifold-map',
		name: 'Trifold Map',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Confusion.',
		sprite: 'ankh',
		sources: [
			{
				kind: 'drop',
				from: 'Clown, Giant Bat, Light Mummy',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Fast Clock', from: 'Fast Clock' }
	},
	{
		id: 'the-plan',
		name: 'The Plan',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Slow and Confusion.',
		sprite: 'ankh',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Fast Clock' }, { item: 'Trifold Map' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'megaphone',
		name: 'Megaphone',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Silenced.',
		sprite: 'ankh',
		sources: [
			{
				kind: 'drop',
				from: 'Green Jellyfish, Blood Mummy, Dark Mummy, Pixie',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Nazar', from: 'Nazar' },
		note: 'Shimmering a Nazar is the only way to get this pre-Hardmode.'
	},
	{
		id: 'nazar',
		name: 'Nazar',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Cursed.',
		sprite: 'eye',
		sources: [
			{
				kind: 'drop',
				from: 'Cursed Skull, Giant Cursed Skull, Cursed Hammer, Crimson Axe, Enchanted Sword',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Megaphone', from: 'Megaphone' }
	},
	{
		id: 'countercurse-mantra',
		name: 'Countercurse Mantra',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Silenced and Cursed.',
		sprite: 'ankh',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Megaphone' }, { item: 'Nazar' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'vitamins',
		name: 'Vitamins',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Weakness.',
		sprite: 'flask',
		sources: [
			{ kind: 'drop', from: 'Corruptor', chance: '1/100 (1%)', expert: '2/100 (2%)' },
			{
				kind: 'drop',
				from: 'Floaty Gross',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Armor Polish', from: 'Armor Polish' }
	},
	{
		id: 'armor-polish',
		name: 'Armor Polish',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Broken Armor.',
		sprite: 'shield',
		sources: [
			{
				kind: 'drop',
				from: 'Armored Skeleton, Blue Armored Bones',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Vitamins', from: 'Vitamins' }
	},
	{
		id: 'armor-bracing',
		name: 'Armor Bracing',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Weakness and Broken Armor.',
		sprite: 'shield',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Armor Polish' }, { item: 'Vitamins' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'bezoar',
		name: 'Bezoar',
		tier: 'pre-hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Poisoned. Not Acid Venom.',
		sprite: 'flask',
		sources: [
			{
				kind: 'drop',
				from: 'Hornet, Moss Hornet, Toxic Sludge',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Adhesive Bandage', from: 'Adhesive Bandage' }
	},
	{
		id: 'adhesive-bandage',
		name: 'Adhesive Bandage',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Bleeding.',
		sprite: 'ankh',
		sources: [
			{
				kind: 'drop',
				from: 'Angler Fish, Rusty Armored Bones, Werewolf',
				chance: '1/100 (1%)',
				expert: '199/10000 (1.99%)'
			}
		],
		shimmer: { to: 'Bezoar', from: 'Bezoar' }
	},
	{
		id: 'medicated-bandage',
		name: 'Medicated Bandage',
		tier: 'hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Poisoned and Bleeding.',
		sprite: 'ankh',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Bezoar' }, { item: 'Adhesive Bandage' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'ankh-charm',
		name: 'Ankh Charm',
		tier: 'post-golem',
		slots: ['immunity'],
		effect: 'Grants immunity to most debuffs.',
		sprite: 'ankh',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Armor Bracing' },
					{ item: 'Medicated Bandage' },
					{ item: 'The Plan' },
					{ item: 'Countercurse Mantra' },
					{ item: 'Reflective Shades' }
				],
				note: 'Reflective Shades on Desktop, Console and Mobile only'
			}
		],
		shimmer: { decraft: true },
		note: 'Every base component has a shimmer partner, so you only ever need to farm five of the ten.'
	},
	{
		id: 'ankh-shield',
		name: 'Ankh Shield',
		tier: 'post-golem',
		slots: ['immunity', 'defense'],
		effect: 'Immunity to knockback, fire blocks and most debuffs. +4 defence.',
		sprite: 'shield',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Obsidian Shield' }, { item: 'Ankh Charm' }] }],
		shimmer: { decraft: true },
		note: 'The long grind this whole app is named after.'
	},
	{
		id: 'hand-warmer',
		name: 'Hand Warmer',
		tier: 'pre-hardmode',
		slots: ['immunity'],
		effect: 'Grants immunity to Chilled and Frozen.',
		sprite: 'glove',
		sources: [
			{
				kind: 'drop',
				from: 'Present (Christmas)',
				chance: '~0.62% pre-Hardmode',
				expert: '~0.58% in Hardmode'
			}
		]
	},

	// shields
	{
		id: 'cobalt-shield',
		name: 'Cobalt Shield',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: 'Grants immunity to knockback, and +1 defence.',
		sprite: 'shield',
		sources: [
			{
				kind: 'chest',
				from: 'Locked Gold Chest (Dungeon) / Golden Lock Box',
				chance: '1/7 (14.29%)'
			}
		]
	},
	{
		id: 'obsidian-shield',
		name: 'Obsidian Shield',
		tier: 'pre-hardmode',
		slots: ['defense', 'immunity'],
		effect: 'Immunity to knockback and to fire blocks. +2 defence.',
		sprite: 'shield',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Cobalt Shield' }, { item: 'Obsidian Skull' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'silver-shield',
		name: 'Silver Shield',
		tier: 'pre-hardmode',
		slots: ['defense', 'summon'],
		effect: 'Knockback and fire-block immunity, +1 summon tag effect, longer tag duration.',
		sprite: 'shield',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Silver Bracer' }, { item: 'Obsidian Shield' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'restoration-shield',
		name: 'Restoration Shield',
		tier: 'pre-hardmode',
		slots: ['defense', 'health', 'mana'],
		effect: 'Knockback immunity, +1 HP/s, +40 max mana, and faster mana regeneration.',
		sprite: 'shield',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Cobalt Shield' }, { item: 'Mana Regeneration Band' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'paladins-shield',
		name: "Paladin's Shield",
		tier: 'post-plantera',
		slots: ['defense'],
		effect: 'Absorbs 25% of damage done to teammates while above 25% life. +6 defence.',
		sprite: 'shield',
		sources: [{ kind: 'drop', from: 'Paladin (Dungeon)', chance: '10%', expert: '19%' }]
	},
	{
		id: 'frozen-turtle-shell',
		name: 'Frozen Turtle Shell',
		tier: 'hardmode',
		slots: ['defense'],
		effect: 'Below 50% life, a shell reduces incoming damage by 25%.',
		sprite: 'shield',
		sources: [{ kind: 'drop', from: 'Ice Tortoise', chance: '1/50 (2%)' }]
	},
	{
		id: 'frozen-shield',
		name: 'Frozen Shield',
		tier: 'post-plantera',
		slots: ['defense'],
		effect: 'Knockback immunity, team damage absorption, and the Ice Barrier below 50% life.',
		sprite: 'shield',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: "Paladin's Shield" }, { item: 'Frozen Turtle Shell' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'hero-shield',
		name: 'Hero Shield',
		tier: 'post-plantera',
		slots: ['defense'],
		effect: 'Knockback immunity, team damage absorption, and draws enemy aggro.',
		sprite: 'shield',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: "Paladin's Shield" }, { item: 'Flesh Knuckles' }] }
		],
		shimmer: { decraft: true }
	},

	// damage reduction & dodges
	{
		id: 'worm-scarf',
		name: 'Worm Scarf',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: 'Reduces damage taken by 17%.',
		sprite: 'shield',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Eater of Worlds)', chance: '100%' }],
		note: 'Arguably the strongest defensive accessory in the game.'
	},
	{
		id: 'brain-of-confusion',
		name: 'Brain of Confusion',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: '1/6 (16.67%) chance to dodge, then a burst of crit and minion damage.',
		sprite: 'skull',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Brain of Cthulhu)', chance: '100%' }]
	},
	{
		id: 'royal-gel',
		name: 'Royal Gel',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: 'Slimes become friendly — including Shimmer Slimes.',
		sprite: 'flask',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (King Slime)', chance: '100%' }]
	},

	// life
	{
		id: 'band-of-regeneration',
		name: 'Band of Regeneration',
		tier: 'pre-hardmode',
		slots: ['health'],
		effect: 'Slowly regenerates life — 1 HP per second.',
		sprite: 'heart',
		sources: [
			{
				kind: 'chest',
				from: 'Gold Chest — Underground / Cavern / Lava layer',
				chance: '16.67% / 13.33% / 12.67%'
			},
			{ kind: 'drop', from: 'Mimic (pre-Hardmode)', chance: '16.67%' }
		]
	},
	{
		id: 'philosophers-stone',
		name: "Philosopher's Stone",
		tier: 'hardmode',
		slots: ['health'],
		effect: 'Reduces the cooldown of healing potions by 25%.',
		sprite: 'flask',
		sources: [{ kind: 'drop', from: 'Mimic', chance: '1/6 (16.67%)' }]
	},
	{
		id: 'charm-of-myths',
		name: 'Charm of Myths',
		tier: 'hardmode',
		slots: ['health'],
		effect: '+1 HP/s and 25% shorter healing potion cooldown.',
		sprite: 'heart',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Band of Regeneration' }, { item: "Philosopher's Stone" }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'catalyst-band',
		name: 'Catalyst Band',
		tier: 'hardmode',
		slots: ['health', 'ranged'],
		effect: '25% shorter potion cooldown, poison arrows, and doubled debuff damage.',
		sprite: 'flask',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Poison Barb' }, { item: "Philosopher's Stone" }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'shiny-stone',
		name: 'Shiny Stone',
		tier: 'post-golem',
		slots: ['health'],
		effect: 'Greatly increases life regeneration while you stand still.',
		sprite: 'star',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Golem)', chance: '100%' }]
	},
	{
		id: 'panic-necklace',
		name: 'Panic Necklace',
		tier: 'pre-hardmode',
		slots: ['movement', 'health'],
		effect: 'Doubles movement speed for 8 seconds after you take damage.',
		sprite: 'heart',
		sources: [
			{ kind: 'drop', from: 'Crimson Heart', chance: '1/5 (20%)' },
			{ kind: 'crate', from: 'Crimson / Hematic Crate', chance: '1/5 (20%)' },
			{ kind: 'craft', from: TW }
		],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Band of Starpower' }, { item: 'Life Crystal' }],
				note: 'needs Ecto Mist as well — this is the Corruption-world route'
			}
		]
	},
	{
		id: 'shackle',
		name: 'Shackle',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: 'Grants 1 point of defence.',
		sprite: 'ring',
		sources: [{ kind: 'drop', from: 'Most Zombie variants', chance: '1/50 (2%)' }]
	},

	// mana
	{
		id: 'band-of-starpower',
		name: 'Band of Starpower',
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: 'Increases maximum mana by 40.',
		sprite: 'star',
		sources: [
			{ kind: 'drop', from: 'Shadow Orb', chance: '1/5 (20%)' },
			{ kind: 'crate', from: 'Corrupt / Defiled Crate', chance: '1/5 (20%)' },
			{ kind: 'craft', from: TW }
		],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Panic Necklace' }, { item: 'Mana Crystal' }],
				note: 'needs Ecto Mist as well — this is the Crimson-world route'
			}
		]
	},
	{
		id: 'magic-cuffs',
		name: 'Magic Cuffs',
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: '+40 maximum mana, and restores mana when you take damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Band of Starpower' }, { item: 'Shackle' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'celestial-cuffs',
		name: 'Celestial Cuffs',
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: '+40 max mana, mana on damage, and a huge mana star pickup range.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Celestial Magnet' }, { item: 'Magic Cuffs' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'mana-regeneration-band',
		name: 'Mana Regeneration Band',
		tier: 'pre-hardmode',
		slots: ['mana', 'health'],
		effect: '+1 HP/s, +40 maximum mana, and a faster mana regeneration rate.',
		sprite: 'flask',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Band of Starpower' }, { item: 'Band of Regeneration' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'mystic-arts-sash',
		name: 'Mystic Arts Sash',
		tier: 'post-plantera',
		slots: ['mana', 'health', 'defense'],
		effect: 'Mana Regeneration Band bonuses, plus a chance to dodge attacks.',
		sprite: 'flask',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Mana Regeneration Band' }, { item: 'Black Belt' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'celestial-magnet',
		name: 'Celestial Magnet',
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: 'Increases pickup range for mana stars to about 21 tiles.',
		sprite: 'star',
		sources: [
			{ kind: 'chest', from: 'Skyware Chest', chance: '1/4 (25%)' },
			{ kind: 'crate', from: 'Sky / Azure Crate', chance: '1/4 (25%)' }
		]
	},
	{
		id: 'natures-gift',
		name: "Nature's Gift",
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: '6% reduced mana cost.',
		sprite: 'leaf',
		sources: [
			{
				kind: 'gather',
				from: 'Underground Jungle',
				note: 'a rare blue flower on Jungle grass — cut it with any tool or weapon'
			}
		]
	},
	{
		id: 'mana-flower',
		name: 'Mana Flower',
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: '8% reduced mana cost, and auto-uses mana potions when needed.',
		sprite: 'leaf',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: "Nature's Gift" }, { item: 'Mana Potion' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'arcane-flower',
		name: 'Arcane Flower',
		tier: 'post-mech',
		slots: ['mana', 'magic'],
		effect: 'Mana Flower bonuses, +5% magic damage and crit, and less enemy aggro.',
		sprite: 'leaf',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Mana Flower' }, { item: 'Putrid Scent' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'magnet-flower',
		name: 'Magnet Flower',
		tier: 'pre-hardmode',
		slots: ['mana'],
		effect: 'Mana Flower bonuses, plus the mana star pickup range.',
		sprite: 'leaf',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Mana Flower' }, { item: 'Celestial Magnet' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'mana-cloak',
		name: 'Mana Cloak',
		tier: 'hardmode',
		slots: ['mana', 'defense'],
		effect: 'Mana Flower bonuses, falling stars on damage, and stars restore mana.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Mana Flower' }, { item: 'Star Cloak' }] }],
		shimmer: { decraft: true }
	}
];
