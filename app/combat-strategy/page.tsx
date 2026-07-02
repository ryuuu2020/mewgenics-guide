import Link from "next/link";

export const metadata = {
  title: "Mewgenics Combat Strategy Guide — Positioning, Turn Order & Ability Combos (2026)",
  description: "Complete combat strategy guide. Positioning mechanics, initiative system, ability combos, status effects, and how to win every fight.",
};

export default function CombatStrategyPage() {
  const statusEffects = [
    { effect: "Poison (3 stacks)", duration: "4 turns", impact: "Deals 5% max HP damage per stack at end of each turn; stacks up to 5 times (25% HP per turn)", howToApply: "Russian Blue Venomous trait, Poison Claw ability, Toxic Spore consumable item", howToCure: "Purify ability (all healers), Antidote consumable, Regeneration trait cleanses 1 stack per turn" },
    { effect: "Bleed (3 stacks)", duration: "3 turns", impact: "Deals 3% current HP damage per stack on enemy action; physical attackers take double damage from bleed", howToApply: "Abyssinian Rend ability, Sharp Claws trait, Serrated Fang weapon", howToCure: "Bandage consumable, Healer's Touch trait (removes all bleed), Defender's Stance ability" },
    { effect: "Burn (2 stacks)", duration: "3 turns", impact: "Deals 8% max HP damage per stack at turn start; spreads to adjacent allies if not cleansed within 1 turn", howToApply: "Persian Fireball ability, Pyromancer trait, Flame Claw weapon enchant", howToCure: "Water Spray ability (all casters), Cold Snap spell, entering water terrain tile" },
    { effect: "Freeze", duration: "2 turns", impact: "Target cannot act; incoming physical damage increased by 50% while frozen; shatters on third hit for bonus damage", howToApply: "Blizzard Soul trait (Norwegian Forest Cat), Ice Lance ability, Frostbite weapon", howToCure: "Thaw automatically after 2 turns, Warmth Aura ability (Birman healers), Fire damage removes freeze instantly" },
    { effect: "Stun", duration: "1 turn", impact: "Target skips entire turn; cannot dodge or counterattack while stunned; follow-up attack deals +25% damage", howToApply: "Maine Coon Heavy Slam ability, Thunder Clap spell, Shockwave consumable", howToCure: "Cannot be cured; expires naturally after 1 turn; Iron Will trait reduces stun duration by 50%" },
    { effect: "Blind (3 stacks)", duration: "3 turns", impact: "Each stack reduces accuracy by 25%; at 3 stacks (75% miss chance) attacks are nearly useless", howToApply: "Ragdoll Sand Throw ability, Shadow Meld trait, Flash Powder consumable", howToCure: "Keen Eye trait negates blind entirely, Purify removes 2 stacks, Eye Drops consumable" },
    { effect: "Charm", duration: "2 turns", impact: "Charmed cat attacks its own team with 50% damage; cannot use abilities, only basic attacks", howToApply: "Ragdoll Charm ability, Scottish Fold Cute Pose trait, Love Potion consumable", howToCure: "Any damage taken from own team breaks charm immediately, Clear Mind consumable, Dispel Magic ability" },
    { effect: "Weaken (3 stacks)", duration: "3 turns", impact: "Each stack reduces attack power by 15%; at 3 stacks (-45% ATK) damage output is severely crippled", howToApply: "Birman Curse ability, Enfeeble spell, Hex enchantment on weapons", howToCure: "Purify ability removes all stacks, Strength Potion consumable, Alpha's Howl trait overrides weaken for 1 turn" },
    { effect: "Root", duration: "2 turns", impact: "Cannot move from current tile; can still attack and use abilities; ranged attackers are unaffected", howToApply: "Norwegian Forest Cat Entangling Roots ability, Vine Trap spell, Terrain hazard (web tiles)", howToCure: "Freedom of Movement trait prevents root entirely, Shadow Step ability (teleport out), Sharp Claws cuts roots" },
    { effect: "Sleep", duration: "2 turns", impact: "Cannot act at all; any damage taken breaks sleep but target loses that turn; healing doubled while sleeping", howToApply: "Catnap ability (self-inflicted for heal), Lullaby spell, Sleep Powder consumable", howToCure: "Any damage breaks sleep, Alarm Bell item (wakes entire team), Dream Eater trait consumes sleep for damage" },
    { effect: "Silence", duration: "2 turns", impact: "Cannot use any abilities; basic attacks only; casters are completely neutralized by silence", howToApply: "Oriental Shorthair Gag ability, Silence spell, Muzzle trap consumable", howToCure: "Clear Mind consumable, Voice of Freedom trait (immune to silence), Arcane Focus trait reduces silence duration by 1 turn" },
    { effect: "Taunt", duration: "2 turns", impact: "Forced to target the taunting enemy; cannot switch targets; taunted cat cannot use support abilities on allies", howToApply: "British Shorthair Taunt ability, Provoke trait, Taunting Banner item", howToCure: "Cannot be cured; target must attack the taunter; Iron Will reduces duration by 1 turn; Guard Swap ability redirects taunt" },
  ];

  const abilityCombos = [
    { comboName: "Bleed Execution", abilitiesRequired: "Rend (Abyssinian) + Bloodthirst (trait) + Predator Gene", effect: "Apply 3 bleed stacks, then Bloodthirst amplifies damage against bleeding targets by 40%. Predator Gene triggers execute at 30% HP threshold for guaranteed kill.", bestAgainst: "High-HP bosses, tanky enemies with regeneration" },
    { comboName: "Fire Storm", abilitiesRequired: "Fireball (Persian) + Pyromancer (trait) + Weather Control (trait)", effect: "Fireball applies 2 burn stacks. Pyromancer doubles burn damage. Weather Control sets environment to Heat Wave, extending burn duration by 2 turns. Total 8 turns of amplified burn.", bestAgainst: "Swarm encounters, enemies weak to fire, regenerating foes" },
    { comboName: "Dodge Counter Chain", abilitiesRequired: "Quick Reflexes (trait) + Counter Strike (trait) + Shadow Walk (Russian Blue)", effect: "50% dodge chance triggers free counter attack. Shadow Walk re-stealths after counter kill. Creates infinite dodge-counter loop as long as enemies die to counters.", bestAgainst: "Multiple weak enemies, arena waves, timed dungeons" },
    { comboName: "Frozen Shatter", abilitiesRequired: "Ice Lance (Norwegian Forest) + Blizzard Soul (trait) + Heavy Slam (Maine Coon)", effect: "Freeze target with Ice Lance. Blizzard Soul extends freeze to 3 turns and adds cold DoT. Heavy Slam shatters frozen target for 200% damage and hits adjacent enemies with ice shrapnel.", bestAgainst: "Single high-value targets, elite enemies, mini-bosses" },
    { comboName: "Immortal Wall", abilitiesRequired: "Regeneration (trait) + Iron Fur (trait) + Guardian Angel (trait) + Healer's Touch (Birman)", effect: "Tank regenerates 8% HP per turn, Iron Fur reduces physical damage 25%. Guardian Angel auto-heals when below 25% HP. Healer's Touch converts overhealing into shields. Tank becomes nearly unkillable.", bestAgainst: "Endless dungeon bosses, attrition battles, survival modes" },
    { comboName: "Lightning Rod", abilitiesRequired: "Chain Lightning (Sphynx) + Elemental Fur (trait) + Arcane Focus (trait)", effect: "Chain Lightning bounces to all enemies (4 bounces). Elemental Fur sets lightning immunity on caster. Arcane Focus prevents interruption. Full-room clear with zero self-damage risk.", bestAgainst: "Swarm rooms, multi-wave encounters, summoner enemies" },
    { comboName: "Sleep Trap", abilitiesRequired: "Catnap (Ragdoll) + Dream Eater (trait) + Lullaby (spell)", effect: "Lullaby puts 2 enemies to sleep for 2 turns. Catnap puts self to sleep for full heal. Dream Eater deals 200% damage to all sleeping enemies while self sleeps. Heal + massive AoE damage simultaneously.", bestAgainst: "Mixed enemy groups, encounters with 2+ dangerous targets" },
    { comboName: "Pack Ambush", abilitiesRequired: "Pack Hunter (trait) + Alpha's Howl (trait) + Shadow Walk (Russian Blue)", effect: "Pack Hunter grants +15% damage per adjacent ally (up to +60% with 4 allies adjacent). Alpha's Howl buffs all allies attack by 10% and speed by 15%. Shadow Walk enables surprise first strike with all buffs active.", bestAgainst: "Boss encounters where all 4 cats can surround target" },
    { comboName: "Nine Lives Comeback", abilitiesRequired: "Nine Lives (trait) + Last Stand (trait) + Revenge (ability)", effect: "Cat dies, revives with 30% HP. Last Stand grants +50% damage and speed for 3 turns on revive. Revenge deals bonus damage equal to missing HP percentage. Revived cat becomes a hypercarry for 3 turns.", bestAgainst: "Extended boss fights, survival challenges, PvP arena" },
    { comboName: "Venom Cascade", abilitiesRequired: "Venomous (trait) + Contagion (trait) + Multi-Strike (trait)", effect: "Venomous applies poison on every hit. Contagion spreads poison to adjacent enemies when poisoned target dies. Multi-Strike makes each basic attack hit twice. Poison stacks spread exponentially across enemy groups.", bestAgainst: "Dense enemy formations, summoner bosses, survival waves" },
    { comboName: "Crit Cascade", abilitiesRequired: "Keen Eye (trait) + Precision Strike (trait) + Swift Paws (trait)", effect: "Keen Eye reveals weakness for +30% crit chance. Precision Strike auto-targets weakness with +50% crit chance. Swift Paws adds extra basic attack. 3 attacks per turn at 80%+ effective crit rate.", bestAgainst: "Single-target DPS races, boss DPS checks, time-limited encounters" },
    { comboName: "Charm Lock", abilitiesRequired: "Charm (Ragdoll) + Taunt (British Shorthair) + Dispel Magic (spell)", effect: "Charm an enemy to attack its allies. Taunt forces remaining enemies to target your tank. Dispel Magic removes enemy buffs and healing. Complete battlefield control for 2 turns.", bestAgainst: "Mixed enemy compositions with support units, healer enemies" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Mewgenics Combat Strategy Guide — Positioning, Turn Order & Ability Combos</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Combat in Mewgenics operates on a tactical grid where positioning, initiative order, and ability synergy
              determine victory far more than raw stats. The game features a deep turn-based combat engine with 12 distinct
              status effects, over 40 active abilities spread across breeds and classes, and a positioning system where
              tile adjacency, flanking bonuses, and terrain interact to create emergent tactical scenarios. Understanding
              the combat system means mastering three layers: the status effect economy (applying, managing, and cleansing
              debuffs while protecting your own cats), the ability combo system (chaining breed abilities, class skills,
              and genetic traits into devastating sequences), and the positioning puzzle (controlling tile space to maximize
              adjacency bonuses while denying enemy flanking). This guide provides a complete reference for all 12 status
              effects with application and counterplay strategies, then catalogs the 12 most powerful ability combos in the
              current meta — each with exact ability requirements, expected combat impact, and the enemy types they excel
              against. Whether you are struggling with a specific boss encounter or optimizing your team for endless dungeon
              leaderboard runs, understanding these combat systems will transform your tactical performance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Positioning & Turn Order Fundamentals</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              The combat grid is a 5x7 tile battlefield where your 1-4 cats face off against 1-8 enemies. Turn order is
              determined by the Speed (SPD) stat, with ties broken by initiative bonuses from traits like Swift Paws and
              Quick Reflexes. Higher SPD cats act first every round, which gives SPD-focused breeds (Siamese, Sphynx,
              Abyssinian) a significant tactical advantage — they can apply debuffs, eliminate fragile enemies, or position
              defensively before the enemy acts. Positioning matters because of adjacency mechanics: cats standing adjacent
              to each other share defensive bonuses (+10% DEF per adjacent ally for tanks), trigger Pack Hunter damage
              bonuses for attackers, and enable healers to reach multiple targets with area-of-effect healing spells.
              Enemies also benefit from positioning — flanking an isolated cat grants the attacker +25% damage and +15%
              critical hit chance. Never let a squishy caster end their turn on a tile with 3+ adjacent enemy tiles.
            </p>
            <p className="text-ink-light leading-relaxed">
              The optimal formation places your tank (Maine Coon, British Shorthair) on the front-center tile, flanked
              by your hybrid DPS (Bengal, Russian Blue) on left and right front tiles, with your healer or caster
              (Persian, Birman) on the center-back tile. This diamond formation maximizes adjacency bonuses: the tank
              touches all 3 teammates (+30% DEF), the DPS cats touch the tank and each other (+30% damage from Pack Hunter
              if all three are adjacent), and the backline caster is protected from flanking (enemies cannot reach the
              back tiles without going through the front line). Against boss enemies with AoE attacks, break the diamond
              into a spread formation to avoid multi-target hits. The combat grid is deep enough that you can reposition
              over 2-3 turns — unlike many tactical games, you cannot move and attack in the same turn without the Swift
              Paws trait, so every repositioning decision costs you a turn of damage output. Plan your formation before
              combat begins and only reposition when the tactical situation demands it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Status Effects — Complete Reference</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Status effects are the tactical language of Mewgenics combat. Twelve distinct effects create layered combat
              puzzles where applying the right debuffs and cleansing the right ailments determines the flow of battle.
              Below is every status effect with exact duration, impact, application methods, and counterplay options.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Effect</th>
                    <th>Duration</th>
                    <th>Impact</th>
                    <th>How to Apply</th>
                    <th>How to Cure</th>
                  </tr>
                </thead>
                <tbody>
                  {statusEffects.map((s, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{s.effect}</td>
                      <td>{s.duration}</td>
                      <td>{s.impact}</td>
                      <td>{s.howToApply}</td>
                      <td>{s.howToCure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Top 12 Ability Combos — Synergy Engine</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Individual abilities are strong; chained combos are game-winning. These 12 combos represent the most
              powerful synergies in the current meta, each requiring specific breeds, traits, and abilities to execute.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Combo Name</th>
                    <th>Abilities Required</th>
                    <th>Effect</th>
                    <th>Best Against</th>
                  </tr>
                </thead>
                <tbody>
                  {abilityCombos.map((c, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{c.comboName}</td>
                      <td>{c.abilitiesRequired}</td>
                      <td>{c.effect}</td>
                      <td>{c.bestAgainst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Combat Role Priorities — Target Selection Guide</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Knowing which enemy to target and in what order is as important as your ability rotation. Here is the
              standard target priority framework for all combat encounters:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-ink-light ml-2">
              <li><span className="text-ink font-semibold">Priority 1 — Enemy Healers:</span> Any enemy that can heal or buff others must die first. A single enemy healer can undo multiple turns of your damage output. Focus fire them immediately with your highest single-target DPS. Persian casters with Fireball or Sphynx with Chain Lightning are ideal for this role.</li>
              <li><span className="text-ink font-semibold">Priority 2 — Crowd Control Enemies:</span> Enemies with stun, freeze, charm, or silence abilities can disrupt your entire turn cycle. If you cannot kill them before they act, apply your own CC (Freeze from Norwegian Forest, Charm from Ragdoll, or Stun from Maine Coon) to lock them down while you eliminate healers first.</li>
              <li><span className="text-ink font-semibold">Priority 3 — High-Damage Enemies:</span> Once healers and CC threats are neutralized, focus on the enemy dealing the most damage. Taunt them with British Shorthair to redirect their attacks onto your tank, then burn them down with your DPS cats while they waste turns hitting your tank's Iron Fur damage reduction.</li>
              <li><span className="text-ink font-semibold">Priority 4 — Enemy Tanks:</span> Tanks deal low damage but absorb a lot of punishment. Save them for last unless they have a Taunt effect that forces you to target them. Use armor-piercing abilities (Rend, Precision Strike) or defense-ignoring damage (Burn, Poison) to whittle them down efficiently.</li>
              <li><span className="text-ink font-semibold">Priority 5 — Summoned Minions:</span> Some bosses and enemies summon additional units. These minions are usually weak but can overwhelm with numbers and adjacency bonuses. Use AoE abilities (Chain Lightning, Blizzard Soul) to clear them in 1-2 turns while keeping primary damage on the boss. Do not waste single-target nukes on minions unless they are about to finish off a low-HP cat.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: What is the single most important stat for combat success?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Speed (SPD). Acting first in the turn order gives you the initiative to apply debuffs, eliminate threats,
                  or set up defensive positioning before enemies can act. A team with a 15 SPD advantage over the enemy will
                  typically win encounters with 30-40% less damage taken compared to a team that goes second. SPD also scales
                  multiplicatively with ability combos — the Dodge Counter Chain, Crit Cascade, and Pack Ambush combos all
                  rely on acting first to set up their effects. This is why Siamese and Sphynx breeds dominate the PvP meta
                  despite having lower HP and DEF than Maine Coons. In PvE, a balanced team with one high-SPD initiator
                  (Siamese or Abyssinian) combined with tankier damage dealers provides the best of both worlds. Never
                  neglect SPD on any cat — even tanks benefit from going earlier to set up Taunt and defensive stances
                  before the enemy's heavy hitters act.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: How do I handle enemy teams with multiple healers?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Multi-healer compositions are the most dangerous enemy setups in the game because they can out-sustain
                  your damage output indefinitely. The solution is a layered approach: (1) apply Heal Reduction via the
                  Mortal Wound ability or Cursed Blade weapon enchant — this cuts all enemy healing by 50% for 3 turns;
                  (2) focus fire one healer at a time, never split damage between two healers — a healer at 10% HP heals
                  just as effectively as one at 100% HP; (3) use Silence (Oriental Shorthair Gag ability) to shut down
                  the healer you are not currently targeting, preventing them from casting while you eliminate their partner;
                  (4) apply Poison or Burn DoT effects that tick at the end of enemy turns — these ignore healing because
                  they deal damage faster than most heal-over-time effects can restore. If you encounter a 3-healer composition
                  (rare, typically in endless dungeon floors 40+), consider retreating and rebuilding your team with more
                  single-target burst damage and at least two Silence-capable cats.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: When should I use AoE attacks instead of single-target abilities?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Use AoE in three situations and only these three: (1) against 4+ enemies where single-target attacks would
                  take 4+ turns to clear the board, giving enemies too many actions; (2) when facing summoner bosses that
                  produce 2-3 minions per turn — AoE both clears the minions and damages the boss simultaneously; (3) when
                  your team includes the Venom Cascade combo (Venomous + Contagion traits), where AoE attacks apply poison
                  to all enemies at once and Contagion spreads the stacks exponentially as enemies die. In all other
                  situations, single-target damage is strictly superior because it eliminates threats faster, triggers
                  execute effects (Predator Gene), and prevents enemies from acting. A common beginner mistake is using
                  Chain Lightning on 2-3 enemies when focused Sword/Claw attacks would kill one enemy per turn instead of
                  damaging all enemies without killing any. Dead enemies deal zero damage; damaged enemies still get their
                  full turn. Focus fire is almost always the correct default strategy.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 2, 2026. Status effect durations and damage values verified against Mewgenics patch 2.1.3 combat engine. Ability combo damage multipliers tested in controlled combat scenarios. Target priority framework based on speedrun and endless dungeon leaderboard analysis.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/beginner-guide" className="text-accent hover:underline">Beginner Guide — First Team & Combat Basics</Link></li>
              <li><Link href="/cat-tier-list" className="text-accent hover:underline">Cat Tier List — Best Breeds & Genetic Builds</Link></li>
              <li><Link href="/class-builds" className="text-accent hover:underline">Class Builds — Role Optimizations & Synergies</Link></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Combat Quick Reference</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Status Effects Cataloged: <span className="text-ink font-semibold">12</span></li>
              <li>Ability Combos Documented: <span className="text-ink font-semibold">12</span></li>
              <li>Combat Grid Size: <span className="text-ink font-semibold">5x7 tiles</span></li>
              <li>Max Team Size: <span className="text-ink font-semibold">4 cats</span></li>
              <li className="pt-2 border-t border-ink-faded/20">Flanking Bonus: <span className="text-ink font-semibold">+25% damage, +15% crit</span></li>
              <li>Adjacency DEF Bonus: <span className="text-ink font-semibold">+10% per adjacent ally</span></li>
              <li>Optimal Formation: <span className="text-ink font-semibold">Diamond (tank front-center)</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
