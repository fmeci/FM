import type { Metadata } from "next";
import { CareerMap } from "@/components/CareerMap";
import { SectionHeader } from "@/components/SectionHeader";
import { roles } from "@/data/site";
export const metadata: Metadata = { title: "Work", description: "Fatjon Meci's work across marketing leadership, growth, brand, business intelligence, data science, and team building." };
export default function WorkPage() { return <section className="page-shell"><SectionHeader eyebrow="Work" title="Marketing leadership built on systems, data, brand, and people." intro="A concise view of the professional path behind the public profile." /><CareerMap /><div className="case-grid">{roles.map((role) => <article className="case-card" key={role.company}><span>{role.period}</span><h2>{role.company}</h2><h3>{role.role}</h3><p>{role.description}</p><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article>)}</div></section>; }
