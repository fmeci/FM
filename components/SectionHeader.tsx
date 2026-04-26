type SectionHeaderProps = { eyebrow: string; title: string; intro?: string; id?: string };
export function SectionHeader({ eyebrow, title, intro, id }: SectionHeaderProps) {
  return <div className="section-header"><span>{eyebrow}</span><h1 id={id}>{title}</h1>{intro ? <p>{intro}</p> : null}</div>;
}
