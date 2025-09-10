export const useMenus = () => {
  const menus = ref({

     // ============================
    // MENU ID
    // ============================= 

    id: [
      { label: 'Beranda', to: '/' },
      {
        label: 'Tentang Kami',
        to: '#',
        children: [
          {
            label: 'Profil Perusahaan',
            to: '/about/profil-perusahaan',
            description: 'loremipsum doloretsitamet',
            background: '/img/about-1.jpg'
          },
          {
            label: 'Visi & Misi',
            to: '/about/visi-misi',
            description: 'loremipsum doloretsitamet',
            background: '/img/visi-misi.jpg'
          },
          {
            label: 'Pesan dari Pendiri',
            to: '/about/pesan-pendiri',
            description: 'loremipsum doloretsitamet',
            background: '/img/about-3.jpg'
          },
          {
            label:'Dewan Direksi',
            to: '/about/dewan-direksi',
            description: 'loremipsum doloretsitamet',
            background: '/img/about-4.jpg'
          },
          {
            label: 'Kebijakan Perusahaan',
            to: '/about/kebijakan-perusahaan',
            description: 'loremipsum doloretsitamet',
            background: '/img/product-2.jpg'
          },
          {
            label: 'Penghargaan',
            to: '/about/penghargaan',
            description: 'loremipsum doloretsitamet',
            background: '/img/about-1.jpg'
          }
        ]
      },
      {
        label: 'Layanan',
        to: '#',
        children: [
          {
            label: 'Bus Regular',
            to: '/en/product/bus-reguler',
            image: '/img/icon-reguler.png',
            background: '/img/product-1.jpg'
          },
          {
            label: 'Moda',
            to: '#',
            image: '/img/icon-moda.png'
          },
          {
            label: 'Shuttle',
            to: '#',
            image: '/img/icon-shutle.png'
          },
          {
            label: 'Pariwisata',
            to: '#',
            image: '/img/icon-wisata.png'
          }
        ]
      },
      {
        label: 'Promo',
        to: '/promo',
        description: 'loremipsum doloretsitamet',
        background: '/img/product-2.jpg'
      },
      {
        label: 'Berita & CSR',
        to: '/news',
        description: 'loremipsum doloretsitamet',
        background: '/img/berita.jpg'
      },
      {
        label: 'FAQ',
        to: '/faq',
        description: 'loremipsum doloretsitamet',
        background: '/img/product-1.jpg'
      },
      {
        label: 'Kontak',
        to: '/kontak',
        description: 'loremipsum doloretsitamet',
        background: '/img/about-3.jpg'
      }
    ],

    // ============================
    // MENU ENGLISH
    // =============================

    en: [
      { label: 'Home', to: '/' },
      {
        label: 'About Us',
        to: '#',
        children: [
          {
            label: 'Company Profile',
            to: '/en/about/profil-perusahaan',
            description: 'Our company profile',
            background: '/img/about-1.jpg'
          },
          {
            label: 'Vision & Mission',
            to: '/en/about/visi-misi',
            description: 'Our vision and mission',
            background: '/img/visi-misi.jpg'
          },
          {
            label: 'Message from Founder',
            to: '/en/about/pesan-pendiri',
            description: 'Message from the founder',
            background: '/img/about-3.jpg'
          },
            {
            label:'Dewan Direksi',
            to: '/en/about/dewan-direksi',
            description: 'loremipsum doloretsitamet',
            background: '/img/about-4.jpg'
          },
          {
            label: 'Company Policy',
            to: '/en/about/kebijakan-perusahaan',
            description: 'loremipsum doloretsitamet',
            background: '/img/product-2.jpg'
          },
          {
            label: 'Awards',
            to: '/en/about/penghargaan',
            description: 'loremipsum doloretsitamet',
            background: '/img/about-1.jpg'
          }
        ]
      },
      {
        label: 'Services',
        to: '#',
        children: [
          {
            label: 'Regular Bus',
            to: '/product/bus-reguler',
            image: '/img/icon-reguler.png',
            background: '/img/product-1.jpg'
          },
          {
            label: 'Tourism',
            to: '#',
            image: '/img/icon-wisata.png'
          }
        ]
      },
      {
        label: 'Promo',
        to: '/promo',
        description: 'Our latest promos',
        background: '/img/product-2.jpg'
      },
      {
        label: 'News & CSR',
        to: '/news',
        description: 'Latest news and CSR activities',
        background: '/img/berita.jpg'
      },
      {
        label: 'FAQ',
        to: '/faq',
        description: 'Frequently Asked Questions',
        background: '/img/product-1.jpg'
      },
      {
        label: 'Contact',
        to: '/kontak',
        description: 'Get in touch with us',
        background: '/img/about-3.jpg'
      }
    ]
  })

  return { menus }
}
