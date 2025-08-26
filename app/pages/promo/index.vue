<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
      <div
        v-for="item in promos"
        class="border border-gray-300 border-dashed rounded-xl overflow-hidden"
      >
        <img :src="item.image" alt="" />
        <div class="p-6">
          <h5 class="mb-2">{{ item.title }}</h5>
          <p class="text-sm mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const promos = ref([
  {
    id: 1,
    title: "Diskon Tiket 25% Semua Rute",
    code: "PRIMAJASA25",
    discount: 25,
    type: "percentage",
    start_date: "2025-08-20",
    end_date: "2025-09-10",
    description:
      "Nikmati potongan harga 25% untuk semua pembelian tiket bus Primajasa, berlaku untuk semua rute dan semua kelas.",
    image: "/img/slide-3-min.png",
    terms: [
      "Berlaku untuk pembelian melalui agen resmi dan website Primajasa.",
      "Hanya untuk pembelian tiket sekali jalan.",
      "Tidak dapat digabung dengan promo lainnya.",
    ],
    status: "active",
  },
  {
    id: 2,
    title: "Promo Weekend – Tiket Pulang Pergi Hemat",
    code: "WEEKENDBUS",
    discount: 15,
    type: "percentage",
    start_date: "2025-08-30",
    end_date: "2025-09-30",
    description:
      "Diskon 15% khusus untuk pembelian tiket pulang-pergi di akhir pekan (Jumat, Sabtu, Minggu) semua rute Primajasa.",
    image: "/img/slide-3-min.png",
    terms: [
      "Hanya berlaku untuk keberangkatan Jumat-Minggu.",
      "Minimal pembelian 2 tiket dalam 1 transaksi.",
      "Khusus pembelian online & agen resmi Primajasa.",
    ],
    status: "upcoming",
  },
  {
    id: 3,
    title: "Cashback Rp20.000 via E-Wallet",
    code: "CASHBACK20K",
    discount: 20000,
    type: "cashback",
    start_date: "2025-08-25",
    end_date: "2025-09-15",
    description:
      "Dapatkan cashback Rp20.000 setiap pembelian tiket bus Primajasa melalui agen online dan pembayaran via e-wallet.",
    image: "/img/slide-3-min.png",
    terms: [
      "Cashback dikirim ke saldo e-wallet maksimum 2x24 jam.",
      "Minimal transaksi Rp100.000.",
      "Berlaku untuk pengguna baru dan lama.",
    ],
    status: "active",
  },
  {
    id: 4,
    title: "Gratis Snack & Minuman",
    code: "SNACKFREE",
    discount: 0,
    type: "benefit",
    start_date: "2025-08-28",
    end_date: "2025-09-30",
    description:
      "Setiap pembelian tiket kelas eksekutif dan super eksekutif, dapatkan gratis snack dan minuman di perjalanan.",
    image: "/img/slide-3-min.png",
    terms: [
      "Hanya berlaku untuk kelas eksekutif & super eksekutif.",
      "Tidak ada minimal pembelian.",
      "Selama persediaan masih ada.",
    ],
    status: "upcoming",
  },
  {
    id: 5,
    title: "Gratis Tiket Anak",
    code: "ANAKGRATIS",
    discount: 100,
    type: "special",
    start_date: "2025-09-01",
    end_date: "2025-09-30",
    description:
      "Setiap pembelian tiket 2 dewasa, 1 tiket anak gratis untuk perjalanan ke semua rute Primajasa.",
    image: "/img/slide-3-min.png",
    terms: [
      "Hanya berlaku untuk anak di bawah 5 tahun.",
      "Wajib menyertakan Kartu Keluarga atau identitas anak.",
      "Berlaku untuk pembelian di agen Primajasa.",
    ],
    status: "upcoming",
  },
]);
</script>

<style></style>
