'use client';

import { useState } from 'react';

/* ============================================
   Template A: Tactical Command Center
   Sidebar Nav + Stats Bar + Data Tables
   ============================================ */

const NAV_ITEMS = [
  { label: 'Tactical HQ', href: '/', active: true },
  { label: 'Tier List', href: '/tier-list' },
  { label: 'Builds', href: '/builds' },
  { label: 'Cat Breeds', href: '/guides' },
  { label: 'Database', href: '/database' },
];

const STATS = [
  { label: 'ACTIVE BUILDS', value: '24', unit: '' },
  { label: 'PATCH', value: 'v1.2', unit: '' },
  { label: 'TIER ENTRIES', value: '42', unit: '' },
  { label: 'LAST UPDATE', value: 'Jun 2026', unit: '' },
];

const TIER_DATA = [
  { tier: 'S', name: 'Siamese Warrior', role: 'DPS', win: '58%', pick: '12%' },
  { tier: 'S', name: 'Maine Coon Tank', role: 'Tank', win: '54%', pick: '18%' },
  { tier: 'A', name: 'Persian Mage', role: 'Control', win: '51%', pick: '15%' },
  { tier: 'A', name: 'Bengal Assassin', role: 'Assassin', win: '49%', pick: '8%' },
  { tier: 'B', name: 'Tabby Scout', role: 'Scout', win: '45%', pick: '10%' },
  { tier: 'B', name: 'Calico Healer', role: 'Support', win: '42%', pick: '6%' },
];

const RECENT_UPDATES = [
  { date: 'Jun 28', title: 'Siamese Build Guide Updated', tag: 'BUILD' },
  { date: 'Jun 25', title: 'Breeding Mechanics Deep Dive', tag: 'GUIDE' },
  { date: 'Jun 22', title: 'June 2026 Tier List Refresh', tag: 'TIER' },
  { date: 'Jun 20', title: 'Patch v1.2 Balance Changes', tag: 'NEWS' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-[#f0883e]';
    case 'A': return 'text-[#58a6ff]';
    case 'B': return 'text-[#3fb950]';
    default: return 'text-text-secondary';
  }
}

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* ===== Mobile menu overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-56 bg-[#0a0e13] border-r border-border-subtle
          transform transition-transform duration-200
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle">
          <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-abyss">CMD</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
            Mewgenics
          </span>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
            >
              <span className="w-1.5 h-1.5 bg-current opacity-40" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">
            Mewgenics
          </p>
          <p className="text-[10px] font-mono text-text-muted mt-0.5">
            v1.2.0
          </p>
        </div>
      </aside>

      {/* ===== Main content ===== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ===== Top Stats Bar ===== */}
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
          </button>

          {/* Stats */}
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                {stat.label}
              </span>
              <span className="font-mono text-sm font-semibold text-text-primary tabular-nums">
                {stat.value}
              </span>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
            <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
          </div>
        </header>

        {/* ===== Content area with grid bg ===== */}
        <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-6">

            {/* ===== Section: Featured Tier List ===== */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                    Breed Your Army
                  </h2>
                  <p className="text-xs font-mono text-text-muted mt-1">
                    Build the ultimate cat squad through strategic breeding and tactical combat
                  </p>
                </div>
                <a
                  href="/tier-list"
                  className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  VIEW ALL &rarr;
                </a>
              </div>

              {/* Data table */}
              <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-grid-line">
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted w-12">
                        TIER
                      </th>
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        NAME
                      </th>
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        ROLE
                      </th>
                      <th className="text-right py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        WIN%
                      </th>
                      <th className="text-right py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        PICK%
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TIER_DATA.map((row, i) => (
                      <tr key={i} className="data-row">
                        <td className="py-2.5 px-4">
                          <span className={`font-mono font-bold text-sm ${getTierColor(row.tier)}`}>
                            {row.tier}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          <a
                            href={`/builds/${row.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-text-primary hover:text-tactical-blue transition-colors"
                          >
                            {row.name}
                          </a>
                        </td>
                        <td className="py-2.5 px-4">
                          <span className="tag">{row.role}</span>
                        </td>
                        <td className="py-2.5 px-4 text-right font-mono tabular-nums text-text-secondary">
                          {row.win}
                        </td>
                        <td className="py-2.5 px-4 text-right font-mono tabular-nums text-text-secondary">
                          {row.pick}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ===== Section: Quick Stats Grid ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  Meta Performance
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: 'Top Breed', value: 'Siamese', change: '+3.2%' },
                  { label: 'Win Rate', value: '58%', change: '-1.5%' },
                  { label: 'Pick Rate', value: '18%', change: '+0.8%' },
                  { label: 'Ban Rate', value: '5%', change: '+0.2%' },
                ].map((card, i) => (
                  <div key={i} className="stat-card">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      {card.label}
                    </p>
                    <p className="font-mono text-stat text-text-primary tabular-nums">
                      {card.value}
                    </p>
                    <p className={`text-xs font-mono mt-1 tabular-nums ${
                      card.change.startsWith('+') ? 'text-terminal-green' : 'text-terminal-red'
                    }`}>
                      {card.change}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== Section: Recent Updates ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  Latest Updates
                </h2>
              </div>
              <div className="bg-abyss-light border border-border-subtle">
                {RECENT_UPDATES.map((update, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 px-4 py-3 ${
                      i < RECENT_UPDATES.length - 1 ? 'border-b border-grid-line' : ''
                    }`}
                  >
                    <span className="text-xs font-mono text-text-muted w-20 tabular-nums shrink-0">
                      {update.date}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border shrink-0 ${
                        update.tag === 'BUILD'
                          ? 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/5'
                          : update.tag === 'GUIDE'
                          ? 'text-terminal-green border-terminal-green/30 bg-terminal-green/5'
                          : update.tag === 'NEWS'
                          ? 'text-warning-orange border-warning-orange/30 bg-warning-orange/5'
                          : 'text-text-secondary border-border-subtle'
                      }`}
                    >
                      {update.tag}
                    </span>
                    <a
                      href={`/updates/${update.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-text-primary hover:text-tactical-blue transition-colors truncate"
                    >
                      {update.title}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== Terminal block - developer note ===== */}
            <div className="terminal-block">
              <p className="text-text-muted mb-1">
                <span className="text-warning-orange">$</span> system.status
              </p>
              <p>build: v1.2.0 / patch: Jun 2026</p>
              <p>data.update_interval: Weekly</p>
              <p className="cursor-blink">ready</p>
            </div>

          </div>
        </main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-border-subtle bg-abyss">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
            {/* More Game Guides */}
            <div className="mb-4 pb-4 border-b border-border-subtle">
              <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">More Strategy Game Guides</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://tabletop-tavern-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-secondary hover:text-tactical-blue transition-colors">Tabletop Tavern Guide</a>
                <a href="https://vampire-crawlers-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-secondary hover:text-tactical-blue transition-colors">Vampire Crawlers Guide</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
                <span>&copy; {new Date().getFullYear()} Mewgenics</span>
                <a href="/privacy" className="hover:text-text-secondary transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-text-secondary transition-colors">
                  Terms
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://afdian.com/a/gameguidehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  ❤️ Support Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
