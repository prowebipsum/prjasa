<template>
  <div class="acc mb-10" v-if="items?.length">
    <h5 class="text-primary mb-4">{{ title }}</h5>
    <div class="accordion divide-y divide-gray-200 border border-gray-300 rounded-xl bg-white">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <!-- Title -->
        <button
          class="accordion-title flex w-full justify-between px-4 py-3 text-left text-lg font-semibold cursor-pointer"
          @click="toggle(item.tanya)"
        >
          <span>{{ item.tanya }}</span>
          <icon
            name="material-symbols:expand-more-rounded"
            class="transition-transform duration-300 text-xl"
            :class="{ 'rotate-180': active === item.tanya }"
          />
        </button>

        <!-- Content -->
        <transition name="accordion">
          <div
            v-if="active === item.tanya"
            class="accordion-content px-4 pb-4 text-base text-gray-700"
            v-html="item.jawab"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  items?: { tanya: string; jawab: string }[]
  active?: string | null
}>()

const emit = defineEmits(["update:active"])

const active = computed({
  get: () => props.active,
  set: (val) => emit("update:active", val),
})

const toggle = (id: string) => {
  active.value = active.value === id ? null : id
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  opacity: 1;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
