import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  return { title: s ? `${s.name} | Nusantara Digital` : "Layanan" };
}

export default function ServiceDetail({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();

  return (
    <>
      <PageHead title={s.name} text={s.short} />
      <section className="wrap sec">
        <p>{s.desc}</p>
        <h2>Cakupan Layanan</h2>
        <ul className="list">
          {s.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <Link href="/services" className="btn">← Semua Layanan</Link>
      </section>
    </>
  );
}
