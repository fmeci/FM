import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f8fbff", color: "#071421", display: "flex", flexDirection: "column", justifyContent: "center", padding: 78, fontFamily: "Arial" }}><div style={{ fontSize: 24, letterSpacing: 4, color: "#0a4c96" }}>FATJON MECI</div><div style={{ fontSize: 82, lineHeight: 1.04, marginTop: 24, maxWidth: 880 }}>Marketing leader, builder, curious mind.</div><div style={{ fontSize: 28, marginTop: 34, color: "#4a5a6a" }}>Growth. AI. Chess. Physics. Football. Teams.</div></div>, size); }
