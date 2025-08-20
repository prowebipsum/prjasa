// composables/useRute.ts
import { ref } from 'vue'

export const useRute = () => {
  const rute = ref([
    {
      id: "tasik-bekasi-ekonomi",
      asal: "Tasikmalaya",
      tujuan: "Bekasi",
      seat: "2-3",
      kelas: "AC Ekonomi",
      tarif: 82000,
      jadwal_berangkat: [
        { lokasi: "Pool Mandalawangi", berangkat: "03:00", tiba: "17:30" },
        { lokasi: "Terminal Bekasi", berangkat: "03:00", tiba: "19:30" }
      ],
      lintasan: [
        "Pool Mandalawangi",
        "Terminal Indihiang",
        "Rajapolah",
        "Ciawi",
        "Malangbong",
        "Nagreg",
        "Cicalengka",
        "Tol Padaleunyi",
        "Tol Cikampek",
        "Keluar Tol Bekasi Timur",
        "Bulak Kapal",
        "Terminal Bekasi"
      ],
      post_checker: [
        "Malangbong",
        "Kebon Jagong",
        "Cipacing",
        "Cipularang KM 88",
        "Tol Cikampek KM 62",
        "Tol Cikampek KM 39",
        "Gerbang Tol Bekasi Timur"
      ],
      rute_detail: [
        { asal: "Tasikmalaya / Malangbong", tujuan: "Limbangan", tarif: 12000 },
        { asal: "Tasikmalaya / Malangbong", tujuan: "Cicalengka / Dangdeur", tarif: 26000 },
        { asal: "Tasikmalaya / Malangbong", tujuan: "Cileunyi", tarif: 35000 },
        { asal: "Tasikmalaya / Malangbong", tujuan: "Rest Area KM 125", tarif: 42000 },
        { asal: "Tasikmalaya / Malangbong", tujuan: "Purwakarta / Cikopo", tarif: 68000 }
      ]
    },
    {
      id: "tasik-cililitan-bisnis",
      asal: "Tasikmalaya",
      tujuan: "Cililitan",
      seat: "2-2",
      kelas: "AC Bisnis",
      tarif: 105000,
      jadwal_berangkat: [
        { lokasi: "Pool Mandalawangi", berangkat: "04:00", tiba: "18:00" }
      ],
      lintasan: [
        "Pool Mandalawangi",
        "Terminal Indihiang",
        "Rajapolah",
        "Ciawi",
        "Malangbong",
        "Nagreg",
        "Cileunyi",
        "Tol Padaleunyi",
        "Tol Jagorawi",
        "Cawang",
        "Cililitan"
      ],
      post_checker: [
        "Malangbong",
        "Cipacing",
        "Cipularang KM 88",
        "Tol Cikampek KM 62"
      ],
      rute_detail: [
        { asal: "Tasikmalaya", tujuan: "Cileunyi", tarif: 33000 },
        { asal: "Cileunyi", tujuan: "Jakarta", tarif: 72000 }
      ]
    },
    {
      id: "bekasi-singaparna-bisnis",
      asal: "Bekasi",
      tujuan: "Singaparna",
      seat: "2-2",
      kelas: "AC Bisnis",
      tarif: 85000,
      jadwal_berangkat: [
        { lokasi: "Terminal Bekasi", berangkat: "05:00", tiba: "20:00" }
      ],
      lintasan: [
        "Terminal Bekasi",
        "Tol Cikampek",
        "Tol Padaleunyi",
        "Cileunyi",
        "Nagreg",
        "Malangbong",
        "Ciawi",
        "Rajapolah",
        "Singaparna"
      ],
      post_checker: [
        "Cipularang KM 88",
        "Tol Cikampek KM 39"
      ],
      rute_detail: [
        { asal: "Bekasi", tujuan: "Cileunyi", tarif: 53000 },
        { asal: "Cileunyi", tujuan: "Singaparna", tarif: 32000 }
      ]
    }
  ])

  return { rute }
}
