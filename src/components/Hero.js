import Link from "next/link";

export default function Hero({ title, text, cta, href }) {
  return (
    <section className="hero">
      <div className="wrap">
        <h1>{title}</h1>
        <p>{text}</p>
        {cta && (
          <Link href={href} className="btn">
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
