import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Mewgenics Builds Guide — Best Cat Builds, Team Comps & Genetic Synergies",
  description:
    "Complete Mewgenics builds guide. Best cat breed builds, team compositions, genetic trait synergies, and optimal strategies for every game mode.",
};

const topBuilds = [
  {
    build: "Royal DPS Core",
    coreCats: "Persian (leader), Siamese, Bengal",
    keyTraits: "Nine Lives, Precision Strike, Feral Instinct, King of the Jungle",
    bestCollar: "Collar of the Lion (20 percent attack, 10 percent crit)",
    playstyle: "Aggressive burst damage with crit stacking and multi-attack",
    difficulty: "Medium",
  },
  {
    build: "Fortress Wall",
    coreCats: "Maine Coon (tank), British Shorthair (support), Ragdoll (healer)",
    keyTraits: "Thick Fur, Iron Will, Guardian Angel, Last Stand",
    bestCollar: "Collar of Fortitude (25 percent HP, taunt on block)",
    playstyle: "Defensive sustain with damage soaking and healing rotation",
    difficulty: "Easy",
  },
  {
    build: "Shadow Ambush",
    coreCats: "Bombay (assassin), Sphynx (debuff), Russian Blue (scout)",
    keyTraits: "Shadow Step, Backstab, Poison Fangs, Silent Hunter",
    bestCollar: "Collar of Shadows (stealth on kill, 30 percent ambush damage)",
    playstyle: "Stealth opener into burst assassination of priority targets",
    difficulty: "Hard",
  },
  {
    build: "Elemental Storm",
    coreCats: "Abyssinian (fire mage), Norwegian Forest (ice mage), Turkish Van (water mage)",
    keyTraits: "Pyromaniac, Frostbite, Torrential Force, Elemental Affinity",
    bestCollar: "Collar of the Elements (15 percent elemental damage, chain effect)",
    playstyle: "Ranged elemental damage with overlapping AOE fields",
    difficulty: "Hard",
  },
  {
    build: "Speed Demon",
    coreCats: "Oriental Shorthair, Bengal, Somali",
    keyTraits: "Zoomies, Quick Paws, Lightning Reflexes, Double Strike",
    bestCollar: "Collar of the Wind (15 percent speed, dodge on attack)",
    playstyle: "Hit-and-run with dodge tanking and multi-hit combos",
    difficulty: "Medium",
  },
  {
    build: "Necromancer Swarm",
    coreCats: "Sphynx (summoner), Scottish Fold (buffer), Manx (utility)",
    keyTraits: "Raise Dead, Soul Link, Aura of Decay, Corpse Explosion",
    bestCollar: "Collar of the Lich (summon damage 25 percent, minion lifesteal)",
    playstyle: "Minion army with corpse explosion chain reactions",
    difficulty: "Hard",
  },
  {
    build: "Purrfect Harmony",
    coreCats: "Ragdoll, Birman, Himalayan",
    keyTraits: "Healing Purr, Group Therapy, Soothing Aura, Revitalize",
    bestCollar: "Collar of Mercy (50 percent heal boost, revive cooldown reduction)",
    playstyle: "Pure support healing with buffs and emergency revive",
    difficulty: "Easy",
  },
  {
    build: "Berserker Rage",
    coreCats: "Savannah, Bengal, Maine Coon",
    keyTraits: "Blood Frenzy, Adrenaline Rush, Reckless Charge, Savage Bite",
    bestCollar: "Collar of Fury (attack scales with missing HP, 40 percent at 1 HP)",
    playstyle: "Low-HP berserker with damage scaling as health drops",
    difficulty: "Medium",
  },
];

const teamComps = [
  {
    comp: "The Lion's Pride",
    cats: "Persian, Maine Coon, Savannah, Siamese",
    strategy: "Persian leads with King of the Jungle buffing all team attack by 15 percent. Maine Coon tanks front-line with Thick Fur and Iron Will. Savannah triggers Blood Frenzy when allies take damage. Siamese provides Precision Strike crit buffs to the entire team.",
    strengths: "Extremely high damage ceiling with multiple stacking buffs. Strong against single-target bosses where the team can focus fire. Persian leadership traits scale multiplicatively with Savannah's berserker scaling.",
    weaknesses: "No dedicated healer means limited sustain in long missions. Weak to AOE attacks that bypass Maine Coon's taunt. Requires careful positioning to keep the Persian leader safe.",
  },
  {
    comp: "Midnight Hunters",
    cats: "Bombay, Russian Blue, Sphynx, Oriental Shorthair",
    strategy: "Russian Blue scouts ahead revealing enemy positions and traps. Bombay opens from stealth with Shadow Step into Backstab on the highest-threat target. Sphynx applies Poison Fangs and Aura of Decay to soften remaining enemies. Oriental Shorthair cleans up with Zoomies-boosted multi-hit combos.",
    strengths: "Unmatched single-target burst damage from the Bombay opener. Russian Blue scouting prevents ambushes and reveals optimal engagement paths. Sphynx debuffs stack multiplicatively with Bombay's ambush bonus.",
    weaknesses: "Very fragile team composition. All four cats wear light armor equivalent. If the opener fails to kill the priority target, the team must retreat and reset stealth. Struggles against missions with mandatory multi-wave fights.",
  },
  {
    comp: "Elemental Trinity",
    cats: "Abyssinian, Norwegian Forest, Turkish Van, British Shorthair",
    strategy: "Abyssinian opens with Pyromaniac firestorm creating a burning field. Norwegian Forest layers Frostbite on top freezing enemies inside the fire. Turkish Van triggers Torrential Force which creates Steam Explosion on burning targets and Frozen Solid on chilled targets. British Shorthair provides defensive buffs and emergency healing.",
    strengths: "Devastating AOE damage through elemental chain reactions. Steam Explosion deals 3x damage to burning enemies and applies a stun. Frozen Solid from ice plus water combo disables entire packs for 3 seconds. British Shorthair provides enough sustain for the combo setup time.",
    weaknesses: "Combo requires precise timing across three cats. If any cat in the chain is disabled or killed, the entire rotation falls apart. Heavy mana consumption means the team runs out of resources in extended fights. Weak against single fast-moving enemies that avoid the AOE fields.",
  },
  {
    comp: "Iron Whiskers",
    cats: "Maine Coon, British Shorthair, Ragdoll, Scottish Fold",
    strategy: "Maine Coon taunts all enemies with Iron Will active. Scottish Fold buffs the Maine Coon's defense and HP regen with Group Therapy. Ragdoll provides passive healing through Healing Purr and emergency Revitalize. British Shorthair alternates between Guardian Angel shields and Soothing Aura recovery.",
    strengths: "Virtually unkillable in most mission types. Three sources of healing plus shields and damage reduction. Maine Coon can tank multiple elite enemies simultaneously with full buff support. Excellent for new players learning enemy patterns.",
    weaknesses: "Extremely low damage output. Fights drag on significantly longer than with other compositions. Cannot complete timed missions or missions with DPS check mechanics. Relies entirely on attrition which fails against enemies with regeneration.",
  },
  {
    comp: "Zoomie Squad",
    cats: "Oriental Shorthair, Bengal, Somali, Manx",
    strategy: "Manx provides utility buffs and Lucky Charm for increased loot drops. Somali scouts ahead to identify priority targets. Oriental Shorthair and Bengal alternate hit-and-run attacks using Zoomies for massive speed boosts and Double Strike for bonus hits. Lightning Reflexes provides dodge frames mid-attack.",
    strengths: "Fastest mission completion speed of any composition. Dodge-based defense means no healing is needed if played perfectly. High loot efficiency from Manx's Lucky Charm. Great for farming missions and speed-running dailies.",
    weaknesses: "No tank and no healer means any hit received is potentially lethal. Requires near-perfect dodge timing which is difficult against multiple ranged enemies. Struggles in cramped mission maps where dodge range is limited.",
  },
];

const topTeams = [
  {
    name: "The Lion's Pride (S-Tier Team Comp)",
    setup: "Persian (leader) equipped with Collar of the Lion for maximum attack buff scaling. Maine Coon (tank) with Collar of Fortitude for taunt and HP stacking. Savannah (berserker) with Collar of Fury to capitalize on Blood Frenzy scaling. Siamese (support DPS) with Collar of Precision for crit buff sharing.",
    strategy: "Position Persian in the backline behind Maine Coon. Persian activates King of the Jungle at mission start for a permanent 15 percent team attack buff. Maine Coon charges in with Iron Will taunt pulling all enemy aggro. Savannah follows the taunt, taking incidental damage to trigger Blood Frenzy which scales attack by 2 percent per 1 percent missing HP. Siamese applies Precision Strike marks on the highest-HP targets, giving the entire team 25 percent bonus crit chance against marked enemies. The comp snowballs hard: as Savannah takes damage and deals more, Persian's buff multiplies the berserker bonus, and Siamese crit marks ensure every hit counts.",
    strengths: "Highest burst potential of any team composition. King of the Jungle plus Blood Frenzy plus Precision Strike creates multiplicative damage scaling. Maine Coon taunt control keeps the fragile Persian leader safe. Works in every mission type except timed speed runs where setup time is a liability.",
    weaknesses: "Heavy reliance on the Persian leader. If Persian is killed, the entire team loses 15 percent attack and the comp falls apart. No dedicated healer means attrition fights drain resources. Savannah's Blood Frenzy is dangerous in missions with unavoidable damage where the cat can be burst down before the scaling matters.",
    bestMissionTypes: "Boss hunts, elite elimination, defense missions where enemies come to you, and any single-stage mission with a clear win condition.",
  },
  {
    name: "Midnight Hunters (A-Tier Team Comp)",
    setup: "Bombay (primary assassin) with Collar of Shadows for stealth-on-kill reset and ambush damage. Russian Blue (scout) with Collar of Whispers for enhanced detection range and trap disarm. Sphynx (debuff support) with Collar of Affliction for poison damage scaling. Oriental Shorthair (cleanup) with Collar of the Wind for speed and dodge.",
    strategy: "Open every mission with Russian Blue scouting ahead using Silent Hunter. Reveal all enemy positions and identify the highest-threat target: healers first, then summoners, then bosses. Bombay activates Shadow Step to enter stealth and position behind the priority target. Open with Backstab for 3x ambush damage. If Backstab kills, Collar of Shadows resets stealth for the next target. Sphynx rotates Poison Fangs on remaining enemies and activates Aura of Decay for passive DOT on everything in range. Oriental Shorthair cleans up scattered enemies using Zoomies-boosted attack chains. For boss fights, stack Sphynx debuffs before Bombay engages to maximize burst.",
    strengths: "The highest single-target burst in Mewgenics. Stealth-on-kill reset allows Bombay to chain-kill multiple priority targets in one engagement. Russian Blue provides unparalleled tactical information. Debuff stacking from Sphynx amplifies Bombay's already massive ambush damage.",
    weaknesses: "Glass cannon composition. Any cat caught out of stealth dies in two to three hits. Bombay is useless if stealth is broken by detection mechanics. Multi-wave missions prevent stealth reset between waves. No sustain means the team must end fights quickly or retreat.",
    bestMissionTypes: "Assassination contracts, scouting missions, infiltration missions with stealth objectives, and any mission where eliminating a single priority target wins the encounter.",
  },
  {
    name: "Elemental Trinity (A-Tier Team Comp)",
    setup: "Abyssinian (primary DPS, fire) with Collar of the Elements for chain effect on elemental hits. Norwegian Forest (secondary DPS, ice) with Collar of Permafrost for extended freeze duration. Turkish Van (combo enabler, water) with Collar of Torrents for AOE size increase. British Shorthair (support) with Collar of Mercy for emergency healing.",
    strategy: "The Elemental Trinity relies on elemental interaction chain reactions. Abyssinian opens each fight with Pyromaniac skill laying down a burning field that deals fire DOT and applies the Burning status. Norwegian Forest immediately follows with Frostbite on the burning field, creating Thermal Shock that freezes burning enemies and deals bonus shatter damage. Turkish Van casts Torrential Force on frozen enemies which produces two effects: burning enemies in the AOE trigger Steam Explosion for 3x fire damage plus stun, while frozen enemies take the Shatter effect for 2.5x ice damage. British Shorthair provides Guardian Angel shields during the setup phase and emergency healing through Soothing Aura.",
    strengths: "The most devastating AOE team in Mewgenics. A full elemental chain rotation can clear an entire encounter in one sequence. Elemental chains work on most enemy types without resistance issues. British Shorthair provides enough sustain for the 2-turn combo setup.",
    weaknesses: "Requires precise turn order sequencing. If any cat in the chain is crowd-controlled, the rotation breaks and damage falls off a cliff. High mana consumption limits sustained damage in boss fights with multiple phases. Enemies with elemental immunity break the chain at that element's step.",
    bestMissionTypes: "Horde defense missions, territory capture, wave-based survival, and any mission with densely packed enemy groups where AOE chains hit maximum targets.",
  },
];

const faqs = [
  {
    question: "What is the best solo cat build for single-cat missions?",
    answer:
      "For solo missions, a Bengal or Savannah with the Collar of Fury is the strongest choice. Select the Blood Frenzy, Adrenaline Rush, and Savage Bite traits from the Berserker class tree. The Collar of Fury's damage scaling with missing HP means the cat deals 40 percent more damage at 1 HP, and Blood Frenzy provides enough lifesteal to sustain at low health. Bombay is a viable alternative for missions requiring stealth: Shadow Step plus Backstab into Collar of Shadows reset allows chaining kills without taking damage. Avoid solo-cat builds that lack sustain or burst because solo missions have no backup if the cat goes down.",
  },
  {
    question: "How many cats should I bring per team for different mission types?",
    answer:
      "Mewgenics supports teams of 1 to 5 cats depending on mission requirements. Boss hunts and elite elimination missions favor 4-cat teams for maximum damage output while still having room for one support. Survival and defense missions work best with 3-cat teams: one tank, one DPS, one healer. Speed-run and farming missions favor 2-cat teams for faster turn cycling. Loot-gathering missions can use 1 cat with Lucky Charm for maximum item efficiency since fewer cats means fewer turns spent and faster mission completion. Some missions have mandatory cat count requirements: always check the mission briefing before deploying.",
  },
  {
    question: "Do I need a healer on every team, or can I skip healing?",
    answer:
      "You do not need a dedicated healer on every team, but you do need a sustain plan. If your team has no Ragdoll, Birman, or Himalayan healer, you must compensate through other means. Lifesteal traits like Blood Frenzy on Savannah or Leeching Bite on any cat provide self-healing on attacks. Collar of Regeneration provides passive HP recovery between turns. Guardian Angel shields from British Shorthair reduce incoming damage enough that health pots can cover the difference. Dodge-based teams like the Zoomie Squad avoid damage entirely. The only team type that strictly needs a healer is the Iron Whiskers tank composition because it relies on outlasting enemies through attrition. For all other builds, healing is a comfort option: nice to have but not mandatory if you can end fights quickly.",
  },
];

export default function BuildsPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-bg-primary">
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2 text-text-primary">
          Mewgenics Builds Guide
        </h1>
        <p className="text-text-muted mb-2">
          Last updated: July 5, 2026
        </p>
        <p className="text-text-muted leading-relaxed max-w-3xl">
          Builds in Mewgenics combine cat breed selection, genetic trait
          inheritance, collar equipment, and team composition into cohesive
          strategies. With 14 cat classes and hundreds of breedable traits,
          the build possibilities are nearly endless. This guide covers the
          most effective solo builds and team compositions, ranked by
          performance across all game modes from casual missions to
          endgame boss hunts.
        </p>
      </section>

      {/* Top Builds Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Top Cat Builds — Complete Rankings
        </h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Each build below represents a tested, optimized combination of cat
          breeds, genetic traits, and collar equipment. Difficulty ratings
          reflect how much game knowledge and mechanical execution each build
          requires to perform at its listed power level.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-accent">Build Name</th>
                <th className="text-left p-3 text-accent">Core Cats</th>
                <th className="text-left p-3 text-accent">Key Traits</th>
                <th className="text-left p-3 text-accent">Best Collar</th>
                <th className="text-left p-3 text-accent">Playstyle</th>
                <th className="text-left p-3 text-accent">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {topBuilds.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border hover:bg-bg-elevated"
                >
                  <td className="p-3 text-text-primary font-semibold">
                    {row.build}
                  </td>
                  <td className="p-3 text-text-muted">{row.coreCats}</td>
                  <td className="p-3 text-text-muted">{row.keyTraits}</td>
                  <td className="p-3 text-accent-warm">{row.bestCollar}</td>
                  <td className="p-3 text-text-muted">{row.playstyle}</td>
                  <td className="p-3 text-text-muted">{row.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Team Compositions Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Team Compositions — Synergy at Scale
        </h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Team compositions are where Mewgenics truly shines. Individual
          cat builds matter, but the right combination of cats creates
          synergies that multiply the team's effectiveness beyond the sum
          of its parts. Genetic traits can be bred across breeds, allowing
          you to customize each cat's role within a team framework.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-accent">Comp Name</th>
                <th className="text-left p-3 text-accent">Cats</th>
                <th className="text-left p-3 text-accent">Strategy</th>
                <th className="text-left p-3 text-accent">Strengths</th>
                <th className="text-left p-3 text-accent">Weaknesses</th>
              </tr>
            </thead>
            <tbody>
              {teamComps.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border hover:bg-bg-elevated"
                >
                  <td className="p-3 text-text-primary font-semibold">
                    {row.comp}
                  </td>
                  <td className="p-3 text-text-muted">{row.cats}</td>
                  <td className="p-3 text-text-muted">{row.strategy}</td>
                  <td className="p-3 text-success">{row.strengths}</td>
                  <td className="p-3 text-danger">{row.weaknesses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top 3 Teams Detailed */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Top 3 Team Compositions — Detailed Breakdown
        </h2>
        <p className="text-text-muted leading-relaxed mb-8">
          These three team compositions represent the strongest and most
          consistent performers across all Mewgenics game modes. Each
          occupies a different strategic niche, so choose based on the
          missions you are targeting rather than raw power ranking.
        </p>

        {topTeams.map((team, i) => (
          <div
            key={i}
            className="mb-8 last:mb-0 p-6 bg-bg-elevated rounded-lg border border-border"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">
              {team.name}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-text-primary font-semibold mb-1">
                  Setup
                </h4>
                <p className="text-text-muted leading-relaxed">
                  {team.setup}
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-1">
                  Strategy
                </h4>
                <p className="text-text-muted leading-relaxed">
                  {team.strategy}
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-1">
                  Strengths
                </h4>
                <p className="text-text-muted leading-relaxed">
                  {team.strengths}
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-1">
                  Weaknesses
                </h4>
                <p className="text-text-muted leading-relaxed">
                  {team.weaknesses}
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-1">
                  Best Mission Types
                </h4>
                <p className="text-text-muted leading-relaxed">
                  {team.bestMissionTypes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How Builds Work */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          How Build Crafting Works in Mewgenics
        </h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Mewgenics is a turn-based tactical RPG from Edmund McMillen, the
          creator of The Binding of Isaac and Super Meat Boy. Unlike
          traditional RPGs where you choose a single class, Mewgenics
          builds are assembled from three interconnected systems: cat
          breeds, genetic traits, and equipment. Each cat you recruit has
          a breed which determines base stats and class affinity. Through
          the genetic breeding system, you can pass traits from parent
          cats to kittens, creating custom cats with trait combinations
          not available from the standard recruitment pool.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          The 14 cat classes span every tactical role: tanks (Maine Coon
          with Guardian class traits), healers (Ragdoll with Medic class
          traits), damage dealers (Bengal with Berserker traits), mages
          (Abyssinian with Elementalist traits), assassins (Bombay with
          Shadow class traits), and supports (British Shorthair with
          Warden traits). Each class tree has 12 traits organized across
          4 tiers. Unlocking higher-tier traits requires investing points
          into lower-tier prerequisites. A fully built cat typically has
          6 to 8 active traits from its primary class plus 2 to 3
          cross-class traits inherited through breeding.
        </p>
        <p className="text-text-muted leading-relaxed">
          Collars are the equipment system in Mewgenics. Each cat wears
          one collar that provides passive bonuses and sometimes an
          active ability. Collars range from common (minor stat boosts)
          to legendary (build-defining effects like Collar of the Lich's
          minion lifesteal or Collar of Shadows' stealth reset). The
          right collar can completely change how a cat plays within a
          team. Collars are acquired through mission rewards, breeding
          milestones, and the in-game shop.
        </p>
      </section>

      {/* Breeding for Builds */}
      <section className="mb-10 p-6 bg-bg-card rounded-lg border border-border">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Breeding for Optimal Builds
        </h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Genetic breeding is the most important long-term system for
          build optimization in Mewgenics. Breeding two cats combines
          their trait pools and gives the kitten a chance to inherit
          traits from both parents. Here is how to breed for competitive
          builds:
        </p>
        <ul className="list-disc list-inside space-y-3 text-text-muted">
          <li>
            <strong className="text-accent-warm">Trait Inheritance:</strong>{" "}
            Kittens inherit 2 to 4 traits from parents with preference
            given to same-category traits. Breeding a Persian with King
            of the Jungle and a Maine Coon with Iron Will can produce a
            kitten with both leadership and tank traits.
          </li>
          <li>
            <strong className="text-accent-warm">Class Affinity:</strong>{" "}
            The kitten's breed determines class affinity but genetic
            traits allow cross-class abilities. A Bombay kitten from a
            Bombay and Abyssinian pairing can inherit Pyromaniac from
            the Abyssinian parent while keeping Shadow Step.
          </li>
          <li>
            <strong className="text-accent-warm">Mutation Chance:</strong>{" "}
            There is a 5 percent base chance of trait mutation during
            breeding, which can create rare variant traits with enhanced
            effects. The Collar of Legacy increases mutation chance to
            12 percent.
          </li>
          <li>
            <strong className="text-accent-warm">Stat Inheritance:</strong>{" "}
            Base stats are averaged from parents with a plus or minus
            10 percent random variance. Breeding two high-stat cats
            consistently produces high-stat kittens over generations.
          </li>
          <li>
            <strong className="text-accent-warm">Shiny Variants:</strong>{" "}
            Rare shiny cats appear at a 1 in 200 breeding rate. Shiny
            cats have a guaranteed unique trait that cannot be obtained
            through normal breeding, making them chase items for
            competitive builds.
          </li>
        </ul>
      </section>

      {/* Mission Mode Strategy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Build Selection by Mission Type
        </h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Different mission types favor different team compositions.
          Building a versatile roster of cats allows you to deploy the
          optimal team for each mission rather than forcing one
          composition to do everything.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-bg-elevated rounded-lg border border-border">
            <h3 className="text-accent font-semibold mb-2">
              Boss Hunts
            </h3>
            <p className="text-text-muted text-sm">
              The Lion's Pride or Royal DPS Core. Bosses have high single-target HP pools that require sustained damage output. Bring one tank for aggro control and three damage dealers.
            </p>
          </div>
          <div className="p-4 bg-bg-elevated rounded-lg border border-border">
            <h3 className="text-accent font-semibold mb-2">
              Horde Defense
            </h3>
            <p className="text-text-muted text-sm">
              Elemental Trinity. Dense enemy packs are weak to AOE chain effects. Steam Explosion and Frozen Solid clear entire waves in one rotation cycle.
            </p>
          </div>
          <div className="p-4 bg-bg-elevated rounded-lg border border-border">
            <h3 className="text-accent font-semibold mb-2">
              Stealth Missions
            </h3>
            <p className="text-text-muted text-sm">
              Midnight Hunters or a solo Bombay. Detection mechanics punish large teams. One or two cats with stealth abilities complete objectives without triggering alarms.
            </p>
          </div>
          <div className="p-4 bg-bg-elevated rounded-lg border border-border">
            <h3 className="text-accent font-semibold mb-2">
              Survival Endless
            </h3>
            <p className="text-text-muted text-sm">
              Iron Whiskers. Endless waves require attrition-based sustain. Stack healing, shields, and damage reduction. Outlast rather than out-damage.
            </p>
          </div>
          <div className="p-4 bg-bg-elevated rounded-lg border border-border">
            <h3 className="text-accent font-semibold mb-2">
              Speed Runs
            </h3>
            <p className="text-text-muted text-sm">
              Zoomie Squad with 2 cats. Turn efficiency is everything. Dodge-based defense skips healing turns. Manx's Lucky Charm boosts reward efficiency.
            </p>
          </div>
          <div className="p-4 bg-bg-elevated rounded-lg border border-border">
            <h3 className="text-accent font-semibold mb-2">
              Loot Farming
            </h3>
            <p className="text-text-muted text-sm">
              Solo Manx with Lucky Charm and Collar of Plenty. Single cat minimizes turn count. Stack item-find bonuses from traits and collar for maximum drops per minute.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-4 bg-bg-card rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold mb-2 text-accent">
                Q: {faq.question}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="mb-10 p-6 bg-bg-elevated rounded-lg border border-border">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">
          Related Guides
        </h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/cat-tier-list"
              className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
            >
              Mewgenics Cat Tier List — All 14 Cat Classes Ranked (2026)
            </Link>
          </li>
          <li>
            <Link
              href="/class-builds"
              className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
            >
              Mewgenics Class Builds — Best Traits &amp; Collars Per Class
            </Link>
          </li>
          <li>
            <Link
              href="/breeding-guide"
              className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
            >
              Mewgenics Breeding Guide — Genetic Traits, Mutations &amp; Shiny Cats
            </Link>
          </li>
          <li>
            <Link
              href="/combat-strategy"
              className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
            >
              Mewgenics Combat Strategy — Turn-Based Tactics &amp; Positioning Guide
            </Link>
          </li>
          <li>
            <Link
              href="/battle-tactics"
              className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
            >
              Mewgenics Battle Tactics — Advanced Combat Mechanics &amp; Synergies
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
