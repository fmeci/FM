"use client";
import { useState } from "react";
import { interests } from "@/data/site";
type InterestConstellationProps = { expanded?: boolean };
export function InterestConstellation({ expanded = false }: InterestConstellationProps) {
  const [active, setActive] = useState(interests[0]);
  const items = expanded ? interests : interests.slice(0, 6);
  return <div className="constellation" aria-label="Interactive interests"><div className="constellation-stage">{items.map((interest, index) => <button className={active.title === interest.title ? "active" : undefined} key={interest.title} onClick={() => setActive(interest)} style={{ "--i": index } as React.CSSProperties} type="button"><span>{interest.symbol}</span>{interest.title}</button>)}</div><article className="constellation-detail"><span>{active.symbol}</span><h2>{active.title}</h2><p>{active.description}</p></article></div>;
}
