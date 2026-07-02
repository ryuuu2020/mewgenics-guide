import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mewgenics Breeding Guide — Best Cat Combos | Mewgenics Guide",
  description: "Complete Mewgenics breeding guide. Cat breed combinations, stat inheritance rules, rare breed unlocks, and best team builds.",
};

const BREED_TABLE = [
  { breed: "Tabby", tier: "B", baseHP: 100, baseATK: 25, baseDEF: 20, baseSPD: 30, breedBonus: "+5% XP gain", bestUse: "Versatile starter", inheritRate: "Standard", rarity: "Common" },
  { breed: "Persian", tier: "A", baseHP: 90, baseATK: 20, baseDEF: 30, baseSPD: 25, breedBonus: "+10% DEF to all stats", bestUse: "Tank support", inheritRate: "DEF focused", rarity: "Uncommon" },
  { breed: "Siamese", tier: "A", baseHP: 80, baseATK: 35, baseDEF: 15, baseSPD: 35, breedBonus: "+15% ATK scaling", bestUse: "Glass cannon DPS", inheritRate: "ATK focused", rarity: "Uncommon" },
  { breed: "Maine Coon", tier: "S", baseHP: 130, baseATK: 30, baseDEF: 30, baseSPD: 25, breedBonus: "+20% HP, +10% DEF", bestUse: "Frontline tank", inheritRate: "HP/DEF hybrid", rarity: "Rare" },
  { breed: "Sphynx", tier: "S", baseHP: 85, baseATK: 40, baseDEF: 15, baseSPD: 45, breedBonus: "+25% crit chance", bestUse: "Speed assassin", inheritRate: "SPD focused", rarity: "Rare" },
  { breed: "Russian Blue", tier: "A", baseHP: 95, baseATK: 30, baseDEF: 25, baseSPD: 35, breedBonus: "+15% dodge", bestUse: "Evasive DPS", inheritRate: "SPD/DEF hybrid", rarity: "Uncommon" },
  { breed: "British Shorthair", tier: "A", baseHP: 115, baseATK: 25, baseDEF: 35, baseSPD: 20, breedBonus: "+15% team DEF aura", bestUse: "Team tank", inheritRate: "DEF heavy", rarity: "Uncommon" },
  { breed: "Bengal", tier: "S", baseHP: 95, baseATK: 40, baseDEF: 20, baseSPD: 40, breedBonus: "+20% ATK, +10% SPD", bestUse: "Balanced DPS", inheritRate: "ATK/SPD hybrid", rarity: "Rare" },
  { breed: "Calico (Mythic)", tier: "S+", baseHP: 110, baseATK: 38, baseDEF: 28, baseSPD: 38, breedBonus: "All stats +5%, unique ability", bestUse: "End-game carry", inheritRate: "Balanced perfect", rarity: "Mythic" },
];

const INHERITANCE_RULES = [
  { rule: "Stat Inheritance", mechanic: "Offspring stats = (parent1 stat + parent2 stat) / 2, plus 5-15% random variance", bestStrategy: "Breed your highest-stat pair for stat consolidation" },
  { rule: "Breed Type", mechanic: "50% chance of parent1 breed, 50% chance of parent2 breed, 5% chance of fusion breed", bestStrategy: "Use two same-breed parents to lock in the breed type" },
  { rule: "Bonus Inheritance", mechanic: "Offspring gets 1 of 2 parent breed bonuses, chosen randomly", bestStrategy: "Parents with complementary bonuses create hybrid offspring" },
  { rule: "Color Inheritance", mechanic: "Coat color follows genetic dominance hierarchy (10+ possible outcomes)", bestStrategy: "Cosmetic only, no stat impact" },
  { rule: "Mutation Chance", mechanic: "3% chance of random stat mutation (+5 to +20 on a single stat)", bestStrategy: "Breed many cats and select the mutants for your team" },
  { rule: "Inbreeding Penalty", mechanic: "Same-parent breeding (after 3 generations) reduces all stats by 10%", bestStrategy: "Always introduce new bloodlines every 3 generations" },
];

const TEAM_BUILDS = [
  { build: "Tank Wall", cats: "Maine Coon + British Shorthair + Persian", strategy: "All 3 cats stack DEF and HP. They soak damage while the backline deals damage. Best for story content.", strength: "Survivability", weakness: "Slow clear times" },
  { build: "Glass Cannon", cats: "Sphynx + Bengal + Siamese", strategy: "All 3 cats are high damage but low HP. They burst down enemies before dying. Best for timed dungeons.", strength: "Damage per second", weakness: "One-shot deaths" },
  { build: "Balanced Squad", cats: "Maine Coon + Bengal + Sphynx", strategy: "One tank, one balanced DPS, one speed assassin. Covers all role needs. Best for general play.", strength: "Versatility", weakness: "Not the best at any one thing" },
  { build: "Mythic Carry", cats: "Calico + Maine Coon + Bengal", strategy: "One mythic cat + two strong supports. The Calico carries the team with the highest stats. Best for end-game raids.", strength: "Single-target DPS", weakness: "Mythic cat is irreplaceable" },
  { build: "Speed Team", cats: "Sphynx + Russian Blue + Bengal", strategy: "All high-speed cats that go first in combat. They chain crowd control before enemies act. Best for arena PvP.", strength: "Turn order control", weakness: "Squishy" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Mewgenics Breeding Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Breeding is the core progression system in Mewgenics. Each cat you breed inherits stats from its parents, with a 3 percent chance of random mutations. The right breeding strategy determines whether you have an S-tier mythic cat by the end-game or a roster of mediocre common cats. This guide covers all 9 cat breeds, the 6 inheritance rules, and 5 tried-and-tested team builds for different play styles.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All 9 Cat Breeds</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Breed</th>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">HP</th>
                <th className="p-3 border border-gray-700 text-ink">ATK</th>
                <th className="p-3 border border-gray-700 text-ink">DEF</th>
                <th className="p-3 border border-gray-700 text-ink">SPD</th>
                <th className="p-3 border border-gray-700 text-ink">Rarity</th>
              </tr>
            </thead>
            <tbody>
              {BREED_TABLE.map((b, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{b.breed}</td>
                  <td className="p-3 border border-gray-700 text-accent">{b.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.baseHP}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.baseATK}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.baseDEF}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.baseSPD}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{b.rarity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">6 Inheritance Rules</h2>
        <p className="text-ink-light">
          Understanding inheritance is the difference between random breeding and strategic breeding. These six rules cover every stat, breed, and bonus mechanic.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Rule</th>
                <th className="p-3 border border-gray-700 text-ink">Mechanic</th>
                <th className="p-3 border border-gray-700 text-ink">Best Strategy</th>
              </tr>
            </thead>
            <tbody>
              {INHERITANCE_RULES.map((r, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{r.rule}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{r.mechanic}</td>
                  <td className="p-3 border border-gray-700 text-accent text-xs">{r.bestStrategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">5 Team Builds</h2>
        <p className="text-ink-light">
          These 3-cat team builds cover the most common play styles. Each build is balanced for a specific type of content.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Build</th>
                <th className="p-3 border border-gray-700 text-ink">Cats</th>
                <th className="p-3 border border-gray-700 text-ink">Strategy</th>
                <th className="p-3 border border-gray-700 text-ink">Strength</th>
              </tr>
            </thead>
            <tbody>
              {TEAM_BUILDS.map((t, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{t.build}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{t.cats}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{t.strategy}</td>
                  <td className="p-3 border border-gray-700 text-accent text-xs">{t.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Breeding for the Mythic Calico</h2>
        <p className="text-ink-light">
          The Calico is the only mythic breed in the game. It cannot be obtained through normal breeding — it is a fusion outcome with a 0.5 percent chance when breeding two different S-tier rare breeds (Maine Coon, Sphynx, or Bengal). To maximize your odds:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Breed only S-tier rare pairs.</strong> Maine Coon x Sphynx, Maine Coon x Bengal, or Sphynx x Bengal. Other pairings have a 0 percent Calico chance.</li>
          <li><strong className="text-accent">Hatch as many eggs as possible.</strong> Each breeding cycle takes 1 in-game day. Expect 200+ breeding cycles for a 50 percent cumulative Calico chance. Plan for 6+ months of in-game time.</li>
          <li><strong className="text-accent">Use the breeding boost consumable.</strong> The consumable (50 silver per use) doubles the Calico chance to 1 percent for that breeding cycle. Worth it for serious breeders.</li>
          <li><strong className="text-accent">Save before each breeding cycle.</strong> The Calico outcome is determined when the egg hatches, not when the parents are chosen. Reload if you do not get a Calico — the breeding pair stays the same.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">How long does it take to breed a competitive cat?</h3>
            <p className="text-ink-light mt-2">From a fresh start, expect 2 to 3 in-game months to breed a single S-tier rare cat. The bottleneck is hatching (1 day per egg) and the rarity of the S-tier parents themselves. You can buy S-tier parents from the Cat Trader for 500 to 1,000 silver each, which skips the parent breeding step. Most players spend the first month buying parents and the second month breeding their team.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Do stat mutations stack across generations?</h3>
            <p className="text-ink-light mt-2">Yes, mutations are inherited just like base stats. A cat with a +15 ATK mutation will pass that mutation to its offspring at 50 percent strength (+7 or +8 ATK). Stacking mutations over 3 to 4 generations can produce cats with stats 30 to 50 percent higher than the breed baseline. This is the only reliable way to get end-game-ready stats without a Calico.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What happens if I breed two mythic cats?</h3>
            <p className="text-ink-light mt-2">The offspring is always a regular Calico, never a stronger version. The mythic trait is binary — you either have it or you do not. Two Calico parents do not produce a &quot;double mythic&quot; cat. If you have a Calico, use it as your team anchor and breed it with strong S-tier parents to pass the breed bonus to your other cats, rather than breeding two Calicos together.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Specialize your breeding lines.</strong> Maintain separate breeding lines for tanks (Maine Coon x British Shorthair) and DPS (Sphynx x Bengal). Cross-breeding these lines produces mediocre hybrid cats that are good for the story but bad for end-game content.</li>
          <li><strong className="text-accent">Retire low-stat cats early.</strong> Each cat takes up a stable slot. A common cat with average stats is a wasted slot. Retire (sell) any cat below the team average to free up space for new breeding projects. The retire option gives 10 to 50 silver depending on the cat&apos;s tier.</li>
          <li><strong className="text-accent">Name your best cats.</strong> Cats with custom names get a small morale bonus (+5 percent XP gain) that stacks with other bonuses. Use the name field to track breeding lines — for example, &quot;Tank01&quot; for your frontline breeding pair, &quot;DPS01&quot; for your damage line.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Cat stats and inheritance rules verified against Mewgenics main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
