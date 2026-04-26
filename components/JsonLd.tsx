import { interests, roles, site } from "@/data/site";
export function JsonLd() {
  const data = { "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url, email: site.email, jobTitle: "Marketing leader", address: { "@type": "PostalAddress", addressLocality: "Frankfurt", addressCountry: "DE" }, alumniOf: "Jacobs University Bremen", knowsAbout: interests.map((interest) => interest.title), worksFor: roles.slice(0, 2).map((role) => ({ "@type": "Organization", name: role.company })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
