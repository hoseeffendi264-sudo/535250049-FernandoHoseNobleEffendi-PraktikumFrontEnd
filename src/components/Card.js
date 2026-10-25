import Link from "next/link";

export default function Card({ title, sub, text, href, label = "Selengkapnya" }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {sub && <span className="sub">{sub}</span>}
      <p>{text}</p>
      {href && (
        <Link href={href} className="more">
          {label} →
        </Link>
      )}
    </div>
  );
}
