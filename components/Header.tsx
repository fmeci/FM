"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";
export function Header() {
  const pathname = usePathname();
  return <header className="site-header"><Link className="brand-mark" href="/" aria-label="Fatjon Meci home">{site.name}</Link><nav aria-label="Primary navigation">{navItems.map((item) => { const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href); return <Link className={active ? "active" : undefined} href={item.href} key={item.href}>{item.label}</Link>; })}</nav></header>;
}
