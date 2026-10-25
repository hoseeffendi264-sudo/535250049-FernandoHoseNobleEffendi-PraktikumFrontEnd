import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <Hero
        title="Solusi Digital untuk Bisnis Anda"
        text="Nusantara Digital membantu perusahaan membangun produk digital yang cepat, rapi, dan siap berkembang."
        cta="Lihat Layanan"
        href="/services"
      />
      <section className="wrap sec">
        <h2>Layanan Kami</h2>
        <div className="grid">
          {services.map((s) => (
            <Card key={s.slug} title={s.name} text={s.short} href={`/services/${s.slug}`} />
          ))}
        </div>
      </section>
    </>
  );
}
