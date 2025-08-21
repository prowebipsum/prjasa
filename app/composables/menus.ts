export const useMenus = () => {

  const menus = ref([
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '#' },
    { 
      label: 'Produk', 
      to: '#',
      children: [
        { label: 'Bus Regular', to: '#' },
        { label: 'Moda', to: '#' },
        { label: 'Shuttle', to: '#' },
        { label: 'Pariwisata', to: '#' },
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
