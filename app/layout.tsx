import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gtels-bd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GTELS — Engineering Solutions for Water, Infrastructure & Sustainable Development",
    template: "%s | GTELS",
  },
  description:
    "GlobalTech Engineering & Logistic Solutions (GTELS) delivers integrated engineering works, WASH infrastructure, logistics, procurement, technology installation and community-development support across Bangladesh.",
  keywords: [
    "GTELS",
    "engineering Bangladesh",
    "WASH infrastructure",
    "deep tubewell",
    "logistics Bangladesh",
    "construction",
    "water treatment",
    "procurement",
    "solar water systems",
    "DEWATS",
    "civil engineering",
    "infrastructure development",
    "community development",
    "IOM contractor",
    "World Vision partner",
  ],
  authors: [{ name: "GlobalTech Engineering & Logistic Solutions" }],
  creator: "GTELS",
  publisher: "GTELS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "GTELS",
    title: "GTELS — Engineering Solutions for Water, Infrastructure & Sustainable Development",
    description:
      "Integrated engineering works, WASH infrastructure, logistics, procurement and community-development support across Bangladesh.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "GTELS — Engineering Solutions for Water, Infrastructure & Sustainable Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTELS — Engineering Solutions for Water, Infrastructure & Sustainable Development",
    description:
      "Integrated engineering works, WASH infrastructure, logistics, procurement and community-development support across Bangladesh.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="cupcake"
    >
      <head>
        <meta name="google-site-verification" content="WDpKc2XMJeEL_YlAWDAbgSYXF-SnoRUGiztcUMtXqPw" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('gtels-theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'night');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
