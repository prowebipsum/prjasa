<template>
  <div class="">
    <h4>About</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est eligendi dolore,
      ad numquam modi non voluptas, dignissimos quidem ratione porro quis a quos nisi cum
      temporibus eum quod architecto?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi
      molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.
    </p>

    <h4>History</h4>
    <UTimeline
      v-model="active"
      :items="history"
      :ui="{ title: 'text-xl', date: 'text-sm font-medium' }"
      class="max-w-xl"
      size="sm"
    >
    </UTimeline>
  </div>
</template>

<script lang="ts" setup>
import { avatar } from "#build/ui";

definePageMeta({
  layout: "about",
});

const history = ref([
  {
    date: "1991",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "1995",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "1999",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "2003",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "2007",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "2017",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "2019",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
  {
    date: "2023",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae. Ratione, minima? Excepturi dolor nihil asperiores provident.",
    image: "/img/icon-wisata.png",
  },
]);

const active = ref(0);
onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % history.value.length;
  }, 1000);
});
</script>

<style></style>
