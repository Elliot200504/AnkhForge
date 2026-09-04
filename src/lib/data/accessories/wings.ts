import type { Accessory } from '$lib/types';
import { HM_ANVIL, MANIPULATOR } from './stations';

/** every wing u can get. no dev wings */
export const wings: Accessory[] = [
	{
		id: 'fledgling-wings',
		name: 'Fledgling Wings',
		tier: 'pre-hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall. Very short flight time.',
		sprite: 'wing',
		sources: [
			{ kind: 'chest', from: 'Skyware Chest', chance: '1/40 (2.5%)' },
			{ kind: 'crate', from: 'Sky / Azure Crate', chance: '1/40 (2.5%)' },
			{ kind: 'gather', from: 'Journey Mode', note: 'equipped from the start' }
		],
		note: 'The only pre-Hardmode wings.'
	},
	{
		id: 'angel-wings',
		name: 'Angel Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Feather', qty: 10 },
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Soul of Light', qty: 15 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'demon-wings',
		name: 'Demon Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Feather', qty: 10 },
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Soul of Night', qty: 15 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'fairy-wings',
		name: 'Fairy Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Pixie Dust', qty: 99 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'frozen-wings',
		name: 'Frozen Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Ice Feather' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'harpy-wings',
		name: 'Harpy Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Giant Harpy Feather' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'bat-wings',
		name: 'Bat Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Broken Bat Wing' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'bee-wings',
		name: 'Bee Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Tattered Bee Wing' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'butterfly-wings',
		name: 'Butterfly Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Butterfly Dust' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'flame-wings',
		name: 'Flame Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Fire Feather' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'bone-wings',
		name: 'Bone Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Bone Feather' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'fin-wings',
		name: 'Fin Wings',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [
			{
				kind: 'quest',
				from: 'Angler quest reward',
				chance: '1/70 (1.43%)',
				note: 'Hardmode only, after your 10th quest'
			}
		]
	},
	{
		id: 'jetpack',
		name: 'Jetpack',
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall. Hold Up to boost faster.',
		sprite: 'wing',
		sources: [
			{
				kind: 'buy',
				from: 'Steampunker',
				cost: '40 gold',
				note: 'New Moon through Waxing Gibbous only'
			}
		]
	},
	{
		id: 'leaf-wings',
		name: 'Leaf Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'leaf',
		sources: [
			{
				kind: 'buy',
				from: 'Witch Doctor',
				cost: '1 platinum 50 gold',
				note: 'at night, while he lives in a Jungle house'
			}
		]
	},
	{
		id: 'spectre-wings',
		name: 'Spectre Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Spectre Bar', qty: 10 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'hoverboard',
		name: 'Hoverboard',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall, and hovers when you hold the direction.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Shroomite Bar', qty: 18 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'spooky-wings',
		name: 'Spooky Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Spooky Twig' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'tattered-fairy-wings',
		name: 'Tattered Fairy Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Black Fairy Dust' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'mothron-wings',
		name: 'Mothron Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [
			{
				kind: 'drop',
				from: 'Mothron (Solar Eclipse, post-Plantera)',
				chance: '1/20 (5%)',
				expert: '39/400 (9.75%)'
			}
		]
	},
	{
		id: 'festive-wings',
		name: 'Festive Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [
			{
				kind: 'drop',
				from: 'Everscream (Frost Moon)',
				chance: '0.74% – 2.22%',
				expert: '1.33% – 6.67%',
				note: 'the rate climbs with the wave number'
			}
		]
	},
	{
		id: 'empress-wings',
		name: 'Empress Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [
			{
				kind: 'boss',
				from: 'Empress of Light',
				chance: '1/15 (6.67%)',
				expert: '1/10 (10%)'
			}
		]
	},
	{
		id: 'fishron-wings',
		name: 'Fishron Wings',
		tier: 'post-plantera',
		slots: ['wings'],
		effect: 'Allows flight and slow fall. Much faster while it rains or underwater.',
		sprite: 'fish',
		sources: [
			{
				kind: 'boss',
				from: 'Duke Fishron',
				chance: '1/15 (6.67%)',
				expert: '1/10 (10%)'
			}
		]
	},
	{
		id: 'betsys-wings',
		name: "Betsy's Wings",
		tier: 'post-golem',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'boss', from: "Betsy (Old One's Army tier 3)", chance: '1/4 (25%)' }]
	},
	{
		id: 'steampunk-wings',
		name: 'Steampunk Wings',
		tier: 'post-golem',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'buy', from: 'Steampunker', cost: '3 platinum', note: 'post-Golem' }]
	},
	{
		id: 'beetle-wings',
		name: 'Beetle Wings',
		tier: 'post-golem',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'scarab',
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Beetle Husk', qty: 8 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'nebula-mantle',
		name: 'Nebula Mantle',
		tier: 'post-moonlord',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: MANIPULATOR }],
		recipes: [
			{
				at: MANIPULATOR,
				needs: [
					{ item: 'Nebula Fragment', qty: 14 },
					{ item: 'Luminite Bar', qty: 10 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'solar-wings',
		name: 'Solar Wings',
		tier: 'post-moonlord',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: MANIPULATOR }],
		recipes: [
			{
				at: MANIPULATOR,
				needs: [
					{ item: 'Solar Fragment', qty: 14 },
					{ item: 'Luminite Bar', qty: 10 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'stardust-wings',
		name: 'Stardust Wings',
		tier: 'post-moonlord',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: MANIPULATOR }],
		recipes: [
			{
				at: MANIPULATOR,
				needs: [
					{ item: 'Stardust Fragment', qty: 14 },
					{ item: 'Luminite Bar', qty: 10 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'vortex-booster',
		name: 'Vortex Booster',
		tier: 'post-moonlord',
		slots: ['wings'],
		effect: 'Allows flight and slow fall, and hovers when you hold the direction.',
		sprite: 'wing',
		sources: [{ kind: 'craft', from: MANIPULATOR }],
		recipes: [
			{
				at: MANIPULATOR,
				needs: [
					{ item: 'Vortex Fragment', qty: 14 },
					{ item: 'Luminite Bar', qty: 10 }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'celestial-starboard',
		name: 'Celestial Starboard',
		tier: 'post-moonlord',
		slots: ['wings'],
		effect: 'The fastest wings in the game.',
		sprite: 'star',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Moon Lord)', chance: '100%' }]
	},
	{
		id: 'chippys-cloak',
		name: "Chippy's Cloak",
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: "Chippy's Cloak (Inactive)" },
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Hallowed Bar', qty: 12 }
				]
			}
		]
	},
	{
		id: 'heroicis-wings',
		name: "Heroicis' Wings",
		tier: 'hardmode',
		slots: ['wings'],
		effect: 'Allows flight and slow fall.',
		sprite: 'wing',
		desktopOnly: true,
		sources: [{ kind: 'craft', from: HM_ANVIL }],
		recipes: [
			{
				at: HM_ANVIL,
				needs: [
					{ item: "Heroicis' Wings (Inactive)" },
					{ item: 'Soul of Flight', qty: 20 },
					{ item: 'Hallowed Bar', qty: 12 }
				]
			}
		]
	}
];
