import Link from "next/link";
import PageHead from "@/components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead title="404" text="Halaman yang Anda cari tidak ditemukan." />
      <div className="wrap sec">
        <Link href="/" className="btn">Kembali ke Beranda</Link>
      </div>
    </>
  );
}
