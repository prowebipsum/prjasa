// composables/useFilterRute.ts
import { useRute } from '../composable/rute'

export const useFilterRute = () => {
  const { rute } = useRute()

  const findByAsal = (asal: string) => rute.value.filter(r => r.asal.toLowerCase().includes(asal.toLowerCase()))
  const findByTujuan = (tujuan: string) => rute.value.filter(r => r.tujuan.toLowerCase().includes(tujuan.toLowerCase()))
  const findByKelas = (kelas: string) => rute.value.filter(r => r.kelas.toLowerCase().includes(kelas.toLowerCase()))

  const search = (asal: string, tujuan: string, kelas?: string) => {
    return rute.value.filter(r =>
      r.asal.toLowerCase().includes(asal.toLowerCase()) &&
      r.tujuan.toLowerCase().includes(tujuan.toLowerCase()) &&
      (!kelas || r.kelas.toLowerCase().includes(kelas.toLowerCase()))
    )
  }

  return { findByAsal, findByTujuan, findByKelas, search }
}
