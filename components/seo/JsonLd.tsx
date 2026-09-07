interface OrganizationSchemaProps {
  page?: string;
}

export function OrganizationSchema({ page }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GlobalTech Engineering & Logistic Solutions",
    alternateName: "GTELS",
    url: "https://gtels-bd.com",
    logo: "https://gtels-bd.com/images/logos/gtels-logo.png",
    description:
      "GTELS delivers integrated engineering works, WASH infrastructure, logistics, procurement, technology installation and community-development support across Bangladesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "623, West Nakhalpara, Tejgaon",
      addressLocality: "Dhaka",
      postalCode: "1215",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+88-01678614488",
      contactType: "customer service",
      email: "contact@gtels-bd.com",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [],
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    knowsAbout: [
      "WASH Infrastructure",
      "Deep Tubewell Drilling",
      "Civil Engineering",
      "Logistics",
      "Procurement",
      "Water Treatment",
      "Solar Water Systems",
      "DEWATS",
      "Construction",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  path: string;
}

export function WebPageSchema({ title, description, path }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `https://gtels-bd.com${path}`,
    publisher: {
      "@type": "Organization",
      name: "GTELS",
      logo: {
        "@type": "ImageObject",
        url: "https://gtels-bd.com/images/logos/gtels-logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://gtels-bd.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProjectSchemaProps {
  title: string;
  description: string;
  client: string;
  datePublished?: string;
  path: string;
}

export function ProjectSchema({
  title,
  description,
  client,
  datePublished,
  path,
}: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    author: {
      "@type": "Organization",
      name: "GTELS",
    },
    publisher: {
      "@type": "Organization",
      name: "GTELS",
    },
    ...(datePublished ? { datePublished } : {}),
    url: `https://gtels-bd.com${path}`,
    about: {
      "@type": "Organization",
      name: client,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
