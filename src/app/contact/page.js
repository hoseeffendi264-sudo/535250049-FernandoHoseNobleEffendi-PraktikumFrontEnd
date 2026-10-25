import PageHead from "@/components/PageHead";

export const metadata = { title: "Kontak | Nusantara Digital" };

export default function Contact() {
  return (
    <>
      <PageHead title="Kontak" text="Hubungi kami untuk diskusi proyek Anda." />
      <section className="wrap sec two">
        <div>
          <h2>Informasi</h2>
          <p>Jl. Letjen S. Parman No. 1, Jakarta Barat</p>
          <p>Email: halo@nusantaradigital.id</p>
          <p>Telepon: (021) 555-0123</p>
        </div>
        <div>
          <h2>Jam Operasional</h2>
          <p>Senin - Jumat: 09.00 - 17.00 WIB</p>
          <p>Sabtu - Minggu: Tutup</p>
        </div>
      </section>
    </>
  );
}
