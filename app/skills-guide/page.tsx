/* ============================================
   Mewgenics Guide — Skills & Abilities
   Complete Skill Database for All 14 Cat Classes
   ============================================ */

import Link from "next/link";

const ALL_SKILLS = [
  // Collarless (9 skills)
  { name: 'Vet Visit', class: 'Collarless', type: 'Support', effect: 'Heal a friendly unit for moderate HP. Basic sustain ability.', mana: 0, rarity: 'Starter', breed: 'Any' },
  { name: 'Buy Catnip', class: 'Collarless', type: 'Support', effect: 'Purchase consumable items during combat using gold. Shopping utility.', mana: 0, rarity: 'Starter', breed: 'Any' },
  { name: 'Subway Ride', class: 'Collarless', type: 'Special', effect: 'Fast travel one unit to any tile on the battlefield. Mobility tool.', mana: 0, rarity: 'Starter', breed: 'Any' },
  { name: 'Hire Hitman', class: 'Collarless', type: 'Combat', effect: 'Call in an NPC hitman to deal damage to a target. One-time damage dealer.', mana: 0, rarity: 'Starter', breed: 'Any' },
  { name: 'Copycat', class: 'Collarless', type: 'Special', effect: 'Copy the last ability used by any unit on the battlefield. Versatile mimicry.', mana: 5, rarity: 'Rare', breed: 'Abyssinian' },
  { name: 'Second Wave', class: 'Collarless', type: 'Special', effect: 'Reset all cooldowns for the team. Once per battle. Game-changing ultimate.', mana: 8, rarity: 'Rare', breed: 'Bengal' },
  { name: 'Bare Minimum', class: 'Collarless', type: 'Passive', effect: 'Reduce mana costs of all abilities by 1 (minimum 0). Efficiency boost.', mana: 'N/A', rarity: 'Common', breed: 'Any' },
  { name: 'Careful', class: 'Collarless', type: 'Passive', effect: 'Take 15% less damage from area-of-effect attacks. Defensive protection.', mana: 'N/A', rarity: 'Common', breed: 'Any' },
  { name: 'Unrestricted', class: 'Collarless', type: 'Passive', effect: 'Ignore class restrictions on equipment. Can equip any item regardless of class.', mana: 'N/A', rarity: 'Rare', breed: 'Bengal' },

  // Tank (6 skills)
  { name: 'Steelskin', class: 'Tank', type: 'Defensive', effect: 'Gain 50% damage reduction for 2 turns. Primary tank mitigation ability.', mana: 0, rarity: 'Starter', breed: 'Maine Coon' },
  { name: 'Pincushion', class: 'Tank', type: 'Defensive', effect: 'Reflect 30% of incoming damage back to attackers. Thorns effect.', mana: 0, rarity: 'Starter', breed: 'Maine Coon' },
  { name: 'Bodyguard', class: 'Tank', type: 'Defensive', effect: 'Take damage in place of a targeted ally for 2 turns. Protector role.', mana: 2, rarity: 'Uncommon', breed: 'British Shorthair' },
  { name: 'Hard Head', class: 'Tank', type: 'Passive', effect: 'Immune to stun and knockback effects. Crowd control immunity.', mana: 'N/A', rarity: 'Common', breed: 'Maine Coon' },
  { name: 'Scabs', class: 'Tank', type: 'Passive', effect: 'Regenerate 5% max HP each turn. Passive sustain for long fights.', mana: 'N/A', rarity: 'Uncommon', breed: 'Norwegian Forest Cat' },
  { name: 'Toad Style', class: 'Tank', type: 'Passive', effect: 'Taunt enemies within 3 tiles at the start of each turn. Aggro control.', mana: 'N/A', rarity: 'Rare', breed: 'Maine Coon' },

  // Fighter (9 skills)
  { name: 'Spin', class: 'Fighter', type: 'Combat', effect: 'Spin attack hitting all adjacent enemies for weapon damage. AoE clear.', mana: 6, rarity: 'Starter', breed: 'Bengal' },
  { name: 'Fury Swipes', class: 'Fighter', type: 'Combat', effect: 'Attack 3 times in rapid succession on a single target. High single-target DPS.', mana: 6, rarity: 'Starter', breed: 'Bengal' },
  { name: 'Counterattack', class: 'Fighter', type: 'Combat', effect: 'Enter counter stance — attack the next enemy that hits you for double damage.', mana: 6, rarity: 'Uncommon', breed: 'Siamese' },
  { name: 'Confront', class: 'Fighter', type: 'Combat', effect: 'Challenge an enemy to 1v1 combat. Both deal and take 25% more damage from each other.', mana: 7, rarity: 'Uncommon', breed: 'Maine Coon' },
  { name: 'Gravity Slam', class: 'Fighter', type: 'Combat', effect: 'Jump to target tile and deal AoE damage on landing. Gap closer + damage.', mana: 6, rarity: 'Uncommon', breed: 'Abyssinian' },
  { name: 'Berserk', class: 'Fighter', type: 'Combat', effect: 'Deal 50% more damage but take 25% more damage for 3 turns. High-risk DPS mode.', mana: 4, rarity: 'Uncommon', breed: 'Abyssinian' },
  { name: 'Fervor', class: 'Fighter', type: 'Passive', effect: 'Each consecutive attack on the same target deals 10% more damage. Snowball damage.', mana: 'N/A', rarity: 'Common', breed: 'Siamese' },
  { name: 'Frenzy', class: 'Fighter', type: 'Passive', effect: 'Gain +20% attack speed when HP drops below 50%. Low-HP comeback mechanic.', mana: 'N/A', rarity: 'Common', breed: 'Abyssinian' },
  { name: 'Underdog', class: 'Fighter', type: 'Passive', effect: 'Deal 25% more damage when outnumbered by enemies. Comeback passive.', mana: 'N/A', rarity: 'Uncommon', breed: 'Siamese' },

  // Mage (7 skills)
  { name: 'Meteor Storm', class: 'Mage', type: 'Combat', effect: 'Call down meteors dealing heavy AoE fire damage in a 3x3 area. Devastating area clear.', mana: 10, rarity: 'Rare', breed: 'Persian' },
  { name: 'Hyper Beam', class: 'Mage', type: 'Combat', effect: 'Fire a piercing beam that hits all enemies in a straight line for high damage.', mana: 3, rarity: 'Starter', breed: 'Persian' },
  { name: 'Mega Blast', class: 'Mage', type: 'Combat', effect: 'Channel a massive explosion dealing extreme damage to all enemies in a 5x5 area. Ultimate nuke.', mana: 13, rarity: 'Rare', breed: 'Sphynx' },
  { name: 'Cryo Heal', class: 'Mage', type: 'Support', effect: 'Heal a target and grant them 30% frost damage reduction for 2 turns. Hybrid support.', mana: 8, rarity: 'Uncommon', breed: 'Birman' },
  { name: 'Two', class: 'Mage', type: 'Passive', effect: 'Cast abilities twice per turn but at 150% mana cost. Double casting at premium.', mana: 'N/A', rarity: 'Rare', breed: 'Sphynx' },
  { name: 'Paw Missile', class: 'Mage', type: 'Passive', effect: 'Basic attacks deal bonus magic damage equal to 20% of Intelligence. Stat scaling passive.', mana: 'N/A', rarity: 'Common', breed: 'Persian' },
  { name: 'Ice Aspect', class: 'Mage', type: 'Passive', effect: 'All fire spells are converted to ice damage with 15% chance to freeze. Element conversion.', mana: 'N/A', rarity: 'Uncommon', breed: 'Norwegian Forest Cat' },

  // Hunter (9 skills)
  { name: 'Arrow Flurry', class: 'Hunter', type: 'Combat', effect: 'Fire 5 arrows at random enemies for moderate damage each. Multi-target ranged attack.', mana: 8, rarity: 'Uncommon', breed: 'Abyssinian' },
  { name: 'Heavy Shot', class: 'Hunter', type: 'Combat', effect: 'Fire a high-damage single shot with armor penetration. Anti-tank ranged attack.', mana: 4, rarity: 'Starter', breed: 'Siamese' },
  { name: 'Line Shot', class: 'Hunter', type: 'Combat', effect: 'Fire an arrow that pierces through all enemies in a straight line. Line AoE damage.', mana: 7, rarity: 'Starter', breed: 'Oriental Shorthair' },
  { name: 'Snipe', class: 'Hunter', type: 'Combat', effect: 'Precision shot dealing massive damage to a single target from any range. Long-range execute.', mana: 6, rarity: 'Uncommon', breed: 'Russian Blue' },
  { name: 'Marked', class: 'Hunter', type: 'Combat', effect: 'Mark a target — all subsequent attacks against it deal 30% more damage for 2 turns.', mana: 5, rarity: 'Common', breed: 'Abyssinian' },
  { name: 'Sentry Mode', class: 'Hunter', type: 'Special', effect: 'Become immobile but gain +3 range and +40% damage for 3 turns. Once per battle turret mode.', mana: 6, rarity: 'Rare', breed: 'Russian Blue' },
  { name: 'Thrill of the Hunt', class: 'Hunter', type: 'Passive', effect: 'Gain +10% damage and +2 range for each enemy killed this battle. Snowball assassin.', mana: 'N/A', rarity: 'Common', breed: 'Oriental Shorthair' },
  { name: 'Bullseye', class: 'Hunter', type: 'Passive', effect: 'Attacks against marked targets automatically critical hit. Guaranteed crit synergy.', mana: 'N/A', rarity: 'Uncommon', breed: 'Siamese' },
  { name: 'Rubber Arrows', class: 'Hunter', type: 'Passive', effect: 'Arrows bounce to one additional nearby enemy for 50% damage. Chain hits passive.', mana: 'N/A', rarity: 'Common', breed: 'Abyssinian' },

  // Cleric (9 skills)
  { name: 'Prayer', class: 'Cleric', type: 'Support', effect: 'Restore mana to a friendly unit. Mana battery for mana-hungry team compositions.', mana: 4, rarity: 'Starter', breed: 'Birman' },
  { name: 'Healing Word', class: 'Cleric', type: 'Support', effect: 'Heal a target for significant HP and remove one negative status effect. Primary heal.', mana: 5, rarity: 'Starter', breed: 'Birman' },
  { name: 'Awaken', class: 'Cleric', type: 'Support', effect: 'Remove all debuffs from a target and prevent new ones for 1 turn. Cleanse ability.', mana: 1, rarity: 'Common', breed: 'Persian' },
  { name: 'Revive', class: 'Cleric', type: 'Support', effect: 'Bring a fallen ally back to life with 40% HP. Essential for hard boss fights.', mana: 8, rarity: 'Rare', breed: 'Birman' },
  { name: 'Open Wounds', class: 'Cleric', type: 'Combat', effect: 'Deal holy damage and apply a 10% vulnerability debuff to target for 2 turns. Offensive cleric option.', mana: 8, rarity: 'Uncommon', breed: 'Persian' },
  { name: 'Circle of Protection', class: 'Cleric', type: 'Defensive', effect: 'Create a 3x3 protective zone — allies inside take 25% less damage for 3 turns.', mana: 8, rarity: 'Uncommon', breed: 'Maine Coon' },
  { name: 'Ranged Medic', class: 'Cleric', type: 'Passive', effect: 'Healing abilities gain +3 range. Heal allies from safe distance.', mana: 'N/A', rarity: 'Common', breed: 'Persian' },
  { name: 'Caretaker', class: 'Cleric', type: 'Passive', effect: 'Healing effects are 20% stronger on allies below 50% HP. Emergency healing boost.', mana: 'N/A', rarity: 'Common', breed: 'Birman' },
  { name: 'Purifier', class: 'Cleric', type: 'Passive', effect: 'Every heal has a 30% chance to also remove a debuff. Passive cleanse synergy.', mana: 'N/A', rarity: 'Uncommon', breed: 'Persian' },

  // Thief (9 skills)
  { name: 'Shadow', class: 'Thief', type: 'Special', effect: 'Enter stealth — become untargetable until your next attack deals 2x damage.', mana: 4, rarity: 'Starter', breed: 'Siamese' },
  { name: 'Stalk', class: 'Thief', type: 'Special', effect: 'Mark a target from stealth. Your next attack on it deals 3x damage and ignores armor.', mana: 3, rarity: 'Starter', breed: 'Russian Blue' },
  { name: 'Boost Backstab', class: 'Thief', type: 'Combat', effect: 'Teleport behind target and attack for 2.5x damage. Must attack from rear.', mana: 4, rarity: 'Uncommon', breed: 'Siamese' },
  { name: 'Assassinate', class: 'Thief', type: 'Combat', effect: 'Execute a target below 30% HP. Instant kill if HP threshold is met.', mana: 8, rarity: 'Rare', breed: 'Siamese' },
  { name: 'Venom Barrage', class: 'Thief', type: 'Combat', effect: 'Throw poison darts at up to 3 targets. Deals damage over 3 turns.', mana: 5, rarity: 'Common', breed: 'Russian Blue' },
  { name: 'Pierce', class: 'Thief', type: 'Combat', effect: 'Precision stab ignoring 50% of target armor. Anti-tank melee attack.', mana: 4, rarity: 'Common', breed: 'Oriental Shorthair' },
  { name: 'Sweetspot', class: 'Thief', type: 'Passive', effect: 'Attacks from behind or flank deal 30% more damage. Positioning bonus.', mana: 'N/A', rarity: 'Common', breed: 'Siamese' },
  { name: 'Poison Tips', class: 'Thief', type: 'Passive', effect: 'All attacks apply a weak poison (3% HP per turn for 3 turns). DoT passive.', mana: 'N/A', rarity: 'Common', breed: 'Russian Blue' },
  { name: 'Stealthed', class: 'Thief', type: 'Passive', effect: 'Start each battle in stealth. Guaranteed first-strike advantage.', mana: 'N/A', rarity: 'Uncommon', breed: 'Siamese' },

  // Necromancer (8 skills)
  { name: 'Soul Link', class: 'Necromancer', type: 'Support', effect: 'Link to an ally — 40% of damage they take is redirected to you. Tank support hybrid.', mana: 6, rarity: 'Starter', breed: 'Sphynx' },
  { name: 'Reanimate', class: 'Necromancer', type: 'Special', effect: 'Resurrect a defeated enemy as a temporary ally for 3 turns. Minion summoning.', mana: 5, rarity: 'Starter', breed: 'Sphynx' },
  { name: 'Eternal Servitude', class: 'Necromancer', type: 'Special', effect: 'Resurrect ALL defeated units (friendly and enemy) as allies for 2 turns. Once per battle ultimate.', mana: 12, rarity: 'Rare', breed: 'Sphynx' },
  { name: 'Shriek', class: 'Necromancer', type: 'Combat', effect: 'Wail dealing AoE dark damage in a cone and applying Fear (enemies flee for 1 turn).', mana: 9, rarity: 'Uncommon', breed: 'Sphynx' },
  { name: 'Reaper Step', class: 'Necromancer', type: 'Special', effect: 'Teleport to a defeated enemy&apos;s location. Positional mobility tied to kills.', mana: 6, rarity: 'Uncommon', breed: 'Russian Blue' },
  { name: 'Soul Bond', class: 'Necromancer', type: 'Passive', effect: 'When a bonded ally dies, gain 30% of their max stats for the remainder of battle.', mana: 'N/A', rarity: 'Uncommon', breed: 'Maine Coon' },
  { name: 'Eternal Health', class: 'Necromancer', type: 'Passive', effect: 'Heal 2% max HP whenever any unit dies (friend or foe). Death-trigger sustain.', mana: 'N/A', rarity: 'Common', breed: 'Sphynx' },
  { name: 'Last Grasp', class: 'Necromancer', type: 'Passive', effect: 'When you would die, instead survive at 1 HP and become untargetable for 1 turn. Once per battle cheat death.', mana: 'N/A', rarity: 'Rare', breed: 'Sphynx' },

  // Druid (7 skills)
  { name: 'Encourage', class: 'Druid', type: 'Support', effect: 'Buff all allies — +15% damage and +10% speed for 2 turns. Team-wide buff.', mana: 8, rarity: 'Starter', breed: 'Norwegian Forest Cat' },
  { name: 'Form of the Squirrel', class: 'Druid', type: 'Special', effect: 'Transform into a squirrel gaining +5 speed and dodge 50% of attacks. Mobility form.', mana: 10, rarity: 'Uncommon', breed: 'Abyssinian' },
  { name: 'Squirrel Squad', class: 'Druid', type: 'Combat', effect: 'Summon 3 squirrel minions that attack random enemies for 2 turns. Army summoning.', mana: 15, rarity: 'Rare', breed: 'Norwegian Forest Cat' },
  { name: 'Death Metal', class: 'Druid', type: 'Combat', effect: 'Deal AoE nature damage to all enemies within 3 tiles. Musical destruction.', mana: 13, rarity: 'Rare', breed: 'Bengal' },
  { name: 'Love Song', class: 'Druid', type: 'Passive', effect: 'Allies within 2 tiles heal 3% HP per turn. Passive aura healing.', mana: 'N/A', rarity: 'Common', breed: 'Birman' },
  { name: 'Super Crow', class: 'Druid', type: 'Passive', effect: 'A crow familiar attacks the lowest-HP enemy each turn for 10% of your Int. Companion passive.', mana: 'N/A', rarity: 'Uncommon', breed: 'Persian' },
  { name: 'Empty Vessel', class: 'Druid', type: 'Passive', effect: 'When an ally dies, your next ability costs 0 mana. Death-trigger efficiency.', mana: 'N/A', rarity: 'Uncommon', breed: 'Sphynx' },

  // Tinkerer (7 skills)
  { name: 'Craft', class: 'Tinkerer', type: 'Support', effect: 'Create a random consumable item (bomb, potion, trap) for use this combat.', mana: 4, rarity: 'Starter', breed: 'British Shorthair' },
  { name: 'Research', class: 'Tinkerer', type: 'Support', effect: 'Analyze target enemy — reveal its stats, weaknesses, and upcoming abilities for 2 turns.', mana: 5, rarity: 'Starter', breed: 'Scottish Fold' },
  { name: 'Nurse Bot', class: 'Tinkerer', type: 'Support', effect: 'Deploy a healing turret that heals the lowest-HP ally for 8% HP each turn for 3 turns.', mana: 9, rarity: 'Uncommon', breed: 'Birman' },
  { name: 'Fast Hands', class: 'Tinkerer', type: 'Special', effect: 'Reset item cooldowns for all allies. Double-dip on powerful consumables.', mana: 8, rarity: 'Uncommon', breed: 'Abyssinian' },
  { name: 'Item Proxy', class: 'Tinkerer', type: 'Passive', effect: 'Items used by allies also affect you at 50% effectiveness. Shared item benefits.', mana: 'N/A', rarity: 'Common', breed: 'Maine Coon' },
  { name: 'Armor Specialist', class: 'Tinkerer', type: 'Passive', effect: 'Equipped armor provides 25% more defense. Gear efficiency passive.', mana: 'N/A', rarity: 'Common', breed: 'British Shorthair' },
  { name: 'Duct Tape', class: 'Tinkerer', type: 'Passive', effect: 'Consumable items have a 30% chance to not be consumed on use. Item conservation.', mana: 'N/A', rarity: 'Uncommon', breed: 'Scottish Fold' },

  // Butcher (8 skills)
  { name: 'Spin Cleave', class: 'Butcher', type: 'Combat', effect: 'Spin attack hitting all adjacent enemies — deals 50% more damage to bleeding targets.', mana: 7, rarity: 'Starter', breed: 'Maine Coon' },
  { name: 'Slice and Dice', class: 'Butcher', type: 'Combat', effect: 'Rapid slash combo: 4 quick hits on a single target, each with +5% crit chance.', mana: 9, rarity: 'Starter', breed: 'Bengal' },
  { name: 'Mutilate', class: 'Butcher', type: 'Combat', effect: 'Brutal attack that applies Bleed (8% HP per turn) for 3 turns.', mana: 8, rarity: 'Uncommon', breed: 'Russian Blue' },
  { name: 'Spoil', class: 'Butcher', type: 'Combat', effect: 'Corrupt an enemy&apos;s healing — their next heal instead deals damage equal to the heal amount.', mana: 6, rarity: 'Uncommon', breed: 'Sphynx' },
  { name: 'Chomp', class: 'Butcher', type: 'Combat', effect: 'Bite attack that heals you for 50% of damage dealt. Lifesteal melee attack.', mana: 6, rarity: 'Common', breed: 'Maine Coon' },
  { name: 'Spin to Win', class: 'Butcher', type: 'Passive', effect: 'Spin Cleave deals +10% damage for each enemy hit, resetting each turn. Cleave snowball.', mana: 'N/A', rarity: 'Common', breed: 'Bengal' },
  { name: 'Glutton', class: 'Butcher', type: 'Passive', effect: 'Gain +5% max HP permanently for each enemy you personally execute. Infinite scaling HP.', mana: 'N/A', rarity: 'Rare', breed: 'Maine Coon' },
  { name: 'Stompy', class: 'Butcher', type: 'Passive', effect: 'Moving through or onto an enemy tile deals minor damage. Movement as offense.', mana: 'N/A', rarity: 'Common', breed: 'Norwegian Forest Cat' },

  // Psychic (8 skills)
  { name: 'Increase Gravity', class: 'Psychic', type: 'Combat', effect: 'Increase gravity on target — reduces their speed by 50% and prevents flying/teleporting.', mana: 3, rarity: 'Starter', breed: 'Sphynx' },
  { name: 'Gravity Pull', class: 'Psychic', type: 'Combat', effect: 'Pull a target 3 tiles toward you. If they collide with terrain, deal bonus damage.', mana: 3, rarity: 'Starter', breed: 'Persian' },
  { name: 'Gravity Blast', class: 'Psychic', type: 'Combat', effect: 'Explosive gravity wave pushing all enemies back 4 tiles and dealing AoE damage. Once per battle.', mana: 6, rarity: 'Rare', breed: 'Sphynx' },
  { name: 'Chaos Teleport', class: 'Psychic', type: 'Special', effect: 'Randomly teleport anywhere on the battlefield. Gambit mobility — can be great or terrible.', mana: 1, rarity: 'Common', breed: 'Siamese' },
  { name: 'Suggestion', class: 'Psychic', type: 'Combat', effect: 'Mind control an enemy to attack its nearest ally for one action. Enemy manipulation.', mana: 6, rarity: 'Uncommon', breed: 'Ragdoll' },
  { name: 'Flourish', class: 'Psychic', type: 'Passive', effect: 'Deal 20% more damage to enemies affected by your control effects. Synergy damage amp.', mana: 'N/A', rarity: 'Common', breed: 'Ragdoll' },
  { name: 'Antigravity', class: 'Psychic', type: 'Passive', effect: 'Immune to gravity effects and knockback. Cannot be moved against your will.', mana: 'N/A', rarity: 'Common', breed: 'Sphynx' },
  { name: 'Enlightened', class: 'Psychic', type: 'Passive', effect: 'Regain 2 mana at the start of each turn. Passive mana regeneration.', mana: 'N/A', rarity: 'Uncommon', breed: 'Persian' },

  // Monk (7 skills)
  { name: 'Empty Mind', class: 'Monk', type: 'Support', effect: 'Clear all debuffs from self and gain 15% damage reduction for 2 turns. Self-cleanse.', mana: 0, rarity: 'Starter', breed: 'Siamese' },
  { name: 'Combo Throw', class: 'Monk', type: 'Combat', effect: 'Throw an enemy into another enemy. Both take damage and the second is knocked back.', mana: 6, rarity: 'Starter', breed: 'Bengal' },
  { name: 'Combo Pull', class: 'Monk', type: 'Combat', effect: 'Pull a target toward you and strike them for bonus damage based on distance pulled.', mana: 6, rarity: 'Uncommon', breed: 'Abyssinian' },
  { name: 'Way of the Hare', class: 'Monk', type: 'Special', effect: 'Gain +4 speed, double attack, and dodge 50% for 2 turns. High-mobility combat stance.', mana: 9, rarity: 'Rare', breed: 'Siamese' },
  { name: 'Running Jab', class: 'Monk', type: 'Passive', effect: 'Basic attacks deal +10% damage for each tile you moved this turn. Movement-scaling damage.', mana: 'N/A', rarity: 'Common', breed: 'Abyssinian' },
  { name: 'Counter Barrage', class: 'Monk', type: 'Passive', effect: 'When you dodge an attack, immediately counter with a basic attack. Dodge-to-offense conversion.', mana: 'N/A', rarity: 'Uncommon', breed: 'Siamese' },
  { name: 'Flow State', class: 'Monk', type: 'Passive', effect: 'Each consecutive turn without taking damage grants +5% damage (stacks up to 25%). Perfect play reward.', mana: 'N/A', rarity: 'Uncommon', breed: 'Bengal' },
];

const CLASS_SUMMARIES = [
  {
    class: 'Collarless',
    icon: '🐱',
    totalSkills: 9,
    activeSkills: 6,
    passiveSkills: 3,
    role: 'All-Rounder / Starter',
    description: 'The default class for all cats before equipping a collar. Collarless cats can use versatile general-purpose skills. Upgrade to a specialized class by equipping class collars found in dungeons. Collarless skills remain available as cross-class options.',
    bestBreeds: 'Any breed — use Collarless skills while earning the collar for your desired class. Bengal excels due to balanced stats for multi-role play.',
  },
  {
    class: 'Tank',
    icon: '🛡️',
    totalSkills: 6,
    activeSkills: 3,
    passiveSkills: 3,
    role: 'Frontline Protector',
    description: 'Tank cats absorb damage and control enemy aggro. Their kit centers on damage reduction (Steelskin), threat management (Toad Style), and protecting squishier allies (Bodyguard). Essential for any team composition facing high-damage enemies.',
    bestBreeds: 'Maine Coon (highest base HP), British Shorthair (budget option), Norwegian Forest Cat (elemental resistance).',
  },
  {
    class: 'Fighter',
    icon: '⚔️',
    totalSkills: 9,
    activeSkills: 6,
    passiveSkills: 3,
    role: 'Melee DPS / Brawler',
    description: 'Fighter cats excel at sustained melee damage output. Fury Swipes delivers rapid single-target damage, Spin provides AoE clear, and Berserk enables high-risk high-reward DPS windows. Fighters thrive when supported by healers and tanks.',
    bestBreeds: 'Bengal (versatile stats), Siamese (speed synergy), Abyssinian (crit synergy with Fervor/Frenzy).',
  },
  {
    class: 'Mage',
    icon: '🔮',
    totalSkills: 7,
    activeSkills: 4,
    passiveSkills: 3,
    role: 'Ranged Caster / AoE Nuker',
    description: 'Mage cats wield devastating area-of-effect spells. Meteor Storm and Mega Blast clear entire enemy formations. High mana costs demand mana management — pair with Cleric for Prayer support or Psychic for passive mana regen. Sphynx with the Two passive can double-cast spells.',
    bestBreeds: 'Persian (best magic scaling), Sphynx (highest damage ceiling), Norwegian Forest Cat (Ice Aspect synergy).',
  },
  {
    class: 'Hunter',
    icon: '🏹',
    totalSkills: 9,
    activeSkills: 6,
    passiveSkills: 3,
    role: 'Ranged DPS / Sniper',
    description: 'Hunter cats dominate from a distance with precision ranged attacks. Snipe provides long-range execution, Marked amplifies team damage against priority targets, and Arrow Flurry handles groups. Position Hunters behind tank protection for maximum effectiveness.',
    bestBreeds: 'Siamese (speed for repositioning), Abyssinian (crit synergy), Russian Blue (stealth + Snipe combo), Oriental Shorthair (hit-and-run style).',
  },
  {
    class: 'Cleric',
    icon: '⛪',
    totalSkills: 9,
    activeSkills: 6,
    passiveSkills: 3,
    role: 'Healer / Support',
    description: 'Cleric cats are the backbone of any sustainable team. Healing Word and Revive keep the team alive through extended fights. Prayer recharges mana-hungry allies (Mages and Druids benefit most). Circle of Protection creates defensive zones for boss fights.',
    bestBreeds: 'Birman (best healer scaling), Persian (ranged healer combo).',
  },
  {
    class: 'Thief',
    icon: '🗡️',
    totalSkills: 9,
    activeSkills: 6,
    passiveSkills: 3,
    role: 'Stealth Assassin / Single-Target Burst',
    description: 'Thief cats specialize in eliminating high-value targets. The Shadow → Stalk → Boost Backstab combo deals devastating burst damage. Assassinate provides guaranteed executes against low-HP targets. Poison Tips adds consistent DoT pressure.',
    bestBreeds: 'Siamese (dodge tank + assassin hybrid), Russian Blue (stealth specialist), Oriental Shorthair (mobility + flanking).',
  },
  {
    class: 'Necromancer',
    icon: '💀',
    totalSkills: 8,
    activeSkills: 5,
    passiveSkills: 3,
    role: 'Minion Master / Death Synergy',
    description: 'Necromancer cats turn death into a resource. Reanimate creates temporary allies from fallen enemies; Eternal Servitude resurrects everything on the battlefield. Soul Bond and Eternal Health provide scaling based on deaths. Last Grasp is one of the best cheat-death passives.',
    bestBreeds: 'Sphynx (best Necromancer scaling), Maine Coon (Soul Bond tank synergy), Russian Blue (Reaper Step flanking).',
  },
  {
    class: 'Druid',
    icon: '🌿',
    totalSkills: 7,
    activeSkills: 4,
    passiveSkills: 3,
    role: 'Nature Caster / Team Buffer',
    description: 'Druid cats blend nature magic with team support. Squirrel Squad provides disposable minions. Love Song creates a passive healing aura. Form of the Squirrel grants incredible mobility and dodge. Death Metal delivers strong AoE burst damage.',
    bestBreeds: 'Norwegian Forest Cat (natural synergy), Persian (Super Crow damage scaling), Bengal (Death Metal hybrid DPS).',
  },
  {
    class: 'Tinkerer',
    icon: '🔧',
    totalSkills: 7,
    activeSkills: 4,
    passiveSkills: 3,
    role: 'Item Specialist / Utility Support',
    description: 'Tinkerer cats leverage items and gadgets to control the battlefield. Craft creates consumables on demand. Research reveals enemy information for strategic planning. Nurse Bot provides automated healing. Item Proxy makes items affect the entire team.',
    bestBreeds: 'British Shorthair (Armor Specialist synergy), Scottish Fold (Duct Tape conservation), Birman (Nurse Bot + healing synergy).',
  },
  {
    class: 'Butcher',
    icon: '🔪',
    totalSkills: 8,
    activeSkills: 5,
    passiveSkills: 3,
    role: 'Melee Bruiser / Bleed Specialist',
    description: 'Butcher cats are relentless melee fighters focused on bleed damage and sustain. Mutilate applies powerful bleed effects. Chomp provides lifesteal. Spin Cleave punishes grouped enemies. Glutton provides infinite HP scaling — the only passive that scales without limit.',
    bestBreeds: 'Maine Coon (Glutton scaling + high HP), Russian Blue (bleed synergy), Bengal (Spin to Win AoE).',
  },
  {
    class: 'Psychic',
    icon: '🧠',
    totalSkills: 8,
    activeSkills: 5,
    passiveSkills: 3,
    role: 'Controller / Crowd Control Specialist',
    description: 'Psychic cats manipulate the battlefield through gravity and mind control. Increase Gravity + Gravity Pull control enemy positioning. Suggestion forces enemies to attack each other. Gravity Blast provides emergency crowd control. Chaos Teleport is the most fun (and risky) mobility tool.',
    bestBreeds: 'Sphynx (best Psychic scaling), Persian (Enlightened mana regen), Ragdoll (Suggestion + Flourish synergy).',
  },
  {
    class: 'Monk',
    icon: '🥋',
    totalSkills: 7,
    activeSkills: 4,
    passiveSkills: 3,
    role: 'Mobile Striker / Dodge Tank',
    description: 'Monk cats combine high mobility with dodge-based defense. Combo Throw and Pull control enemy positioning. Way of the Hare enables devastating offensive turns. Running Jab rewards movement-based play. Counter Barrage converts successful dodges into damage.',
    bestBreeds: 'Siamese (natural dodge + speed), Abyssinian (Running Jab + crit synergy), Bengal (Flow State + versatility).',
  },
  {
    class: 'Jester',
    icon: '🃏',
    totalSkills: 'Variable',
    activeSkills: 'Variable',
    passiveSkills: 'Variable',
    role: 'Wildcard / Skill Thief',
    description: 'Jester cats have no unique skills of their own. Instead, each level-up allows the Jester to inherit any skill from any other class in the game. This makes Jester theoretically the most powerful class — with enough rerolls, you can assemble the perfect custom skill set. The trade-off is heavy RNG dependency and significant time investment. Jester builds that combine Tank durability, Mage AoE, and Cleric healing are the strongest in the game but require dozens of rerolls.',
    bestBreeds: 'Any breed with balanced stats (Bengal recommended). The Jester\'s power comes from skill selection, not breed stats.',
  },
];

const TOP_SYNERGIES = [
  { combo: 'Stealth (Thief) → Stalk → Assassinate', effect: 'The Thief\'s signature combo. Shadow into stealth, Stalk marks the target, Assassinate executes at 2.5x damage ignoring armor. Deletes priority targets in one turn.' },
  { combo: 'Two (Mage) + Meteor Storm', effect: 'Cast Meteor Storm twice per turn at 150% mana cost. Clears entire rooms. Requires significant mana support (Prayer from Cleric or Enlightened from Psychic).' },
  { combo: 'Bodyguard (Tank) + Soul Link (Necromancer)', effect: 'Bodyguard protects one ally; Soul Link protects another. Together they make three units nearly unkillable. Add Toad Style for complete aggro control.' },
  { combo: 'Berserk (Fighter) + Healing Word (Cleric)', effect: 'Berserk deals 50% more damage at the cost of taking 25% more. Healing Word mitigates the downside, creating sustained high-DPS without the risk.' },
  { combo: 'Toad Style (Tank) + Circle of Protection (Cleric)', effect: 'Taunt all nearby enemies while standing in a 25% damage reduction zone. Creates an immovable frontline that forces enemies to attack the tank at reduced efficiency.' },
  { combo: 'Suggestion (Psychic) + Flourish (Psychic)', effect: 'Suggestion mind-controls an enemy; Flourish boosts damage against controlled targets. Mind-controlled enemies deal extra damage to their former allies.' },
  { combo: 'Glutton (Butcher) + Scabs (Tank) on Maine Coon', effect: 'Glutton gives permanent +5% max HP per kill. Scabs regenerates 5% HP per turn. Together they create a self-sustaining tank that grows infinitely stronger.' },
  { combo: 'Snipe (Hunter) + Marked (Hunter) + Bullseye (Hunter)', effect: 'Mark a target, then Snipe for guaranteed critical hit from any range. Bullseye makes every Marked attack critical. Repeating this cycle deletes bosses.' },
  { combo: 'Enlightened (Psychic) + any Mage', effect: 'Passive 2 mana regen per turn fuels Mage spells that would otherwise drain mana too quickly. Essential for Meteor Storm and Mega Blast spam.' },
  { combo: 'Last Grasp (Necromancer) + Revive (Cleric)', effect: 'Last Grasp cheats death once. Revive brings back a dead ally. Together they provide two layers of death prevention — survive lethal blows and recover fallen teammates.' },
  { combo: 'Way of the Hare (Monk) + Berserk (Fighter)', effect: 'Double attack + 50% damage bonus from Berserk = 300% damage output for 2 turns. Combine on a Bengal for devastating hybrid burst turns.' },
  { combo: 'Fury Swipes (Fighter) + Venom Barrage (Thief)', effect: 'Fury Swipes hits 3 times; each hit applies Poison Tips. Venom Barrage adds 3 more poison stacks. Total of 6 poison applications in 2 turns for sustained DoT pressure.' },
];

export default function SkillsGuidePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="p-4 lg:p-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Header */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">
              Mewgenics Skills Guide — All Cat Abilities and Best Combos
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
              Mewgenics features 14 distinct cat classes with over 100 abilities spanning combat, support, defensive, and special categories. Each class brings a unique playstyle — from the Tank&apos;s damage absorption to the Mage&apos;s room-clearing AoE spells to the Thief&apos;s stealth assassination combos. This guide catalogs every skill across all classes, explains skill inheritance through the collar equipment system, identifies the best skill synergies and combinations, and recommends optimal cat breeds for each class. Whether you are building your first team or optimizing for the Jester&apos;s ultimate custom build, this comprehensive reference has you covered.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Last updated: July 2026. Data compiled from in-game testing and community collaboration. Skill numbers reflect Mewgenics patch 2.1.3.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Total Classes', count: 14, color: 'text-yellow-400' },
              { label: 'Total Skills', count: '109+', color: 'text-blue-400' },
              { label: 'Active Skills', count: '66+', color: 'text-green-400' },
              { label: 'Passive Skills', count: '42+', color: 'text-purple-400' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Type Legend */}
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> Combat (Damage)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-cyan-500 inline-block" /> Defensive</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> Support (Heal/Buff)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-purple-500 inline-block" /> Special (Utility/Summon)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" /> Passive</span>
          </div>

          {/* All Skills Master Table */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Complete Skill Database — All Classes</h2>
            <p className="text-gray-400 text-sm mb-3">
              Every skill in Mewgenics, organized by class. Click or scroll to find skills for your team composition. Jester (last entry) can inherit any skill from any class.
            </p>
            <div className="overflow-x-auto bg-gray-900 border border-gray-800 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-800/50">
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Skill</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Class</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Type</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Effect</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 w-14">Mana</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Rarity</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Best Breed</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_SKILLS.map((skill, i) => (
                    <tr key={i} className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${i % 2 === 0 ? 'bg-gray-900/30' : ''}`}>
                      <td className="py-2.5 px-3 text-white font-medium text-xs">{skill.name}</td>
                      <td className="py-2.5 px-3">
                        <span className="text-xs font-medium text-yellow-400 bg-yellow-500/10 px-1.5 py-0.5 rounded">{skill.class}</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                          skill.type === 'Combat' ? 'bg-red-500/20 text-red-400' :
                          skill.type === 'Defensive' ? 'bg-cyan-500/20 text-cyan-400' :
                          skill.type === 'Support' ? 'bg-green-500/20 text-green-400' :
                          skill.type === 'Special' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>{skill.type}</span>
                      </td>
                      <td className="py-2.5 px-3 text-gray-300 text-xs leading-relaxed max-w-[280px]">{skill.effect}</td>
                      <td className="py-2.5 px-3 text-gray-400 font-mono text-xs">{skill.mana}</td>
                      <td className="py-2.5 px-3">
                        <span className={`text-xs font-medium ${
                          skill.rarity === 'Starter' ? 'text-gray-400' :
                          skill.rarity === 'Common' ? 'text-green-400' :
                          skill.rarity === 'Uncommon' ? 'text-blue-400' :
                          'text-purple-400'
                        }`}>{skill.rarity}</span>
                      </td>
                      <td className="py-2.5 px-3 text-gray-400 text-xs">{skill.breed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Class Summaries */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Class Overviews — Roles, Playstyles &amp; Best Breeds</h2>
            <div className="space-y-4">
              {CLASS_SUMMARIES.map((cls, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{cls.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{cls.class}</h3>
                    <span className="text-xs text-gray-400 ml-auto">
                      {cls.activeSkills} Active + {cls.passiveSkills} Passive = {cls.totalSkills} Total
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">{cls.description}</p>
                  <p className="text-gray-400 text-xs">
                    <span className="text-yellow-400 font-medium">Best Breeds:</span> {cls.bestBreeds}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Inheritance & Unlock */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">How Skill Inheritance Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h3 className="text-yellow-400 font-semibold text-sm mb-2">Class Collar System</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  Cats start as Collarless with access to 9 basic skills. To unlock a specialized class, find or craft a Class Collar. Collars are found as dungeon loot, purchased from vendors, or crafted at the Workshop. Each collar permanently assigns the cat to its class, granting access to that class&apos;s active and passive skills.
                </p>
                <p className="text-gray-400 text-xs">
                  Collarless skills remain available even after equipping a class collar, so your cat always retains Copycat, Second Wave, and other versatile abilities.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h3 className="text-yellow-400 font-semibold text-sm mb-2">Jester — The Ultimate Skill Thief</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  The Jester class has NO unique skills. Instead, every level-up lets the Jester pick one skill from ANY class in the game. This makes Jester the most powerful class in theory — you can combine Tank durability, Mage AoE, and Cleric healing into a single cat. The trade-off is heavy RNG: you need many rerolls to find the perfect skill combination.
                </p>
                <p className="text-gray-400 text-xs">
                  Best Jester Build: Steelskin (Tank) + Meteor Storm (Mage) + Healing Word (Cleric) + Second Wave (Collarless) + Frenzy (Fighter) + Enlightened (Psychic).
                </p>
              </div>
            </div>
          </div>

          {/* Best Synergies Table */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Top 12 Skill Synergies &amp; Combos</h2>
            <p className="text-gray-400 text-sm mb-3">
              These skill combinations define the current Mewgenics meta. Each combo multiplies effectiveness beyond what individual skills provide.
            </p>
            <div className="overflow-x-auto bg-gray-900 border border-gray-800 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-800/50">
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Skill Combo</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Synergy Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_SYNERGIES.map((syn, i) => (
                    <tr key={i} className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${i % 2 === 0 ? 'bg-gray-900/30' : ''}`}>
                      <td className="py-3 px-4 text-white font-medium text-xs">{syn.combo}</td>
                      <td className="py-3 px-4 text-gray-300 text-xs leading-relaxed">{syn.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Skill Leveling */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Skill Leveling &amp; Progression</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>- <span className="text-yellow-400 font-medium">Skills level up with cat level.</span> Each skill has 5 ranks, unlocked at levels 1, 5, 10, 15, and 20. Higher ranks increase damage, reduce mana costs, or add extra effects.</li>
                <li>- <span className="text-yellow-400 font-medium">Rare skills require specific unlock conditions.</span> Skills marked as Rare (Second Wave, Mega Blast, Revive, Eternal Servitude, etc.) often require completing specific dungeon floors, achieving certain kill counts, or finding rare scrolls.</li>
                <li>- <span className="text-yellow-400 font-medium">Class Path and Class Soul (Act 2).</span> After completing Act 2, each class unlocks an advanced Class Path with two branches (offensive vs. defensive focus) and a Class Soul passive that provides a unique game-changing effect.</li>
                <li>- <span className="text-yellow-400 font-medium">Multiclassing.</span> Advanced players can assign secondary collars at high levels, granting access to skills from two classes. This requires significant investment but enables powerful hybrid builds.</li>
                <li>- <span className="text-yellow-400 font-medium">Focus on 3-4 core skills per cat.</span> Skill points are limited. Prioritize maxing your cat&apos;s 3-4 most impactful skills rather than spreading points thinly across everything.</li>
              </ul>
            </div>
          </div>

          {/* Rarity Guide */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Skill Rarity Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { rarity: 'Starter', color: 'text-gray-400', desc: 'Available immediately upon equipping collar. No unlock required.', examples: 'Steelskin, Hyper Beam, Shadow' },
                { rarity: 'Common', color: 'text-green-400', desc: 'Unlocks at cat level 3-5. Basic upgrade from starters.', examples: 'Pierce, Awaken, Love Song' },
                { rarity: 'Uncommon', color: 'text-blue-400', desc: 'Unlocks at cat level 8-12 or via specific dungeon completions.', examples: 'Bodyguard, Snipe, Nurse Bot' },
                { rarity: 'Rare', color: 'text-purple-400', desc: 'Unlocks via difficult challenges, boss kills, or rare item drops.', examples: 'Meteor Storm, Revive, Eternal Servitude' },
              ].map((r) => (
                <div key={r.rarity} className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                  <div className={`font-bold text-sm ${r.color}`}>{r.rarity}</div>
                  <div className="text-gray-400 text-xs mt-1">{r.desc}</div>
                  <div className="text-gray-500 text-xs mt-2 italic">e.g. {r.examples}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h2 className="text-lg font-bold text-white mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-yellow-400 font-semibold text-sm mb-1">Q: Which class should I start with?</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Start with Tank (Maine Coon) for survivability or Fighter (Bengal) for balanced offense. Tank is more forgiving for new players — Bodyguard and Steelskin keep your team alive through early dungeon floors while you learn enemy patterns. Once comfortable, add a Cleric (Birman) for healing and a Mage (Persian) for AoE damage.
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold text-sm mb-1">Q: Is Jester worth the RNG investment?</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  For campaign completion, no — a well-built standard team is faster and more consistent. For endless dungeon and PvP leaderboards, Jester is mandatory. A perfectly rolled Jester with Steelskin, Meteor Storm, Healing Word, and Second Wave outclasses any standard class cat by a wide margin. Expect 20-50+ rerolls for an optimal build.
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold text-sm mb-1">Q: Can I change a cat&apos;s class after equipping a collar?</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  No — collars are permanent assignments. Choose carefully. However, cats retain their Collarless skills, so they are never completely locked out of versatility. Plan your team composition before equipping collars. Breed cats specifically for the classes you intend to assign.
                </p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h2 className="text-lg font-bold text-white mb-3">Related Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cat-tier-list" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Mewgenics Cat Tier List — Best Breeds &amp; Genetic Builds Ranked</Link></li>
              <li><Link href="/beginner-guide" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Mewgenics Beginner Guide — Breeding, Combat &amp; First Team</Link></li>
              <li><Link href="/breeding-guide" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Breeding Guide — How to Breed Perfect Cats with Optimal Traits</Link></li>
              <li><Link href="/team-building" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Team Building Guide — Synergy &amp; Composition Strategies</Link></li>
              <li><Link href="/combat-strategy" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Combat Strategy Guide — Advanced Battle Tactics &amp; Positioning</Link></li>
              <li><Link href="/trait-database" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Complete Trait Database — All 100+ Genetic Traits</Link></li>
              <li><Link href="/breeding-calculator" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Breeding Calculator — Plan Your Cat Genetics</Link></li>
            </ul>
          </div>

          <p className="text-gray-600 text-xs text-center mt-8">
            Mewgenics Skills Guide. 14 classes, 109+ skills documented. Data from in-game testing and community contributions. Last updated: July 2026.
          </p>

        </div>
      </div>
    </div>
  );
}
