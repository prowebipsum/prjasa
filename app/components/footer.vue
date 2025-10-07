<template>
  <div>
    <section
      class="footer bg-white text-primary text-sm pt-12 pb-6 border-t border-gray-300"
    >
      <div class="container">
        <img :src="option?.acf?.logo?.url" alt="" class="mb-5 h-12" />
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          <!-- col one -->
          <div>
            <div>
              <h5 class="text-primary mb-1">{{ $t("footer.address") }}</h5>
              <div v-html="option?.acf?.alamat"></div>
              <UButton
                to="https://maps.app.goo.gl/Um8tWg6sU8fwrxZR8"
                trailing-icon="material-symbols:location-on"
                size="xs"
                variant="outline"
                target="_blank"
                class="mt-5 italic"
                >See map</UButton
              >
            </div>
          </div>

          <!-- col two -->
          <div class="flex flex-col gap-4">
            <div>
              <h5 class="text-primary mb-1">{{ $t("footer.contact") }}</h5>
              <div class="flex flex-col gap-2">
                <span class="flex gap-2 items-center">
                  <icon name="fluent:mail-16-regular" class="text-xl" />
                  <a :href="`mailto:${option?.acf?.email}`" target="_blank">
                    <span>{{ option?.acf?.email }}</span>
                  </a>
                </span>
                <span class="flex gap-2 items-center">
                  <icon name="fluent:call-20-regular" class="text-xl" />
                  <span>{{ option?.acf?.tel }}</span>
                </span>
              </div>
            </div>

            <div>
              <p class="text-primary textlbase mb-2">
                {{ $t("footer.connect") }}
              </p>
              <div v-if="option?.acf?.sosial_media" class="flex gap-4 items-center group">
                <a 
                  v-for="sosmed in option?.acf?.sosial_media"
                  :key="sosmed"
                  :href="sosmed?.link"
                  target="_blank"
                >
                  <icon
                    :name="sosmed?.icon"
                    class="text-xl text-primary hover:text-red-300 duration-150"
                  />
                </a>
              </div>
            </div>
          </div>

          <!-- col three -->
          <div class="flex flex-col gap-4">
            <div>
              <h5 class="text-primary mb-1">{{ $t("footer.product") }}</h5>
              <ul class="menu">
                <li>
                  <nuxt-link :to="localPath('/product/bus-regular')"
                    >Bus Regular</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link :to="localPath('/product/moda')">Moda</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/product/shuttle')"
                    >Shuttle</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link :to="localPath('/product/pariwisata')"
                    >Pariwisata</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- col four -->
          <div class="flex flex-col gap-4">
            <div>
              <h5 class="text-primary mb-1">{{ $t("footer.link") }}</h5>
              <ul class="menu">
                <li>
                  <nuxt-link :to="localPath('/about/profil-perusahaan')">{{
                    $t("footer.about")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/promo')">{{
                    $t("footer.promo")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/news')">{{
                    $t("footer.news")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/blog')">{{
                    $t("footer.blog")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/faq')">{{
                    $t("footer.faq")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/karir')">{{
                    $t("footer.career")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localPath('/kontak')">{{
                    $t("footer.contactPage")
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="p-2 bg-primary text-brand-100 text-xs text-center">
      <div class="container">
        <p class="mb-0">
          Primajasa Perdanaraya Utama © 2025 | <a href="https://proweb.co.id" target="_blank" class=""
            >Pengembangan Digital</a
          >
        </p>
      </div>
    </div>

    <FloatingWa class="fixed bottom-4 right-4" />
  </div>
</template>

<script lang="ts" setup>
const localPath = useLocalePath();
const { locale } = useI18n();
const { data: option, status } = useWpOptions(locale.value);
</script>

<style scoped>
.footer p {
  margin-bottom: 15px;
}
</style>
