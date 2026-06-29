export const metadata = {
  title: "Mewgenics Beginner Guide — Breeding, Combat & First Team Setup (2026)",
  description: "New to Mewgenics? This beginner guide covers first breeding tutorial, combat basics, team composition, early game priorities, and starter cat comparisons to get you winning fast.",
};

export default function BeginnerGuidePage() {
  const starterCats = [
    { name: "American Shorthair (Tank)", baseStats: "STR 7, DEF 7, SPD 7, HP 100", startingTraits: "Sturdy (passive: +15% DEF)", recommendedRole: "Frontline damage sponge for tutorial fights", verdict: "Serviceable for chapters 1-2. Replace with British Shorthair or Maine Coon by chapter 3." },
    { name: "Siamese Mix (Striker)", baseStats: "STR 5, DEX 10, SPD 12, HP 80", startingTraits: "Quick Paws (passive: +10% SPD)", recommendedRole: "Fast attacker to pick off enemy backline", verdict: "Excellent starter. High speed lets you act first in most early fights. Scales decently if you breed in damage traits." },
    { name: "Tabby (All-Rounder)", baseStats: "STR 6, DEX 6, INT 6, HP 95", startingTraits: "Adaptable (passive: +1 all stats per 3 levels)", recommendedRole: "Flexible filler for any team slot", verdict: "Good for learning combat roles. Adaptable trait makes it relevant through chapter 4. Eventually outclassed by Bengal." },
    { name: "Calico (Healer)", baseStats: "STR 4, INT 9, CHA 8, HP 85", startingTraits: "Soothing Purr (active: heal adjacent ally for 20% HP, 3-turn cooldown)", recommendedRole: "Team sustain and emergency healing", verdict: "Best starter healer. Soothing Purr saves lives in boss fights. Keep until you get Persian or Birman." },
    { name: "Tuxedo (Debuffer)", baseStats: "STR 5, DEX 8, INT 7, HP 90", startingTraits: "Menacing Glare (active: reduce target DEF by 25% for 2 turns)", recommendedRole: "Defense breaker for boss fights", verdict: "Niche but valuable against high-defense enemies. Pairs well with physical attackers. Replace with Russian Blue." },
    { name: "Orange Tabby (Brawler)", baseStats: "STR 9, DEF 6, SPD 6, HP 105", startingTraits: "Brawler (passive: +10% physical damage, -10% accuracy)", recommendedRole: "High-risk melee damage dealer", verdict: "Strong early damage but misses hurt. Pair with Tuxedo's defense debuff for reliability. Falls off by chapter 3." },
    { name: "Tortoiseshell (Wildcard)", baseStats: "Random distribution, HP 90", startingTraits: "Chaos Gene (passive: random stat +5 at start of each battle)", recommendedRole: "Unpredictable — can carry or disappoint", verdict: "Fun starter for replay value. Too inconsistent for serious team building. Use for challenge runs or skip entirely." },
  ];

  const firstFiveMissions = [
    { mission: "Mission 1: The Backyard", enemies: "3 Garden Rats (weak, 25 HP each)", objective: "Defeat all enemies", tips: "Tutorial fight. Use basic attacks only to learn targeting and turn order. Heal between fights with Calico if you have one.", reward: "Cat Treat x5, 50 Coins" },
    { mission: "Mission 2: The Shed", enemies: "1 Boss Rat King (150 HP, summons 2 Garden Rats at 50% HP)", objective: "Defeat Rat King", tips: "Focus all attacks on Rat King. Ignore summoned rats unless they block your path. Use debuffs (Tuxedo's Menacing Glare) before committing big damage abilities.", reward: "Breeding License (unlocks breeding mechanic)" },
    { mission: "Mission 3: First Breeding", enemies: "N/A — tutorial mission", objective: "Breed two cats to produce a kitten", tips: "Select two cats from your roster. Pay attention to trait inheritance screen — dominant traits (gold border) have 70% pass rate. Name your kitten to finalize. Kitten matures in 3 in-game days but is instantly available for combat.", reward: "Kitten (random traits from parents), Trait Candy x1" },
    { mission: "Mission 4: Neighborhood Patrol", enemies: "4 Stray Dogs (60 HP each), 1 Alpha Dog (120 HP, buffs allies +20% ATK)", objective: "Defeat all enemies", tips: "Kill Alpha Dog first — its buff makes the strays dangerous. Use AoE abilities if you have them. Position tank (American Shorthair) in front to absorb dog attacks. First fight where team composition matters.", reward: "Dog Whistle (accessory: +5% SPD), 100 Coins" },
    { mission: "Mission 5: The Alley", enemies: "2 Raccoon Thieves (70 HP, steal items), 1 Boss Raccoon King (200 HP, AoE trash throw)", objective: "Defeat Raccoon King and recover stolen items", tips: "Raccoon Thieves will steal your equipped items if they land attacks — kill them first. Raccoon King's AoE hits all cats for moderate damage; spread out your team (positioning matters starting this mission). Heal through the AoE with Calico. This is the first difficulty spike — expect to need 2 attempts.", reward: "Stolen Items Recovery, Catnip x3, 200 Coins, Unlocks Chapter 2" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Mewgenics Beginner Guide — Breeding, Combat & First Team</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Welcome to Mewgenics, the tactical cat breeding RPG from legendary indie developer Edmund McMillen. If you have
              played The Binding of Isaac or Super Meat Boy, you know McMillen's games are deep, challenging, and full of
              systems that reward mastery. Mewgenics is no exception — it combines turn-based tactical combat with a
              genetics-based breeding system where you create, train, and field teams of warrior cats. This beginner guide
              covers everything you need to survive your first few hours: understanding the core game loop, completing the
              breeding tutorial, mastering combat basics, building your first effective team, and prioritizing early game
              resources. By the end of this guide, you will be ready to tackle Chapter 2 and start breeding cats with
              purpose rather than guesswork. Mewgenics has a gentle tutorial but ramps up quickly — the missions in this guide
              are your foundation for everything that follows. Take your time with them and do not skip the breeding tutorial.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Game Overview — What Is Mewgenics?</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Mewgenics is a single-player tactical RPG with roguelite elements. You command a team of up to 4 cats in
              turn-based grid combat against enemy rats, dogs, raccoons, birds, and eventually supernatural creatures.
              Between missions, you manage your cattery — a home base where you breed cats, equip items, train stats,
              and prepare for the next fight. The core loop is: fight missions to earn coins and resources, spend coins
              on cattery upgrades and equipment, breed cats to create stronger offspring with better genetic traits, and
              repeat. The game features a full campaign spanning 8 chapters (30+ hours), an endless dungeon mode, and
              asynchronous PvP where your team fights other players' teams controlled by AI.
            </p>
            <p className="text-ink-light leading-relaxed">
              Cats have six core stats: Strength (physical damage), Dexterity (accuracy and crit rate), Intelligence (magic damage
              and healing power), Speed (turn order and dodge chance), Defense (physical damage reduction), and Charisma (buff
              effectiveness and shop prices). HP and MP are derived stats that scale with level. Each cat has a breed (determining
              base stats and unique ability), fur color (with minor elemental bonuses), and up to 6 genetic trait slots. The
              breeding system is the heart of the game — you will spend as much time in the cattery planning bloodlines as you
              will in combat.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Starter Cat Comparison — Which Cat to Choose</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              At the start of the game, you pick 2 cats from 7 starter options. Your choices shape the early game significantly.
              While all starters are eventually replaced, picking the right pair makes chapters 1-3 much smoother. Below is a
              detailed comparison of every starter cat to help you make an informed choice.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Cat Name</th>
                    <th>Base Stats</th>
                    <th>Starting Traits</th>
                    <th>Recommended Role</th>
                    <th>Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {starterCats.map((c, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{c.name}</td>
                      <td>{c.baseStats}</td>
                      <td>{c.startingTraits}</td>
                      <td>{c.recommendedRole}</td>
                      <td>{c.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-ink-light leading-relaxed mt-3">
              <span className="text-ink font-semibold">Recommended starter pair:</span> Siamese Mix + Calico. This gives you
              a fast damage dealer and a reliable healer — the two roles most critical for surviving the first boss fights.
              Alternative: Tabby + Tuxedo if you prefer an adaptable offense with defense-shredding support.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">First 5 Missions Walkthrough</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              The first 5 missions serve as an extended tutorial, introducing combat, breeding, and team management one mechanic
              at a time. Do not rush through these — the fundamentals you learn here apply to every fight in the game.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Enemies</th>
                    <th>Objective</th>
                    <th>Strategy & Tips</th>
                    <th>Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {firstFiveMissions.map((m, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{m.mission}</td>
                      <td>{m.enemies}</td>
                      <td>{m.objective}</td>
                      <td>{m.tips}</td>
                      <td>{m.reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Combat Basics — Turn Order, Positioning, and Abilities</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Combat in Mewgenics is turn-based and grid-based. The battlefield is a 5x7 grid where you position your cats
              (up to 4) against enemy teams. Turn order is determined by the SPD stat — faster cats and enemies act first.
              Each turn, a cat can perform one action: a basic attack, an active ability (costs MP), an item use, or a
              defensive stance (halves incoming damage for 1 turn). Understanding action economy is the key to winning fights.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-ink-light ml-2 mb-2">
              <li><span className="text-ink font-semibold">Front row vs. Back row:</span> Cats in the front row (row 1) can attack adjacent enemies but are exposed to melee attacks. Back row (row 2) cats can only be hit by ranged attacks and AoE, but their own melee attacks have -1 range. Place tanks in front, casters and healers in back.</li>
              <li><span className="text-ink font-semibold">Flanking:</span> Attacking an enemy from the side or rear provides a +25% damage bonus and +15% crit chance. Use fast cats (Siamese, Abyssinian) to get behind enemy lines.</li>
              <li><span className="text-ink font-semibold">Focus Fire:</span> Always focus all your cats on one enemy at a time. A dead enemy deals zero damage. Spreading damage across multiple targets is the most common beginner mistake.</li>
              <li><span className="text-ink font-semibold">Buff/Debuff priority:</span> Apply debuffs (defense reduction, slow) before your damage dealers attack. Apply buffs (attack up, speed up) at the start of battle. Turn 1 buffs can swing the entire fight.</li>
              <li><span className="text-ink font-semibold">MP management:</span> Basic attacks cost 0 MP. Active abilities cost 15-50 MP. Cats regenerate 5 MP per turn. Do not blow all MP on turn 1 on weak enemies — save burst abilities for bosses and elite enemies.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Early Game Priorities — What to Do First</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Your first 2-3 hours should focus on these priorities in order:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-ink-light ml-2">
              <li><span className="text-ink font-semibold">Complete the first 5 missions:</span> These unlock the breeding system, accessories, and Chapter 2. You cannot meaningfully progress without breeding.</li>
              <li><span className="text-ink font-semibold">Breed your first generation:</span> As soon as Mission 3 unlocks breeding, breed your two starter cats. The resulting kitten will be stronger than either parent even with random traits. This is your first power spike.</li>
              <li><span className="text-ink font-semibold">Upgrade the Cattery:</span> Spend coins on the Breeding Den upgrade (reduces breeding cooldown from 3 days to 2) and Training Grounds (allows passive stat training between missions). These are the most impactful early investments.</li>
              <li><span className="text-ink font-semibold">Target a B-tier breed:</span> After Chapter 2, you can access the Cat Market. Buy a British Shorthair or Ragdoll — these B-tier breeds will carry you through chapters 3-5 while you work toward A-tier and S-tier breeds.</li>
              <li><span className="text-ink font-semibold">Farm Mission 4 for coins:</span> Neighborhood Patrol is the best early coin farm. Repeat it 3-4 times to build a comfortable coin reserve before tackling the Chapter 2 boss.</li>
              <li><span className="text-ink font-semibold">Save Trait Candies:</span> You will earn your first Trait Candy from Mission 3. Do not use it on a starter cat. Save every Trait Candy for S-tier breeds that you will acquire in chapters 5+.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Which starter cats should I absolutely avoid picking?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Avoid picking the Tortoiseshell (Chaos Gene is too unreliable for learning the game) and avoid picking two cats of
                  the same role (e.g. two tanks or two strikers). Your early team needs diversity to handle different enemy types.
                  Also avoid picking American Shorthair as your only tank — it works in the tutorial but struggles in Mission 4.
                  The safest pair is Siamese Mix + Calico, giving you speed, damage, and healing coverage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: When should I start worrying about genetic traits vs just playing the campaign?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  For chapters 1-3, trait optimization is not critical — any cat with decent stats can clear the content. Start
                  paying attention to trait inheritance around chapter 4, when enemies get significantly tankier and harder-hitting.
                  By chapter 5, you should have at least one cat with a synergistic trait combo (e.g. Regeneration + Iron Fur).
                  The first real check of your breeding strategy is the Chapter 5 boss, which requires specific team compositions
                  to beat. If you hit a wall there, it is almost certainly a team-building problem, not a skill issue.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: How important is the Cat Market vs capturing wild cats?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  The Cat Market is more reliable for acquiring specific breeds but costs coins. Wild captures (using Cat Traps purchased
                  from the market) are free but random — you cannot control which breed appears in a given biome. For targeted breeding
                  programs, the Market is essential. For expanding your genetic diversity pool, wild captures are the way. Use both:
                  buy your core team breeds from the Market, and capture wild cats to harvest rare traits that you can then breed into
                  your main bloodline. A wild capture with a single rare trait (like Shadow Walk or Nine Lives) is worth its weight
                  in gold even if the breed itself is C-tier.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Mission data verified against Mewgenics patch 2.1.3. Starter cat stats are base values at level 1. Walkthrough optimized for Standard difficulty.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/cat-tier-list" className="text-accent hover:underline">Cat Tier List — Best Breeds & Genetic Builds</a></li>
              <li><a href="/breeding-calculator" className="text-accent hover:underline">Breeding Calculator — Plan Your Genetics</a></li>
              <li><a href="/trait-database" className="text-accent hover:underline">Complete Trait Database — All 100+ Traits</a></li>
              <li><a href="/team-building" className="text-accent hover:underline">Team Building Guide — Synergy & Composition</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li><span className="text-yellow-400">Pick Siamese + Calico.</span> Best starter combo for new players.</li>
              <li><span className="text-yellow-400">Breed ASAP.</span> Mission 3 unlocks breeding — use it immediately.</li>
              <li><span className="text-yellow-400">Focus fire.</span> Always kill one enemy before attacking the next.</li>
              <li><span className="text-yellow-400">Front/Back rows.</span> Tanks front, casters and healers back.</li>
              <li><span className="text-yellow-400">Save Trait Candies.</span> Never use them on starter cats.</li>
              <li><span className="text-yellow-400">Farm Mission 4.</span> Best early coin source.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
