<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      <div v-for="item in direksi" class="p-4 rounded-xl border border-gray-300">
        <img
          :src="item.photo"
          alt=""
          class="w-full h-56 object-cover object-top rounded-xl mb-5"
        />
        <p class="mb-0">{{ item.name }}</p>
        <p class="text-xs mb-0">{{ item.role }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "about",
});

const direksi = ref([
  {
    name: "John Doe",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "John Doe",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "John Doe",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "John Doe",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
]);
</script>

<style></style>
