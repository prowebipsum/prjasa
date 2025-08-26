<template>
  <div>
    <UTimeline v-model="active" :default-value="2" :items="penghargaan" class="w-96" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "about",
});

const penghargaan = ref([
  {
    id: 1,
    title: "Penghargaan One",
    organization: "Tech Asia",
    date: "2021",
    location: "Jakarta, Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quia totam inventore quasi molestiae.",
    icon: "bi:award",
  },
  {
    id: 2,
    title: "Penghargaan Two",
    organization: "Startup Grind",
    date: "2022",
    location: "Bali, Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quia totam inventore quasi molestiae.",
    icon: "bi:award",
  },
  {
    id: 3,
    title: "Penghargaan Three",
    organization: "Lorem Ipsum",
    date: "2023",
    location: "Bandung, Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quia totam inventore quasi molestiae.",
    icon: "bi:award",
  },
  {
    id: 4,
    title: "Pengahargaan Four",
    organization: "Startup Grind",
    date: "2024",
    location: "JAkarta, Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quia totam inventore quasi molestiae.",
    icon: "bi:award",
  },
]);

const active = ref(0);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % penghargaan.value.length;
  }, 1000);
});
</script>

<style></style>
