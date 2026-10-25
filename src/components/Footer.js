import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div className="foot-links">
          <Link href="/about">Tentang</Link>
          <Link href="/services">Layanan</Link>
          <Link href="/contact">Kontak</Link>
        </div>
      </div>
    </footer>
  );
}
