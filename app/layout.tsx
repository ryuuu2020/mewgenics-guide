import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mewgenics - Tactical Command Center',
  description: 'The ultimate Mewgenics guide with builds, strategies, tier lists, and in-depth walkthroughs.',
  metadataBase: new URL('https://mewgenics-guide.vercel.app'),
  openGraph: {
    title: 'Mewgenics',
    description: 'The ultimate Mewgenics guide with builds, strategies, tier lists, and in-depth walkthroughs.',
    type: 'website',
  },
  verification: {
    google: 'google4cd6cdf221ea7b0b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b" />

        {/* Google Analytics 4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
      
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous"></script>
  </head>
      <body className="font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
