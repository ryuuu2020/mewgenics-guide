import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Mewgenics Guide',
  description: 'Terms of Service for the Mewgenics Guide.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-abyss text-text-primary">
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-4xl font-bold tracking-tight">Terms of Service</h1>
        <div className="mt-8 space-y-4 border border-border-subtle bg-abyss-light p-6 text-sm leading-relaxed text-text-secondary">
          <p>
            Mewgenics Guide is an unofficial fan resource. All builds, breed rankings, and strategy notes are
            provided for informational purposes only.
          </p>
          <p>
            We aim to keep this guide accurate, but patches, rebalancing, and new discoveries can make individual
            details outdated. Use your own judgment when applying any recommendation to your own runs.
          </p>
          <p>
            Game names, mechanics, screenshots, and trademarks related to Mewgenics remain the property of Edmund
            McMillen, Tyler Glaiel, and their respective rights holders. This site is not affiliated with them.
          </p>
          <p>
            By using the site, you agree that external links, advertisements, and third-party services are accessed at
            your own discretion and under their own terms.
          </p>
        </div>
      </main>
    </div>
  );
}
