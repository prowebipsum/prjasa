<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
<script setup>

 const router = useRouter()
 


// 1️⃣ Pasang Google Tag script di <head>
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-6PB5CEND33',
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6PB5CEND33', { send_page_view: false });
        gtag('config', 'AW-17675835660');
      `,
    },
  ],
})

// 2️⃣ Kirim page_view setiap kali navigasi
onMounted(() => {
  router.afterEach((to) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: to.fullPath,
      })
    }
  })
})

</script>

