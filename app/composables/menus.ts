// composables/useMenus.ts
import { ref } from 'vue'
import { useFetch } from '#app'

interface MenuItem {
  id: string
  label: string
  to: string
  description?: string
  background?: string
  image?: string
  children?: MenuItem[]
}

const menus = ref<Record<string, MenuItem[]>>({
  
  /*===========================
  ID
  =============================*/
  id: [
    {
      id: 'beranda',
      label: 'Beranda',
      to: '/'
    },
    {
      id: 'tentang-kami',
      label: 'Tentang Kami',
      to: '#',
      children: [
        {
          id: 'profil-perusahaan',
          label: 'Profil Perusahaan',
          to: '/about/profil-perusahaan',
          description: 'loremipsum doloretsitamet',
          background: '/img/about-1.jpg'
        },
        {
          id: 'visi-misi',
          label: 'Visi & Misi',
          to: '/about/visi-misi',
          description: 'loremipsum doloretsitamet',
          background: '/img/visi-misi.jpg'
        },
        {
          id: 'pesan-pendiri',
          label: 'Pesan dari Pendiri',
          to: '/about/pesan-pendiri',
          description: 'loremipsum doloretsitamet',
          background: '/img/about-3.jpg'
        },
        {
          id: 'dewan-direksi',
          label: 'Dewan Direksi',
          to: '/about/dewan-direksi',
          description: 'loremipsum doloretsitamet',
          background: '/img/about-4.jpg'
        },
        {
          id: 'kebijakan-perusahaan',
          label: 'Kebijakan Perusahaan',
          to: '/about/kebijakan-perusahaan',
          description: 'loremipsum doloretsitamet',
          background: '/img/product-2.jpg'
        },
        {
          id: 'penghargaan',
          label: 'Penghargaan',
          to: '/about/penghargaan',
          description: 'loremipsum doloretsitamet',
          background: '/img/about-1.jpg'
        }
      ]
    },
    {
      id: 'layanan',
      label: 'Layanan',
      to: '#',
      children: [
        {
          id: 'bus-regular',
          label: 'Bus Regular',
          to: '/product/bus-regular',
          image: '/img/icon-reguler.png',
          background: '/img/product-1.jpg'
        },
        {
          id: 'moda',
          label: 'Moda',
          to: '/product/moda',
          image: '/img/icon-moda.png'
        },
        {
          id: 'shuttle',
          label: 'Shuttle',
          to: '/product/shuttle',
          image: '/img/icon-shutle.png'
        },
        {
          id: 'pariwisata',
          label: 'Pariwisata',
          to: '/product/pariwisata',
          image: '/img/icon-wisata.png'
        }
      ]
    },
    {
      id: 'promo',
      label: 'Program',
      to: '/promo',
      description: 'loremipsum doloretsitamet',
      background: ''
    },
    {
      id: 'berita',
      label: 'Berita & CSR',
      to: '/news',
      description: 'loremipsum doloretsitamet',
      background: ''
    },
    {
      id: 'faq',
      label: 'FAQ',
      to: '/faq',
      description: 'loremipsum doloretsitamet',
      background: '/img/product-1.jpg'
    },
    {
      id: 'kontak',
      label: 'Kontak',
      to: '/kontak',
      description: 'loremipsum doloretsitamet',
      background: ''
    }
  ],

  /*===========================
  EN
  =============================*/
  en: [
    {
      id: 'home',
      label: 'Home',
      to: '/'
    },
    {
      id: 'about-us',
      label: 'About Us',
      to: '#',
      children: [
        {
          id: 'company-profile',
          label: 'Company Profile',
          to: '/en/about/profil-perusahaan',
          description: 'Our company profile',
          background: '/img/about-1.jpg'
        },
        {
          id: 'vision-mission',
          label: 'Vision & Mission',
          to: '/en/about/visi-misi',
          description: 'Our vision and mission',
          background: '/img/visi-misi.jpg'
        },
        {
          id: 'message-founder',
          label: 'Message from Founder',
          to: '/en/about/pesan-pendiri',
          description: 'Message from the founder',
          background: '/img/about-3.jpg'
        },
        {
          id: 'board-of-directors',
          label: 'Board of Directors',
          to: '/en/about/dewan-direksi',
          description: 'loremipsum doloretsitamet',
          background: '/img/about-4.jpg'
        },
        {
          id: 'company-policy',
          label: 'Company Policy',
          to: '/en/about/kebijakan-perusahaan',
          description: 'loremipsum doloretsitamet',
          background: '/img/product-2.jpg'
        },
        {
          id: 'awards',
          label: 'Awards',
          to: '/en/about/penghargaan',
          description: 'loremipsum doloretsitamet',
          background: '/img/about-1.jpg'
        }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      to: '#',
      children: [
        {
          id: 'regular-bus',
          label: 'Regular Bus',
          to: '/product/bus-regular',
          image: '/img/icon-reguler.png',
          background: '/img/product-1.jpg'
        },
        {
          id: 'moda',
          label: 'Moda',
          to: '/product/moda',
          image: '/img/icon-moda.png',
          background: '/img/product-1.jpg'
        },
        {
          id: 'shuttle',
          label: 'Shuttle',
          to: '/product/shuttle',
          image: '/img/icon-shutle.png',
          background: '/img/product-1.jpg'
        },
        {
          id: 'tourism',
          label: 'Tourism',
          to: '/product/pariwisata',
          image: '/img/icon-wisata.png'
        }
      ]
    },
    {
      id: 'promo',
      label: 'Program',
      to: '/promo',
      description: 'Our latest promos',
      background: ''
    },
    {
      id: 'news',
      label: 'News & CSR',
      to: '/news',
      description: 'Latest news and CSR activities',
      background: ''
    },
    {
      id: 'faq',
      label: 'FAQ',
      to: '/faq',
      description: 'Frequently Asked Questions',
      background: '/img/product-1.jpg'
    },
    {
      id: 'contact',
      label: 'Contact',
      to: '/kontak',
      description: 'Get in touch with us',
      background: ''
    }
  ]
})

/**
 * Ambil slug dari path `to`
 */
const extractSlug = (to: string): { locale: string; slug: string } | null => {
  const parts = to.split('/').filter(Boolean)
  if (!parts.length) return null

  if (parts[0] === 'en') {
    return { locale: 'en', slug: parts[parts.length - 1] }
  }
  if (parts[0] === 'about' || parts[0] === 'product') {
    return { locale: 'id', slug: parts[parts.length - 1] }
  }
  return null
}

/**
 * Fetch featured image dari WP API
 */
const fetchFeaturedImage = async (locale: string, slug: string) => {
  try {
    const { data } = await useFetch<any>(`/wp-json/api/v1/content/${locale}/${slug}`)
    return data.value?.featured_image ?? null
  } catch {
    return null
  }
}

/**
 * Rekursif inject background dinamis
 */
const updateBackgrounds = async (items: MenuItem[], locale: string) => {
  for (const item of items) {
    const parsed = extractSlug(item.to)
    if (parsed) {
      const img = await fetchFeaturedImage(parsed.locale, parsed.slug)
      if (img) item.background = img
    }
    if (item.children) {
      await updateBackgrounds(item.children, locale)
    }
  }
}

export const useMenus = () => {
  const loadDynamicBackgrounds = async () => {
    await updateBackgrounds(menus.value.id, 'id')
    await updateBackgrounds(menus.value.en, 'en')
  }

  loadDynamicBackgrounds()

  return { menus }
}
