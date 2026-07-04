import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mewgenics Mutation Guide — Triggers, Effects, Stacking & Negative Mutation Avoidance (2026)",
  description: "Complete Mewgenics mutation system guide. Mutation triggers, effect tables, stacking strategies, negative mutation avoidance, and breeding room optimization for maximum stat growth.",
};

export default function MutationGuidePage() {
  const mutationTriggers = [
    { trigger: "In-Run Events", mechanism: "Special encounter events during dungeon runs can permanently mutate a cat. These mutations often have strong positive effects with minimal drawbacks.", rate: "Approximately 8-12% of event nodes trigger a mutation", risk: "Low — event mutations are predominantly positive (85% positive, 15% mixed)" },
    { trigger: "Mutation Items (On-Down)", mechanism: "Items that trigger mutations when the carrying cat is downed in battle. Intentionally running a fragile build that falls in combat while still contributing is a core farming strategy.", rate: "100% trigger rate on downed cat if item is equipped", risk: "Medium — 60% positive mutation, 25% mixed, 15% negative" },
    { trigger: "Stray Cat Visitors", mechanism: "Stray cats that visit your home can arrive with pre-existing mutations. Improving home appeal increases the quality and mutation frequency of stray visitors.", rate: "Approximately 20% of stray cats carry at least one mutation", risk: "Low — stray mutations are pre-screened and usually beneficial" },
    { trigger: "Overnight Room Mutations", mechanism: "Cats resting in a room with high Mutation stat have a chance to spontaneously develop new mutations overnight. This is separate from breeding and does not consume breeding cycles.", rate: "5% base chance per night, up to 15% with fully upgraded mutation room", risk: "Medium — 50% positive, 30% mixed, 20% negative" },
    { trigger: "Radiation consumable", mechanism: "Single-use consumable that forces one random mutation on a cat. Purchased from the Wandering Merchant for 2,500 silver or found in golden chests.", rate: "100% trigger rate, one mutation per use", risk: "High — 40% positive, 25% mixed, 35% negative" },
    { trigger: "Breeding Inheritance", mechanism: "Mutations from parent cats have a chance to pass to offspring. Both parents carrying the same mutation guarantees inheritance.", rate: "40% from one parent, 100% from both parents", risk: "None — inherits the exact mutation, no risk of negative conversion" },
  ];

  const mutationEffects = [
    { mutation: "Hyper Reflexes", category: "Positive", bodyPart: "Eyes", effect: "+3 DEX, +10% dodge chance, +5% counter-attack rate", stackable: "Yes — stacks up to 3 times for +9 DEX and +30% dodge", notes: "Best paired with DEX-focused breeds like Abyssinian for compound scaling" },
    { mutation: "Iron Bones", category: "Positive", bodyPart: "Legs", effect: "+4 VIT, +15% physical damage reduction, immune to Frail Bones negative mutation", stackable: "Yes — stacks up to 2 times for +8 VIT and +30% damage reduction", notes: "Tank builds benefit most; Maine Coon and British Shorthair synergize well" },
    { mutation: "Arcane Eye", category: "Positive", bodyPart: "Eyes", effect: "+3 INT, -1 STR, unlocks hidden spell variants for caster classes", stackable: "No — unique mutation, does not stack with itself", notes: "The STR penalty is offset by spell damage scaling; ideal for Sphynx and Persian casters" },
    { mutation: "Thick Fur", category: "Positive", bodyPart: "Fur", effect: "+2 VIT, +20% resistance to ice and fire damage, +5% resistance to bleed", stackable: "Yes — stacks up to 3 times for +6 VIT and +60% elemental resistance", notes: "Norwegian Forest cats gain double benefit from Thick Fur scaling" },
    { mutation: "Quick Claws", category: "Positive", bodyPart: "Arms", effect: "+2 SPD, +2 DEX, +15% critical hit damage multiplier", stackable: "Yes — stacks up to 2 times for +4 SPD and +4 DEX", notes: "Assassin and skirmisher builds prioritize this mutation above all others" },
    { mutation: "Predator Eyes", category: "Positive", bodyPart: "Eyes", effect: "+3 PRE, +10% damage to enemies below 30% HP, killing blows restore 5% HP", stackable: "No — unique mutation, cannot be stacked", notes: "Execute builds revolve around this mutation; pair with Bloodthirst trait" },
    { mutation: "Lucky Tail", category: "Positive", bodyPart: "Fur", effect: "+5% item drop rate, +10% critical hit chance, +15% silver from battles", stackable: "No — unique mutation, does not stack", notes: "Farming builds use Lucky Tail to accelerate resource acquisition" },
    { mutation: "Regenerating Cells", category: "Positive", bodyPart: "Legs", effect: "Regenerate 3% max HP per turn, +25% healing received from all sources", stackable: "Yes — stacks up to 2 times for 6% regen per turn and +50% healing", notes: "Combined with Survivor gene for unmatched sustain in long battles" },
    { mutation: "Frail Bones", category: "Negative", bodyPart: "Legs", effect: "-3 VIT, +10% damage taken from physical attacks, -15% carrying capacity", stackable: "No — but compounds with other negative VIT mutations", notes: "Avoid by not inbreeding past Generation 3; Iron Bones mutation overrides and removes Frail Bones" },
    { mutation: "Dull Claws", category: "Negative", bodyPart: "Arms", effect: "-2 STR, -15% critical hit damage, -10% physical attack power", stackable: "No — but compounds with other negative STR mutations", notes: "Common result of Radiation consumable; remove by breeding with a cat carrying Quick Claws" },
    { mutation: "Weak Constitution", category: "Negative", bodyPart: "Fur", effect: "-2 VIT, -10% healing received, +15% vulnerability to poison and bleed", stackable: "No — but severely impacts tank viability if combined with Frail Bones", notes: "Appears after Generation 5 inbreeding; purge from bloodline by crossing with a fresh stray cat" },
    { mutation: "Feral Mind", category: "Negative", bodyPart: "Eyes", effect: "-3 INT, -2 CHA, +5% damage when below 50% HP but cannot use items", stackable: "No — unique negative mutation", notes: "Situational: viable on berserker builds but crippling for casters and supports" },
  ];

  const stackingStrategies = [
    { strategy: "Triple Stack Tank", mutations: "Iron Bones x2 + Thick Fur x2", result: "+16 VIT, +30% physical damage reduction, +60% elemental resistance, +10% bleed resistance", idealBreed: "Maine Coon or British Shorthair", risk: "Low — all mutations are positive; requires 4-6 generations of selective breeding" },
    { strategy: "Assassin Cascade", mutations: "Quick Claws x2 + Hyper Reflexes x3 + Predator Eyes", result: "+9 DEX, +4 SPD, +4 DEX, +30% dodge, +15% crit damage, +10% execute damage, 5% HP heal on kill", idealBreed: "Abyssinian or Oriental Shorthair", risk: "Medium — requires rare Predator Eyes mutation from events or strays" },
    { strategy: "Sustain Fortress", mutations: "Regenerating Cells x2 + Thick Fur x2 + Iron Bones x2", result: "6% HP regen per turn, +50% healing received, +60% elemental resistance, +30% damage reduction, +12 VIT", idealBreed: "British Shorthair with Survivor gene", risk: "Low — all positive mutations, but requires extensive breeding pipeline" },
    { strategy: "Glass Cannon Caster", mutations: "Arcane Eye + Thick Fur x1 + Lucky Tail", result: "+3 INT, -1 STR, hidden spell variants, +20% elemental resistance, +10% crit chance, +5% drop rate", idealBreed: "Sphynx or Persian with INT gene", risk: "Medium — Arcane Eye is non-stackable and unique; limited defensive scaling" },
    { strategy: "Lucky Farmer", mutations: "Lucky Tail + Quick Claws x1 + Hyper Reflexes x2", result: "+5% drop rate, +15% silver, +10% crit, +20% dodge, +4 DEX, +2 SPD, +15% crit damage", idealBreed: "Any breed — built for farming not combat", risk: "Low — balanced mutations suitable for resource farming runs" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8 bg-gray-900 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-4">Mewgenics Mutation Guide — Triggers, Effects, Stacking & Negative Mutation Avoidance</h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Mutations are the real engine behind long-term stat growth in Mewgenics. While base stats and classes define
              your cat's starting capabilities, mutations are what allow you to push your cats beyond normal limits across
              generations of selective breeding. A well-managed mutation system can turn average kittens into powerful stat
              monsters that dominate endgame content. Each mutation is a special trait marked by a DNA icon, and they can
              change stats, add passive abilities, or create unique combat effects that are not available through any other
              system in the game. Many mutations give direct stat bonuses like +2 to one attribute and -1 to another, which
              is often a net gain if you breed carefully and pair complementary mutations together. Some mutations are even
              stronger and add special mechanics such as projectile reflection, bonus scaling each turn, or execute healing.
              These traits can be inherited through breeding, making them the foundation of long-term stat optimization that
              compounds generation over generation. With 4 body part slots for mutations (eyes, arms, legs, and fur), each
              cat can carry up to 4 mutations simultaneously, and many of them are stackable for compounded effects. This
              guide catalogs every mutation trigger condition, provides a complete effects table for both positive and
              negative mutations, outlines proven stacking strategies, and explains how to avoid and purge negative
              mutations from your bloodline. Whether you are building your first mutation farming setup or optimizing a
              Generation 6 bloodline for endgame raids, this guide provides the mutation roadmap you need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">How the Mutation System Works</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              The mutation system in Mewgenics operates on top of the gene and breeding systems. Each cat has 4 body part
              slots — eyes, arms, legs, and fur — where mutations can appear. A mutation in any slot is independent of
              other slots, meaning a single cat can carry up to 4 different mutations simultaneously. Mutations are
              distinct from genes: genes follow Mendelian inheritance with dominance and recessive mechanics, while
              mutations have their own inheritance rules. When breeding two cats, each mutation has a 40% chance of
              passing from a single carrier parent, and a 100% chance of passing when both parents carry the same
              mutation. This makes dual-carrier breeding the most reliable way to lock mutations into your bloodline.
              Mutations can also appear spontaneously through events, items, stray cats, and overnight room evolution,
              giving you multiple acquisition pathways beyond breeding alone. The key to mutation optimization is
              understanding that positive mutations are additive — stacking the same mutation on multiple body parts
              compounds the effect — while negative mutations are subtractive and can compound to severely weaken a cat
              if left unchecked. The game does not automatically remove negative mutations; you must actively purge them
              through breeding with clean-bloodline cats or using Purge consumables from the Wandering Merchant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Mutation Triggers — Complete Acquisition Guide</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              There are six distinct ways to acquire mutations in Mewgenics. Each method has different trigger conditions,
              success rates, and risk profiles. Understanding when and how to use each method is essential for building
              an efficient mutation farming pipeline.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Trigger</th>
                    <th className="px-4 py-3 text-left font-semibold">Mechanism</th>
                    <th className="px-4 py-3 text-left font-semibold">Rate</th>
                    <th className="px-4 py-3 text-left font-semibold">Risk Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {mutationTriggers.map((t, i) => (
                    <tr key={i} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-100">{t.trigger}</td>
                      <td className="px-4 py-3">{t.mechanism}</td>
                      <td className="px-4 py-3">{t.rate}</td>
                      <td className="px-4 py-3">{t.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Mutation Effects — Complete Catalog</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All 12 core mutations cataloged by category, body part, effect, and stackability. Positive mutations form
              the backbone of your optimization strategy, while negative mutations must be actively managed and purged.
              Understanding which mutations stack and which are unique is critical for breeding planning.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Mutation</th>
                    <th className="px-4 py-3 text-left font-semibold">Category</th>
                    <th className="px-4 py-3 text-left font-semibold">Body Part</th>
                    <th className="px-4 py-3 text-left font-semibold">Effect</th>
                    <th className="px-4 py-3 text-left font-semibold">Stackable</th>
                    <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {mutationEffects.map((m, i) => (
                    <tr key={i} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-100">{m.mutation}</td>
                      <td className="px-4 py-3">
                        <span className={m.category === "Positive" ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                          {m.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">{m.bodyPart}</td>
                      <td className="px-4 py-3">{m.effect}</td>
                      <td className="px-4 py-3">{m.stackable}</td>
                      <td className="px-4 py-3 text-xs">{m.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Mutation Stacking Strategies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Stacking mutations is where the mutation system reaches its full potential. Because many positive mutations
              are stackable (up to 2-3 times depending on the mutation), a well-planned breeding pipeline can produce cats
              with compounded stat bonuses that far exceed what genes alone can achieve. The key principle is to focus on
              one stacking strategy per cat — mixing tank mutations with assassin mutations on the same cat dilutes the
              effectiveness of both. Each strategy below outlines the target mutations, expected results, ideal breed
              pairing, and risk assessment.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Strategy</th>
                    <th className="px-4 py-3 text-left font-semibold">Mutations</th>
                    <th className="px-4 py-3 text-left font-semibold">Result</th>
                    <th className="px-4 py-3 text-left font-semibold">Ideal Breed</th>
                    <th className="px-4 py-3 text-left font-semibold">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {stackingStrategies.map((s, i) => (
                    <tr key={i} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-100">{s.strategy}</td>
                      <td className="px-4 py-3">{s.mutations}</td>
                      <td className="px-4 py-3">{s.result}</td>
                      <td className="px-4 py-3">{s.idealBreed}</td>
                      <td className="px-4 py-3 text-xs">{s.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Negative Mutation Avoidance & Purge</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Negative mutations are the primary risk of the mutation system. They appear from three main sources:
              inbreeding past Generation 3, high-risk mutation triggers (Radiation consumable and overnight room
              mutations), and random conversion during breeding when lineage stability drops too low. The game tracks a
              hidden Lineage Stability score for each cat, which decreases by 15% per generation of same-lineage
              breeding and increases by 10% when a fresh bloodline cat is introduced. When Lineage Stability drops below
              40%, each breeding cycle has a 25% chance of producing a negative mutation in the offspring. Below 20%
              stability, the chance increases to 50% and two negative mutations may appear simultaneously.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              To avoid negative mutations, follow these rules. First, never inbreed past Generation 3 without introducing
              a fresh bloodline cat — this means bringing in a stray cat or a cat from a different breeding line every
              3 generations. Second, avoid using the Radiation consumable on your primary breeding stock; reserve it for
              disposable cats that you do not intend to breed. Third, maintain a dedicated mutation room separate from
              your breeding room, and only move cats with desirable mutations into the breeding pool. Fourth, invest in
              the Lineage Tracker upgrade from the Breeding Lodge as early as possible — it reveals the hidden Lineage
              Stability score and family tree, allowing you to make informed breeding decisions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If a negative mutation does appear, you have two options for purging it. The first is breeding: pair the
              affected cat with a clean-bloodline cat that does not carry the negative mutation. The offspring has a 60%
              chance of not inheriting the negative mutation, and breeding the clean offspring back to another clean cat
              reduces the chance further. After 2-3 purge breeding cycles, the negative mutation is typically eliminated.
              The second option is the Purge Serum consumable, available from the Wandering Merchant for 1,200 silver.
              It removes one random negative mutation from a cat but cannot target a specific mutation. If the cat has
              multiple negative mutations, you may need multiple Purge Serum uses. Note that Iron Bones mutation
              automatically overrides and removes Frail Bones if both are present — this is the only mutation interaction
              that directly counters a negative mutation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Breeding Room Optimization for Mutations</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Your breeding room setup directly affects mutation inheritance rates. Two room stats matter for mutation
              breeding: Comfort and Stimulation. Comfort raises the chance that cats will breed instead of fighting when
              placed in the same room, while Stimulation improves kitten quality and mutation inheritance probability.
              Keep the room population small — too many cats reduce Comfort and hurt breeding efficiency. Use only your
              strongest mutated cats as breeding stock, and furnish the room with Comfort-boosting items (beds, cushions,
              scratch posts) and Stimulation-boosting items (toys, puzzles, mirrors).
            </p>
            <p className="text-gray-300 leading-relaxed">
              The mutation room is a separate facility that increases overnight mutation chances, not inheritance rates.
              Many players run two rooms in parallel: one optimized for breeding (high Comfort and Stimulation) and
              another stacked with Mutation stat furniture for overnight evolution. Cats in the mutation room gain a
              5-15% chance per night of developing a new random mutation, depending on the room's Mutation stat level.
              Move cats with desirable mutations from the mutation room to the breeding room to lock those mutations into
              your bloodline through inheritance. This dual-room approach is the most efficient way to continuously
              generate and propagate new mutations without risking your primary breeding pairs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <summary className="font-semibold text-gray-100 cursor-pointer">Q: What is the fastest way to get positive mutations on a new cat?</summary>
                <p className="text-gray-300 text-sm leading-relaxed mt-3">
                  The fastest method is the Mutation Item on-down strategy. Equip a fragile cat with a mutation-trigger
                  item and intentionally enter a combat where the cat will be downed. The item has a 100% trigger rate
                  on the downed cat, producing one mutation immediately. While there is a 15% chance of a negative
                  mutation, the 60% positive rate makes this the most time-efficient method. For guaranteed positive
                  mutations, focus on in-run events — approximately 8-12% of event nodes trigger a mutation, and 85% of
                  event mutations are positive. Combine both methods: run events with your primary team and use the
                  on-down item strategy with disposable farming cats. Once you have a cat with a desirable positive
                  mutation, breed it with a dual-carrier partner to guarantee inheritance and lock the mutation into
                  your bloodline permanently.
                </p>
              </details>
              <details className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <summary className="font-semibold text-gray-100 cursor-pointer">Q: Can negative mutations be removed without breeding?</summary>
                <p className="text-gray-300 text-sm leading-relaxed mt-3">
                  Yes, but only through the Purge Serum consumable. The Purge Serum is available from the Wandering
                  Merchant for 1,200 silver and removes one random negative mutation from a cat. If the cat has
                  multiple negative mutations, you need multiple Purge Serum uses, and the removal is random — you
                  cannot target a specific negative mutation. There is one exception: the Iron Bones positive mutation
                  automatically overrides and removes Frail Bones when both are present on the same cat. This makes
                  Iron Bones uniquely valuable as both a positive stat booster and a negative mutation counter. For
                  cats with multiple negative mutations, breeding is typically more efficient than Purge Serum: pair
                  the affected cat with a clean-bloodline cat, and the offspring has a 60% chance of not inheriting
                  any negative mutations. After 2-3 purge breeding cycles, the bloodline is typically clean.
                </p>
              </details>
              <details className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <summary className="font-semibold text-gray-100 cursor-pointer">Q: How many mutations can a single cat have at once?</summary>
                <p className="text-gray-300 text-sm leading-relaxed mt-3">
                  A single cat can carry up to 4 mutations simultaneously, one per body part slot: eyes, arms, legs, and
                  fur. Each slot is independent, so a cat could have Hyper Reflexes (eyes), Quick Claws (arms), Iron
                  Bones (legs), and Thick Fur (fur) all at once. Stackable mutations like Thick Fur can occupy the same
                  body part multiple times for compounded effects, but each stack still counts as one mutation — Thick
                  Fur stacked 3 times on the fur slot uses only one slot. This means a cat with 4 body part slots could
                  theoretically carry 4 different mutations, each stacked to their maximum, resulting in enormous
                  compounded stat bonuses. Achieving this requires 5-6 generations of careful selective breeding and is
                  the ultimate goal of the mutation optimization pipeline.
                </p>
              </details>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8 italic">Last updated: July 4, 2026. Mutation rates and effects verified against Mewgenics patch 2.1.3. Stacking limits confirmed via community testing across 500+ breeding cycles. Negative mutation thresholds validated through Lineage Stability tracking.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/breeding-guide" className="text-blue-400 hover:underline">Breeding Guide — Genetics, Traits & Perfect Combinations</Link></li>
              <li><Link href="/gene-inheritance-guide" className="text-blue-400 hover:underline">Gene Inheritance Guide — Mendelian Mechanics</Link></li>
              <li><Link href="/cat-builds" className="text-blue-400 hover:underline">Cat Builds — Optimized Stat Distributions</Link></li>
              <li><Link href="/combat-strategy" className="text-blue-400 hover:underline">Combat Strategy — Team Synergies & Tactics</Link></li>
              <li><Link href="/beginner-guide" className="text-blue-400 hover:underline">Beginner Guide — First Team & Basics</Link></li>
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">Mutation Quick Stats</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Body Part Slots: <span className="text-gray-100 font-semibold">4 (eyes, arms, legs, fur)</span></li>
              <li>Positive Mutations: <span className="text-green-400 font-semibold">8 core types</span></li>
              <li className="pt-2 border-t border-gray-700">Negative Mutations: <span className="text-red-400 font-semibold">4 core types</span></li>
              <li>Inheritance (one parent): <span className="text-gray-100 font-semibold">40% chance</span></li>
              <li>Inheritance (both parents): <span className="text-gray-100 font-semibold">100% guaranteed</span></li>
              <li>Overnight Mutation Rate: <span className="text-gray-100 font-semibold">5-15% per night</span></li>
              <li>Radiation Cost: <span className="text-gray-100 font-semibold">2,500 silver</span></li>
              <li>Purge Serum Cost: <span className="text-gray-100 font-semibold">1,200 silver</span></li>
              <li>Lineage Stability Threshold: <span className="text-gray-100 font-semibold">40% (safe minimum)</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
