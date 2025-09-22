export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "INSYNC Productions",
    "description": "Leading video production and content marketing agency in Mississauga, Ontario. Serving GTA businesses with YouTube marketing, social media content, and lead generation strategies.",
    "url": "https://insyncproductions.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "insyncsocial27@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mississauga",
      "addressLocality": "Mississauga",
      "addressRegion": "Ontario",
      "postalCode": "L5A",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5890",
      "longitude": "-79.6441"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mississauga",
        "containedInPlace": {
          "@type": "State",
          "name": "Ontario"
        }
      },
      {
        "@type": "City", 
        "name": "Toronto",
        "containedInPlace": {
          "@type": "State",
          "name": "Ontario"
        }
      },
      {
        "@type": "City",
        "name": "Brampton",
        "containedInPlace": {
          "@type": "State",
          "name": "Ontario"
        }
      },
      {
        "@type": "City",
        "name": "Vaughan",
        "containedInPlace": {
          "@type": "State",
          "name": "Ontario"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832"
      },
      "geoRadius": "50000"
    },
    "services": [
      "Video Production",
      "Content Marketing",
      "YouTube Marketing",
      "Social Media Content Creation",
      "Lead Generation",
      "Digital Marketing"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.instagram.com/insyncproductions",
      "https://www.youtube.com/@insyncproductions",
      "https://www.linkedin.com/company/insyncproductions"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
