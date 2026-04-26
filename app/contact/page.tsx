import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Contact", description: "Contact Fatjon Meci for thoughtful conversations, collaboration, marketing leadership, growth, AI, and ideas." };
export default function ContactPage() { return <section className="page-shell contact-page"><SectionHeader eyebrow="Contact" title="For thoughtful work, useful ideas, or a conversation worth having." intro="The best way to reach me is by email." /><a className="contact-card" href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong><small>Opens your email client</small></a></section>; }
