export const team = [
  { id: 1, name: "Andi Pratama", role: "Chief Executive Officer", bio: "Memimpin arah bisnis perusahaan dengan pengalaman lebih dari 10 tahun di industri teknologi.", email: "andi@nusantaradigital.id" },
  { id: 2, name: "Sari Wulandari", role: "Chief Technology Officer", bio: "Bertanggung jawab atas arsitektur dan kualitas seluruh produk yang kami kembangkan.", email: "sari@nusantaradigital.id" },
  { id: 3, name: "Budi Santoso", role: "Lead Developer", bio: "Spesialis pengembangan web dengan fokus pada performa dan kemudahan pemeliharaan.", email: "budi@nusantaradigital.id" },
  { id: 4, name: "Dewi Lestari", role: "UI/UX Designer", bio: "Merancang pengalaman pengguna yang sederhana, konsisten, dan menyenangkan.", email: "dewi@nusantaradigital.id" },
];

export const getMember = (id) => team.find((m) => m.id === Number(id));
