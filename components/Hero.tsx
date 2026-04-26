"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
const signals = ["Marketing", "AI", "Chess", "Physics", "Football", "Frankfurt"];
export function Hero() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  return <section className="hero" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setPosition({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 }); }} style={{ "--hero-x": `${position.x}%`, "--hero-y": `${position.y}%` } as React.CSSProperties}>
    <div className="hero-copy"><p className="eyebrow">Hi, I am Fatjon</p><h1>Marketing leader,<br />curious mind,<br /><span>builder of things.</span></h1><p>I lead marketing teams to drive growth, build brands people love, and turn complex systems into better decisions. Outside work, I follow chess lines, physics rabbit holes, AI breakthroughs, football moments, and good conversations.</p><div className="hero-actions"><Link className="button primary" href="/contact">Get in touch</Link><Link className="button secondary" href="/writing">Read my notes</Link></div><ul className="signal-row" aria-label="Topics Fatjon explores">{signals.map((signal) => <li key={signal}>{signal}</li>)}</ul></div>
    <div className="hero-visual" aria-label={`${site.name} visual portrait`}><div className="portrait-orbit"><span>Growth</span><span>Data</span><span>Brand</span><span>Teams</span></div><div className="portrait-card"><div className="portrait-initials">FM</div><p>Stay curious. Build things that matter.</p></div></div>
  </section>;
}
