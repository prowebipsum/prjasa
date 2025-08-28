export const useMenus = () => {

  const menus = ref([
    { label: 'Beranda', to: '/' },
    {
      label: 'Tentang Kami', to: '#',
      children: [
        {
          label: 'Company Profile',
          to: '/about/company-profile',
          description:'loremipsum doloretsitamet',
          background:'/img/about-1.jpg'
        },
        {
          label: 'Visi & Misi',
          to: '/about/visi-misi',
          description:'loremipsum doloretsitamet',
          background:'/img/about-2.jpg'
        },
        {
          label: 'Pesan dari Pendiri',
          to: '/about/pesan-pendiri',
          description:'loremipsum doloretsitamet',
          background:'/img/about-1.jpg'
        },
        {
          label:'Dewan Direksi',
          to: '/about/dewan-direksi',
          description:'loremipsum doloretsitamet',
          background:'/img/about-4.jpg'
        },
        {
          label: 'Kebijakan Perusahaan',
          to: '/about/kebijakan-perusahaan',
          description:'loremipsum doloretsitamet',
          background:'/img/about-2.jpg'
        },
        {
          label:'Penghargaan',
          to: '/about/penghargaan',
          description:'loremipsum doloretsitamet',
          background:'/img/about-1.jpg'
        }
      ]

    },
    {
      label: 'Produk',
      to: '#',
      children: [
        {
          label: 'Bus Regular',
          to: '/product/bus-reguler',
          image: '/img/icon-reguler.png',
          background:'/img/product-1.jpg'
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
        },
      ]

    },
    { label: 'Promo',
       to: '/promo', 
       description:'loremipsum doloretsitamet' ,
      },
    { label: 'Berita & CSR', to: '/news', description:'loremipsum doloretsitamet' },
    { label: 'FAQ', to: '/faq', description:'loremipsum doloretsitamet' },
    { label: 'Kontak', to: '/kontak', description:'loremipsum doloretsitamet' },
  ])

  return {
    menus
  }
}
