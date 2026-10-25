import PageHead from "@/components/PageHead";
import Card from "@/components/Card";
import { team } from "@/data/team";

export const metadata = { title: "Tim | Nusantara Digital" };

export default function Team() {
  return (
    <>
      <PageHead title="Tim Kami" text="Orang-orang di balik Nusantara Digital." />
      <section className="wrap sec">
        <div className="grid">
          {team.map((m) => (
            <Card
              key={m.id}
              title={m.name}
              sub={m.role}
              text={m.bio}
              href={`/team/${m.id}`}
              label="Lihat Profil"
            />
          ))}
        </div>
      </section>
    </>
  );
}
