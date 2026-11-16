import type { Metadata, Viewport } from "next";
import "./globals.css";
import { poppins } from "@/style/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingDock";
import Providers from "@/components/Providers";
import { SITE_URL, site } from "@/lib/site";

const description =
  "Portfolio of Raihan Putra Darmawan: frontend and backend developer and L2 Application Support engineer based in Tangerang, Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${site.name} · Portfolio`, template: `%s · ${site.name}` },
  description,
  keywords: ["Raihan Putra Darmawan", "Frontend Developer", "Next.js", "Golang", "Kubernetes", "DevOps", "Tangerang"],
  authors: [{ name: site.name, url: site.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${site.name} · Portfolio`,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: `${site.name} · Portfolio`, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Set tema sebelum paint supaya tidak berkedip.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${poppins.className} min-h-screen bg-background text-foreground antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingNav />
        </Providers>
      </body>
    </html>
  );
}
