<template>
  <div>
    <ElementHero
      :title="direksi?.title"
      :description="direksi?.acf?.sub_title"
      :background="direksi?.featured_image"
    />

    <div v-if="status === 'pending'">
      <loading />
    </div>

    <div class="container py-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <sidebar-menu />

        <div class="lg:col-span-4">
          <!-- 3 item pertama -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-10"
          >
            <div
              v-for="(item, i) in direksi?.acf?.dewan_direksi?.slice(0, 3)"
              :key="i"
              class="p-4 rounded-xl border border-gray-300 bg-white hover:shadow duration-300 relative"
            >
              <img
                :src="item?.foto?.url"
                :alt="item?.foto?.title"
                class="w-full lg:h-72 object-cover object-top rounded-xl mb-5"
              />
              <div class="flex gap-4 justify-between items-end">
                <div>
                  <p class="mb-0">{{ item.nama }}</p>
                  <p class="text-xs mb-0">{{ item.jabatan }}</p>
                </div>
              <!--   <u-button
                  size="xl"
                  variant="link"
                  @click="selectDireksi(item)"
                  class="hover:scale-110 duration-200 cursor-pointer absolute bottom-0 right-0"
                >
                  <icon
                    name="bi:arrow-right-circle-fill"
                    class="text-2xl text-primary"
                  />
                </u-button> -->
              </div>
            </div>
          </div>

          <!-- sisanya 4 kolom -->
          <div
            v-if="direksi?.acf?.dewan_direksi?.length > 3"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10"
          >
            <div
              v-for="(item, i) in direksi?.acf?.dewan_direksi?.slice(3)"
              :key="i"
              class="p-4 rounded-xl border border-gray-300 bg-white hover:shadow duration-300 h-full relative"
            >
              <img
                :src="item?.foto?.url"
                :alt="item?.foto?.title"
                class="w-full lg:h-42 object-cover object-top rounded-xl mb-5"
              />
              <div class="">
                <div>
                  <p class="mb-0">{{ item.nama }}</p>
                  <p class="text-xs mb-0">{{ item.jabatan }}</p>
                </div>
              <!--   <u-button
                  size="xl"
                  variant="link"
                  @click="selectDireksi(item)"
                  class="hover:scale-110 duration-200 cursor-pointer absolute bottom-0 right-0"
                >
                  <icon
                    name="bi:arrow-right-circle-fill"
                    class="text-2xl text-primary"
                  />
                </u-button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  end container -->

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
                :src="selected?.foto?.url ?? 'https://via.placeholder.com/150'"
                alt=""
                class="w-20 h-20 object-cover object-top rounded-full shrink-0 border border-gray-300"
              />
              <div>
                <p class="mb-0 text-2xl font-bold">{{ selected?.nama }}</p>

                <p class="text-sm mb-0">{{ selected?.jabatan }}</p>
                <hr class="border-gray-300 my-2" />
                <div v-html="selected?.biografi"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
   layout: "about"
});

const route = useRoute();

const {
  data: direksi,
  status,
  error,
} = useWpContent<PageContent>("dewan-direksi");

const selected = ref<any | null>(null);
const selectDireksi = (index: any) => {
  selected.value = index;

  console.log(selected.value);
};
</script>

<style></style>
