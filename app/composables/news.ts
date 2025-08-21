export const useNews = () => {

    const news = ref(
        [
            {
                "title": "Primajasa Tambah Armada Baru untuk Rute Tasikmalaya - Bekasi",
                "summary": "Operator bus Primajasa resmi menambah 10 unit bus baru dengan fasilitas AC dan kursi ergonomis. Penambahan armada ini ditujukan untuk meningkatkan kenyamanan penumpang di jalur Tasikmalaya - Bekasi.",
                "image_url": "/img/primajasa-7.webp",
                "source": "News Dummy",
                 "date": "2025-08-20"
            },
            {
                "title": "Tarif Bus Ekonomi Turun Menjelang Libur Panjang",
                "summary": "Sejumlah perusahaan otobus menurunkan tarif hingga 15% untuk kelas ekonomi. Kebijakan ini diharapkan dapat menarik lebih banyak penumpang pada masa libur panjang akhir tahun.",
                "image_url": "/img/primajasa-5.webp",
                "source": "News Dummy",
                "date": "2025-08-18"
            },
            {
                "title": "Travel Antar Kota Kini Sediakan Layanan Pemesanan Online",
                "summary": "Perusahaan travel antarkota mulai menyediakan sistem booking online. Penumpang dapat memilih kursi, jadwal keberangkatan, dan melakukan pembayaran digital secara mudah.",
                "image_url": "/img/primajasa-taxi.webp",
                "source": "News Dummy",
                "date": "2025-08-15"
            }
        ]

    )

    return {
        news
    }
}