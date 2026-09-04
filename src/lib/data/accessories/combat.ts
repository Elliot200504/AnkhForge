import type { Accessory } from '$lib/types';
import { TW, ANVIL } from './stations';

/** damage, crit, tags, sentries, quivers, scopes, yoyo */
export const combat: Accessory[] = [
	// gloves & melee
	{
		id: 'feral-claws',
		name: 'Feral Claws',
		tier: 'pre-hardmode',
		slots: ['melee'],
		effect: '12% increased melee speed, and auto-swing for melee weapons and whips.',
		sprite: 'glove',
		sources: [
			{ kind: 'chest', from: 'Ivy Chest', chance: '21.72%' },
			{ kind: 'crate', from: 'Jungle / Bramble Crate', chance: '19/100 (19%)' }
		]
	},
	{
		id: 'titan-glove',
		name: 'Titan Glove',
		tier: 'hardmode',
		slots: ['melee'],
		effect: 'Doubles melee knockback and increases melee weapon size by 10%.',
		sprite: 'glove',
		sources: [{ kind: 'drop', from: 'Mimic', chance: '1/6 (16.67%)' }]
	},
	{
		id: 'power-glove',
		name: 'Power Glove',
		tier: 'hardmode',
		slots: ['melee'],
		effect: 'Auto-swing, 12% melee speed, doubled knockback, bigger melee weapons.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Titan Glove' }, { item: 'Feral Claws' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'mechanical-glove',
		name: 'Mechanical Glove',
		tier: 'post-mech',
		slots: ['melee'],
		effect: 'Everything the Power Glove does, plus 12% increased melee damage.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Power Glove' }, { item: 'Avenger Emblem' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'fire-gauntlet',
		name: 'Fire Gauntlet',
		tier: 'post-mech',
		slots: ['melee'],
		effect: 'Mechanical Glove bonuses, and melee attacks inflict fire damage.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Mechanical Glove' }, { item: 'Magma Stone' }] }],
		shimmer: { decraft: true },
		note: 'The end of the melee glove line.'
	},
	{
		id: 'berserkers-glove',
		name: "Berserker's Glove",
		tier: 'post-mech',
		slots: ['melee', 'defense'],
		effect: 'Power Glove bonuses, +8 defence, and enemies are more likely to target you.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Power Glove' }, { item: 'Flesh Knuckles' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'wicked-claws',
		name: 'Wicked Claws',
		tier: 'hardmode',
		slots: ['melee', 'summon'],
		effect: '+1 summon tag effect, more whip knockback, 12% melee speed, auto-swing.',
		sprite: 'glove',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Wicked Armlet' }, { item: 'Feral Claws' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'magma-stone',
		name: 'Magma Stone',
		tier: 'pre-hardmode',
		slots: ['melee'],
		effect: 'Melee attacks inflict fire damage.',
		sprite: 'flask',
		sources: [
			{ kind: 'drop', from: 'Lava Bat', chance: '2%' },
			{ kind: 'drop', from: 'Hellbat', chance: '0.67%' }
		],
		shimmer: { to: 'Lava Charm', from: 'Lava Charm' },
		note: 'The shimmer swap is the easy way to get a Lava Charm without chest hunting.'
	},
	{
		id: 'snapping-stone',
		name: 'Snapping Stone',
		tier: 'hardmode',
		slots: ['ranged'],
		effect: 'Ranged hits discharge a damaging pulse.',
		sprite: 'flask',
		desktopOnly: true,
		sources: [
			{ kind: 'drop', from: 'Granite Elemental / Granite Golem', chance: '1/80 (1.25%)' }
		]
	},
	{
		id: 'pyroclastic-stone',
		name: 'Pyroclastic Stone',
		tier: 'hardmode',
		slots: ['melee', 'ranged'],
		effect: 'Melee attacks inflict fire, and melee/ranged hits discharge an explosive slash.',
		sprite: 'flask',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Snapping Stone' }, { item: 'Magma Stone' }] }],
		shimmer: { decraft: true }
	},

	// bees, stars and necklaces
	{
		id: 'honey-comb',
		name: 'Honey Comb',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: 'Releases bees and douses you in honey when damaged.',
		sprite: 'scarab',
		sources: [{ kind: 'boss', from: 'Queen Bee', chance: '33%' }]
	},
	{
		id: 'hive-pack',
		name: 'Hive Pack',
		tier: 'pre-hardmode',
		slots: ['summon'],
		effect: 'Your friendly bees become Giant Bees half the time.',
		sprite: 'scarab',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Queen Bee)', chance: '100%' }]
	},
	{
		id: 'shark-tooth-necklace',
		name: 'Shark Tooth Necklace',
		tier: 'pre-hardmode',
		slots: ['melee'],
		effect: 'Increases armour penetration by 5.',
		sprite: 'star',
		sources: [
			{
				kind: 'drop',
				from: 'Blood Zombie / Drippler (Blood Moon)',
				chance: '1/150 (0.67%)',
				expert: '1/75 (1.33%)'
			}
		]
	},
	{
		id: 'stinger-necklace',
		name: 'Stinger Necklace',
		tier: 'pre-hardmode',
		slots: ['melee', 'defense'],
		effect: 'Armour penetration, and releases bees and honey when damaged.',
		sprite: 'scarab',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Shark Tooth Necklace' }, { item: 'Honey Comb' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'poison-barb',
		name: 'Poison Barb',
		tier: 'pre-hardmode',
		slots: ['ranged'],
		effect: 'Arrows inflict Poisoned.',
		sprite: 'quiver',
		desktopOnly: true,
		sources: [
			{ kind: 'chest', from: 'Surface Chest', chance: '1/11 (9.09%)' },
			{ kind: 'crate', from: 'Wooden / Pearlwood Crate', chance: '1/120 (0.83%)' }
		]
	},
	{
		id: 'sweet-barb',
		name: 'Sweet Barb',
		tier: 'pre-hardmode',
		slots: ['ranged', 'defense'],
		effect: 'Poison arrows, bees and honey when damaged, and hits may release bees.',
		sprite: 'scarab',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Poison Barb' }, { item: 'Honey Comb' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'star-cloak',
		name: 'Star Cloak',
		tier: 'hardmode',
		slots: ['defense'],
		effect: 'Causes stars to fall after taking damage.',
		sprite: 'star',
		sources: [{ kind: 'drop', from: 'Mimic', chance: '1/6 (16.67%)' }],
		shimmer: { to: 'Chromatic Cloak' }
	},
	{
		id: 'bee-cloak',
		name: 'Bee Cloak',
		tier: 'hardmode',
		slots: ['defense'],
		effect: 'Falling stars, plus bees and honey when damaged.',
		sprite: 'scarab',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Honey Comb' }, { item: 'Star Cloak' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'star-veil',
		name: 'Star Veil',
		tier: 'hardmode',
		slots: ['defense'],
		effect: 'Falling stars, and a longer window of invincibility after damage.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Star Cloak' }, { item: 'Cross Necklace' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'cross-necklace',
		name: 'Cross Necklace',
		tier: 'hardmode',
		slots: ['defense'],
		effect: 'Increases the length of invincibility after taking damage.',
		sprite: 'star',
		sources: [{ kind: 'drop', from: 'Mimic', chance: '1/6 (16.67%)' }]
	},
	{
		id: 'crossed-heart-necklace',
		name: 'Crossed Heart Necklace',
		tier: 'hardmode',
		slots: ['defense', 'movement'],
		effect: 'Doubled invincibility frames, and a big speed burst when damaged.',
		sprite: 'heart',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Panic Necklace' }, { item: 'Cross Necklace' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'druidic-serpent-cloak',
		name: 'Druidic Serpent Cloak',
		tier: 'hardmode',
		slots: ['summon', 'defense'],
		effect: 'Every 3 swings your second whip joins in, and stars fall when damaged.',
		sprite: 'star',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Snake Band' }, { item: 'Star Cloak' }] }],
		shimmer: { decraft: true }
	},

	// day / night stones
	{
		id: 'moon-stone',
		name: 'Moon Stone',
		tier: 'hardmode',
		slots: ['melee', 'defense'],
		effect: 'At night: +10% damage and melee speed, +2% crit, +4 defence, and more.',
		sprite: 'star',
		sources: [
			{
				kind: 'drop',
				from: 'Vampire (Solar Eclipse)',
				chance: '1/35 (2.86%)',
				expert: '69/1225 (5.63%)'
			},
			{
				kind: 'chest',
				from: 'Gold Chest',
				chance: '1/10 (10%)',
				note: 'only in "what a horrible night to have a curse" worlds'
			}
		]
	},
	{
		id: 'sun-stone',
		name: 'Sun Stone',
		tier: 'post-golem',
		slots: ['melee', 'defense'],
		effect: 'By day: +10% damage and melee speed, +2% crit, +4 defence, and more.',
		sprite: 'star',
		sources: [{ kind: 'boss', from: 'Golem', chance: '1/7 (14.29%)' }]
	},
	{
		id: 'celestial-stone',
		name: 'Celestial Stone',
		tier: 'post-golem',
		slots: ['melee', 'defense'],
		effect: 'The Sun and Moon Stone bonuses, active around the clock.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Sun Stone' }, { item: 'Moon Stone' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'eye-of-the-golem',
		name: 'Eye of the Golem',
		tier: 'post-golem',
		slots: ['melee', 'ranged', 'magic', 'summon'],
		effect: '10% increased critical strike chance.',
		sprite: 'eye',
		sources: [
			{ kind: 'boss', from: 'Golem', chance: '1/7 (14.29%)' },
			{ kind: 'bag', from: 'Treasure Bag (Golem)', chance: '1/7 (14.29%)' }
		]
	},

	// emblems
	{
		id: 'warrior-emblem',
		name: 'Warrior Emblem',
		tier: 'hardmode',
		slots: ['melee'],
		effect: '15% increased melee damage.',
		sprite: 'glove',
		sources: [{ kind: 'boss', from: 'Wall of Flesh', chance: '1/4 (25%)' }],
		shimmer: { to: 'Ranger Emblem', from: 'Summoner Emblem' },
		note: 'The four emblems form a shimmer loop: Warrior → Ranger → Sorcerer → Summoner → Warrior.'
	},
	{
		id: 'ranger-emblem',
		name: 'Ranger Emblem',
		tier: 'hardmode',
		slots: ['ranged'],
		effect: '15% increased ranged damage.',
		sprite: 'quiver',
		sources: [{ kind: 'boss', from: 'Wall of Flesh', chance: '1/4 (25%)' }],
		shimmer: { to: 'Sorcerer Emblem', from: 'Warrior Emblem' }
	},
	{
		id: 'sorcerer-emblem',
		name: 'Sorcerer Emblem',
		tier: 'hardmode',
		slots: ['magic'],
		effect: '15% increased magic damage.',
		sprite: 'star',
		sources: [{ kind: 'boss', from: 'Wall of Flesh', chance: '1/4 (25%)' }],
		shimmer: { to: 'Summoner Emblem', from: 'Ranger Emblem' }
	},
	{
		id: 'summoner-emblem',
		name: 'Summoner Emblem',
		tier: 'hardmode',
		slots: ['summon'],
		effect: '15% increased summon damage.',
		sprite: 'scarab',
		sources: [{ kind: 'boss', from: 'Wall of Flesh', chance: '1/4 (25%)' }],
		shimmer: { to: 'Warrior Emblem', from: 'Sorcerer Emblem' }
	},
	{
		id: 'avenger-emblem',
		name: 'Avenger Emblem',
		tier: 'post-mech',
		slots: ['melee', 'ranged', 'magic', 'summon'],
		effect: '12% increased damage of every kind.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Any class Emblem' },
					{ item: 'Soul of Might', qty: 5 },
					{ item: 'Soul of Sight', qty: 5 },
					{ item: 'Soul of Fright', qty: 5 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'destroyer-emblem',
		name: 'Destroyer Emblem',
		tier: 'post-golem',
		slots: ['melee', 'ranged', 'magic', 'summon'],
		effect: '10% increased damage and 8% increased critical strike chance.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Avenger Emblem' }, { item: 'Eye of the Golem' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'celestial-emblem',
		name: 'Celestial Emblem',
		tier: 'post-mech',
		slots: ['magic', 'mana'],
		effect: '15% increased magic damage, and a much larger mana star pickup range.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Celestial Magnet' }, { item: 'Avenger Emblem' }] }
		],
		shimmer: { decraft: true }
	},

	// ranged
	{
		id: 'magic-quiver',
		name: 'Magic Quiver',
		tier: 'hardmode',
		slots: ['ranged'],
		effect: '+10% arrow damage, much faster arrows, 20% chance not to consume arrows.',
		sprite: 'quiver',
		sources: [{ kind: 'drop', from: 'Skeleton Archer', chance: '1/40 (2.5%)' }]
	},
	{
		id: 'molten-quiver',
		name: 'Molten Quiver',
		tier: 'hardmode',
		slots: ['ranged'],
		effect: 'Magic Quiver bonuses, and wooden arrows are set ablaze.',
		sprite: 'quiver',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Magic Quiver' }, { item: 'Magma Stone' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'stalkers-quiver',
		name: "Stalker's Quiver",
		tier: 'post-mech',
		slots: ['ranged'],
		effect: 'Magic Quiver bonuses, and enemies are less likely to target you.',
		sprite: 'quiver',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Magic Quiver' }, { item: 'Putrid Scent' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'harpy-charm',
		name: 'Harpy Charm',
		tier: 'pre-hardmode',
		slots: ['ranged'],
		effect: 'Periodically redirects arrows towards enemies, and +5% ranged crit.',
		sprite: 'wing',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: ANVIL }],
		recipes: [
			{
				at: ANVIL,
				needs: [
					{ item: 'Amber', qty: 3 },
					{ item: 'Feather', qty: 7 },
					{ item: 'Any Silver Bar', qty: 5 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'phoenix-quiver',
		name: 'Phoenix Quiver',
		tier: 'hardmode',
		slots: ['ranged'],
		effect: 'Molten Quiver bonuses, and redirected arrows inflict Hellfire.',
		sprite: 'quiver',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Harpy Charm' }, { item: 'Molten Quiver' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'seraph-necklace',
		name: 'Seraph Necklace',
		tier: 'hardmode',
		slots: ['ranged', 'defense'],
		effect: 'Redirects arrows towards enemies, and longer invincibility after damage.',
		sprite: 'star',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Harpy Charm' }, { item: 'Cross Necklace' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'rifle-scope',
		name: 'Rifle Scope',
		tier: 'post-plantera',
		slots: ['ranged'],
		effect: 'Increases view range for guns. Right click to zoom out.',
		sprite: 'eye',
		sources: [
			{
				kind: 'drop',
				from: 'Skeleton Sniper',
				chance: '1/12 (8.33%)',
				expert: '23/144 (15.97%)'
			}
		]
	},
	{
		id: 'sniper-scope',
		name: 'Sniper Scope',
		tier: 'post-golem',
		slots: ['ranged'],
		effect: 'Gun zoom, plus 10% increased ranged damage and critical strike chance.',
		sprite: 'eye',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Rifle Scope' }, { item: 'Destroyer Emblem' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'recon-scope',
		name: 'Recon Scope',
		tier: 'post-golem',
		slots: ['ranged'],
		effect: 'Sniper Scope bonuses, and enemies are less likely to target you.',
		sprite: 'eye',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Sniper Scope' }, { item: 'Putrid Scent' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'chaos-cylinder',
		name: 'Chaos Cylinder',
		tier: 'post-mech',
		slots: ['ranged'],
		effect: '+8% ranged damage, and lets you pick how ranged weapons draw ammo.',
		sprite: 'quiver',
		desktopOnly: true,
		sources: [{ kind: 'drop', from: 'Hallowed Mimic', chance: '20%' }],
		note: 'Unlike its Corrupt and Crimson counterparts, it cannot be swapped in Shimmer.'
	},
	{
		id: 'putrid-scent',
		name: 'Putrid Scent',
		tier: 'post-mech',
		slots: ['melee', 'ranged', 'magic', 'summon'],
		effect: '+5% damage and crit, and enemies are less likely to target you.',
		sprite: 'flask',
		sources: [{ kind: 'drop', from: 'Corrupt Mimic', chance: '20%' }],
		shimmer: { to: 'Flesh Knuckles', from: 'Flesh Knuckles' },
		note: 'Shimmer it to get the Crimson version in a Corruption world, or the reverse.'
	},
	{
		id: 'flesh-knuckles',
		name: 'Flesh Knuckles',
		tier: 'post-mech',
		slots: ['defense'],
		effect: 'Enemies are more likely to target you, and +8 defence.',
		sprite: 'glove',
		sources: [{ kind: 'drop', from: 'Crimson Mimic', chance: '20%' }],
		shimmer: { to: 'Putrid Scent', from: 'Putrid Scent' }
	},

	// summoner
	{
		id: 'pygmy-necklace',
		name: 'Pygmy Necklace',
		tier: 'post-plantera',
		slots: ['summon'],
		effect: 'Increases your max number of minions by 1.',
		sprite: 'scarab',
		sources: [
			{ kind: 'buy', from: 'Witch Doctor', cost: '20 gold', note: 'at night' }
		]
	},
	{
		id: 'hercules-beetle',
		name: 'Hercules Beetle',
		tier: 'post-plantera',
		slots: ['summon'],
		effect: '+15% summon damage and more minion knockback.',
		sprite: 'scarab',
		sources: [
			{
				kind: 'buy',
				from: 'Witch Doctor',
				cost: '40 gold',
				note: 'post-Plantera, while he lives in a Jungle house'
			}
		]
	},
	{
		id: 'necromantic-scroll',
		name: 'Necromantic Scroll',
		tier: 'post-plantera',
		slots: ['summon'],
		effect: '+1 max minion and +10% summon damage.',
		sprite: 'scarab',
		sources: [
			{
				kind: 'drop',
				from: 'Mourning Wood (Pumpkin Moon)',
				chance: '2.86% – 20%',
				expert: '5% – 20%',
				note: 'the rate climbs with the wave number'
			}
		]
	},
	{
		id: 'papyrus-scarab',
		name: 'Papyrus Scarab',
		tier: 'post-plantera',
		slots: ['summon'],
		effect: '+1 max minion, +15% summon damage, and more minion knockback.',
		sprite: 'scarab',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Necromantic Scroll' }, { item: 'Hercules Beetle' }] }
		],
		shimmer: { decraft: true },
		note: 'The best summoner accessory in the game.'
	},
	{
		id: 'apprentices-scarf',
		name: "Apprentice's Scarf",
		tier: 'post-mech',
		slots: ['summon'],
		effect: '+1 max sentry and +10% summon damage.',
		sprite: 'scarab',
		sources: [
			{
				kind: 'drop',
				from: "Dark Mage (Old One's Army tier 1 & 3)",
				chance: '25%',
				expert: '50%'
			}
		],
		note: "Does not stack with the Buckler, Belt or Squire's Shield."
	},
	{
		id: 'squires-shield',
		name: "Squire's Shield",
		tier: 'post-mech',
		slots: ['summon', 'defense'],
		effect: '+1 max sentry and +10% summon damage.',
		sprite: 'shield',
		sources: [
			{
				kind: 'drop',
				from: "Dark Mage (Old One's Army tier 1 & 3)",
				chance: '25%',
				expert: '50%'
			}
		]
	},
	{
		id: 'huntresss-buckler',
		name: "Huntress's Buckler",
		tier: 'post-mech',
		slots: ['summon', 'defense'],
		effect: '+1 max sentry and +10% summon damage.',
		sprite: 'shield',
		sources: [
			{
				kind: 'drop',
				from: "Ogre (Old One's Army tier 2)",
				chance: '1/6 (16.67%)',
				expert: '25%'
			},
			{ kind: 'drop', from: "Ogre (Old One's Army tier 3)", chance: '8.33%' }
		]
	},
	{
		id: 'monks-belt',
		name: "Monk's Belt",
		tier: 'post-mech',
		slots: ['summon'],
		effect: '+1 max sentry and +10% summon damage.',
		sprite: 'scarab',
		sources: [
			{
				kind: 'drop',
				from: "Ogre (Old One's Army tier 2)",
				chance: '1/6 (16.67%)',
				expert: '25%'
			},
			{ kind: 'drop', from: "Ogre (Old One's Army tier 3)", chance: '8.33%' }
		]
	},
	{
		id: 'heavy-sling',
		name: 'Heavy Sling',
		tier: 'hardmode',
		slots: ['summon'],
		effect: 'Walk past a sentry to carry it with you.',
		sprite: 'scarab',
		desktopOnly: true,
		sources: [{ kind: 'drop', from: 'Ice Mimic', chance: '19/80 (23.75%)' }]
	},
	{
		id: 'scouts-sling',
		name: "Scout's Sling",
		tier: 'post-mech',
		slots: ['summon'],
		effect: 'Carry a sentry, +5% damage, and enemies are less likely to target you.',
		sprite: 'scarab',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Heavy Sling' }, { item: 'Putrid Scent' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'templars-sling',
		name: "Templar's Sling",
		tier: 'post-golem',
		slots: ['summon'],
		effect: 'Carry a sentry, and +10% sentry critical strike chance.',
		sprite: 'scarab',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Heavy Sling' }, { item: 'Eye of the Golem' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'royal-guards-harness',
		name: "Royal Guard's Harness",
		tier: 'hardmode',
		slots: ['summon', 'defense'],
		effect: 'Carry a sentry, immunity to knockback, and +1 defence.',
		sprite: 'shield',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Heavy Sling' }, { item: 'Cobalt Shield' }] }],
		shimmer: { decraft: true }
	},

	// whips & summon tags
	{
		id: 'wicked-armlet',
		name: 'Wicked Armlet',
		tier: 'hardmode',
		slots: ['summon'],
		effect: '+1 max summon tag effect, and increased whip knockback.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [
			{ kind: 'drop', from: 'Cursed Hammer / Crimson Axe', chance: '1/25 (4%)' }
		]
	},
	{
		id: 'silver-bracer',
		name: 'Silver Bracer',
		tier: 'pre-hardmode',
		slots: ['summon'],
		effect: '+1 max summon tag effect, and much longer tag duration.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [
			{
				kind: 'chest',
				from: 'Locked Gold Chest (Dungeon) / Golden Lock Box',
				chance: '1/4 (25%)'
			}
		]
	},
	{
		id: 'mobius-strip',
		name: 'Mobius Strip',
		tier: 'post-golem',
		slots: ['summon'],
		effect: '+1 max summon tag effect, and +10% whip range.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [{ kind: 'boss', from: 'Golem', chance: '1/6 (16.67%)' }]
	},
	{
		id: 'snake-band',
		name: 'Snake Band',
		tier: 'hardmode',
		slots: ['summon'],
		effect: 'Every 3 swings, your second whip joins in and attacks.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [
			{
				kind: 'drop',
				from: 'Dark Lamia / Light Lamia',
				chance: '2.5% each'
			}
		]
	},
	{
		id: 'armlet-of-ruin',
		name: 'Armlet Of Ruin',
		tier: 'hardmode',
		slots: ['summon'],
		effect: '+1 tag effect, more whip knockback, and tag hits discharge ancient power.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Snapping Stone' }, { item: 'Wicked Armlet' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'twilight-grasp',
		name: 'Twilight Grasp',
		tier: 'hardmode',
		slots: ['summon'],
		effect: '+2 max tag effects, tripled tag duration, and more whip knockback.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Silver Bracer' }, { item: 'Wicked Armlet' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'ouroboros-ring',
		name: 'Ouroboros Ring',
		tier: 'post-golem',
		slots: ['summon'],
		effect: '+1 tag effect, +10% whip range, and your second whip joins every 3 swings.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Snake Band' }, { item: 'Mobius Strip' }] }],
		shimmer: { decraft: true }
	},

	// expert offensive drops
	{
		id: 'shield-of-cthulhu',
		name: 'Shield of Cthulhu',
		tier: 'pre-hardmode',
		slots: ['movement', 'melee'],
		effect: 'A dash that deals 30 melee damage and grants invincibility frames on hit.',
		sprite: 'shield',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Eye of Cthulhu)', chance: '100%' }]
	},
	{
		id: 'bone-glove',
		name: 'Bone Glove',
		tier: 'pre-hardmode',
		slots: ['melee'],
		effect: 'Shoots crossbones at enemies while you are attacking.',
		sprite: 'skull',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Skeletron)', chance: '100%' }]
	},
	{
		id: 'bone-helm',
		name: 'Bone Helm',
		tier: 'pre-hardmode',
		slots: ['summon'],
		effect: 'Summons shadow hands to attack your foes.',
		sprite: 'skull',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Deerclops)', chance: '100%' }]
	},
	{
		id: 'volatile-gelatin',
		name: 'Volatile Gelatin',
		tier: 'hardmode',
		slots: ['summon'],
		effect: 'Releases volatile gelatin periodically that damages enemies.',
		sprite: 'flask',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Queen Slime)', chance: '100%' }]
	},
	{
		id: 'spore-sac',
		name: 'Spore Sac',
		tier: 'post-plantera',
		slots: ['summon'],
		effect: 'Summons spores over time that will damage enemies.',
		sprite: 'leaf',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Plantera)', chance: '100%' }]
	},

	// yoyo
	{
		id: 'counterweight',
		name: 'Counterweight',
		tier: 'pre-hardmode',
		slots: ['yoyo'],
		effect: 'Throws a counterweight after hitting an enemy with a yoyo.',
		sprite: 'yoyo',
		sources: [
			{ kind: 'buy', from: 'Traveling Merchant', cost: '5 gold' },
			{ kind: 'buy', from: 'Skeleton Merchant', note: 'stock varies with the moon phase' }
		],
		note: 'Six colours, all mechanically identical.'
	},
	{
		id: 'yoyo-string',
		name: 'Yoyo String',
		tier: 'pre-hardmode',
		slots: ['yoyo'],
		effect: 'Increases yoyo range and duration.',
		sprite: 'yoyo',
		sources: [
			{ kind: 'buy', from: 'Traveling Merchant' },
			{ kind: 'buy', from: 'Skeleton Merchant' }
		],
		note: 'Sold in many colours. White String is the one the recipes name.'
	},
	{
		id: 'strung-counterweight',
		name: 'Strung Counterweight',
		tier: 'pre-hardmode',
		slots: ['yoyo'],
		effect: '+50% yoyo spin duration, +25% range, and throws a counterweight on hit.',
		sprite: 'yoyo',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Yoyo String' }, { item: 'Any Counterweight' }]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'yoyo-glove',
		name: 'Yoyo Glove',
		tier: 'hardmode',
		slots: ['yoyo'],
		effect: 'Allows the use of two yoyos at once.',
		sprite: 'glove',
		sources: [{ kind: 'buy', from: 'Skeleton Merchant', cost: '50 gold' }]
	},
	{
		id: 'yoyo-bag',
		name: 'Yoyo Bag',
		tier: 'hardmode',
		slots: ['yoyo'],
		effect: 'Two yoyos at once, longer spin, more range, and a counterweight.',
		sprite: 'yoyo',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Yoyo Glove' }, { item: 'Strung Counterweight' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'magic-string',
		name: 'Magic String',
		tier: 'hardmode',
		slots: ['yoyo'],
		effect: 'Allows offstring yoyo tricks — yoyos are thrown on release.',
		sprite: 'yoyo',
		desktopOnly: true,
		sources: [{ kind: 'buy', from: 'Skeleton Merchant', cost: '1 platinum' }]
	},
	{
		id: 'magic-yoyo-bag',
		name: 'Magic Yoyo Bag',
		tier: 'hardmode',
		slots: ['yoyo'],
		effect: 'Everything the Yoyo Bag does, plus offstring tricks.',
		sprite: 'yoyo',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Magic String' }, { item: 'Yoyo Bag' }] }],
		shimmer: { decraft: true }
	}
];
