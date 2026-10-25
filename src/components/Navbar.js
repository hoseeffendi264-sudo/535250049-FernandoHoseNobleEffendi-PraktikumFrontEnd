"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/services", label: "Layanan" },
  { href: "/team", label: "Tim" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const on = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Nusantara<span>Digital</span>
        </Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
        <nav className={open ? "menu show" : "menu"}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={on(l.href) ? "item active" : "item"}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
