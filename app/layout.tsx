import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GTELS",
    title: "GTELS — Engineering Solutions for Water, Infrastructure & Sustainable Development",
    description:
      "Integrated engineering works, WASH infrastructure, logistics, procurement and community-development support across Bangladesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTELS — Engineering Solutions for Water, Infrastructure & Sustainable Development",
    description:
      "Integrated engineering works, WASH infrastructure, logistics, procurement and community-development support across Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
