import type { Accessory } from '$lib/types';
import { TW, ANVIL, CRYSTAL, FURNACE } from './stations';

/** boots, bottles, balloons, water and lava stuff */
export const movement: Accessory[] = [
	// speed
	{
		id: 'aglet',
		name: 'Aglet',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: '5% increased movement speed.',
		sprite: 'boot',
		sources: [
			{ kind: 'chest', from: 'Surface Chest', chance: '1/11 (9.09%)' },
			{ kind: 'crate', from: 'Wooden / Pearlwood Crate', chance: '1/120 (0.83%)' },
			{
				kind: 'buy',
				from: 'Skeleton Merchant',
				cost: '2 gold 50 silver',
				note: 'sold during a New Moon'
			}
		]
	},
	{
		id: 'anklet-of-the-wind',
		name: 'Anklet of the Wind',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: '10% increased movement speed.',
		sprite: 'boot',
		sources: [
			{ kind: 'chest', from: 'Ivy Chest', chance: '21.72%' },
			{ kind: 'crate', from: 'Jungle / Bramble Crate', chance: '19/100 (19%)' }
		]
	},
	{
		id: 'magiluminescence',
		name: 'Magiluminescence',
		tier: 'pre-hardmode',
		slots: ['movement', 'utility'],
		effect: '15% movement speed, 75% acceleration, and gives off light.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: ANVIL }],
		recipes: [
			{
				at: ANVIL,
				needs: [
					{ item: 'Demonite Bar or Crimtane Bar', qty: 12 },
					{ item: 'Topaz', qty: 5 }
				]
			}
		],
		shimmer: { decraft: true }
	},

	// sprint boots
	{
		id: 'hermes-boots',
		name: 'Hermes Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'The wearer can run super fast (22.7 tiles/s).',
		sprite: 'boot',
		sources: [
			{
				kind: 'chest',
				from: 'Gold Chest — Underground / Cavern / Lava layer',
				chance: '16.67% / 13.33% / 12.67%'
			},
			{ kind: 'drop', from: 'Mimic (pre-Hardmode)', chance: '16.67%' }
		],
		note: 'Does not stack with Flurry, Sailfish or Dunerider Boots.'
	},
	{
		id: 'flurry-boots',
		name: 'Flurry Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'The wearer can run super fast (22.7 tiles/s).',
		sprite: 'boot',
		sources: [
			{ kind: 'chest', from: 'Frozen Chest', chance: '14.29%' },
			{ kind: 'crate', from: 'Boreal / Frozen Crate', chance: '14.29%' },
			{ kind: 'drop', from: 'Ice Mimic (pre-Hardmode)', chance: '15.83%' }
		]
	},
	{
		id: 'sailfish-boots',
		name: 'Sailfish Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'The wearer can run super fast, with a water trail.',
		sprite: 'boot',
		sources: [
			{ kind: 'crate', from: 'Wooden Crate', chance: '1/40 (2.5%)' },
			{ kind: 'crate', from: 'Pearlwood Crate', chance: '199/8000 (2.49%)' },
			{ kind: 'crate', from: 'Iron Crate', chance: '133/3125 (4.26%)' },
			{ kind: 'crate', from: 'Mythril Crate', chance: '4.19%' }
		]
	},
	{
		id: 'dunerider-boots',
		name: 'Dunerider Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Run super fast — and much faster still over sand (54 mph).',
		sprite: 'boot',
		sources: [
			{ kind: 'chest', from: 'Sandstone Chest', chance: '1/4 (25%)' },
			{ kind: 'crate', from: 'Mirage / Oasis Crate', chance: '12.5%' }
		]
	},
	{
		id: 'rocket-boots',
		name: 'Rocket Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows flight — 1.17 seconds of it.',
		sprite: 'boot',
		sources: [{ kind: 'buy', from: 'Goblin Tinkerer', cost: '5 gold' }]
	},
	{
		id: 'spectre-boots',
		name: 'Spectre Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows flight, and the wearer can run super fast.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Rocket Boots' },
					{ item: 'Hermes / Flurry / Sailfish / Dunerider Boots' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'lightning-boots',
		name: 'Lightning Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Flight, super fast running, and 8% increased movement speed.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Spectre Boots' }, { item: 'Anklet of the Wind' }, { item: 'Aglet' }]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'frostspark-boots',
		name: 'Frostspark Boots',
		tier: 'hardmode',
		slots: ['movement'],
		effect: 'Flight, super fast running, and extra mobility on ice.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Lightning Boots' }, { item: 'Ice Skates' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'terraspark-boots',
		name: 'Terraspark Boots',
		tier: 'hardmode',
		slots: ['movement', 'immunity'],
		effect:
			'Flight, super fast running, ice mobility, water and lava walking, fire-block immunity.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Frostspark Boots' }, { item: 'Lava Waders' }] }],
		shimmer: { decraft: true },
		note: 'The best boots in the game. Everything else on this list feeds into it.'
	},
	{
		id: 'fairy-boots',
		name: 'Fairy Boots',
		tier: 'pre-hardmode',
		slots: ['movement', 'utility'],
		effect: 'Flight, super fast running, and flowers grow on the grass you walk on.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Spectre Boots' }, { item: 'Flower Boots' }] }],
		shimmer: { decraft: true },
		note: 'A dead end — shimmer it back if you want Lightning Boots instead.'
	},
	{
		id: 'hellfire-treads',
		name: 'Hellfire Treads',
		tier: 'pre-hardmode',
		slots: ['movement', 'utility'],
		effect: 'Flight, super fast running, and a trail of flames in your wake.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Flame Waker Boots' }, { item: 'Spectre Boots' }] }],
		shimmer: { decraft: true },
		note: 'Another dead end — it cannot become Lightning Boots.'
	},
	{
		id: 'amphibian-boots',
		name: 'Amphibian Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Super fast running, auto-jump, and +10 tiles of safe fall distance.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Sailfish Boots' }, { item: 'Frog Leg' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'flame-waker-boots',
		name: 'Flame Waker Boots',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Leaves a trail of flames in your wake. Cosmetic only.',
		sprite: 'boot',
		sources: [{ kind: 'crate', from: 'Hellstone / Obsidian Crate', chance: '19/100 (19%)' }]
	},
	{
		id: 'flower-boots',
		name: 'Flower Boots',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Flowers grow on the grass you walk on.',
		sprite: 'leaf',
		sources: [
			{ kind: 'chest', from: 'Ivy Chest', chance: '4.57%' },
			{ kind: 'crate', from: 'Jungle / Bramble Crate', chance: '1/20 (5%)' }
		]
	},

	// climbing / dashing
	{
		id: 'ice-skates',
		name: 'Ice Skates',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Extra mobility on ice, and Thin Ice will not break under you.',
		sprite: 'boot',
		sources: [
			{ kind: 'chest', from: 'Frozen Chest', chance: '14.29%' },
			{ kind: 'crate', from: 'Boreal / Frozen Crate', chance: '14.29%' },
			{ kind: 'drop', from: 'Ice Mimic (pre-Hardmode)', chance: '15.83%' }
		]
	},
	{
		id: 'climbing-claws',
		name: 'Climbing Claws',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows the ability to slide down walls.',
		sprite: 'glove',
		sources: [
			{ kind: 'chest', from: 'Surface Chest', chance: '1/11 (9.09%)' },
			{ kind: 'crate', from: 'Wooden / Pearlwood Crate', chance: '1/120 (0.83%)' },
			{ kind: 'buy', from: 'Skeleton Merchant', cost: '2 gold 50 silver' }
		],
		shimmer: { to: 'Shoe Spikes', from: 'Shoe Spikes' }
	},
	{
		id: 'shoe-spikes',
		name: 'Shoe Spikes',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows the ability to slide down walls.',
		sprite: 'boot',
		sources: [
			{
				kind: 'chest',
				from: 'Gold Chest — Underground / Cavern / Lava layer',
				chance: '16.67% / 13.33% / 12.67%'
			},
			{ kind: 'drop', from: 'Mimic (pre-Hardmode)', chance: '16.67%' }
		],
		shimmer: { to: 'Climbing Claws', from: 'Climbing Claws' }
	},
	{
		id: 'tiger-climbing-gear',
		name: 'Tiger Climbing Gear',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows the ability to climb walls.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Climbing Claws' }, { item: 'Shoe Spikes' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'tabi',
		name: 'Tabi',
		tier: 'post-plantera',
		slots: ['movement'],
		effect: 'Allows the ability to dash. Double tap a direction.',
		sprite: 'boot',
		sources: [
			{ kind: 'drop', from: 'Bone Lee', chance: '1/12 (8.33%)', expert: '23/144 (15.97%)' }
		]
	},
	{
		id: 'black-belt',
		name: 'Black Belt',
		tier: 'post-plantera',
		slots: ['defense'],
		effect: 'Gives a 1/10 (10%) chance to dodge attacks.',
		sprite: 'shield',
		sources: [
			{ kind: 'drop', from: 'Bone Lee', chance: '1/12 (8.33%)', expert: '23/144 (15.97%)' }
		]
	},
	{
		id: 'master-ninja-gear',
		name: 'Master Ninja Gear',
		tier: 'post-plantera',
		slots: ['movement', 'defense'],
		effect: 'Climb walls, dash, and a chance to dodge attacks.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [{ item: 'Tiger Climbing Gear' }, { item: 'Tabi' }, { item: 'Black Belt' }]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'frog-leg',
		name: 'Frog Leg',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Increases jump speed, allows auto-jump, and +10 tiles of fall resistance.',
		sprite: 'leaf',
		sources: [{ kind: 'gather', from: 'Fishing — any body of water', note: 'no biome requirement' }]
	},
	{
		id: 'frog-flipper',
		name: 'Frog Flipper',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Swim, plus jump speed, auto-jump and fall resistance.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Frog Leg' }, { item: 'Flipper' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'frog-webbing',
		name: 'Frog Webbing',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Climb walls, plus jump speed, auto-jump and fall resistance.',
		sprite: 'glove',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Frog Leg' }, { item: 'Tiger Climbing Gear' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'frog-gear',
		name: 'Frog Gear',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Swim, climb walls, jump faster, auto-jump, and fall resistance.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Frog Flipper' }, { item: 'Tiger Climbing Gear' }] },
			{ at: TW, needs: [{ item: 'Frog Webbing' }, { item: 'Flipper' }] }
		],
		shimmer: { decraft: true }
	},

	// extra jumps
	{
		id: 'cloud-in-a-bottle',
		name: 'Cloud in a Bottle',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows the holder to double jump.',
		sprite: 'flask',
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
		id: 'blizzard-in-a-bottle',
		name: 'Blizzard in a Bottle',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'A higher double jump (8 tiles) with a snow trail.',
		sprite: 'flask',
		sources: [
			{ kind: 'chest', from: 'Frozen Chest', chance: '14.29%' },
			{ kind: 'crate', from: 'Boreal / Frozen Crate', chance: '14.29%' },
			{ kind: 'drop', from: 'Ice Mimic (pre-Hardmode)', chance: '15.83%' },
			{ kind: 'craft', from: CRYSTAL }
		],
		recipes: [{ at: CRYSTAL, needs: [{ item: 'Cloud in a Bottle' }, { item: 'Frost Core' }] }]
	},
	{
		id: 'sandstorm-in-a-bottle',
		name: 'Sandstorm in a Bottle',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'An improved double jump — the highest of the bottles.',
		sprite: 'flask',
		sources: [
			{ kind: 'chest', from: 'Gold Chest (Pyramid)', chance: '4/9 (44.44%)' },
			{ kind: 'crate', from: 'Mirage / Oasis Crate', chance: '1/35 (2.86%)' },
			{ kind: 'craft', from: CRYSTAL }
		],
		recipes: [
			{ at: CRYSTAL, needs: [{ item: 'Cloud in a Bottle' }, { item: 'Forbidden Fragment' }] }
		],
		shimmer: { to: "Pharaoh's Mask", from: "Pharaoh's Mask" }
	},
	{
		id: 'tsunami-in-a-bottle',
		name: 'Tsunami in a Bottle',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'A double jump (7 tiles) with a burst of water.',
		sprite: 'flask',
		sources: [
			{ kind: 'crate', from: 'Wooden Crate', chance: '39/1600 (2.44%)' },
			{ kind: 'crate', from: 'Pearlwood Crate', chance: '2.24%' },
			{ kind: 'crate', from: 'Iron Crate', chance: '4.04%' },
			{ kind: 'crate', from: 'Mythril Crate', chance: '3.98%' }
		]
	},
	{
		id: 'whoopie-cushion',
		name: 'Whoopie Cushion',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Makes a rude noise when you take damage. That is all.',
		sprite: 'ring',
		sources: [
			{
				kind: 'drop',
				from: 'Digger / Giant Worm',
				chance: '1/50 (2%)',
				expert: '99/2500 (3.96%)'
			},
			{ kind: 'shimmer', from: 'Zombie Arm', note: 'throw a Zombie Arm into Shimmer' }
		],
		shimmer: { to: 'Gas Trap', from: 'Gas Trap' }
	},
	{
		id: 'fart-in-a-jar',
		name: 'Fart in a Jar',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'The highest double jump in the game (10.5 tiles). Loudly.',
		sprite: 'flask',
		sources: [
			{ kind: 'craft', from: TW },
			{ kind: 'drop', from: 'Jungle Mimic', chance: '33%' }
		],
		recipes: [{ at: TW, needs: [{ item: 'Cloud in a Bottle' }, { item: 'Whoopie Cushion' }] }],
		shimmer: { decraft: true, note: 'shimmer it back to recover the Cloud in a Bottle' }
	},

	// balloons
	{
		id: 'shiny-red-balloon',
		name: 'Shiny Red Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Increases jump height by roughly 75%.',
		sprite: 'ring',
		sources: [
			{ kind: 'chest', from: 'Skyware Chest', chance: '1/4 (25%)' },
			{ kind: 'crate', from: 'Sky / Azure Crate', chance: '1/4 (25%)' }
		],
		shimmer: { to: 'Balloon Pufferfish', from: 'Balloon Pufferfish' }
	},
	{
		id: 'balloon-pufferfish',
		name: 'Balloon Pufferfish',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Increases jump height. Identical to the Shiny Red Balloon.',
		sprite: 'fish',
		sources: [{ kind: 'gather', from: 'Fishing — any biome' }],
		shimmer: { to: 'Shiny Red Balloon', from: 'Shiny Red Balloon' },
		note: 'Only tinkers with the Tsunami in a Bottle; the red balloon takes all the others.'
	},
	{
		id: 'cloud-in-a-balloon',
		name: 'Cloud in a Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Cloud double jump plus increased jump height.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Cloud in a Bottle' }, { item: 'Shiny Red Balloon' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'blizzard-in-a-balloon',
		name: 'Blizzard in a Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Blizzard double jump plus increased jump height.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Blizzard in a Bottle' }, { item: 'Shiny Red Balloon' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'sandstorm-in-a-balloon',
		name: 'Sandstorm in a Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Sandstorm double jump plus increased jump height.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Sandstorm in a Bottle' }, { item: 'Shiny Red Balloon' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'fart-in-a-balloon',
		name: 'Fart in a Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Fart double jump plus increased jump height.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Fart in a Jar' }, { item: 'Shiny Red Balloon' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'sharkron-balloon',
		name: 'Sharkron Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Tsunami double jump plus increased jump height.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Tsunami in a Bottle' }, { item: 'Balloon Pufferfish' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'honey-balloon',
		name: 'Honey Balloon',
		tier: 'pre-hardmode',
		slots: ['movement', 'defense'],
		effect: 'Increased jump height, and releases bees and honey when damaged.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Shiny Red Balloon' }, { item: 'Honey Comb' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'blue-horseshoe-balloon',
		name: 'Blue Horseshoe Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Cloud double jump, higher jumps, and negates fall damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Cloud in a Balloon' }, { item: 'Lucky Horseshoe' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'white-horseshoe-balloon',
		name: 'White Horseshoe Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Blizzard double jump, higher jumps, and negates fall damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Blizzard in a Balloon' }, { item: 'Lucky Horseshoe' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'yellow-horseshoe-balloon',
		name: 'Yellow Horseshoe Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Sandstorm double jump, higher jumps, and negates fall damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Sandstorm in a Balloon' }, { item: 'Lucky Horseshoe' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'green-horseshoe-balloon',
		name: 'Green Horseshoe Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Fart double jump, higher jumps, and negates fall damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Fart in a Balloon' }, { item: 'Lucky Horseshoe' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'pink-horseshoe-balloon',
		name: 'Pink Horseshoe Balloon',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Tsunami double jump, higher jumps, and negates fall damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Sharkron Balloon' }, { item: 'Lucky Horseshoe' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'amber-horseshoe-balloon',
		name: 'Amber Horseshoe Balloon',
		tier: 'pre-hardmode',
		slots: ['movement', 'defense'],
		effect: 'Higher jumps, negates fall damage, and releases bees when damaged.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Honey Balloon' }, { item: 'Lucky Horseshoe' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'bundle-of-balloons',
		name: 'Bundle of Balloons',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows the holder to quadruple jump, and increases jump height.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{
				at: TW,
				needs: [
					{ item: 'Cloud in a Balloon' },
					{ item: 'Blizzard in a Balloon' },
					{ item: 'Sandstorm in a Balloon' }
				]
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'bundle-of-horseshoe-balloons',
		name: 'Bundle of Horseshoe Balloons',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Quadruple jump, increased jump height, and negates fall damage.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Bundle of Balloons' }, { item: 'Lucky Horseshoe' }] },
			{
				at: TW,
				needs: [
					{ item: 'Cloud in a Balloon' },
					{ item: 'Blizzard in a Balloon' },
					{ item: 'Sandstorm in a Balloon' },
					{ item: 'Lucky Horseshoe' }
				],
				note: 'any horseshoe-balloon variant can stand in for its plain counterpart'
			}
		],
		shimmer: { decraft: true }
	},
	{
		id: 'lucky-horseshoe',
		name: 'Lucky Horseshoe',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Negates fall damage, and +0.05 luck.',
		sprite: 'ring',
		sources: [
			{ kind: 'chest', from: 'Skyware Chest', chance: '1/4 (25%)' },
			{ kind: 'crate', from: 'Sky / Azure Crate', chance: '1/4 (25%)' }
		]
	},
	{
		id: 'obsidian-horseshoe',
		name: 'Obsidian Horseshoe',
		tier: 'pre-hardmode',
		slots: ['movement', 'immunity'],
		effect: 'Negates fall damage and grants immunity to fire blocks.',
		sprite: 'ring',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Lucky Horseshoe' }, { item: 'Obsidian Skull' }] }],
		shimmer: { decraft: true }
	},

	// water
	{
		id: 'flipper',
		name: 'Flipper',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Grants the ability to swim.',
		sprite: 'fish',
		sources: [
			{ kind: 'chest', from: 'Water Chest', chance: '9/40 (22.5%)' },
			{ kind: 'crate', from: 'Ocean / Seaside Crate', chance: '9/40 (22.5%)' }
		]
	},
	{
		id: 'inner-tube',
		name: 'Inner Tube',
		tier: 'pre-hardmode',
		slots: ['movement', 'fishing'],
		effect: 'Float on the surface of liquids, and +5 fishing power.',
		sprite: 'ring',
		sources: [
			{ kind: 'chest', from: 'Water Chest', chance: '9/40 (22.5%)' },
			{ kind: 'crate', from: 'Ocean / Seaside Crate', chance: '9/40 (22.5%)' }
		]
	},
	{
		id: 'diving-helmet',
		name: 'Diving Helmet',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'Greatly extends underwater breathing (2m20s).',
		sprite: 'shield',
		sources: [{ kind: 'drop', from: 'Shark / Orca', chance: '1/20 (5%)' }],
		note: 'Technically a helmet, but it tinkers into the diving accessories.'
	},
	{
		id: 'diving-gear',
		name: 'Diving Gear',
		tier: 'pre-hardmode',
		slots: ['movement', 'utility'],
		effect: 'Swim, and greatly extended underwater breathing.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Diving Helmet' }, { item: 'Flipper' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'jellyfish-necklace',
		name: 'Jellyfish Necklace',
		tier: 'pre-hardmode',
		slots: ['utility'],
		effect: 'A subtle glow that brightens underwater.',
		sprite: 'star',
		sources: [
			{ kind: 'drop', from: 'Blue Jellyfish, Green Jellyfish, Pink Jellyfish', chance: '1/100 (1%)' }
		]
	},
	{
		id: 'jellyfish-diving-gear',
		name: 'Jellyfish Diving Gear',
		tier: 'pre-hardmode',
		slots: ['movement', 'utility'],
		effect: 'Swim, extended breathing, and a glow underwater.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Diving Gear' }, { item: 'Jellyfish Necklace' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'arctic-diving-gear',
		name: 'Arctic Diving Gear',
		tier: 'hardmode',
		slots: ['movement', 'utility'],
		effect: 'Swim, extended breathing, a glow underwater, and ice mobility.',
		sprite: 'fish',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Jellyfish Diving Gear' }, { item: 'Ice Skates' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'water-walking-boots',
		name: 'Water Walking Boots',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Walk on water, honey and Shimmer. Not lava.',
		sprite: 'boot',
		sources: [
			{ kind: 'chest', from: 'Water Chest', chance: '1/10 (10%)' },
			{ kind: 'crate', from: 'Ocean / Seaside Crate', chance: '1/10 (10%)' }
		]
	},
	{
		id: 'obsidian-water-walking-boots',
		name: 'Obsidian Water Walking Boots',
		tier: 'pre-hardmode',
		slots: ['movement', 'immunity'],
		effect: 'Walk on water and honey, and immunity to fire blocks.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Water Walking Boots' }, { item: 'Obsidian Skull' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'neptunes-shell',
		name: "Neptune's Shell",
		tier: 'hardmode',
		slots: ['movement'],
		effect: 'Turns the holder into merfolk when entering water.',
		sprite: 'fish',
		sources: [
			{
				kind: 'drop',
				from: 'Creature from the Deep (Solar Eclipse)',
				chance: '1/50 (2%)',
				expert: '99/2500 (3.96%)'
			}
		]
	},
	{
		id: 'moon-charm',
		name: 'Moon Charm',
		tier: 'hardmode',
		slots: ['melee', 'movement'],
		effect: 'Turns the holder into a werewolf at night.',
		sprite: 'star',
		sources: [{ kind: 'drop', from: 'Werewolf (full moon nights)', chance: '1.67%' }]
	},
	{
		id: 'moon-shell',
		name: 'Moon Shell',
		tier: 'hardmode',
		slots: ['melee', 'movement'],
		effect: 'Werewolf at night, merfolk in water.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Moon Charm' }, { item: "Neptune's Shell" }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'celestial-shell',
		name: 'Celestial Shell',
		tier: 'post-golem',
		slots: ['melee', 'movement', 'defense'],
		effect: 'Werewolf, merfolk, and every Celestial Stone bonus in one slot.',
		sprite: 'star',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Celestial Stone' }, { item: 'Moon Shell' }] }],
		shimmer: { decraft: true },
		note: 'The single best all-round accessory for a melee build.'
	},

	// lava
	{
		id: 'obsidian-skull',
		name: 'Obsidian Skull',
		tier: 'pre-hardmode',
		slots: ['immunity', 'defense'],
		effect: 'Grants immunity to fire blocks, and +1 defence.',
		sprite: 'skull',
		sources: [{ kind: 'craft', from: FURNACE }],
		recipes: [{ at: FURNACE, needs: [{ item: 'Obsidian', qty: 20 }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'lava-charm',
		name: 'Lava Charm',
		tier: 'pre-hardmode',
		slots: ['immunity'],
		effect: 'Provides 7 seconds of immunity to lava.',
		sprite: 'flask',
		sources: [
			{ kind: 'chest', from: 'Gold Chest (lava layer)', chance: '1/20 (5%)' },
			{ kind: 'crate', from: 'Hellstone / Obsidian Crate', chance: '1/20 (5%)' }
		],
		shimmer: { to: 'Magma Stone', from: 'Magma Stone' }
	},
	{
		id: 'obsidian-rose',
		name: 'Obsidian Rose',
		tier: 'pre-hardmode',
		slots: ['defense'],
		effect: 'Reduces damage from touching lava, and halves the On Fire! it causes.',
		sprite: 'leaf',
		sources: [{ kind: 'drop', from: 'Fire Imp (Underworld)', chance: '1/20 (5%)' }]
	},
	{
		id: 'molten-charm',
		name: 'Molten Charm',
		tier: 'pre-hardmode',
		slots: ['immunity'],
		effect: '7 seconds of lava immunity, and immunity to fire blocks.',
		sprite: 'flask',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Lava Charm' }, { item: 'Obsidian Skull' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'magma-skull',
		name: 'Magma Skull',
		tier: 'pre-hardmode',
		slots: ['immunity'],
		effect: '7 seconds of lava immunity, and immunity to fire blocks.',
		sprite: 'skull',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Obsidian Skull' }, { item: 'Lava Charm' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'obsidian-skull-rose',
		name: 'Obsidian Skull Rose',
		tier: 'pre-hardmode',
		slots: ['immunity', 'defense'],
		effect: 'Immunity to fire blocks, and reduced lava contact damage.',
		sprite: 'skull',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [{ at: TW, needs: [{ item: 'Obsidian Skull' }, { item: 'Obsidian Rose' }] }],
		shimmer: { decraft: true }
	},
	{
		id: 'molten-skull-rose',
		name: 'Molten Skull Rose',
		tier: 'pre-hardmode',
		slots: ['immunity', 'defense'],
		effect: '7s lava immunity, fire-block immunity, and reduced lava damage.',
		sprite: 'skull',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Obsidian Skull Rose' }, { item: 'Lava Charm' }] },
			{ at: TW, needs: [{ item: 'Magma Skull' }, { item: 'Obsidian Rose' }] },
			{ at: TW, needs: [{ item: 'Magma Skull' }, { item: 'Obsidian Skull Rose' }] }
		],
		shimmer: { decraft: true }
	},
	{
		id: 'lava-waders',
		name: 'Lava Waders',
		tier: 'pre-hardmode',
		slots: ['movement', 'immunity'],
		effect: 'Walk on water, honey and lava, with 7s lava immunity and reduced lava damage.',
		sprite: 'boot',
		sources: [{ kind: 'craft', from: TW }],
		recipes: [
			{ at: TW, needs: [{ item: 'Molten Skull Rose' }, { item: 'Water Walking Boots' }] },
			{
				at: TW,
				needs: [{ item: 'Molten Charm' }, { item: 'Obsidian Water Walking Boots' }]
			},
			{
				at: TW,
				needs: [
					{ item: 'Obsidian Water Walking Boots' },
					{ item: 'Lava Charm' },
					{ item: 'Obsidian Rose' }
				]
			}
		],
		shimmer: { decraft: true }
	},

	// odds and ends
	{
		id: 'flying-carpet',
		name: 'Flying Carpet',
		tier: 'pre-hardmode',
		slots: ['movement'],
		effect: 'Allows the owner to float for about 5 seconds.',
		sprite: 'wing',
		sources: [{ kind: 'chest', from: 'Gold Chest (Pyramid)', chance: '1/9 (11.11%)' }],
		shimmer: { to: "Pharaoh's Robe", from: "Pharaoh's Robe" }
	},
	{
		id: 'ram-rune',
		name: 'Ram Rune',
		tier: 'pre-hardmode',
		slots: ['movement', 'melee'],
		effect: 'Jump while holding DOWN to slam and damage nearby enemies.',
		sprite: 'skull',
		desktopOnly: true,
		sources: [
			{
				kind: 'chest',
				from: 'Locked Gold Chest (Dungeon) / Golden Lock Box',
				chance: '1/8 (12.5%)',
				note: 'the first locked gold chest in a Dungeon always contains it'
			}
		]
	},
	{
		id: 'step-stool',
		name: 'Step Stool',
		tier: 'pre-hardmode',
		slots: ['movement', 'build'],
		effect: 'Hold Up to reach higher — +2 upward placement range.',
		sprite: 'hammer',
		sources: [
			{ kind: 'chest', from: 'Surface Chest', chance: '1/11 (9.09%)' },
			{ kind: 'crate', from: 'Wooden / Pearlwood Crate', chance: '1/120 (0.83%)' }
		]
	},
	{
		id: 'soaring-insignia',
		name: 'Soaring Insignia',
		tier: 'post-plantera',
		slots: ['wings', 'movement'],
		effect: 'Grants infinite wing and Rocket Boot flight, and more air mobility.',
		sprite: 'wing',
		expertOnly: true,
		sources: [
			{ kind: 'bag', from: 'Treasure Bag (Empress of Light)', chance: '100%' }
		],
		note: 'Needs wings or Rocket Boots equipped to do anything.'
	},
	{
		id: 'gravity-globe',
		name: 'Gravity Globe',
		tier: 'post-moonlord',
		slots: ['movement'],
		effect: 'Allows the holder to reverse gravity. Press Up to change gravity.',
		sprite: 'star',
		expertOnly: true,
		sources: [{ kind: 'bag', from: 'Treasure Bag (Moon Lord)', chance: '100%' }]
	},
	{
		id: 'chromatic-cloak',
		name: 'Chromatic Cloak',
		tier: 'hardmode',
		slots: ['utility'],
		effect: 'Immunity to Shimmer Phasing. Hold Down to phase while in Shimmer.',
		sprite: 'shimmer',
		sources: [
			{
				kind: 'shimmer',
				from: 'Star Cloak',
				note: 'the only way to get it — there is no recipe or vendor'
			}
		],
		shimmer: { from: 'Star Cloak' }
	}
];
