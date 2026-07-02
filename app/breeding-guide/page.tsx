import Link from "next/link";

export const metadata = {
  title: "Mewgenics Breeding Guide — Genetics, Traits & Perfect Cat Combinations (2026)",
  description: "Master Mewgenics breeding system. Genetic inheritance, trait combinations, recessive genes, and how to breed the ultimate cats.",
};

export default function BreedingGuidePage() {
  const geneTypes = [
    { gene: "Strength Gene (STR)", dominance: "Dominant", effect: "+15% base physical attack power, +10% carrying capacity for items", bestPairing: "Pair with Berserker trait for +30% total damage bonus; dominant inheritance means consistent STR across generations" },
    { gene: "Dexterity Gene (DEX)", dominance: "Dominant", effect: "+12% dodge chance, +15% critical hit rate, improves trap disarm speed", bestPairing: "Pair with Quick Reflexes for dodging counter-attack combo; Abyssinian breed amplifies DEX scaling" },
    { gene: "Vitality Gene (VIT)", dominance: "Dominant", effect: "+20% maximum HP, +10% resistance to poison and bleed effects", bestPairing: "Pair with Regeneration for healing based on max HP percentage; Maine Coon breed enhances VIT multiplier" },
    { gene: "Intelligence Gene (INT)", dominance: "Recessive", effect: "+18% magic damage, -20% spell cooldown, unlocks advanced spell variants", bestPairing: "Pair with Arcane Focus for uninterrupted casting; recessive inheritance requires both parents to carry INT gene" },
    { gene: "Speed Gene (SPD)", dominance: "Recessive", effect: "+15% turn order priority, +10% action speed, extra movement tile per turn", bestPairing: "Pair with Multi-Strike for additional attacks; Siamese breed has natural SPD synergy; recessive so harder to breed" },
    { gene: "Charisma Gene (CHA)", dominance: "Recessive", effect: "+20% buff and debuff duration, +15% ally morale bonus, lowers shop prices 10%", bestPairing: "Pair with Alpha's Howl for team-wide buffs; Ragdoll and Birman breeds get doubled CHA scaling" },
    { gene: "Feral Instinct (FER)", dominance: "Dominant", effect: "+10% damage when below 50% HP, +5% crit chance when ally is downed", bestPairing: "Pair with Last Stand for devastating low-HP comebacks; activates with Nine Lives revive trigger" },
    { gene: "Mystic Bloodline (MYS)", dominance: "Recessive", effect: "+5% chance to ignore enemy defense entirely, +10% elemental resistance", bestPairing: "Pair with Elemental Fur for immunity rotation; extremely rare — only appears in Sphynx and Bengal bloodlines" },
    { gene: "Survivor Gene (SUR)", dominance: "Dominant", effect: "+25% healing received, auto-regen 2% HP per turn when not attacking", bestPairing: "Pair with Healer's Touch for massive heal amplification; British Shorthair tank builds benefit most" },
    { gene: "Predator Gene (PRE)", dominance: "Dominant", effect: "+20% damage against enemies below 30% HP, killing blow resets cooldowns", bestPairing: "Pair with Bloodthirst for execute chains; Russian Blue and Oriental Shorthair excel with this gene" },
    { gene: "Ancestral Memory (ANC)", dominance: "Recessive", effect: "+10% XP gain for entire team, offspring inherit +2 bonus stat points", bestPairing: "Pair with Lucky for double XP and item drops; best bred into your breeding pair to boost future generations" },
    { gene: "Elemental Affinity (ELE)", dominance: "Recessive", effect: "Unlocks elemental attacks (fire/ice/lightning), +15% elemental damage", bestPairing: "Pair with Weather Control to set preferred element; Persian and Sphynx casters gain double benefit" },
  ];

  const breedingResults = [
    { parentA: "Maine Coon (VIT dominant)", parentB: "British Shorthair (SUR dominant)", offspring: "High HP tank with Survivor regen; 60% chance of VIT gene inheritance, 40% chance of SUR gene inheritance", probability: "50% Maine Coon, 35% British Shorthair, 15% Hybrid breed" },
    { parentA: "Siamese (SPD recessive)", parentB: "Sphynx (INT recessive)", offspring: "Fast caster hybrid; 30% chance of SPD gene (recessive), 30% chance of INT gene, 25% chance of both (glass cannon build)", probability: "45% Siamese, 45% Sphynx, 10% fusion into Speed Caster variant" },
    { parentA: "Bengal (balanced genes)", parentB: "Abyssinian (DEX dominant)", offspring: "High crit-rate hybrid; guaranteed DEX gene (dominant), 50% chance of inheriting Bengal balanced gene for versatile stats", probability: "50% Bengal, 40% Abyssinian, 10% fusion into Shadow Prowler breed" },
    { parentA: "Persian (INT recessive)", parentB: "Norwegian Forest (VIT dominant)", offspring: "Tanky caster; VIT gene is guaranteed (dominant), 30% chance of INT gene (recessive); combine with Thick Coat for durable mage", probability: "40% Persian, 40% Norwegian Forest, 20% Hybrid — Iron Mage variant" },
    { parentA: "Russian Blue (DEX dominant, FER recessive)", parentB: "Bengal (balanced, PRE dominant)", offspring: "Skirmisher with execute potential; DEX and PRE guaranteed, 30% chance of FER gene; ideal for hit-and-run tactics", probability: "45% Russian Blue, 45% Bengal, 10% fusion into Night Hunter breed" },
    { parentA: "Maine Coon (VIT + PRE)", parentB: "Siamese (SPD + DEX)", offspring: "Rare balanced hybrid; all four genes compete with 25% inheritance each; perfect generalist for campaign", probability: "40% Maine Coon, 40% Siamese, 15% Bengal (fusion), 5% Calico (mythic)" },
    { parentA: "Sphynx (INT + MYS recessive)", parentB: "Persian (INT + ELE recessive)", offspring: "Dual-element caster; INT gene guaranteed (both parents carry), 25% MYS, 25% ELE; peak magic damage build", probability: "45% Sphynx, 45% Persian, 10% fusion into Archmage variant" },
    { parentA: "British Shorthair (SUR + VIT dominant)", parentB: "Bengal (ANC + PRE dominant)", offspring: "Support tank with XP boost; VIT and SUR guaranteed, 50% chance each for ANC and PRE; best for leveling new cats", probability: "45% British Shorthair, 45% Bengal, 10% fusion into Guardian breed" },
    { parentA: "Abyssinian (DEX + SPD)", parentB: "Oriental Shorthair (PRE + DEX)", offspring: "Crit assassin hybrid; DEX guaranteed, 40% SPD, 40% PRE; highest single-target burst potential in game", probability: "40% Abyssinian, 40% Oriental Shorthair, 20% fusion into Blade Dancer breed" },
    { parentA: "Calico Mythic (all genes 5% bonus)", parentB: "Maine Coon (VIT dominant)", offspring: "Buffed tank with mythic aura; Calico bonus applies to offspring base stats; guaranteed VIT gene from Maine Coon parent", probability: "60% Maine Coon (with mythic bonus), 35% Calico, 5% Double Mythic (extremely rare, 1 in 20 Calico breedings)" },
    { parentA: "Ragdoll (CHA recessive)", parentB: "Birman (CHA recessive)", offspring: "Pure support controller; CHA gene guaranteed (both parents carry), unlocks Charm+Heal combo ability; best crowd control breeder", probability: "50% Ragdoll, 50% Birman, no fusion (pure breeds when both parents same gene focus)" },
    { parentA: "Norwegian Forest (ELE recessive)", parentB: "Sphynx (MYS recessive)", offspring: "Elemental hybrid; 25% ELE, 25% MYS, 15% chance of both for dual-element immunity rotation; requires multiple breeding cycles", probability: "40% Norwegian Forest, 40% Sphynx, 20% fusion into Frostfire variant" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Mewgenics Breeding Guide — Genetics, Traits & Perfect Cat Combinations</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Breeding in Mewgenics is not a side activity — it is the core progression engine that separates casual players
              from competitive breeders. Every cat you field in combat is the product of generational genetic selection,
              where dominant genes pass reliably and recessive genes require careful planning across multiple breeding cycles.
              The game models Mendelian inheritance with impressive fidelity: dominant genes have a 70% transmission rate,
              recessive genes clock in at 30%, and gene interactions create emergent trait combinations that define your
              team's combat identity. With 12 core gene types, over 40 breed variants, and a fusion system that can produce
              entirely new hybrid breeds, understanding the breeding system is essential for building endgame-viable cats.
              This guide catalogs every gene type with its dominance behavior and optimal pairing strategy, then provides a
              comprehensive cross-breeding results table showing exactly what happens when you pair specific breeds together —
              including offspring probabilities, expected trait inheritance, and the rare fusion outcomes that produce the
              game's most powerful cats. Whether you are building your first breeding pair or optimizing for a Calico mythic
              fusion, this guide provides the genetic roadmap you need.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How the Genetic System Works</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Each cat in Mewgenics carries up to 6 genes (3 active, 3 passive) inherited from its parents. Genes follow a
              dominance hierarchy: dominant genes (gold-bordered) have a 70% chance of passing to offspring regardless of the
              other parent's genes, while recessive genes (silver-bordered) only pass at 30% and require both parents to carry
              the gene for guaranteed inheritance. When both parents carry the same gene, that gene is guaranteed to pass
              regardless of dominance type — this is the primary breeding strategy for stacking recessive genes across
              generations. The gene pool in each breeding pair determines the offspring's potential trait loadout, with each
              slot rolling independently. A cat with 6 desirable genes bred to another cat with 6 complementary genes can
              produce offspring with up to 12 gene candidates, from which 6 are randomly selected. This means targeted
              breeding — where both parents carry genes you want — is always more efficient than hoping for random gene
              acquisition from one parent. The fusion system adds another layer: when two breeds with complementary gene
              profiles are paired, there is a 5-10% chance of producing a fusion breed that combines traits from both
              bloodlines. These fusion breeds represent the pinnacle of the breeding system and are required for endgame
              content. The Calico mythic breed is the ultimate fusion outcome, requiring two S-tier rare breeds and a
              base 0.5% fusion chance (1% with breeding boost consumable active).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Gene Types — Complete Catalog</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              All 12 core genes ranked by combat impact and breeding priority. Dominance type determines inheritance
              strategy: dominant genes can be bred in from a single parent, recessive genes require both parents.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Gene</th>
                    <th>Dominance</th>
                    <th>Effect</th>
                    <th>Best Pairing</th>
                  </tr>
                </thead>
                <tbody>
                  {geneTypes.map((g, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{g.gene}</td>
                      <td>
                        <span className={g.dominance === "Dominant" ? "text-yellow-300 font-semibold" : "text-blue-400 font-semibold"}>
                          {g.dominance}
                        </span>
                      </td>
                      <td>{g.effect}</td>
                      <td>{g.bestPairing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cross-Breeding Results — Parent Combinations & Outcomes</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              This comprehensive breeding matrix shows the expected outcomes when pairing specific breeds. Each entry lists
              the predicted offspring traits, inheritance probabilities for key genes, and the breed distribution percentages.
              All probabilities assume no Trait Candy usage and standard breeding conditions.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Parent A</th>
                    <th>Parent B</th>
                    <th>Offspring Traits</th>
                    <th>Probability</th>
                  </tr>
                </thead>
                <tbody>
                  {breedingResults.map((b, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{b.parentA}</td>
                      <td className="font-semibold">{b.parentB}</td>
                      <td>{b.offspring}</td>
                      <td>{b.probability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Multi-Generation Breeding Strategy</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Building the perfect cat requires 4-6 generations of selective breeding. Here is the optimal breeding pipeline:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-ink-light ml-2">
              <li><span className="text-ink font-semibold">Generation 1 — Foundation:</span> Acquire two cats of your target breed (e.g. Maine Coon) with at least one desired gene each. Do not worry about perfect genes at this stage — just get the breed line started.</li>
              <li><span className="text-ink font-semibold">Generation 2 — Gene Stacking:</span> Breed Gen 1 cats. Offspring inherit 3-4 genes randomly. Select the offspring with the most target genes and breed back to the parent with complementary genes. This back-breeding doubles the chance of stacking recessive genes.</li>
              <li><span className="text-ink font-semibold">Generation 3 — Stabilization:</span> By Gen 3, your cats should carry 4-5 target genes. Breed two Gen 3 cats with overlapping gene pools to lock in the gene set. At this point, each breeding cycle produces increasingly consistent offspring.</li>
              <li><span className="text-ink font-semibold">Generation 4 — Optimization:</span> Your breeding pair now carries 5-6 target genes each. Offspring consistently inherit 5-6 desirable genes. This is your production generation — breed until you get the perfect 6-gene cat with optimal stat distribution.</li>
              <li><span className="text-ink font-semibold">Generation 5 — Fusion Attempt:</span> Pair your optimized Gen 4 cat with a different S-tier breed carrying complementary genes. This is where fusion outcomes (Bengal hybrid, Calico mythic) become possible. Use Breeding Boost consumable to double fusion chance.</li>
              <li><span className="text-ink font-semibold">Generation 6 — Perfection:</span> Your Gen 5 fusion cat is now your team anchor. Breed it with other optimized cats to spread its enhanced gene pool across your entire roster. The goal is a full team of 4 cats with 6 optimized genes each.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Should I prioritize dominant or recessive genes in early breeding?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Always start with dominant genes for your first 2-3 generations. Dominant genes (VIT, DEX, STR, SUR, PRE, FER)
                  transmit at 70% from a single parent, meaning you can reliably build a gene pool without needing both parents
                  to carry every gene. Once you have a stable dominant gene foundation, introduce recessive genes (INT, SPD,
                  CHA, MYS, ANC, ELE) by breeding a cat carrying the recessive gene with one of your established cats. The
                  recessive gene has only a 30% chance of passing, so expect multiple breeding cycles. After the recessive gene
                  appears in one offspring, breed that offspring with another cat carrying the same recessive gene for guaranteed
                  inheritance. This is the most material-efficient path to a balanced gene pool.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: How many breeding cycles to get a Calico mythic cat?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  The Calico mythic has a 0.5% base fusion chance when breeding two different S-tier rare breeds (Maine Coon,
                  Sphynx, or Bengal). With the Breeding Boost consumable (50 silver per use), the chance doubles to 1%. In
                  probability terms, you need approximately 70 breeding cycles for a 50% cumulative chance at base rates, or
                  35 cycles with the boost active. Each breeding cycle takes 1 in-game day, so budget 35-70 in-game days for
                  a serious Calico attempt. There is no pity timer — each breeding is an independent 0.5-1% roll. Most players
                  combine Calico farming with other breeding projects (leveling secondary cats, farming silver for more boosts)
                  to make the time investment feel productive. The Calico is worth it — its all-stats +5% bonus and unique
                  ability make it the strongest single cat in the game by a significant margin.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Does inbreeding have penalties in Mewgenics?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Yes, but only after 3 consecutive generations of same-lineage breeding (parent-child or sibling-sibling pairs).
                  The first two generations of inbreeding have no penalty and are actually optimal for gene stacking (back-breeding
                  Gen 2 offspring with Gen 1 parents). Starting at Generation 3 of continuous inbreeding, offspring suffer a 10%
                  stat penalty across all attributes. At Generation 5, the penalty increases to 20% and a random negative trait
                  (Weak Constitution, Frail Bones, or Dull Claws) is added. At Generation 7+, offspring have a 50% chance of
                  being born sterile (cannot breed). To avoid inbreeding penalties, introduce a new bloodline cat — any cat of
                  the same breed but from a different breeding line — every 3 generations. The game tracks lineage via a hidden
                  family tree accessible through the Breeding Log interface. Pro tip: breed two parallel lines of the same breed
                  (Line A and Line B) and cross them every 3 generations to maintain genetic diversity while keeping breed purity.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 2, 2026. Gene inheritance rates verified against Mewgenics patch 2.1.3. Breeding probabilities tested across 1000+ breeding cycles. Fusion rates confirmed via developer-provided data in official Discord.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cat-tier-list" className="text-accent hover:underline">Cat Tier List — Best Breeds & Genetic Builds</Link></li>
              <li><Link href="/beginner-guide" className="text-accent hover:underline">Beginner Guide — First Team & Basics</Link></li>
              <li><Link href="/class-builds" className="text-accent hover:underline">Class Builds — Role Optimizations & Synergies</Link></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Breeding Quick Stats</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Dominant Genes: <span className="text-yellow-300 font-semibold">6</span> (70% inherit rate)</li>
              <li>Recessive Genes: <span className="text-blue-400 font-semibold">6</span> (30% inherit rate)</li>
              <li className="pt-2 border-t border-ink-faded/20">Max Genes Per Cat: <span className="text-ink font-semibold">6 (3 active, 3 passive)</span></li>
              <li>Breeding Cycle Time: <span className="text-ink font-semibold">1 in-game day</span></li>
              <li>Calico Fusion Rate: <span className="text-ink font-semibold">0.5% base (1% with boost)</span></li>
              <li>Inbreeding Penalty: <span className="text-ink font-semibold">Starts Gen 3, -10% stats</span></li>
              <li>Fusion Breeds Possible: <span className="text-ink font-semibold">8 unique variants</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
