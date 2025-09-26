<template>
  <div>
        <ElementHero
      :title="faq?.title"
      :description="faq?.acf?.sub_title"
      :background="faq?.featured_image"
    />
  
    <!-- Loading state -->
    <div v-if="status === 'pending'">
      <loading />
    </div>
<div class="container mt-16">
   <div v-if="faq?.content" class="flex flex-col gap-2" v-html="faq?.content"></div>

<div class="acc mb-10">
 <!-- Accordion -->
    <h5 class="text-primary mb-4"> F.A.Q Layanan Bus Reguler</h5>
    <div
      class="accordion divide-y divide-gray-200 border border-gray-300 rounded-xl bg-white"
    >
      <div v-for="(item, index) in faq?.acf?.bis_reguler" :key="index" class="accordion-item">
        <!-- Title -->
        <button
          class="accordion-title flex w-full  justify-between px-4 py-3 text-left text-lg font-semibold cursor-pointer"
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

<div class="acc mb-10">
 <!-- Accordion -->
    <h5 class="text-primary mb-4"> F.A.Q Layanan Bus Moda</h5>
    <div
      class="accordion divide-y divide-gray-200 border border-gray-300 rounded-xl bg-white"
    >
      <div v-for="(item, index) in faq?.acf?.bis_moda" :key="index" class="accordion-item">
        <!-- Title -->
        <button
          class="accordion-title flex w-full  justify-between px-4 py-3 text-left text-lg font-semibold cursor-pointer"
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
   
   <div class="acc mb-10">
 <!-- Accordion -->
    <h5 class="text-primary mb-4"> F.A.Q Layanan Shuttle</h5>
    <div
      class="accordion divide-y divide-gray-200 border border-gray-300 rounded-xl bg-white"
    >
      <div v-for="(item, index) in faq?.acf?.shuttle" :key="index" class="accordion-item">
        <!-- Title -->
        <button
          class="accordion-title flex w-full  justify-between px-4 py-3 text-left text-lg font-semibold cursor-pointer"
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

 <div class="acc mb-10">
 <!-- Accordion -->
    <h5 class="text-primary mb-4"> F.A.Q Layanan Bus Pariwisata</h5>
    <div
      class="accordion divide-y divide-gray-200 border border-gray-300 rounded-xl bg-white"
    >
      <div v-for="(item, index) in faq?.acf?.bis_pariwisata" :key="index" class="accordion-item">
        <!-- Title -->
        <button
          class="accordion-title flex w-full  justify-between px-4 py-3 text-left text-lg font-semibold cursor-pointer"
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
</div>
    <!-- Konten statis sebelum FAQ -->
   
  </div>
</template>

<script lang="ts" setup>
const { data: faq, status } = useWpContent("faq");

// simpan id atau judul pertanyaan aktif
const active = ref<string | null>(null);

const toggle = (id: string) => {
  active.value = active.value === id ? null : id;
};
</script>

<style scoped>
/* Animasi accordion */
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
