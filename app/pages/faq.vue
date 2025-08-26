<template>
  <div>
    <UAccordion
      :items="items"
      :ui="{ label: 'text-lg font-semibold cursor-pointer', content: 'text-base' }"
      v-model="active"
      class="border border-gray-300 rounded-xl px-6 bg-white"
    />
  </div>
</template>

<script lang="ts" setup>
const items = ref([
  {
    label: "Loremipsum doloretsitamet ?",
    content:
      "Curabitur erat mi, rutrum ut molestie at, congue id eros. Integer convallis metus lorem, a fringilla orci varius sit amet. Quisque viverra justo at est aliquet tincidunt. ",
  },
  {
    label: "Nulla neque nisi, semper id gravida a, pharetra vel augue ?",
    content:
      "Duis iaculis convallis augue, condimentum venenatis mi consectetur r a. Etiam convallis volutpat sem, vitae sollicitudin dolor mattis at.",
  },
  {
    label: "Sed dapibus pellentesque libero id mattis. Nam in elit sit amet libero ?",
    content:
      "n sapien lacus, placerat eget purus nec, tempor sagittis turpis. Cras ultricies velit erat, in viverra enim bibendum quis. ",
  },
]);
</script>

<style></style>
