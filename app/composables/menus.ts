export const useMenus = () => {

  const menus = ref([
    { label: 'Beranda', to: '/' },
    {
      label: 'Tentang Kami', to: '#',
      children: [
        {
          label: 'Company Profile',
          to: '/about/company-profile',
          description:'loremipsum doloretsitamet'
        },
        {
          label: 'Visi & Misi',
          to: '/about/visi-misi',
          description:'loremipsum doloretsitamet'
        },
        {
          label: 'Pesan dari Pendiri',
          to: '/about/pesan-pendiri',
          description:'loremipsum doloretsitamet'
        },
        {
          label:'Dewan Direksi',
          to: '/about/dewan-direksi',
          description:'loremipsum doloretsitamet'
        },
        {
          label: 'Kebijakan Perusahaan',
          to: '/about/kebijakan-perusahaan',
          description:'loremipsum doloretsitamet'
        },
        {
          label:'Penghargaan',
          to: '/about/penghargaan',
          description:'loremipsum doloretsitamet'
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
          image: '/img/icon-reguler.png'
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
    { label: 'Promo', to: '#' },
    { label: 'Berita & CSR', to: '#' },
    { label: 'FAQ', to: '/faq', description:'loremipsum doloretsitamet' },
    { label: 'Kontak', to: '#' },
  ])

  return {
    menus
  }
}
