<template>
  <div>
    <section class="mb-16">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard radius="xl" class="h-max">
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto unde
              neque, ex laborum iste in fuga quod incidunt quidem doloremque et atque
              nostrum reprehenderit dolor facilis necessitatibus nihil vero?
            </p>
          </UCard>

          <div class="border border-gray-300 rounded-xl overflow-hidden">
            <img src="/img/slide-1-min.png" alt="" class="w-full" />
            <div class="p-6">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>
                consectetur adipisicing elit. Velit iusto unde neque, ex laborum iste in
                fuga quod incidunt quidem doloremque et atque nostrum reprehenderit
              </p>
            </div>
          </div>

          <div class="border border-gray-300 rounded-xl overflow-hidden h-max">
            <div class="p-6 pb-0">
              <Icon name="heroicons:light-bulb" class="text-6xl text-primary" />
            </div>
            <div class="p-6 pt-0">
              <h4 class="text-primary">Lorem ipsum dolor sit amet.</h4>
              <p>
                consectetur adipisicing elit. Velit iusto unde neque, ex laborum iste in
                fuga quod incidunt quidem doloremque et atque nostrum reprehenderit
              </p>
              <UButton size="xl" class="rounded-full px-5">Button</UButton>
            </div>
          </div>

          <div
            class="bg-primary text-white border border-gray-300 rounded-xl overflow-hidden h-max"
          >
            <div class="p-6 pb-0">
              <Icon name="heroicons:light-bulb" class="text-6xl text-secondary" />
            </div>
            <div class="p-6 pt-0">
              <h4 class="text-secondary">Lorem ipsum dolor sit amet.</h4>
              <p>
                consectetur adipisicing elit. Velit iusto unde neque, ex laborum iste in
                fuga quod incidunt quidem doloremque et atque nostrum reprehenderit
              </p>
            </div>
            <div class="p-6 pt-0">
              <UButton
                color="secondary"
                size="xl"
                trailing-icon="heroicons:arrow-right"
                class="rounded-full px-5"
                :ui="{ trailingIcon: 'w-4' }"
                >Button</UButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
          <div class="lg:col-span-2">
            <div
              class="bg-[url('/img/slide-1-min.png')] bg-cover bg-center text-white border border-gray-300 rounded-xl overflow-hidden min-h-[400px] flex flex-col justify-end relative"
            >
              <div
                class="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-t from-black to-black/10 opacity-70"
              ></div>
              <div class="p-6 relative">
                <h4 class="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h4>
                <p class="mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum a illo
                  alias.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div
              class="bg-[url('/img/slide-1-min.png')] bg-cover bg-center text-white border border-gray-300 rounded-xl overflow-hidden min-h-[400px] flex flex-col justify-end relative"
            >
              <div
                class="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-tr from-gray-900 to-black/10 opacity-70"
              ></div>
              <div class="p-6 relative max-w-[500px]">
                <h4 class="text-white mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h4>
                <p class="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum a illo
                  alias consectetur adipisicing elit Ipsum a illo alias.
                </p>
                <UButton size="xl" class="rounded-full px-6">Button</UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
</script>

<style></style>
