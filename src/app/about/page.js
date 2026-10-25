import PageHead from "@/components/PageHead";

export const metadata = { title: "Tentang | Nusantara Digital" };

export default function About() {
  return (
    <>
      <PageHead title="Tentang Kami" text="Mengenal lebih dekat Nusantara Digital." />
      <section className="wrap sec two">
        <div>
          <h2>Profil Perusahaan</h2>
          <p>
            Nusantara Digital berdiri pada tahun 2018 dan berfokus pada pengembangan perangkat lunak
            untuk usaha kecil hingga menengah di Indonesia.
          </p>
        </div>
        <div>
          <h2>Visi</h2>
          <p>Menjadi mitra teknologi terpercaya yang mendorong pertumbuhan bisnis lokal.</p>
          <h2>Misi</h2>
          <p>Menghadirkan produk digital berkualitas dengan layanan yang transparan dan responsif.</p>
        </div>
      </section>
    </>
  );
}
