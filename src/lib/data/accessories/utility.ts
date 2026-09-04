import type { Accessory } from '$lib/types';
import { TW, BENCH } from './stations';

/** info, building, fishing and the money ones */
export const utility: Accessory[] = [
	// watches
	{
		id: 'copper-watch',
		name: 'Copper Watch / Tin Watch',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Tells the time, to the hour.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: BENCH }],
		recipes: [
			{
				at: BENCH,
				needs: [
					{ item: 'Copper Bar or Tin Bar', qty: 10 },
					{ item: 'Chain' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'silver-watch',
		name: 'Silver Watch / Tungsten Watch',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Tells the time, to the half hour.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: BENCH }],
		recipes: [
			{
				at: BENCH,
				needs: [
					{ item: 'Silver Bar or Tungsten Bar', qty: 10 },
					{ item: 'Chain' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'gold-watch',
		name: 'Gold Watch / Platinum Watch',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Tells the time, to the minute.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: BENCH }],
		recipes: [
			{
				at: BENCH,
				needs: [
					{ item: 'Gold Bar or Platinum Bar', qty: 10 },
					{ item: 'Chain' }
				]
			}
		],
		shimmer: { decraft: true },
		note: 'The minute-accurate watch is the one the GPS recipe wants.'
	},

	// informational
	{
		id: 'compass',
		name: 'Compass',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays your horizontal position.',
		sprite: 'compass',
		sources: [
			{
				kind: 'drop',
				from: 'Crawdad, Giant Shelly, Salamander',
				chance: '79/6400 (1.23%)'
			},
			{
				kind: 'drop',
				from: 'Mother Slime, Snow Flinx, Undead Viking, Armored Viking',
				chance: '1/100 (1%)'
			}
		]
	},
	{
		id: 'depth-meter',
		name: 'Depth Meter',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays your depth.',
		sprite: 'compass',
		sources: [
			{
				kind: 'drop',
				from: 'Cave Bat, Jungle Bat, Ice Bat, Giant Bat, Spore Bat',
				chance: '1/200 (0.5%)'
			},
			{
				kind: 'drop',
				from: 'Crawdad, Giant Shelly, Salamander',
				chance: '1/80 (1.25%)'
			}
		]
	},
	{
		id: 'gps',
		name: 'GPS',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Shows your position and tells the time.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Gold Watch / Platinum Watch' },
					{ item: 'Depth Meter' },
					{ item: 'Compass' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'fishermans-pocket-guide',
		name: "Fisherman's Pocket Guide",
		tier: 'pre-hardmode',
		slots: ['info', 'fishing'],
		effect: 'Displays your current fishing power.',
		sprite: 'fish',
		sources: [
			{
				kind: 'quest',
				from: 'Angler quest reward',
				chance: '1/34 (2.94%)',
				note: 'slightly less in practice — other rewards are rolled first'
			}
		],
		shimmer: { to: 'Sextant', from: 'Weather Radio' },
		note: 'These three cycle in Shimmer: Guide → Sextant → Weather Radio → Guide.'
	},
	{
		id: 'weather-radio',
		name: 'Weather Radio',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays the weather and the wind speed.',
		sprite: 'compass',
		sources: [
			{ kind: 'quest', from: 'Angler quest reward', chance: '1/34 (2.94%)' }
		],
		shimmer: { to: "Fisherman's Pocket Guide", from: 'Sextant' }
	},
	{
		id: 'sextant',
		name: 'Sextant',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays the phase of the moon.',
		sprite: 'compass',
		sources: [
			{ kind: 'quest', from: 'Angler quest reward', chance: '1/34 (2.94%)' }
		],
		shimmer: { to: 'Weather Radio', from: "Fisherman's Pocket Guide" }
	},
	{
		id: 'fish-finder',
		name: 'Fish Finder',
		tier: 'pre-hardmode',
		slots: ['info', 'fishing'],
		effect: 'Displays weather, moon phase and fishing information.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: "Fisherman's Pocket Guide" },
					{ item: 'Weather Radio' },
					{ item: 'Sextant' }
				]
			}
		],
		shimmer: { decraft: true },
		note: 'You only need one of the three from the Angler — shimmer gives you the others.'
	},
	{
		id: 'metal-detector',
		name: 'Metal Detector',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays the most valuable ore around you.',
		sprite: 'compass',
		sources: [
			{ kind: 'drop', from: 'Nymph', chance: '1/2 (50%)', expert: '100%' }
		]
	},
	{
		id: 'stopwatch',
		name: 'Stopwatch',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays how fast you are moving.',
		sprite: 'compass',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '5 gold' }]
	},
	{
		id: 'dps-meter',
		name: 'DPS Meter',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays the damage per second of your last hit.',
		sprite: 'compass',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '5 gold' }]
	},
	{
		id: 'goblin-tech',
		name: 'Goblin Tech',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays movement speed, damage per second and valuable ore.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Metal Detector' },
					{ item: 'Stopwatch' },
					{ item: 'DPS Meter' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'tally-counter',
		name: 'Tally Counter',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays how many of each monster you have killed.',
		sprite: 'compass',
		sources: [
			{
				kind: 'drop',
				from: 'Angry Bones, Cursed Skull, Dark Caster, Librarian Skeleton',
				chance: '1/100 (1%)'
			}
		]
	},
	{
		id: 'lifeform-analyzer',
		name: 'Lifeform Analyzer',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Names rare enemies, critters and undiscovered NPCs nearby.',
		sprite: 'eye',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '5 gold' }]
	},
	{
		id: 'radar',
		name: 'Radar',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Detects enemies around you, out to about 125 tiles.',
		sprite: 'compass',
		sources: [
			{ kind: 'chest', from: 'Surface Chest', chance: '1/11 (9.09%)' },
			{ kind: 'crate', from: 'Wooden / Pearlwood Crate', chance: '1/120 (0.83%)' },
			{
				kind: 'buy',
				from: 'Skeleton Merchant',
				cost: '2 gold 50 silver',
				note: 'Waxing Gibbous moon'
			}
		]
	},
	{
		id: 'rek-3000',
		name: 'R.E.K. 3000',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays nearby monster count, kill count and rare creatures.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Tally Counter' },
					{ item: 'Lifeform Analyzer' },
					{ item: 'Radar' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'pda',
		name: 'PDA',
		tier: 'pre-hardmode',
		slots: ['info'],
		effect: 'Displays everything.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'GPS' },
					{ item: 'Fish Finder' },
					{ item: 'Goblin Tech' },
					{ item: 'R.E.K. 3000' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'cell-phone',
		name: 'Cell Phone',
		tier: 'pre-hardmode',
		slots: ['info', 'utility'],
		effect: 'Displays everything, and teleports you home.',
		sprite: 'compass',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'PDA' }, { item: 'Magic Mirror or Ice Mirror' }]
			}
		],
		shimmer: { decraft: true },
		note: 'Nine informational accessories collapse into this one slot.'
	},
	{
		id: 'mechanical-ruler',
		name: 'Mechanical Ruler',
		tier: 'pre-hardmode',
		slots: ['info', 'build'],
		effect: 'Draws measurement lines on screen for block placement.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Mechanic', cost: '1 gold' }]
	},
	{
		id: 'mechanical-lens',
		name: 'Mechanical Lens',
		tier: 'pre-hardmode',
		slots: ['info', 'build'],
		effect: 'Grants improved wire vision, with per-colour toggles.',
		sprite: 'eye',
		sources: [{ kind: 'buy', from: 'Mechanic', cost: '1 gold' }]
	},
	{
		id: 'spectre-goggles',
		name: 'Spectre Goggles',
		tier: 'pre-hardmode',
		slots: ['info', 'build'],
		effect: 'Enables Echo Sight, showing hidden blocks.',
		sprite: 'eye',
		sources: [
			{
				kind: 'buy',
				from: 'Cyborg or Mechanic',
				cost: '10 gold',
				note: 'only while they live in a Graveyard'
			},
			{
				kind: 'chest',
				from: 'Chests on an Invisible Plane world seed',
				chance: '4%'
			}
		]
	},
	{
		id: 'fpv-goggles',
		name: 'FPV Goggles',
		tier: 'post-plantera',
		slots: ['info'],
		effect: 'See through your remote vehicle camera.',
		sprite: 'eye',
		sources: [{ kind: 'buy', from: 'Cyborg', cost: '10 gold' }]
	},

	// construction
	{
		id: 'toolbelt',
		name: 'Toolbelt',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Increases block placement range by 1.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Goblin Tinkerer', cost: '10 gold' }]
	},
	{
		id: 'toolbox',
		name: 'Toolbox',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Increases block placement and tool range by 1.',
		sprite: 'hammer',
		sources: [
			{
				kind: 'drop',
				from: 'Present (Christmas)',
				chance: '~0.31% pre-Hardmode',
				expert: '~0.29% in Hardmode'
			}
		]
	},
	{
		id: 'extendo-grip',
		name: 'Extendo Grip',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Increases block placement and tool reach by 2–3 tiles.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '10 gold' }]
	},
	{
		id: 'brick-layer',
		name: 'Brick Layer',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Increases tile placement speed by 50%.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '10 gold' }]
	},
	{
		id: 'portable-cement-mixer',
		name: 'Portable Cement Mixer',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Increases wall placement speed by 50%.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '10 gold' }]
	},
	{
		id: 'paint-sprayer',
		name: 'Paint Sprayer',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Automatically paints or coats placed objects.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '10 gold' }]
	},
	{
		id: 'presserator',
		name: 'Presserator',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Automatically places actuators on placed objects.',
		sprite: 'hammer',
		sources: [{ kind: 'buy', from: 'Traveling Merchant', cost: '10 gold' }]
	},
	{
		id: 'architect-gizmo-pack',
		name: 'Architect Gizmo Pack',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Faster block and wall placement, +3 range, and auto-painting.',
		sprite: 'hammer',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Brick Layer' },
					{ item: 'Extendo Grip' },
					{ item: 'Paint Sprayer' },
					{ item: 'Portable Cement Mixer' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'ancient-chisel',
		name: 'Ancient Chisel',
		tier: 'pre-hardmode',
		slots: ['build'],
		effect: 'Increases mining speed by 25%.',
		sprite: 'hammer',
		sources: [
			{ kind: 'chest', from: 'Sandstone Chest', chance: '1/4 (25%)' },
			{ kind: 'crate', from: 'Mirage / Oasis Crate', chance: '12.5%' }
		]
	},
	{
		id: 'treasure-magnet',
		name: 'Treasure Magnet',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Increases item pickup range to 12 tiles.',
		sprite: 'coin',
		sources: [
			{ kind: 'chest', from: 'Shadow Chest (Underworld)', chance: '1/5 (20%)' },
			{ kind: 'chest', from: 'Obsidian Lock Box', chance: '1/5 (20%)' }
		]
	},
	{
		id: 'hand-of-creation',
		name: 'Hand Of Creation',
		tier: 'pre-hardmode',
		slots: ['build', 'utility'],
		effect: 'Every building bonus in one slot, plus mining speed and pickup range.',
		sprite: 'hammer',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Architect Gizmo Pack' },
					{ item: 'Ancient Chisel' },
					{ item: 'Treasure Magnet' },
					{ item: 'Step Stool' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'guide-to-plant-fiber-cordage',
		name: 'Guide to Plant Fiber Cordage',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Allows the collection of Vine Rope from vines.',
		sprite: 'leaf',
		sources: [
			{ kind: 'chest', from: 'Surface Chest', chance: '1/11 (9.09%)' },
			{ kind: 'crate', from: 'Wooden / Pearlwood Crate', chance: '1/120 (0.83%)' }
		]
	},

	// fishing
	{
		id: 'angler-earring',
		name: 'Angler Earring',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Increases fishing power by 10.',
		sprite: 'fish',
		sources: [
			{ kind: 'quest', from: 'Angler quest reward', chance: '1/34 (2.94%)' }
		],
		shimmer: { to: 'Tackle Box', from: 'High Test Fishing Line' },
		note: 'These three cycle in Shimmer: Earring → Tackle Box → Fishing Line → Earring.'
	},
	{
		id: 'high-test-fishing-line',
		name: 'High Test Fishing Line',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Your fishing line will never break.',
		sprite: 'fish',
		sources: [
			{ kind: 'quest', from: 'Angler quest reward', chance: '1/34 (2.94%)' }
		],
		shimmer: { to: 'Angler Earring', from: 'Tackle Box' }
	},
	{
		id: 'tackle-box',
		name: 'Tackle Box',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Decreases the chance of bait being consumed.',
		sprite: 'crate',
		sources: [
			{ kind: 'quest', from: 'Angler quest reward', chance: '1/34 (2.94%)' }
		],
		shimmer: { to: 'High Test Fishing Line', from: 'Angler Earring' }
	},
	{
		id: 'angler-tackle-bag',
		name: 'Angler Tackle Bag',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Unbreakable line, less bait use, and +10 fishing power.',
		sprite: 'crate',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'High Test Fishing Line' },
					{ item: 'Tackle Box' },
					{ item: 'Angler Earring' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'lavaproof-fishing-hook',
		name: 'Lavaproof Fishing Hook',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Allows fishing in lava.',
		sprite: 'fish',
		sources: [
			{ kind: 'crate', from: 'Hellstone / Obsidian Crate', chance: '19/100 (19%)' }
		]
	},
	{
		id: 'lavaproof-tackle-bag',
		name: 'Lavaproof Tackle Bag',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Angler Tackle Bag bonuses, and allows fishing in lava.',
		sprite: 'crate',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Angler Tackle Bag' }, { item: 'Lavaproof Fishing Hook' }]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'fishing-bobber',
		name: 'Fishing Bobber',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: 'Increases fishing power by 10.',
		sprite: 'fish',
		desktopOnly: true,
		sources: [
			{ kind: 'quest', from: 'Angler quest reward', chance: '1/34 (2.94%)' }
		]
	},
	{
		id: 'glowing-fishing-bobber',
		name: 'Glowing Fishing Bobber',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: '+10 fishing power, and the bobber glows.',
		sprite: 'star',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Fishing Bobber' }, { item: 'Fallen Star', qty: 5 }]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'moss-fishing-bobbers',
		name: 'Moss Fishing Bobbers',
		tier: 'pre-hardmode',
		slots: ['fishing'],
		effect: '+10 fishing power, with a coloured glow. Six moss variants.',
		sprite: 'leaf',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Glowing Fishing Bobber' },
					{ item: 'Lava / Krypton / Xenon / Argon / Neon / Helium Moss', qty: 5 }
				]
			}
		],
		shimmer: { decraft: true }
	},

	// money
	{
		id: 'gold-ring',
		name: 'Gold Ring',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Increases coin pickup range to about 24 tiles.',
		sprite: 'ring',
		sources: [
			{ kind: 'boss', from: 'Flying Dutchman', chance: '1/15 (6.67%)' },
			{ kind: 'drop', from: 'Pirate Captain', chance: '1/125 (0.8%)' },
			{
				kind: 'drop',
				from: 'Pirate Corsair, Crossbower, Deadeye, Deckhand',
				chance: '1/500 (0.2%)'
			}
		],
		shimmer: { to: 'Discount Card', from: 'Lucky Coin' },
		note: 'The three pirate accessories cycle in Shimmer: Gold Ring → Discount Card → Lucky Coin → Gold Ring.'
	},
	{
		id: 'lucky-coin',
		name: 'Lucky Coin',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Hitting enemies will sometimes drop extra coins. +0.05 luck.',
		sprite: 'coin',
		sources: [
			{ kind: 'boss', from: 'Flying Dutchman', chance: '1/15 (6.67%)' },
			{ kind: 'drop', from: 'Pirate Captain', chance: '1/500 (0.2%)' },
			{ kind: 'drop', from: 'Pirate Deckhand, Corsair, Deadeye, Crossbower', chance: '1/2000 (0.05%)' }
		],
		shimmer: { to: 'Gold Ring', from: 'Discount Card' }
	},
	{
		id: 'discount-card',
		name: 'Discount Card',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Lowers shop prices by 20% — including the Nurse and the Stylist.',
		sprite: 'coin',
		sources: [
			{ kind: 'boss', from: 'Flying Dutchman', chance: '1/15 (6.67%)' },
			{ kind: 'drop', from: 'Pirate Captain', chance: '1/250 (0.4%)' },
			{ kind: 'drop', from: 'Pirate Deckhand, Corsair, Deadeye, Crossbower', chance: '1/1000 (0.1%)' }
		],
		shimmer: { to: 'Lucky Coin', from: 'Gold Ring' }
	},
	{
		id: 'coin-ring',
		name: 'Coin Ring',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Coin pickup range, and extra coins on hit.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Gold Ring' }, { item: 'Lucky Coin' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'greedy-ring',
		name: 'Greedy Ring',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Coin pickup range, extra coins on hit, and 20% off shop prices.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Coin Ring' }, { item: 'Discount Card' }] }],
		shimmer: { decraft: true }
	},

	// oddities
	{
		id: 'stress-ball',
		name: 'Stress Ball',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Continuously uses some items while you stand still.',
		sprite: 'ring',
		desktopOnly: true,
		sources: [{ kind: 'drop', from: 'Hoplite', chance: '1/100 (1%)' }]
	},
	{
		id: 'guide-voodoo-doll',
		name: 'Guide Voodoo Doll',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Drop it in Underworld lava to kill the Guide and summon the Wall of Flesh.',
		sprite: 'skull',
		sources: [{ kind: 'drop', from: 'Voodoo Demon (Underworld)', chance: '100%' }]
	},
	{
		id: 'clothier-voodoo-doll',
		name: 'Clothier Voodoo Doll',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Equip it to let the Clothier be killed, summoning Skeletron at night.',
		sprite: 'skull',
		sources: [
			{
				kind: 'drop',
				from: 'Angry Bones, Dark Caster, Librarian Skeleton',
				chance: '1/300 (0.33%)'
			}
		]
	}
];
