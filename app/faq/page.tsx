import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mewgenics FAQ — Frequently Asked Questions & Answers',
  description: 'Complete Mewgenics FAQ covering cat breeding, tactical combat, positioning strategy, class choices, home upgrades, environmental mechanics, and more. Updated for 2026.',
};

const FAQ_ITEMS = [
  {
    q: "What is Mewgenics and who made it?",
    a: "Mewgenics is a cat-themed strategic roguelike developed by Edmund McMillen (creator of The Binding of Isaac and Super Meat Boy) and Tyler Glaiel (The End Is Nigh). It combines deep cat breeding genetics, grid-based turn-by-turn tactical combat, and home/cattery management. Each cat fights only once before retiring, and every generation is a fresh start. The game features 281 Steam achievements, thousands of unique abilities, and hundreds of enemies. It is available on PC via Steam Early Access.",
  },
  {
    q: "How does cat breeding work in Mewgenics?",
    a: "Breeding is the core progression system. Kittens inherit stats and abilities from their parents — pairing choices directly determine offspring strength. Each cat can only deploy into combat once, after which they retire. This means you must continuously breed new generations to maintain your fighting roster. Inbreeding increases mutation risk — some mutations are harmful, but others unlock powerful unique traits like extra limbs, elemental affinities, or enhanced stats. Focus breeding pairs that complement each other's strengths: a high-damage male with a high-speed female produces kittens that can hit hard and act early in turn order.",
  },
  {
    q: "Why is positioning so important in Mewgenics combat?",
    a: "Positioning is the single most impactful mechanic in Mewgenics. Backstab attacks deal drastically more damage than frontal assaults — a 5-damage scratch can become a 15-damage critical from behind. Always click the right side of your cat to control which direction they face, since enemies also deal more damage from behind. Grass tiles provide a massive 50% dodge chance. Water can be used to grow grass, shock groups of enemies with electricity, or extinguish fires. Fire burns enemies out of cover and denies their positioning. Treat every battlefield element as a potential weapon.",
  },
  {
    q: "How many cats should I take on missions?",
    a: "You do not need four cats for every excursion. Taking three cats means faster leveling since post-battle XP is not split four ways. While this makes individual runs harder, the accelerated growth often compensates. Two cats provides maximum XP per cat but is viable only for expert players comfortable with high risk. Four cats gives the most stable, balanced runs with lower individual XP. For beginners, start with four cats until you understand the combat system, then experiment with three-cat squads once you can read enemy patterns and terrain effectively.",
  },
  {
    q: "What do wet hairballs actually do?",
    a: "Wet hairballs are one of the most versatile tactical tools. They can: extinguish fires at range (critical against bomb-throwing bosses), push enemies into environmental hazards, create water puddles for grass growth, and stop burn damage on your own cats. To use them offensively, walk a cat through water first to make their hairball wet, then throw it at a dry grass tile to grow full cover. Against fire-based enemies, wet hairballs are essential — a single well-placed throw can neutralize an entire area-denial strategy. Keep at least one cat capable of producing hairballs in every squad.",
  },
  {
    q: "What are the best beginner cat classes and abilities?",
    a: "There is no single best class — each has distinct tactical roles. For beginners, prioritize classes with sustain and positioning tools: Healers keep your squad alive through longer runs, Tanks absorb damage and protect fragile damage dealers, and Scouts with speed upgrades act earlier in turn order. Look for abilities that synergize with positioning: crit chance passives combined with backstab-capable cats create deadly combinations. Avoid classes that rely on complex resource management (like pure mana casters) until you understand the combat rhythm. Read every ability tooltip before committing a cat to a build path.",
  },
  {
    q: "How does the home/cattery system work?",
    a: "Your cattery is your persistent home base where you manage cats between missions. You place furniture to tune house stats, which affect breeding outcomes and cat morale. Different furniture themes provide set bonuses when combined — for example, matching gothic or royal furniture sets grants extra stat boosts. Upgrade your cattery to house more cats, unlock better breeding chambers, and access stronger starting equipment. Visit the cattery between every mission to check for new random events, breed kittens, and re-equip your active squad.",
  },
  {
    q: "How should I manage resources like food, money, and catnip?",
    a: "Food is consumed by every cat in your cattery, not just your active squad. Cut losses quickly with new kittens or strays — if they lack useful starting abilities, they consume valuable food without contributing to battles. Break crates and garbage bags on every map for money and equipment. Catnip provides immediate health restoration and should be grabbed whenever possible — if you are one move away and still have an action, target the tile containing catnip to pick it up. Money is best spent on cattery upgrades and breeding enhancements before buying consumables.",
  },
  {
    q: "What are familiars (maggots, flies) and how do I use them?",
    a: "Familiars like maggots and flies seem weak but serve crucial tactical roles: sacrificial positioning to trigger traps that would hurt your cats, aggro drawing to waste enemy turns and tank damage, and controlled placement where you choose their battlefield entry point. Position familiars strategically to force enemies into disadvantageous spots while protecting your main cats. A well-placed maggot can soak two enemy attacks that would have hit your damage dealer — that is an enormous value trade. Never underestimate the utility of a disposable familiar.",
  },
  {
    q: "What are the most common mistakes new Mewgenics players make?",
    a: "The top five: (1) Ignoring positioning — treating combat like a straightforward brawler instead of a tactical chess match where facing direction and terrain matter more than raw stats. (2) Keeping bad kittens — every cat that lacks useful abilities still consumes food; retire or dismiss them. (3) Never using the tactical view (hold Y on Steam Deck / left mouse on PC) — it reveals hidden enemies, money in rocks, and optimal positioning opportunities. (4) Forgetting to check the turn order display — it shows exactly when each unit acts, so always eliminate the enemy attacking first. (5) Hoarding one-use items and abilities — use them when they create an advantage; saving them for later usually means never using them at all.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
        Mewgenics <span className="text-accent">FAQ</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Answers to the most frequently asked questions from Mewgenics cat breeders and tacticians. Whether you are learning the basics of cat genetics or optimizing your combat squad, you will find practical answers here.
      </p>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <details key={i} className="p-4 border border-border bg-bg-card">
            <summary className="font-semibold cursor-pointer hover:text-accent font-heading text-lg">
              {item.q}
            </summary>
            <p className="mt-3 text-text-muted leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold font-heading mb-4">Key Stats at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-bg-card">
              <tr>
                <th className="p-3 border border-border">Topic</th>
                <th className="p-3 border border-border">Detail</th>
                <th className="p-3 border border-border">Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">Positioning</td>
                <td className="p-3 border border-border text-text-muted">Backstab = 3x damage; grass = 50% dodge; face direction matters</td>
                <td className="p-3 border border-border text-danger">Critical</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Breeding</td>
                <td className="p-3 border border-border text-text-muted">Kittens inherit stats/abilities from parents; inbreeding = mutations</td>
                <td className="p-3 border border-border text-danger">Critical</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Squad Size</td>
                <td className="p-3 border border-border text-text-muted">4 cats = stable; 3 cats = faster XP; 2 cats = expert only</td>
                <td className="p-3 border border-border text-success">High</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Wet Hairballs</td>
                <td className="p-3 border border-border text-text-muted">Extinguish fire, push enemies, grow grass, stop burn damage</td>
                <td className="p-3 border border-border text-success">High</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Familiars</td>
                <td className="p-3 border border-border text-text-muted">Trigger traps, draw aggro, control battlefield positioning</td>
                <td className="p-3 border border-border text-accent">Medium</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Tactical View</td>
                <td className="p-3 border border-border text-text-muted">Hold Y/LMB — reveals hidden enemies, loot, positioning options</td>
                <td className="p-3 border border-border text-accent">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
