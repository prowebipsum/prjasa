<template>
  <div>
    <h4>Visi</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est eligendi dolore,
      ad numquam modi non voluptas, dignissimos quidem ratione porro quis a quos nisi cum
      temporibus eum quod architecto?
    </p>
    <h4>Misi</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab ducimus
      nemo consequatur blanditiis veniam ratione facere. Totam esse similique aperiam
      corporis impedit delectus obcaecati illo rem voluptatum, cum sapiente.
    </p>
    <div class="p-6 mt-10 rounded-xl bg-gray-50">
      <h4 class="text-primary">Values</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in values"
          class="p-4 rounded-xl bg-white border border-gray-300 flex gap-4"
        >
          <icon :name="item.icon" class="text-6xl text-primary shrink-0" />
          <div>
            <h4 class="mb-1 text-lg text-primary">{{ item.title }}</h4>
            <p class="">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "about",
});

const values = ref([
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae.",
    icon: "bi:award",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae.",
    icon: "bi:lightbulb",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae.",
    icon: "bi:bus-front-fill",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam inventore quasi molestiae.",
    icon: "bi:person-check",
  },
]);
</script>

<style></style>
