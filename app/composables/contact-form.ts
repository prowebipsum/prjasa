import { ref } from 'vue'

export function useContactForm() {
  const nama = ref('')
  const email = ref('')
  const no_tel = ref('')
  const subject = ref('')
  const pesan = ref('')
  const loading = ref(false)
  const message = ref(null)
  const error = ref(null)

  const resetForm = () => {
    nama.value = ''
    email.value = ''
    no_tel.value = ''
    subject.value = ''
    pesan.value = ''
  }

  const submitForm = async () => {
    loading.value = true
    message.value = null
    error.value = null
    const baseUrl = useRuntimeConfig().public.wpApi
    try {
      const res = await $fetch(baseUrl + 'contact', {
        method: 'POST',
        body: {
          nama: nama.value,
          email: email.value,
          no_tel: no_tel.value,
          subject: subject.value,
          pesan: pesan.value
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })

      message.value = res.message
      resetForm()
    } catch (err) {
      error.value = err?.data?.message || 'Terjadi kesalahan saat mengirim pesan'
    } finally {
      loading.value = false
    }
  
  }

  return {
    nama,
    email,
    no_tel,
    subject,
    pesan,
    loading,
    message,
    error,
    submitForm,
    resetForm
  }
}
