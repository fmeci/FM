import Link from "next/link";
import { navItems, site } from "@/data/site";
export function Footer() {
  return <footer className="site-footer"><div><strong>{site.name}</strong><p>{site.tagline}</p></div><nav aria-label="Footer navigation">{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><a href={`mailto:${site.email}`}>{site.email}</a></footer>;
}
