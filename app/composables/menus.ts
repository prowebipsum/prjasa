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
           image:'/img/akap.png'
        },
        { 
          label: 'Moda', 
          to: '#',
          image:'/img/moda.png'
         },
        { 
          label: 'Shuttle', 
          to: '#',
          image:'/img/shutle.png'
         },
        { 
          label: 'Pariwisata', 
          to: '#', 
          image:'/img/wisata.png'
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
