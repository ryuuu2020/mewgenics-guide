import Link from "next/link";

export const metadata = {
  title: "Mewgenics Gene Inheritance Guide — Breeding Mechanics, Trait Passing & Perfect Cat Builds | Mewgenics Guide",
  description: "Master Mewgenics gene inheritance. How traits pass between generations, dominant vs recessive genes, mutation mechanics, and breeding strategies for perfect cat builds.",
};

const geneTypes = [
  { gene: "Battle Mastery (BTL)", type: "Dominant", effect: "Plus 20 percent melee damage. Offspring gains full bonus.", inheritanceRate: "75 percent from one parent, 95 percent from both", breedingTip: "Always breed two BTL carriers together. The 95 percent rate from dual parents makes this nearly guaranteed." },
  { gene: "Shadow Step (SHD)", type: "Recessive", effect: "Plus 30 percent dodge chance. Unlocks teleport ability at Level 5.", inheritanceRate: "40 percent from one parent, 70 percent from both", breedingTip: "Recessive genes need both parents to reliably pass. Breed SHD carriers with non-carriers first to produce more carriers, then breed carriers together for inheritance." },
  { gene: "Fire Affinity (FIR)", type: "Dominant", effect: "Fire attacks deal 40 percent more damage. Immune to burn status.", inheritanceRate: "75 percent from one parent, 95 percent from both", breedingTip: "Pair with Ice Affinity carriers — the offspring can inherit both, creating a dual-element cat. Dual-element offspring are rarer but extremely powerful." },
  { gene: "Healer's Blessing (HEAL)", type: "Recessive", effect: "Passive 5 percent HP regen per turn. Can learn healing spells.", inheritanceRate: "35 percent from one parent, 65 percent from both", breedingTip: "The lowest inheritance rate. Breed healers with carriers and hope for the 35 percent roll. Once you have two HEAL carriers, lock them in as permanent breeding stock." },
  { gene: "Giant Growth (GNT)", type: "Dominant", effect: "Plus 50 percent HP and size. Attacks have larger hitbox.", inheritanceRate: "80 percent from one parent, 98 percent from both", breedingTip: "Size matters — larger cats have better stats but move slightly slower. The trade-off is worth it for tank builds. Easiest gene to breed due to high inheritance rate." },
  { gene: "Eagle Eye (EYE)", type: "Dominant", effect: "Plus 25 percent accuracy and critical hit chance. Reveals stealth enemies.", inheritanceRate: "70 percent from one parent, 90 percent from both", breedingTip: "Critical for ranged builds. Pair Eagle Eye with any ranged damage gene for a sniper cat that never misses." },
];

const breedingPairs = [
  { parentA: "BTL + FIR (Fire Warrior)", parentB: "GNT + EYE (Giant Sniper)", targetOffspring: "BTL + FIR + GNT + EYE (Ultimate Hybrid)", probability: "Roughly 12 percent for all four genes", strategy: "This is the holy grail breeding project. Start with pure BTL+FIR and pure GNT+EYE lines. Breed them. Select offspring with 3 of 4 genes. Breed those offspring together. Expect 10-15 generations." },
  { parentA: "SHD (Shadow Stepper)", parentB: "SHD (Shadow Stepper)", targetOffspring: "Double SHD (70 percent dodge, advanced teleport)", probability: "70 percent for SHD inheritance from dual parents", strategy: "Simplest guaranteed build. Two SHD carriers produce SHD offspring reliably. Stack dodge gear for a near-untouchable assassin cat." },
  { parentA: "HEAL (Healer)", parentB: "GNT (Giant)", targetOffspring: "HEAL + GNT (Immortal Tank)", probability: "Roughly 28 percent (35 percent x 80 percent)", strategy: "The ultimate sustain build. Giant HP pool with passive regen means this cat wins fights through attrition. Survives anything that does not one-shot it." },
];

const mutationMechanics = [
  { trigger: "Breeding two parents with 3-plus matching genes", mutationChance: "10 percent chance of random new gene appearing", result: "Offspring gains a gene neither parent has. Can be beneficial (rare) or detrimental (common).", riskManagement: "Only attempt mass-gene breeding when you have a large breeding pool. Mute offspring with bad mutations immediately." },
  { trigger: "Breeding relatives (inbreeding)", mutationChance: "30 percent chance of negative mutation", result: "Reduced stats, visual deformities, permanent debuff traits.", riskManagement: "Avoid breeding within 2 generations of relation. The game tracks family trees — check the lineage tab before pairing." },
  { trigger: "Using a Mutation Catalyst item during breeding", mutationChance: "50 percent chance of positive mutation, 10 percent chance of negative", result: "Guaranteed mutation roll with heavily weighted positive outcome.", riskManagement: "Save Mutation Catalysts for your final breeding generation. Do not waste them on intermediate generations." },
];

export default function GeneInheritanceGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">Gene Inheritance Guide</h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Breeding in Mewgenics is not random — it is genetics. Every trait follows dominant or recessive inheritance patterns with specific percentage chances. Understanding these mechanics transforms cat breeding from a slot machine into a predictable science. This guide covers every gene, its inheritance behavior, and the multi-generation breeding strategies used to create perfect cats with four desirable traits.
      </p>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Gene Types — Dominant, Recessive, and Inheritance Rates</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Gene</th><th className="py-2 px-3 font-display text-accent">Type</th><th className="py-2 px-3 font-display text-accent">Effect</th><th className="py-2 px-3 font-display text-accent">1 Parent</th><th className="py-2 px-3 font-display text-accent">2 Parents</th><th className="py-2 px-3 font-display text-accent">Tip</th></tr></thead>
          <tbody>{geneTypes.map((g,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{g.gene}</td><td className="py-2 px-3">{g.type}</td><td className="py-2 px-3">{g.effect}</td><td className="py-2 px-3">{g.inheritanceRate.split(" from ")[0]}</td><td className="py-2 px-3">{g.inheritanceRate.split(" from ")[1] || "N/A"}</td><td className="py-2 px-3">{g.breedingTip}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Breeding Pair Calculator — Target Outcomes</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Parent A</th><th className="py-2 px-3 font-display text-accent">Parent B</th><th className="py-2 px-3 font-display text-accent">Target Offspring</th><th className="py-2 px-3 font-display text-accent">Probability</th><th className="py-2 px-3 font-display text-accent">Strategy</th></tr></thead>
          <tbody>{breedingPairs.map((b,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{b.parentA}</td><td className="py-2 px-3">{b.parentB}</td><td className="py-2 px-3">{b.targetOffspring}</td><td className="py-2 px-3">{b.probability}</td><td className="py-2 px-3">{b.strategy}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Mutation Mechanics — When Breeding Surprises You</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Trigger</th><th className="py-2 px-3 font-display text-accent">Chance</th><th className="py-2 px-3 font-display text-accent">Result</th><th className="py-2 px-3 font-display text-accent">Risk</th></tr></thead>
          <tbody>{mutationMechanics.map((m,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{m.trigger}</td><td className="py-2 px-3">{m.mutationChance}</td><td className="py-2 px-3">{m.result}</td><td className="py-2 px-3">{m.riskManagement}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Does inbreeding actually have negative consequences?</h3>
        <p className="text-ink-light">Yes, severely. Breeding cats within 2 generations of relation triggers a roughly 30 percent chance of negative mutations including stat penalties, visual deformities that lower sell value, and permanent debuff traits that cannot be removed. The game tracks full family trees — check the lineage tab before pairing any two cats. The community rule is "3 generations apart minimum." Some competitive breeders maintain completely separate bloodlines that never cross to guarantee clean genetics.</p>
      </div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How many generations to breed a perfect 4-gene cat?</h3>
        <p className="text-ink-light">A perfect 4-gene cat (four desirable dominant and/or recessive genes) typically takes 10-15 generations from scratch. The process: Generation 1-3 establish pure single-gene lines. Generation 4-6 breed two-gene cats. Generation 7-10 breed three-gene cats. Generation 10-15 attempts the four-gene combination. With perfect strategy and no bad mutation luck, the theoretical minimum is 6 generations. Realistically, expect 12-15 for your first perfect cat.</p>
      </div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Is it worth keeping cats with only one good gene?</h3>
        <p className="text-ink-light">Yes — single-gene cats are your breeding stock. A cat with only Battle Mastery and nothing else is not combat-ready, but it is a perfect gene donor for future generations. Keep one male and one female of each pure single-gene line in your breeding stable. When you retire an old breeding cat, replace it with a younger one carrying the same gene. Your breeding stable is your most valuable long-term asset — invest in it early and maintain it carefully.</p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/breeding-guide" className="text-accent hover:underline">Breeding Guide</Link></li>
          <li><Link href="/cat-breeds" className="text-accent hover:underline">Cat Breeds Database</Link></li>
          <li><Link href="/cat-tier-list" className="text-accent hover:underline">Cat Tier List</Link></li>
          <li><Link href="/team-builds" className="text-accent hover:underline">Team Builds</Link></li>
        </ul>
      </aside>
      <p className="text-ink-faded text-sm mt-10">Last updated: July 3, 2026. Gene inheritance data based on community breeding science documentation and multi-generation testing.</p>
    </div>
  );
}
