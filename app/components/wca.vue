<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <div v-for="item in wca" class="p-4 rounded-xl shadow">
          <icon :name="item.icon" class="text-6xl text-primary" />
          <h4 class="mb-1">{{ item.title }}</h4>
          <p class="">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const wca = ref([
  {
    title: "Layanan Bus Beragam",
    description:
      " Menyediakan berbagai jenis layanan bus untuk memenuhi kebutuhan anda, seperti Bus Antar Kota dan Antar Provinsi, Angkutan Pemadu Moda, Bus Wisata, Shuttle.",
    icon: "tabler:bus",
  },
  {
    title: "Layanan Ramah dan Profesional",
    description:
      "Pelayanan staff & pengemudi yang berpengalaman, serta dengan layanan yang sigap, ramah, dan profesional, kami memastikan setiap perjalanan berjalan aman, nyaman, dan lancar.",
    icon: "mdi:account-tie-hat",
  },
  {
    title: "Ekonomis, tepat waktu dan aman",
    description:
      "Kepuasan Anda adalah prioritas kami, dengan bus yang selalu terawat dan pelayanan yang profesional. Kami berkomitmen untuk memberikan pengalaman perjalanan yang nyaman, menyenangkan, dan tepat waktu.",
    icon: "mdi:bus-clock",
  },
  {
    title: "Layanan Operasional 24 jam",
    description:
      "Kami menyediakan transportasi yang dapat diandalkan kapan saja Anda membutuhkannya, memastikan Anda selalu memiliki akses ke layanan kami tanpa terbatas waktu.",
    icon: "ri:24-hours-line",
  },
]);
</script>

<style></style>
