import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Gochi_Hand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  weight: "400",
  subsets: ["latin"],
});

const moreSugar = localFont({
  src: "../public/more-sugar.thin.otf",
  variable: "--font-more-sugar",
  weight: "100",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prachi2k5sharma.vercel.app'),
  title: "Prachi Sharma Website",
  description: "Welcome to Prachi Sharma's portfolio website. Explore my work, projects, and creative journey.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Prachi Sharma Website",
    description: "Welcome to Prachi Sharma's portfolio website. Explore my work, projects, and creative journey.",
    url: "https://prachi2k5sharma.vercel.app",
    siteName: "Prachi Sharma",
    images: [
      {
        url: "/prachi2k5sharma.webp",
        width: 1200,
        height: 630,
        alt: "Prachi Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prachi Sharma Website",
    description: "Welcome to Prachi Sharma's portfolio website. Explore my work, projects, and creative journey.",
    images: ["/prachi2k5sharma.webp"],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gochiHand.variable} ${moreSugar.variable} antialiased bg-(--bg-color) overscroll-x-contain`}
      >
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
              }}
            />
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        {/* End Google Tag Manager */}
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
