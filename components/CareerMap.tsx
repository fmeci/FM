import { roles } from "@/data/site";
type CareerMapProps = { condensed?: boolean };
export function CareerMap({ condensed = false }: CareerMapProps) {
  const visibleRoles = condensed ? roles.slice(0, 3) : roles;
  return <div className="career-map">{visibleRoles.map((role, index) => <article className="career-node" key={role.company}><div className="career-index">{index + 1}</div><div><span>{role.period}</span><h2>{role.company}</h2><p>{role.role}</p></div></article>)}</div>;
}
