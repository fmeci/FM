import type { Metadata } from "next";
import { InterestConstellation } from "@/components/InterestConstellation";
import { SectionHeader } from "@/components/SectionHeader";
import { interests } from "@/data/site";
export const metadata: Metadata = { title: "Interests", description: "The interests that shape Fatjon Meci's thinking: AI, chess, physics, football, books, marketing systems, and teams." };
export default function InterestsPage() { return <section className="page-shell"><SectionHeader eyebrow="Interests" title="The things I return to when nobody is assigning the homework." intro="Some interests are hobbies, some are thinking tools, and some are both." /><InterestConstellation expanded /><div className="interest-editorial">{interests.map((interest) => <article key={interest.title}><span aria-hidden="true">{interest.symbol}</span><h2>{interest.title}</h2><p>{interest.description}</p></article>)}</div></section>; }
