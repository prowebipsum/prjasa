export function useDateFormat() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long", // Nama bulan lengkap (Maret)
      year: "numeric",
    }

    return date.toLocaleDateString("id-ID", options) // format lokal Indonesia
  }

  return { formatDate }
}
