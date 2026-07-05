import Link from "next/link";

export const metadata = {
  title: "Breeding Calculator — Coming Soon | Mewgenics",
  description: "Breeding Calculator is coming soon. We are working on a comprehensive guide for Mewgenics.",
};

export default function ComingSoonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="bg-parchment-light rounded-xl p-10 border border-border-subtle">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="font-display text-3xl text-ink mb-3">Breeding Calculator</h1>
        <p className="text-ink-light text-lg mb-6 max-w-lg mx-auto">
          We are currently researching and writing this guide.
          Check back soon for a complete breakdown of mewgenics.
        </p>
        <p className="text-ink-faded text-sm mb-8">
          Last updated: July 5, 2026
        </p>
        <Link href="/" className="inline-block bg-accent/20 text-accent hover:bg-accent/30 px-5 py-2.5 rounded-lg transition-colors font-medium text-sm">
          ← Back to Mewgenics
        </Link>
      </div>
    </div>
  );
}
