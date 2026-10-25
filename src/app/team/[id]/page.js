import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import { team, getMember } from "@/data/team";

export function generateStaticParams() {
  return team.map((m) => ({ id: String(m.id) }));
}

export function generateMetadata({ params }) {
  const m = getMember(params.id);
  return { title: m ? `${m.name} | Nusantara Digital` : "Tim" };
}

export default function MemberDetail({ params }) {
  const m = getMember(params.id);
  if (!m) notFound();

  return (
    <>
      <PageHead title={m.name} text={m.role} />
      <section className="wrap sec">
        <p>{m.bio}</p>
        <p>Email: <a href={`mailto:${m.email}`}>{m.email}</a></p>
        <Link href="/team" className="btn">← Semua Tim</Link>
      </section>
    </>
  );
}
