import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mewgenics Cat Builds Guide — Best Ability Combos & Team Synergies (2026)',
  description: 'Comprehensive Mewgenics cat builds guide. Best ability combinations, team synergy strategies, breed-specific builds, and item pairings for maximum combat effectiveness.',
};

const BREED_BUILDS = [
  {
    breed: 'Persian (Tank)',
    role: 'Frontline / Damage Sponge',
    primaryStats: 'Health, Defense, Taunt Duration',
    recommendedAbilities: 'Iron Fur (damage reduction), Provoke (taunt all enemies), Last Stand (survive lethal hit with 1 HP)',
    bestItems: 'Heavy Collar (bonus defense), Regeneration Tag (passive HP regen), Spiked Armor (reflect damage)',
    playstyle: 'Persians absorb the hits so your damage dealers stay safe. Place Persian at the front of every formation. Use Provoke on cooldown — a taunted enemy is an enemy not hitting your squishy cats. Iron Fur makes Persians nearly unkillable in the early game.',
    weakness: 'Low damage output. Persians cannot solo content — they need damage dealers behind them. Vulnerable to armor-piercing attacks.',
  },
  {
    breed: 'Siamese (Assassin)',
    role: 'Single-Target Burst / Backline Killer',
    primaryStats: 'Attack, Crit Chance, Speed',
    recommendedAbilities: 'Shadow Strike (teleport behind enemy + bonus damage), Expose Weakness (reduce target defense), Execute (bonus damage to low-HP enemies)',
    bestItems: 'Razor Claws (crit damage), Shadow Collar (stealth on kill), Speed Bell (bonus turn frequency)',
    playstyle: 'Siamese cats eliminate priority targets before they can act. Target enemy healers and ranged attackers first. Shadow Strike into Expose Weakness into basic attack is the standard combo — it kills most non-boss enemies in one turn cycle. Keep Siamese behind your tank until the combo is ready.',
    weakness: 'Fragile. If targeted before the tank establishes aggro, Siamese dies in 2-3 hits. Position carefully.',
  },
  {
    breed: 'Maine Coon (Bruiser)',
    role: 'Off-Tank / Damage Hybrid',
    primaryStats: 'Attack, Health, Lifesteal',
    recommendedAbilities: 'Heavy Swipe (AoE melee damage), Bloodthirst (lifesteal on attacks), Thick Coat (passive health regen)',
    bestItems: 'Reinforced Claws (bonus melee damage), Leech Collar (lifesteal), Warrior\'s Bell (attack boost when below 50% HP)',
    playstyle: 'Maine Coons are the flexible middle ground — tankier than Siamese, more damaging than Persians. Place them on the flank of your formation where they can protect the side while dealing damage. Heavy Swipe hits up to 3 adjacent enemies, making Maine Coons excellent at clearing clustered mobs.',
    weakness: 'Not as tanky as Persian, not as damaging as Siamese. Jack of both trades, master of neither. Solid in every composition but never the star.',
  },
  {
    breed: 'Bengal (Ranged DPS)',
    role: 'Backline Damage / AoE',
    primaryStats: 'Ranged Attack, Crit Chance, Attack Speed',
    recommendedAbilities: 'Multishot (hit 3 random enemies), Focus Fire (all attacks target one enemy, bonus damage), Eagle Eye (increased crit chance for 3 turns)',
    bestItems: 'Precision Scope (crit chance), Rapid Fire Collar (bonus attack speed), Splinter Arrows (attacks apply bleed)',
    playstyle: 'Bengals deal consistent damage from the back row where they are safe. Multishot on cooldown for wave clear, Focus Fire for boss fights. The ideal Bengal turn: Eagle Eye → Focus Fire → basic attack crits. Keep Bengal as far from enemies as possible — they have zero defensive abilities.',
    weakness: 'Zero defense. If any enemy reaches the backline, Bengal is dead before the tank can reposition. Requires perfect frontline protection.',
  },
  {
    breed: 'Sphynx (Support / Healer)',
    role: 'Healer / Buffer / Debuff Cleanse',
    primaryStats: 'Healing Power, Mana Pool, Speed',
    recommendedAbilities: 'Healing Purr (AoE heal over time), Cleanse (remove debuffs from ally), Catnip Boost (ally damage buff for 2 turns)',
    bestItems: 'Healing Bell (bonus healing), Mana Collar (larger mana pool), Protective Charm (auto-cleanse lowest HP ally)',
    playstyle: 'Sphynx keeps the team alive. Position between tank and damage dealers — close enough to heal the tank, far enough to avoid AoE. Healing Purr heals the entire team over 3 turns — cast it proactively before big damage phases, not reactively after allies are low. Catnip Boost on your Siamese or Bengal before their burst combo doubles the damage output.',
    weakness: 'Cannot fight. If the Sphynx is the last cat standing, the fight is already over. Always protect your Sphynx above all other cats.',
  },
  {
    breed: 'Scottish Fold (Controller)',
    role: 'Crowd Control / Debuffer',
    primaryStats: 'Effect Duration, Mana Pool, Speed',
    recommendedAbilities: 'Yarn Trap (root enemies in place), Hairball (blind enemies — miss chance), Scaredy Cat (fear — enemies flee for 1 turn)',
    bestItems: 'Duration Collar (longer debuffs), Mana Bell (mana regen), Trickster\'s Charm (debuffs apply slow)',
    playstyle: 'Scottish Folds control the battlefield. Yarn Trap on the biggest threat to keep it away from your team. Hairball blinds ranged enemies so they waste attacks. Scaredy Cat is an emergency button — it buys one turn of breathing room when your formation is collapsing. Use control abilities reactively: watch enemy turn order, disable the next enemy to act.',
    weakness: 'Minimal damage. A team with only Scottish Folds for control and no damage will eventually be overwhelmed when control abilities are on cooldown. Always pair with at least two damage dealers.',
  },
];

const TEAM_COMPS = [
  { name: 'Classic Balanced', cats: 'Persian (Tank) + Siamese (Assassin) + Sphynx (Healer) + Bengal (Ranged)', strength: 'Covers all roles. Good in every situation, great in none. Best for learning the game.' },
  { name: 'Burst Comp', cats: 'Siamese (Assassin) + Maine Coon (Bruiser) + Bengal (Ranged) + Sphynx (Healer)', strength: 'Maximum single-target damage. Catnip Boost → Focus Fire → Shadow Strike combo deletes any non-boss enemy. Weak to swarms.' },
  { name: 'Control Comp', cats: 'Scottish Fold (Controller) + Persian (Tank) + Bengal (Ranged) + Bengal (Ranged)', strength: 'Enemies never reach your team. Yarn Trap + Hairball rotation keeps everything locked down while two Bengals free-fire. Slow but safe.' },
  { name: 'Sustain Comp', cats: 'Persian (Tank) + Maine Coon (Bruiser) + Sphynx (Healer) + Sphynx (Healer)', strength: 'Immortal but slow. Double healing plus tank and bruiser means your team never dies — but clearing fights takes forever. Good for first-time boss attempts to learn patterns.' },
];

export default function CatBuildsPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-text-primary">Mewgenics Cat Builds Guide</h1>
      <p className="text-text-muted mb-8">Last updated: July 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Overview</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Your cats are your party in Mewgenics, and building them correctly is the difference between purring through content and getting sent back to the vet. Each cat breed has unique stat growth and a role it naturally excels at. This guide covers the optimal ability, item, and team composition for every major breed.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          The fundamental team composition rule: <strong className="text-accent">one tank, one healer, two damage dealers.</strong> Every successful Mewgenics team follows this template. You can substitute a controller for one damage dealer or an off-tank for the main tank, but the skeleton remains: protect, sustain, kill. A team missing any of these three elements will hit a wall — usually around the mid-game boss gauntlet.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Breed-Specific Builds</h2>
        {BREED_BUILDS.map((b, i) => (
          <div key={i} className="mb-6 border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-text-primary">{b.breed}</h3>
              <span className="tag text-xs">{b.role}</span>
            </div>
            <p className="text-text-muted text-sm mb-3">{b.playstyle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-accent">Primary Stats:</span>
                <span className="text-text-muted ml-1">{b.primaryStats}</span>
              </div>
              <div>
                <span className="text-accent">Weakness:</span>
                <span className="text-text-muted ml-1">{b.weakness}</span>
              </div>
              <div>
                <span className="text-accent">Abilities:</span>
                <span className="text-text-muted ml-1">{b.recommendedAbilities}</span>
              </div>
              <div>
                <span className="text-accent">Best Items:</span>
                <span className="text-text-muted ml-1">{b.bestItems}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Recommended Team Compositions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-accent">Composition</th>
                <th className="text-left p-3 text-accent">Cats</th>
                <th className="text-left p-3 text-accent">Strength</th>
              </tr>
            </thead>
            <tbody>
              {TEAM_COMPS.map((t, i) => (
                <tr key={i} className="border-b border-border hover:bg-bg-elevated">
                  <td className="p-3 text-text-primary font-semibold">{t.name}</td>
                  <td className="p-3 text-text-muted text-xs">{t.cats}</td>
                  <td className="p-3 text-text-muted text-xs">{t.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-border p-4">
            <h3 className="font-semibold text-accent">Which cat breed is best for beginners?</h3>
            <p className="text-text-muted mt-2">Persian is the most forgiving breed for new players. Its high natural durability means positioning mistakes are not instant death. Start with a Persian tank and learn the combat rhythm — when to taunt, when to defend, when to let damage dealers take over. Once you are comfortable keeping a Persian alive, branch out to the more fragile but more rewarding breeds like Siamese and Bengal.</p>
          </div>
          <div className="border border-border p-4">
            <h3 className="font-semibold text-accent">Can I change a cat&apos;s build mid-game?</h3>
            <p className="text-text-muted mt-2">Abilities can be respecced at the Cat Trainer (costs Catnip, the premium currency). Items can be swapped freely at any time outside of combat. Breed-specific stat growth is permanent — a Persian will always have high Health and Defense growth, and no amount of respeccing will turn it into a glass cannon. Choose your breeds carefully before investing resources into them.</p>
          </div>
          <div className="border border-border p-4">
            <h3 className="font-semibold text-accent">How do I unlock more cat breeds?</h3>
            <p className="text-text-muted mt-2">You start with Persian, Siamese, and Maine Coon. Bengal is unlocked after clearing Chapter 2. Sphynx is found as a rescue in Chapter 3 (hidden side area, look for the abandoned laboratory). Scottish Fold is the Chapter 4 boss reward. Additional rare breeds are available through the in-game Cat Cafe gacha system and seasonal events.</p>
          </div>
        </div>
      </section>

      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. Build data verified against Mewgenics current version.
      </p>
    </main>
  );
}
