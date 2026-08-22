import type { Metadata } from "next";

const siteUrl = "https://gtels-bd.com";
const siteName = "GTELS";
const defaultImage = "/images/og-default.jpg";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  keywords = [],
  noindex = false,
}: PageSEO): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    robots: noindex
      ? { index: false, follow: true }
      : {
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
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
