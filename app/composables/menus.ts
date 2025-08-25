export const useMenus = () => {

  const menus = ref([
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '#' },
    { 
      label: 'Produk', 
      to: '#',
      children: [
        { 
          label: 'Bus Regular',
           to: '#' ,
           image:'/img/icon-reguler.png'
        },
        { 
          label: 'Moda', 
          to: '#',
          image:'/img/icon-moda.png'
         },
        { 
          label: 'Shuttle', 
          to: '#',
          image:'/img/icon-shutle.png'
         },
        { 
          label: 'Pariwisata', 
          to: '#', 
          image:'/img/icon-wisata.png'
        },
      ]

     },
    { label: 'Promo', to: '#' },
    { label: 'Berita & CSR', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Kontak', to: '#' },
  ])

  return {
    menus
  }
}
