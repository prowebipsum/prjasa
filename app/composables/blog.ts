export const useBlog = () => {
  const blog = ref(
    [
      {
        "title": "Tips Nyaman Bepergian Menggunakan Bus Malam",
        "summary": "Bepergian jarak jauh dengan bus malam bisa menjadi pilihan praktis dan hemat.",
        "image_url": "/img/blog1.jpg",
        "author": "Admin Blog",
        "date": "2025-08-10",
        "source": "Blog Dummy"
      },
      {
        "title": "Bus Ekonomi vs. Executive, Mana yang Cocok?",
        "summary": "Bingung memilih antara bus ekonomi atau executive? Artikel ini membahas kelebihan dan kekurangan masing-masing kelas.",
        "image_url": "/img/bis.jpg",
        "author": "Admin Blog",
        "date": "2025-08-12",
        "source": "Blog Dummy"
      },
      {
        "title": "5 Destinasi Populer yang Mudah Dijangkau",
        "summary": "Banyak destinasi wisata populer di Jawa Barat dan Jawa Tengah yang kini mudah dijangkau dengan layanan travel antarkota.",
        "image_url": "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg",
        "author": "Admin Blog",
        "date": "2025-08-14",
        "source": "Blog Dummy"
      },

    ]

  )
  return { blog }
}
