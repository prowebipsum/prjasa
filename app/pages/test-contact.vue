<script setup>
fetch("https://primajasa.sementara.net/wp-json/api/v1/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nama: "Tester",
    email: "tester@example.com",
    no_tel: "08123456789",
    subject: "Test API",
    pesan: "Halo dari browser console"
  })
})
  .then(res => res.json())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Error:", err));


const {
  nama,
  email,
  no_tel,
  subject,
  pesan,
  loading,
  message,
  error,
  submitForm
} = useContactForm()
</script>

<template>
  <section>
    <h2>Hubungi Kami</h2>
    <form @submit.prevent="submitForm">
      <input v-model="nama" placeholder="Nama" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="no_tel" placeholder="No Telepon" />
      <input v-model="subject" placeholder="Subject" />
      <textarea v-model="pesan" placeholder="Pesan" required></textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? "Mengirim..." : "Kirim" }}
      </button>
    </form>

    <p v-if="message" style="color:green">{{ message }}</p>
    <p v-if="error" style="color:red">{{ error }}</p>
  </section>
</template>
