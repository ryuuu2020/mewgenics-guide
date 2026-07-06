import type { Metadata } from 'next';
import './globals.css';
import SchemaMarkup from '@/shared/SchemaMarkup';


export const metadata: Metadata = {
  title: 'Mewgenics - Tactical Command Center',
  description: 'The ultimate Mewgenics guide with builds, strategies, tier lists, and in-depth walkthroughs.',
  metadataBase: new URL("https://mewgenics.gguidehub.com"),
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
        <header style={{background:"#111",padding:"10px 20px",textAlign:"right"}}>
          <a href="https://store.steampowered.com/app/686060/?curator_clanid=46198091/?curator_clanid=46198091" target="_blank" rel="noopener" style={{color:"#4fc3f7",fontWeight:"bold",marginRight:"20px",textDecoration:"none"}}>Buy Mewgenics on Steam</a>
          <a href="https://app.unifans.io/c/ryu2020" target="_blank" rel="noopener" style={{color:"#f5a623",textDecoration:"none"}}>Support us on UniFans</a>
        </header>
        <main style={{flex:1}}>{children}</main>
        <footer style={{background:"#111",borderTop:"1px solid #333",padding:"20px",marginTop:"40px"}}>
          <div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"10px"}}>
            <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
              <span style={{color:"#888",fontSize:"13px"}}>&copy; {new Date().getFullYear()} Mewgenics Guide</span>
              <span style={{color:"#666",fontSize:"12px"}}>Part of the <a href="https://gguidehub.com" style={{color:"#4fc3f7"}} target="_blank">GameGuideHub</a> network</span>
              <a href="/privacy" style={{color:"#888",fontSize:"12px"}}>Privacy</a>
              <a href="/terms" style={{color:"#888",fontSize:"12px"}}>Terms</a>
            </div>
            <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
              <a href="https://store.steampowered.com/app/686060/?curator_clanid=46198091/?curator_clanid=46198091" target="_blank" rel="noopener" style={{color:"#4fc3f7",fontWeight:"bold",fontSize:"13px",textDecoration:"none"}}>Get Mewgenics on Steam</a>
              <a href="https://app.unifans.io/c/ryu2020" target="_blank" rel="noopener" style={{color:"#f5a623",fontSize:"13px",fontWeight:"bold",textDecoration:"none"}}>Support us on UniFans</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
