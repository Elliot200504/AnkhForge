import type { Mob } from '$lib/types';

/**
 * where every mob live, from the 1.4.5 wiki. some are not what u think.
 * enchanted sword is underground hallow not cavern, angler fish is a cavern
 * mob and not a ocean one
 */
export const mobs: Mob[] = [
	// dungeon
	{
		name: 'Angry Bones',
		kind: 'enemy',
		where: 'Dungeon',
		stage: 'pre-hardmode'
	},
	{
		name: 'Dark Caster',
		kind: 'enemy',
		where: 'Dungeon',
		stage: 'pre-hardmode'
	},
	{
		name: 'Cursed Skull',
		kind: 'enemy',
		where: 'Dungeon',
		stage: 'pre-hardmode'
	},
	{
		name: 'Librarian Skeleton',
		kind: 'enemy',
		where: 'Dungeon',
		stage: 'pre-hardmode',
		note: 'Only spawns in front of placed Books, so a shelf-lined room farms them.'
	},
	{
		name: 'Giant Cursed Skull',
		kind: 'enemy',
		where: 'Dungeon',
		when: 'post-Plantera',
		stage: 'post-plantera'
	},
	{
		name: 'Rusty Armored Bones',
		kind: 'enemy',
		where: 'Dungeon',
		when: 'post-Plantera',
		stage: 'post-plantera',
		note: 'Favours areas backed by slab walls.'
	},
	{
		name: 'Blue Armored Bones',
		kind: 'enemy',
		where: 'Dungeon',
		when: 'post-Plantera',
		stage: 'post-plantera'
	},
	{
		name: 'Paladin',
		kind: 'enemy',
		where: 'Dungeon',
		when: 'post-Plantera',
		stage: 'post-plantera'
	},
	{
		name: 'Skeleton Sniper',
		kind: 'enemy',
		where: 'Dungeon',
		when: 'post-Plantera',
		stage: 'post-plantera'
	},
	{
		name: 'Bone Lee',
		kind: 'enemy',
		where: 'Dungeon',
		when: 'post-Plantera',
		stage: 'post-plantera'
	},

	// underground and cavern
	{
		name: 'Cave Bat',
		kind: 'enemy',
		where: 'Underground and Cavern',
		stage: 'pre-hardmode'
	},
	{
		name: 'Giant Bat',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'hardmode'
	},
	{
		name: 'Skeleton Archer',
		kind: 'enemy',
		where: 'Underground and Cavern',
		stage: 'hardmode'
	},
	{
		name: 'Armored Skeleton',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'hardmode',
		note: 'A larger, stronger version spawns just above lava level.'
	},
	{
		name: 'Mother Slime',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'pre-hardmode',
		note: 'Spawn rate collapses once Hardmode starts — get these early.'
	},
	{
		name: 'Toxic Sludge',
		kind: 'enemy',
		where: 'Underground',
		stage: 'hardmode',
		note: 'Replaces ordinary slimes underground in Hardmode.'
	},
	{
		name: 'Crawdad',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'pre-hardmode',
		note: 'A world only gets two of Crawdad, Giant Shelly and Salamander.'
	},
	{
		name: 'Giant Shelly',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'pre-hardmode',
		note: 'A world only gets two of Crawdad, Giant Shelly and Salamander.'
	},
	{
		name: 'Salamander',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'pre-hardmode',
		note: 'A world only gets two of Crawdad, Giant Shelly and Salamander.'
	},
	{
		name: 'Nymph',
		kind: 'enemy',
		where: 'Cavern',
		stage: 'pre-hardmode',
		note: 'Disguised as the Lost Girl until you get close or hit her. Rare, and luck does not help.'
	},
	{
		name: 'Digger',
		kind: 'enemy',
		where: 'Underground and Cavern',
		stage: 'hardmode',
		note: 'Will not spawn underground while you are in an Ice biome.'
	},
	{
		name: 'Giant Worm',
		kind: 'enemy',
		where: 'Underground and Cavern',
		stage: 'pre-hardmode'
	},
	{
		name: 'Mimic',
		kind: 'enemy',
		where: 'Underground and Cavern',
		stage: 'hardmode',
		note: 'Disguised as a chest. A weaker pre-Hardmode variant also exists underground.'
	},

	// ice
	{
		name: 'Ice Bat',
		kind: 'enemy',
		where: 'Underground Snow',
		stage: 'pre-hardmode'
	},
	{
		name: 'Snow Flinx',
		kind: 'enemy',
		where: 'Ice biome — the Cavern-layer Snow biome',
		stage: 'pre-hardmode',
		note: 'Spawns more readily on blocks that are not Ice or Snow.'
	},
	{
		name: 'Undead Viking',
		kind: 'enemy',
		where: 'Ice biome',
		stage: 'pre-hardmode'
	},
	{
		name: 'Armored Viking',
		kind: 'enemy',
		where: 'Ice biome',
		stage: 'hardmode'
	},
	{
		name: 'Ice Tortoise',
		kind: 'enemy',
		where: 'Ice biome',
		stage: 'hardmode'
	},
	{
		name: 'Ice Mimic',
		kind: 'enemy',
		where: 'Underground Snow',
		stage: 'hardmode',
		note: 'Spawns naturally in the snow. A pre-Hardmode variant exists too.'
	},

	// jungle and mushroom
	{
		name: 'Hornet',
		kind: 'enemy',
		where: 'Underground Jungle',
		stage: 'pre-hardmode'
	},
	{
		name: 'Moss Hornet',
		kind: 'enemy',
		where: 'Underground Jungle',
		stage: 'hardmode'
	},
	{
		name: 'Jungle Bat',
		kind: 'enemy',
		where: 'Underground Jungle',
		stage: 'pre-hardmode'
	},
	{
		name: 'Angler Fish',
		kind: 'enemy',
		where: 'Water in the Cavern layer and the Jungle',
		stage: 'hardmode',
		note: 'Not an Ocean enemy, despite the name.'
	},
	{
		name: 'Jungle Mimic',
		kind: 'enemy',
		where: 'Underground Jungle',
		stage: 'hardmode'
	},
	{
		name: 'Spore Bat',
		kind: 'enemy',
		where: 'Underground Glowing Mushroom biome',
		stage: 'pre-hardmode',
		note: 'Needs about 100 mushroom tiles nearby, not just one grass block.'
	},

	// corruption
	{
		name: 'Corrupt Slime',
		kind: 'enemy',
		where: 'The Corruption, surface and underground',
		stage: 'hardmode'
	},
	{
		name: 'Slimer',
		kind: 'enemy',
		where: 'The Corruption, surface and underground',
		stage: 'hardmode',
		aliases: ['Slimer (Without Wings)']
	},
	{
		name: 'Slimeling',
		kind: 'enemy',
		where: 'The Corruption, surface and underground',
		stage: 'hardmode',
		note: 'Splits off in twos and threes when a Corrupt Slime dies.'
	},
	{
		name: 'Corruptor',
		kind: 'enemy',
		where: 'The Corruption, surface and underground',
		stage: 'hardmode'
	},
	{
		name: 'Cursed Hammer',
		kind: 'enemy',
		where: 'Underground Corruption',
		stage: 'hardmode'
	},
	{
		name: 'Corrupt Mimic',
		kind: 'enemy',
		where: 'Underground Corruption',
		stage: 'hardmode',
		note: 'Summon it by putting a Key of Night in an empty chest there.'
	},
	{
		name: 'Shadow Orb',
		kind: 'object',
		where: 'Underground Corruption',
		stage: 'pre-hardmode',
		note: 'Smash with a hammer or explosives. Every third one summons the Eater of Worlds.'
	},

	// crimson
	{
		name: 'Crimslime',
		kind: 'enemy',
		where: 'The Crimson, surface and underground',
		stage: 'hardmode'
	},
	{
		name: 'Floaty Gross',
		kind: 'enemy',
		where: 'Underground Crimson',
		stage: 'hardmode'
	},
	{
		name: 'Crimson Axe',
		kind: 'enemy',
		where: 'Underground Crimson',
		stage: 'hardmode'
	},
	{
		name: 'Crimson Mimic',
		kind: 'enemy',
		where: 'Underground Crimson',
		stage: 'hardmode',
		note: 'Summon it by putting a Key of Night in an empty chest there.'
	},
	{
		name: 'Crimson Heart',
		kind: 'object',
		where: 'Underground Crimson',
		stage: 'pre-hardmode',
		note: 'Smash with a hammer or explosives. Every third one summons the Brain of Cthulhu.'
	},

	// hallow
	{
		name: 'Pixie',
		kind: 'enemy',
		where: 'The Hallow, surface layer',
		stage: 'hardmode',
		note: 'Climbs walls, so pit traps work poorly.'
	},
	{
		name: 'Enchanted Sword',
		kind: 'enemy',
		where: 'Underground Hallow',
		stage: 'hardmode',
		note: 'Only spawns on Pearlstone, Pearlsand, Pink Ice or Hallowed grass.',
		aliases: ['Enchanted Sword (NPC)']
	},
	{
		name: 'Hallowed Mimic',
		kind: 'enemy',
		where: 'Underground Hallow',
		stage: 'hardmode',
		note: 'Summon it by putting a Key of Light in an empty chest there.'
	},

	// desert
	{
		name: 'Mummy',
		kind: 'enemy',
		where: 'Desert, or anywhere with Sand Blocks',
		stage: 'hardmode'
	},
	{
		name: 'Dark Mummy',
		kind: 'enemy',
		where: 'Corrupt Desert — anywhere with Ebonsand',
		stage: 'hardmode'
	},
	{
		name: 'Light Mummy',
		kind: 'enemy',
		where: 'Hallowed Desert — anywhere with Pearlsand',
		stage: 'hardmode'
	},
	{
		name: 'Blood Mummy',
		kind: 'enemy',
		where: 'Crimson Desert — anywhere with Crimsand',
		stage: 'hardmode'
	},
	{
		name: 'Dark Lamia',
		kind: 'enemy',
		where: 'Underground Desert that has turned Corrupt or Crimson',
		stage: 'hardmode'
	},
	{
		name: 'Light Lamia',
		kind: 'enemy',
		where: 'Underground Desert that has turned Hallowed',
		stage: 'hardmode'
	},

	// marble and granite
	{
		name: 'Medusa',
		kind: 'enemy',
		where: 'Marble Cave',
		stage: 'hardmode',
		note: 'A statue-spawned Medusa drops nothing — she has to spawn naturally.'
	},
	{
		name: 'Hoplite',
		kind: 'enemy',
		where: 'Marble Cave',
		stage: 'hardmode'
	},
	{
		name: 'Granite Elemental',
		kind: 'enemy',
		where: 'Granite Cave',
		stage: 'hardmode',
		note: 'Only the Cavern-layer granite caves, never the Underground ones.'
	},
	{
		name: 'Granite Golem',
		kind: 'enemy',
		where: 'Granite Cave',
		stage: 'hardmode'
	},

	// underworld
	{
		name: 'Hellbat',
		kind: 'enemy',
		where: 'The Underworld',
		stage: 'pre-hardmode'
	},
	{
		name: 'Lava Bat',
		kind: 'enemy',
		where: 'The Underworld',
		stage: 'hardmode'
	},
	{
		name: 'Fire Imp',
		kind: 'enemy',
		where: 'The Underworld',
		stage: 'pre-hardmode'
	},
	{
		name: 'Voodoo Demon',
		kind: 'enemy',
		where: 'The Underworld',
		stage: 'pre-hardmode',
		note: 'Carries the Guide Voodoo Doll and always drops it.'
	},

	// ocean and water
	{
		name: 'Shark',
		kind: 'enemy',
		where: 'Ocean',
		stage: 'pre-hardmode'
	},
	{
		name: 'Orca',
		kind: 'enemy',
		where: 'Ocean',
		stage: 'hardmode',
		note: 'A stronger Shark, with the same drops.'
	},
	{
		name: 'Blue Jellyfish',
		kind: 'enemy',
		where: 'Water in the Underground and Cavern',
		stage: 'pre-hardmode'
	},
	{
		name: 'Green Jellyfish',
		kind: 'enemy',
		where: 'Water in the Underground and Cavern',
		stage: 'hardmode',
		note: 'Replaces two thirds of Blue Jellyfish spawns in Hardmode.'
	},
	{
		name: 'Pink Jellyfish',
		kind: 'enemy',
		where: 'Ocean — on sand under more than one tile of water',
		stage: 'pre-hardmode'
	},

	// surface, night and blood moon
	{
		name: 'Zombie',
		kind: 'enemy',
		where: 'Surface',
		when: 'night, and during a Blood Moon',
		stage: 'pre-hardmode',
		note: 'Most Zombie variants share the Shackle drop.'
	},
	{
		name: 'Blood Zombie',
		kind: 'enemy',
		where: 'Surface',
		when: 'Blood Moon',
		stage: 'pre-hardmode'
	},
	{
		name: 'Drippler',
		kind: 'enemy',
		where: 'Surface',
		when: 'Blood Moon',
		stage: 'pre-hardmode',
		note: 'Drifts away and despawns if it survives to daylight.'
	},
	{
		name: 'Clown',
		kind: 'enemy',
		where: 'Surface',
		when: 'Blood Moon',
		stage: 'hardmode'
	},
	{
		name: 'Wraith',
		kind: 'enemy',
		where: 'Surface',
		when: 'night',
		stage: 'hardmode',
		note: '3.8× as common on a new moon. One or two also spawn whenever you smash an Altar.'
	},
	{
		name: 'Werewolf',
		kind: 'enemy',
		where: 'Surface',
		when: 'night, full moon only',
		stage: 'hardmode'
	},

	// solar eclipse
	{
		name: 'Vampire',
		kind: 'enemy',
		where: 'Surface',
		when: 'Solar Eclipse',
		stage: 'hardmode'
	},
	{
		name: 'Creature from the Deep',
		kind: 'enemy',
		where: 'Surface',
		when: 'Solar Eclipse',
		stage: 'hardmode'
	},
	{
		name: 'Mothron',
		kind: 'enemy',
		where: 'Surface',
		when: 'Solar Eclipse, post-Plantera',
		stage: 'post-plantera'
	},

	// events
	{
		name: 'Mourning Wood',
		kind: 'enemy',
		where: 'Surface',
		when: 'Pumpkin Moon',
		stage: 'post-plantera',
		note: 'Drop rate climbs with the wave, so push deep into the event.'
	},
	{
		name: 'Everscream',
		kind: 'enemy',
		where: 'Surface',
		when: 'Frost Moon',
		stage: 'post-plantera',
		note: 'Drop rate climbs with the wave.'
	},
	{
		name: 'Dark Mage',
		kind: 'enemy',
		where: 'At your Eternia Crystal',
		when: "Old One's Army, tiers 1 and 3"
	},
	{
		name: 'Ogre',
		kind: 'enemy',
		where: 'At your Eternia Crystal',
		when: "Old One's Army, tiers 2 and 3",
		stage: 'post-mech'
	},
	{
		name: 'Pirate Captain',
		kind: 'enemy',
		where: 'Surface',
		when: 'Pirate Invasion',
		stage: 'hardmode'
	},
	{
		name: 'Pirate Corsair',
		kind: 'enemy',
		where: 'Surface',
		when: 'Pirate Invasion',
		stage: 'hardmode',
		aliases: ['Corsair']
	},
	{
		name: 'Pirate Crossbower',
		kind: 'enemy',
		where: 'Surface',
		when: 'Pirate Invasion',
		stage: 'hardmode',
		aliases: ['Crossbower']
	},
	{
		name: 'Pirate Deadeye',
		kind: 'enemy',
		where: 'Surface',
		when: 'Pirate Invasion',
		stage: 'hardmode',
		aliases: ['Deadeye']
	},
	{
		name: 'Pirate Deckhand',
		kind: 'enemy',
		where: 'Surface',
		when: 'Pirate Invasion',
		stage: 'hardmode',
		aliases: ['Deckhand']
	},
	{
		name: 'Present',
		kind: 'object',
		where: 'Dropped by almost any enemy',
		when: 'Christmas — 15 December to 31 December',
		note: 'Open them in bulk; the good accessories are well under 1%.'
	},

	// bosses
	{
		name: 'King Slime',
		kind: 'boss',
		where: 'Surface',
		when: 'Slime Rain, or use a Slime Crown',
		stage: 'pre-hardmode'
	},
	{
		name: 'Eye of Cthulhu',
		kind: 'boss',
		where: 'Surface',
		when: 'night — use a Suspicious Looking Eye',
		stage: 'pre-hardmode'
	},
	{
		name: 'Eater of Worlds',
		kind: 'boss',
		where: 'The Corruption',
		when: 'break three Shadow Orbs, or use Worm Food',
		stage: 'pre-hardmode'
	},
	{
		name: 'Brain of Cthulhu',
		kind: 'boss',
		where: 'Underground Crimson',
		when: 'break three Crimson Hearts, or use a Bloody Spine',
		stage: 'pre-hardmode'
	},
	{
		name: 'Queen Bee',
		kind: 'boss',
		where: 'Underground Jungle',
		when: 'break a Larva in a bee hive, or use an Abeemination',
		stage: 'pre-hardmode'
	},
	{
		name: 'Skeletron',
		kind: 'boss',
		where: 'The Dungeon entrance',
		when: 'night — talk to the Old Man, or use a Clothier Voodoo Doll',
		stage: 'pre-hardmode'
	},
	{
		name: 'Deerclops',
		kind: 'boss',
		where: 'Snow biome',
		when: 'a blizzard at night, or use a Deer Thing',
		stage: 'pre-hardmode'
	},
	{
		name: 'Wall of Flesh',
		kind: 'boss',
		where: 'The Underworld',
		when: 'drop a Guide Voodoo Doll in lava',
		stage: 'pre-hardmode',
		note: 'Beating it starts Hardmode. It drops one of the four class Emblems.'
	},
	{
		name: 'Queen Slime',
		kind: 'boss',
		where: 'The Hallow',
		when: 'use a Gelatin Crystal',
		stage: 'hardmode'
	},
	{
		name: 'Plantera',
		kind: 'boss',
		where: 'Underground Jungle',
		when: "break a Plantera's Bulb, after all three mechanical bosses",
		stage: 'post-mech'
	},
	{
		name: 'Golem',
		kind: 'boss',
		where: 'Jungle Temple',
		when: "use a Lihzahrd Power Cell at the Lihzahrd Altar",
		stage: 'post-plantera'
	},
	{
		name: 'Duke Fishron',
		kind: 'boss',
		where: 'Ocean',
		when: 'fish with a Truffle Worm',
		stage: 'post-plantera'
	},
	{
		name: 'Empress of Light',
		kind: 'boss',
		where: 'The Hallow',
		when: 'kill a Prismatic Lacewing at night',
		stage: 'post-plantera'
	},
	{
		name: 'Betsy',
		kind: 'boss',
		where: 'At your Eternia Crystal',
		when: "Old One's Army, final wave of tier 3",
		stage: 'post-golem'
	},
	{
		name: 'Flying Dutchman',
		kind: 'boss',
		where: 'Surface',
		when: 'Pirate Invasion',
		stage: 'hardmode',
		note: 'By far the most generous source of the three pirate money accessories.'
	},
	{
		name: 'Moon Lord',
		kind: 'boss',
		where: 'Anywhere',
		when: 'beat the Lunatic Cultist and all four Celestial Pillars',
		stage: 'post-moonlord'
	}
];
