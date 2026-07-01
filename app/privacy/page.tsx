import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Mewgenics Guide',
  description: 'Privacy Policy for the Mewgenics Guide.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-abyss text-text-primary">
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="mt-8 space-y-4 border border-border-subtle bg-abyss-light p-6 text-sm leading-relaxed text-text-secondary">
          <p>
            Mewgenics Guide does not run user accounts, comment systems, or features that ask visitors to submit
            personal information directly to us.
          </p>
          <p>
            We use third-party services such as Google Analytics and Google AdSense. Those services may collect
            technical information such as browser type, approximate location, device identifiers, and page activity
            according to their own privacy policies.
          </p>
          <p>
            We use aggregate traffic data to understand which guides are useful, improve site performance, and keep
            the guide current. We do not sell personal data and we do not maintain a first-party database of
            individual visitor profiles.
          </p>
          <p>
            Questions about this policy can be sent to <span className="font-semibold text-text-primary">sonic6640@gmail.com</span>.
          </p>
        </div>
      </main>
    </div>
  );
}
