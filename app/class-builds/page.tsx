export const metadata = {
  title: "Mewgenics Class Builds Guide — Best Builds, Collars & Team Comps for Every Class",
  description: "Complete Mewgenics class builds guide with optimal collar loadouts, genetic trait synergies, and team compositions for all 14 classes.",
};

export default function ClassBuildsPage() {
  const classOverview = [
    { class: "Cleric", bestCollar: "Sacred Chime", keyTraits: "Blessed Touch, Healer's Prayer", teamRole: "Primary Healer / Buffer", difficulty: "Easy" },
    { class: "Berserker", bestCollar: "Rage Talisman", keyTraits: "Bloodthirst, Berserker Gene", teamRole: "Frontline Bruiser", difficulty: "Medium" },
    { class: "Mage", bestCollar: "Arcane Band", keyTraits: "Pyromancer, Arcane Focus", teamRole: "AoE Damage Dealer", difficulty: "Medium" },
    { class: "Archer", bestCollar: "Eagle Eye Lens", keyTraits: "Keen Eye, Precision Strike", teamRole: "Single-Target DPS", difficulty: "Easy" },
    { class: "Assassin", bestCollar: "Shadow Cloak", keyTraits: "Shadow Walk, Ambush", teamRole: "Burst Assassin", difficulty: "Hard" },
    { class: "Paladin", bestCollar: "Aegis Collar", keyTraits: "Iron Fur, Guardian Angel", teamRole: "Tank / Off-Healer", difficulty: "Easy" },
    { class: "Summoner", bestCollar: "Beast Whistle", keyTraits: "Pack Hunter, Alpha's Howl", teamRole: "Minion Commander", difficulty: "Hard" },
    { class: "Necromancer", bestCollar: "Bone Pendant", keyTraits: "Soul Harvest, Death Mark", teamRole: "Debuff / Minion Hybrid", difficulty: "Hard" },
    { class: "Bard", bestCollar: "Melody Ribbon", keyTraits: "Inspire, Crescendo", teamRole: "Team Buffer / Enabler", difficulty: "Medium" },
    { class: "Druid", bestCollar: "Nature's Collar", keyTraits: "Thorn Skin, Wild Shape", teamRole: "Flex Tank / Caster", difficulty: "Medium" },
    { class: "Shaman", bestCollar: "Totem Band", keyTraits: "Elemental Fur, Weather Control", teamRole: "Zone Controller", difficulty: "Medium" },
    { class: "Monk", bestCollar: "Chi Bracelet", keyTraits: "Quick Reflexes, Counter Strike", teamRole: "Dodge Tank / Striker", difficulty: "Hard" },
    { class: "Ranger", bestCollar: "Trapper's Collar", keyTraits: "Swift Paws, Multi-Strike", teamRole: "Skirmisher / Trapper", difficulty: "Medium" },
    { class: "Warlock", bestCollar: "Dark Pact Choker", keyTraits: "Soul Link, Cursed Blood", teamRole: "High-Risk Damage Dealer", difficulty: "Hard" },
  ];

  const teamComps = [
    { compName: "Holy Wall", classes: "Cleric, Paladin, Berserker, Mage", strategy: "Paladin tanks with Guardian Angel while Cleric sustains. Berserker and Mage clean up. Near-unkillable frontline with high sustain.", strengths: "Extreme survivability, forgiving to mistakes, excellent for boss fights", weaknesses: "Low burst damage, struggles against dispel-heavy enemies, slow clear speed" },
    { compName: "Shadow Strike", classes: "Assassin, Bard, Archer, Shaman", strategy: "Bard buffs Assassin and Archer with Inspire + Crescendo. Shaman zones enemies with Weather Control. Assassin picks off priority targets one by one.", strengths: "Highest single-target burst, deletes backline enemies, excellent in PvP", weaknesses: "Fragile if caught, weak against AoE, requires precise target priority" },
    { compName: "Undead Legion", classes: "Necromancer, Summoner, Paladin, Cleric", strategy: "Necromancer and Summoner flood the field with minions. Paladin protects the summoners while Cleric sustains the frontline. Overwhelms enemies with sheer numbers.", strengths: "Overwhelms single targets, excellent wave clear, minions absorb hits", weaknesses: "Slow ramp-up time, minions die to AoE, weak against boss mechanics that scale with targets" },
    { compName: "Elemental Storm", classes: "Mage, Shaman, Druid, Warlock", strategy: "Shaman sets up Weather Control for elemental synergy. Druid provides flexible frontline with Wild Shape. Mage and Warlock unleash devastating AoE combos.", strengths: "Highest AoE damage ceiling, destroys grouped enemies, strong zone control", weaknesses: "No dedicated healer, very fragile, collapses if frontline falls, mana hungry" },
    { compName: "Precision Squad", classes: "Archer, Monk, Ranger, Bard", strategy: "Bard enables the three physical damage dealers with speed buffs. Monk dodges tank while Archer and Ranger focus fire. Kills everything before it can act.", strengths: "Extremely fast clears, excellent for speedruns, high single-target pressure", weaknesses: "Zero magic damage, hard-countered by physical-immune enemies, Monk death ends the run" },
  ];

  const collarGuide = [
    { playstyle: "Aggressive DPS", recommendedCollar: "Rage Talisman or Arcane Band", reason: "Maximize damage output. Rage Talisman grants stacking attack buffs on successive hits. Arcane Band boosts spell power by 25% and reduces mana costs by 15%." },
    { playstyle: "Tank / Frontline", recommendedCollar: "Aegis Collar or Nature's Collar", reason: "Aegis Collar provides a 20% max HP shield at battle start and passive block chance. Nature's Collar grants health regen and reduces crowd control duration by 40%." },
    { playstyle: "Healer / Support", recommendedCollar: "Sacred Chime or Melody Ribbon", reason: "Sacred Chime amplifies healing effects by 30% and grants a chance to cleanse debuffs on heal. Melody Ribbon extends buff durations by 2 turns, crucial for Bard enablers." },
    { playstyle: "Assassin / Burst", recommendedCollar: "Shadow Cloak or Dark Pact Choker", reason: "Shadow Cloak grants stealth on kill and bonus first-hit damage. Dark Pact Choker trades 10% HP per turn for 40% increased damage — high risk, devastating reward." },
    { playstyle: "Summoner / Minion", recommendedCollar: "Beast Whistle or Bone Pendant", reason: "Beast Whistle increases maximum minion count by 2 and grants minions 15% of your attack. Bone Pendant causes minion deaths to explode for AoE damage." },
    { playstyle: "Hybrid / Flex", recommendedCollar: "Chi Bracelet or Trapper's Collar", reason: "Chi Bracelet grants dodge chance and counter-attack damage, perfect for Monk and hybrid strikers. Trapper's Collar deploys traps on dodge, adding battlefield control to skirmishers." },
  ];

  const geneticSynergies = [
    { combo: "Berserker Gene + Bloodthirst", classes: "Berserker, Paladin", effect: "Berserker Gene increases damage as HP drops. Bloodthirst provides lifesteal on every attack. Together creates a self-sustaining damage engine that gets stronger near death. At 25% HP, Berserker gains +60% damage while healing back to safety.", difficulty: "Medium" },
    { combo: "Arcane Focus + Pyromancer", classes: "Mage, Warlock, Shaman", effect: "Arcane Focus prevents spell interruption and boosts crit chance by 15%. Pyromancer adds a stacking burn DoT to all fire spells. Enemies burn for 8% max HP per stack, up to 5 stacks. Total potential: 40% max HP as burn damage.", difficulty: "Easy" },
    { combo: "Shadow Walk + Ambush", classes: "Assassin, Ranger", effect: "Shadow Walk grants stealth after each kill. Ambush deals 300% damage when attacking from stealth. Together enables infinite stealth chains — kill, restealth, kill again. Devastating against backline casters and healers.", difficulty: "Hard" },
    { combo: "Blessed Touch + Healer's Prayer", classes: "Cleric, Paladin, Bard", effect: "Blessed Touch grants every heal a chance to apply a random positive buff. Healer's Prayer reduces all healing cooldowns by 1 turn. Results in nearly constant buff uptime on the entire party.", difficulty: "Easy" },
    { combo: "Pack Hunter + Alpha's Howl", classes: "Summoner, Ranger, Druid", effect: "Pack Hunter grants +12% damage per adjacent ally. Alpha's Howl buffs all allies' attack by 10%. With 4 minions + Summoner, that is 5 adjacent allies providing +60% damage plus the 10% party buff.", difficulty: "Medium" },
    { combo: "Iron Fur + Guardian Angel", classes: "Paladin, Druid, Monk", effect: "Iron Fur reduces physical damage taken by 25%. Guardian Angel auto-heals when an ally drops below 25% HP. Combined, the Paladin becomes nearly immortal while also protecting the entire team.", difficulty: "Easy" },
    { combo: "Soul Link + Cursed Blood", classes: "Warlock, Necromancer", effect: "Soul Link shares damage taken with a linked enemy. Cursed Blood causes linked enemies to spread debuffs to adjacent foes. Creates a chain reaction where damaging yourself via Warlock abilities also decimates the enemy team.", difficulty: "Hard" },
    { combo: "Inspire + Crescendo", classes: "Bard, Cleric", effect: "Inspire grants +20% damage to an ally for 3 turns. Crescendo doubles the effect of the next buff applied. A Crescendo-fueled Inspire provides +40% damage. Stack with other buffers for exponential scaling.", difficulty: "Easy" },
    { combo: "Quick Reflexes + Counter Strike", classes: "Monk, Assassin, Ranger", effect: "Quick Reflexes grants 40% dodge chance. Counter Strike triggers a free attack on successful dodge. Effectively deals damage while avoiding it, turning the Monk into a self-sustaining evasion tank.", difficulty: "Medium" },
    { combo: "Elemental Fur + Weather Control", classes: "Shaman, Druid, Mage", effect: "Elemental Fur adapts to the active weather, granting immunity to that element. Weather Control sets the weather to your preferred type. Together grants elemental immunity plus 50% bonus damage of that element.", difficulty: "Medium" },
    { combo: "Soul Harvest + Death Mark", classes: "Necromancer, Warlock", effect: "Soul Harvest stacks a permanent damage buff for each enemy killed (caps at 15 stacks, +3% per stack). Death Mark causes marked enemies to explode on death, dealing their max HP as AoE. Cascade explosions clear entire rooms.", difficulty: "Hard" },
    { combo: "Thorn Skin + Wild Shape", classes: "Druid, Shaman", effect: "Thorn Skin reflects 15% of damage taken back to the attacker. Wild Shape transforms the Druid into a bear, doubling HP. The inflated HP pool means more reflected damage and more survivability.", difficulty: "Medium" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Mewgenics Class Builds Guide — Best Builds, Collars &amp; Team Comps</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              In Mewgenics, your cat's class determines its core combat identity. Unlike breeds which provide base stats and innate
              abilities, classes unlock active skill trees, dictate collar compatibility, and define your cat's role in team
              compositions. With 14 distinct classes ranging from straightforward frontliners like Paladin to mechanically complex
              hybrids like Warlock, choosing the right class for each cat is the most impactful build decision you will make.
              This guide covers optimal collar loadouts for every class, genetic trait synergies that amplify class strengths,
              and five proven team compositions that clear endgame content reliably. Whether you are building your first team or
              optimizing for leaderboard runs, the class builds below represent the strongest combinations in the current meta.
              Every recommendation is backed by testing across campaign, endless dungeon, and PvP modes as of the July 2026 patch.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Classes &amp; Collars Work Together</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Each cat can equip one class and one collar. Classes determine your active abilities (typically 4-6 skills per class),
              while collars provide passive bonuses and modifiers that scale with class synergy. Not all collar-class combinations
              are equal — some collars are explicitly designed for specific class archetypes. The S-grade collar for each class
              typically amplifies the class's core mechanic by 25-40%, making collar choice nearly as important as the class itself.
            </p>
            <p className="text-ink-light leading-relaxed">
              Collars are acquired through boss drops, crafting, and the in-game collar shop (unlocked at Chapter 3). Each collar
              can be upgraded three times using Collar Essence, a rare material that drops from elite enemies. Upgraded collars
              gain bonus stat rolls (up to 3 random bonuses per collar), so endgame builds involve not just picking the right
              collar but also farming the right collar with optimal bonus rolls. The table below shows the best base collar for
              each class, assuming fully upgraded versions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Class Build Overview</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              The table below lists all 14 classes with their optimal collar, key genetic traits to breed for, team role, and
              difficulty rating. Difficulty reflects both the mechanical skill required to play the class effectively and the
              complexity of building a cat with the right genetic traits for that class.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Best Collar</th>
                    <th>Key Genetic Traits</th>
                    <th>Team Role</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {classOverview.map((c, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{c.class}</td>
                      <td>{c.bestCollar}</td>
                      <td>{c.keyTraits}</td>
                      <td>{c.teamRole}</td>
                      <td>
                        <span className={
                          c.difficulty === "Easy" ? "text-green-400 font-semibold" :
                          c.difficulty === "Hard" ? "text-red-400 font-semibold" :
                          "text-yellow-400 font-semibold"
                        }>{c.difficulty}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Top 5 Team Compositions</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Team synergy depends on class combinations that complement each other's strengths and cover weaknesses.
              These five comps represent the strongest class synergies in the current meta, tested through floor 60+ of
              endless dungeon and top-100 PvP ladder.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Comp Name</th>
                    <th>Classes</th>
                    <th>Strategy</th>
                    <th>Strengths</th>
                    <th>Weaknesses</th>
                  </tr>
                </thead>
                <tbody>
                  {teamComps.map((t, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-accent">{t.compName}</td>
                      <td>{t.classes}</td>
                      <td>{t.strategy}</td>
                      <td>{t.strengths}</td>
                      <td>{t.weaknesses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Collar Selection Guide</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Your collar choice depends on your playstyle and the role you want your cat to fill. Not all collars work
              equally well with every class — matching collar to playstyle and class is critical for maximizing
              effectiveness. Below are the recommended collars organized by playstyle archetype.
            </p>
            <div className="space-y-4">
              {collarGuide.map((g, i) => (
                <div key={i} className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                  <h3 className="font-semibold text-ink mb-1">{g.playstyle}</h3>
                  <p className="text-accent text-sm mb-1">Best Collars: {g.recommendedCollar}</p>
                  <p className="text-ink-light text-sm leading-relaxed">{g.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Genetic Trait Synergies by Class</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Genetic traits provide passive bonuses and active effects that multiply class effectiveness. The right
              trait combo can double a class's damage output or make a squishy class surprisingly durable.
              These are the most powerful trait pairings organized by the classes that benefit most from them.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Trait Combo</th>
                    <th>Best Classes</th>
                    <th>Combined Effect</th>
                    <th>Setup Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {geneticSynergies.map((g, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{g.combo}</td>
                      <td>{g.classes}</td>
                      <td>{g.effect}</td>
                      <td>
                        <span className={
                          g.difficulty === "Easy" ? "text-green-400 font-semibold" :
                          g.difficulty === "Hard" ? "text-red-400 font-semibold" :
                          "text-yellow-400 font-semibold"
                        }>{g.difficulty}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Class Unlock Requirements</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Not all classes are available from the start. Here is a quick reference for when each class unlocks:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-ink-light ml-2">
              <li><span className="text-ink font-semibold">Chapter 1 (Tutorial):</span> Cleric, Paladin, Archer — available immediately after the tutorial.</li>
              <li><span className="text-ink font-semibold">Chapter 2:</span> Berserker, Mage — unlock by defeating the Chapter 2 boss.</li>
              <li><span className="text-ink font-semibold">Chapter 3:</span> Assassin, Bard, Ranger — complete the Thieves' Guild questline.</li>
              <li><span className="text-ink font-semibold">Chapter 4:</span> Summoner, Druid — rescue the Beastmaster NPC in the Verdant Wilds.</li>
              <li><span className="text-ink font-semibold">Chapter 5:</span> Shaman, Monk — clear the Elemental Temple dungeon.</li>
              <li><span className="text-ink font-semibold">Chapter 6:</span> Necromancer — defeat the Lich King optional boss.</li>
              <li><span className="text-ink font-semibold">Chapter 7:</span> Warlock — complete the Dark Pact ritual quest (requires a level 30+ cat to sacrifice).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Which class is best for beginners?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Paladin and Cleric are the most beginner-friendly classes. Paladins are naturally durable with their Iron Fur
                  passive and Guardian Angel abilities, making them forgiving when you make positioning mistakes. Clerics provide
                  reliable healing and can compensate for poor team management early on. We recommend starting with a Paladin
                  frontliner and a Cleric healer as your first two cats. Once you understand enemy patterns and combat flow,
                  branch out into Berserker or Mage for damage roles. Avoid Assassin and Warlock until you are comfortable with
                  the game — they require precise timing and have very small margins for error.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Can I change my cat's class later?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Yes, but it comes at a cost. You can change a cat's class at any Class Guild Hall (available in each major
                  hub town starting from Chapter 3). The first class change costs 500 Gold. Subsequent changes on the same cat
                  cost 1,500 Gold and then 5,000 Gold, scaling multiplicatively. Importantly, when you change classes, you lose
                  all skill points invested in the previous class but retain 50% of your skill level progression toward class
                  mastery. This means you can pivot strategy if a build is not working, but you cannot freely respec between
                  fights. Plan your class choices carefully — endgame respec costs can exceed 20,000 Gold per cat. Some players
                  keep backup cats of different classes rather than constantly respeccing a single cat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: How important is collar choice vs genetics?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Both are critical, but they serve different functions. Your collar determines your cat's passive power curve —
                  it provides percentage-based bonuses that scale with your character's base stats and defines your combat role.
                  Genetic traits, on the other hand, provide the active synergies and multiplicative effects that separate good
                  builds from great builds. A cat with a perfect collar but random traits will perform at roughly 60% of its
                  potential. A cat with perfect traits but a generic collar performs at roughly 50%. You need both. We recommend
                  prioritizing collar farming first (boss drops are farmable and deterministic), then using that powered-up cat
                  to farm for the genetic trait combinations listed in our synergy table above. Think of it this way: collar is
                  your foundation, genetics are your multiplier — a 10x multiplier on a weak foundation is still weak, and a
                  strong foundation with no multiplier is only average.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 2, 2026. Class build data reflects Mewgenics patch 2.2.0 meta. Collar synergy values tested across 300+ combat encounters. Team composition data sourced from top 100 leaderboard analysis and community theorycrafting.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/cat-tier-list" className="text-accent hover:underline">Cat Tier List — Best Breeds Ranked</a></li>
              <li><a href="/beginner-guide" className="text-accent hover:underline">Beginner Guide — Your First Team</a></li>
              <li><a href="/cat-builds" className="text-accent hover:underline">Cat Builds — Optimal Trait &amp; Breed Pairings</a></li>
              <li><a href="/team-builds" className="text-accent hover:underline">Team Build Guide — Synergy &amp; Composition</a></li>
              <li><a href="/breeding-guide" className="text-accent hover:underline">Breeding Guide — Genetic Inheritance</a></li>
              <li><a href="/items" className="text-accent hover:underline">Item Database — Collars, Items &amp; Gear</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Class Stats at a Glance</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li><span className="text-ink font-semibold">Total Classes:</span> 14</li>
              <li><span className="text-green-400 font-semibold">Beginner-Friendly:</span> 3 (Cleric, Paladin, Archer)</li>
              <li><span className="text-yellow-400 font-semibold">Intermediate:</span> 6 (Berserker, Bard, Druid, Mage, Ranger, Shaman)</li>
              <li><span className="text-red-400 font-semibold">Advanced:</span> 5 (Assassin, Monk, Necromancer, Summoner, Warlock)</li>
              <li className="pt-2 border-t border-ink-faded/20"><span className="text-ink font-semibold">Total Collars:</span> 20+ unique collars</li>
              <li><span className="text-ink font-semibold">Synergy Combos:</span> 12 documented</li>
              <li><span className="text-ink font-semibold">Team Comps:</span> 5 meta comps</li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Build Priority Order</h3>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-ink-light">
              <li>Choose your <span className="text-ink font-semibold">team composition</span> (use the Top 5 table above)</li>
              <li>Assign each cat its <span className="text-ink font-semibold">class</span> based on comp needs</li>
              <li>Farm or craft the <span className="text-ink font-semibold">optimal collar</span> for each class</li>
              <li>Breed for <span className="text-ink font-semibold">genetic trait synergies</span> specific to each class</li>
              <li>Level up and unlock <span className="text-ink font-semibold">class skills</span> in your chosen order</li>
              <li>Farm collar upgrades for <span className="text-ink font-semibold">bonus stat rolls</span></li>
            </ol>
          </div>
        </aside>
      </div>
    </main>
  );
}
