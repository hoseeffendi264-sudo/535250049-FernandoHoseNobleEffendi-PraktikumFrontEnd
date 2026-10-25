import PageHead from "@/components/PageHead";
import Card from "@/components/Card";
import { services } from "@/data/services";

export const metadata = { title: "Layanan | Nusantara Digital" };

export default function Services() {
  return (
    <>
      <PageHead title="Layanan" text="Pilihan layanan yang kami sediakan." />
      <section className="wrap sec">
        <div className="grid">
          {services.map((s) => (
            <Card key={s.slug} title={s.name} text={s.short} href={`/services/${s.slug}`} />
          ))}
        </div>
      </section>
    </>
  );
}
