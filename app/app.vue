<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
<script setup>

 const router = useRouter()
 
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
      `,
    },
  ],
})


// tracking otomatis setiap kali pindah halaman
onMounted(() => {
 
  router.afterEach((to) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-6PB5CEND33', {
        page_path: to.fullPath,
      })
    }
  })
})
</script>

