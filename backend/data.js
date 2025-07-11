const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMK Leonardo Klaten', major: 'TITL (Teknik Instalasi Tenaga Listrik)' }
];

const skills = [
  { name: 'HTML5', level: 'Mahir' },
  { name: 'CSS3 & Tailwind', level: 'Mahir' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'UI/UX Design', level: 'Menengah' },
  { name: 'Figma', level: 'Menengah' },
  { name: 'Penetration Testing', level: 'Dasar' },
  { name: 'Digital Drawing', level: 'Dasar' }
];

const projects = [
  {
    title: 'Website JWR Comp',
    description: 'Sebuah situs e-commerce yang dibuat khusus untuk JWR Comp, toko yang menyediakan berbagai komponen dan aksesori komputer. Website ini dilengkapi dengan katalog produk, informasi detail tiap barang, serta tampilan yang responsif di berbagai perangkat.',
    image: '/image/jwrcomp.png', // Updated path to be relative to the public directory
    tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express'],
    link: '#'
  },
  {
    title: 'Portofolio Pribadi',
    description: 'Website portofolio ini saya rancang dan kembangkan sebagai media untuk memperlihatkan keahlian, latar belakang pendidikan, serta berbagai proyek yang telah saya kerjakan. Dibuat menggunakan teknologi web modern guna memastikan performa yang optimal dan responsif..',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Figma'],
    link: '#'
  },
];

module.exports = { educationHistory, skills, projects };