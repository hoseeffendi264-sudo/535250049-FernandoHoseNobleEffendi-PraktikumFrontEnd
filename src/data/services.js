export const services = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "Pembuatan website company profile, toko online, dan sistem informasi.",
    desc: "Kami membangun website yang cepat, aman, dan mudah dikelola menggunakan teknologi modern seperti Next.js dan React. Setiap proyek dimulai dari analisis kebutuhan hingga proses peluncuran.",
    points: ["Company profile", "Toko online", "Sistem informasi internal", "Optimasi SEO"],
  },
  {
    slug: "mobile-app",
    name: "Mobile App",
    short: "Aplikasi Android dan iOS dengan satu basis kode.",
    desc: "Aplikasi mobile lintas platform dengan tampilan yang nyaman digunakan dan performa yang stabil, dikembangkan dengan Flutter.",
    points: ["Android dan iOS", "Integrasi API", "Notifikasi push", "Pemeliharaan berkala"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Desain antarmuka yang rapi, konsisten, dan mudah dipahami.",
    desc: "Tim desain kami membuat riset pengguna, wireframe, hingga prototipe interaktif agar produk digital Anda nyaman dipakai.",
    points: ["Riset pengguna", "Wireframe", "Prototipe", "Design system"],
  },
  {
    slug: "konsultasi-it",
    name: "Konsultasi IT",
    short: "Pendampingan strategi transformasi digital untuk bisnis Anda.",
    desc: "Kami membantu menentukan teknologi yang tepat, merancang arsitektur sistem, dan menyusun roadmap pengembangan produk.",
    points: ["Audit sistem", "Arsitektur aplikasi", "Roadmap produk", "Pelatihan tim"],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
