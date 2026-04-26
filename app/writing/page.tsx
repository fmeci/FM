import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { writing } from "@/data/site";
export const metadata: Metadata = { title: "Writing", description: "Notes from Fatjon Meci on marketing, AI, chess, decision making, physics, football, and leadership." };
export default function WritingPage() { return <section className="page-shell"><SectionHeader eyebrow="Writing" title="Notes, essays, and half-solved questions." intro="A static writing shelf for v1. The structure is ready for fuller essays as the site grows." /><div className="writing-index">{writing.map((post) => <article key={post.title}><div><span>{post.category}</span><time>{post.date}</time></div><h2>{post.title}</h2><p>{post.summary}</p></article>)}</div></section>; }
