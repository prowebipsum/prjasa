<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      <div
        v-for="item in direksi"
        class="p-4 rounded-xl border border-gray-300 bg-white hover:shadow duration-300"
      >
        <img
          :src="item.photo"
          alt=""
          class="w-full h-48 md:h-60 lg:h-72 object-cover object-top rounded-xl mb-5"
        />
        <div class="flex gap-4 justify-between items-end">
          <div>
            <p class="mb-0">{{ item.name }}</p>
            <p class="text-xs mb-0">{{ item.role }}</p>
          </div>
          <u-button size="xl" variant="link" @click="selectDireksi(item)">
            <icon name="bi:arrow-right-circle-fill" class="text-2xl text-primary" />
          </u-button>
        </div>
      </div>
    </div>
    <transition>
      <div
        v-if="selected"
        class="fixed top-0 left-0 w-full h-full min-h-screen z-50 flex flex-col items-center justify-center p-6 bg-gray-50/85"
      >
        <div
          class="max-w-xl relative animate-jelly bg-white p-6 rounded-xl border border-gray-300"
        >
          <button
            @click="selected = null"
            class="absolute top-3 right-3 text-2xl text-primary"
          >
            <icon name="bi:x-lg" />
          </button>
          <div class="flex justify-between flex-wrap lg:flex-nowrap gap-4">
            <img
              :src="selected.photo"
              alt=""
              class="w-20 h-20 object-cover rounded-full shrink-0 border border-gray-300"
            />
            <div>
              <p class="mb-0 text-2xl font-bold">{{ selected.name }}</p>
              <p class="text-sm mb-0">{{ selected.role }}</p>
              <div v-html="selected.bio"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
    name: "Robert Doe",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "Peter Doe",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "Harry Kane",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "Karen Smith",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
  {
    name: "Robert Johnson",
    role: "CEO",
    photo: "/img/direktur-2.jpg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo in repellat optio, autem similique sapiente a commodi sit accusamus.",
  },
]);

const selected = ref<any | null>(null);
const selectDireksi = (index: any) => {
  selected.value = index;

  console.log(selected.value);
};
</script>

<style></style>
