<template>
  <div>
    <section class="footer bg-white text-primary text-sm pt-12 pb-6  border-t border-gray-300">
      <div class="container">
        <img :src="option?.acf?.logo?.url" alt="" class="mb-5 h-12" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <div>
            <!-- col one -->
            <div>
              <h5 class="text-white mb-1">Alamat</h5>
              <div v-html="option?.acf?.alamat"></div>

            </div>
          </div>

          <div class="flex flex-col gap-4">
            <!-- col 2 -->
            <div>
              <h5 class="text-primary mb-1">Kontak</h5>
              <div class="flex flex-col gap-2">
                <span class="flex gap-2 items-center">
                  <icon name="fluent:mail-16-regular" class="text-xl" />
                  <a :href="`mailto:${option?.acf?.email}`" target="_blank">
                  <span>{{ option?.acf?.email }}</span>
                  </a>
                </span>
                <span class="flex gap-2 items-center">
                  <icon name="fluent:call-20-regular" class="text-xl" />
                  <span> {{ option?.acf?.tel }}</span>
                </span>
              </div>
            </div>
            <div>
              <p class="text-primary textlbase mb-2">Connect With Us</p>
              <p class="flex gap-4 items-center group">
               
                <icon
                  name="bi:instagram"
                  class="text-xl text-light hover:text-red-300 duration-150"
                />
                <icon
                  name="bi:facebook"
                  class="text-xl text-light hover:text-red-300 duration-150"
                />
                <icon
                  name="bi:youtube"
                  class="text-xl text-light hover:text-red-300 duration-150"
                />
                <icon
                  name="bi:linkedin"
                  class="text-xl text-light hover:text-red-300 duration-150"
                />
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <!-- col two -->
            <div>
              <h5 class="text-primary mb-1">Product</h5>
              <ul>
                <li><nuxt-link :to="localPath('/product/bus-regular')">Bus Regular </nuxt-link></li>
                <li><nuxt-link :to="localPath('/product/moda')">Moda</nuxt-link></li>
                <li><nuxt-link :to="localPath('/product/shuttle')"> Shuttle </nuxt-link></li>
                 <li><nuxt-link :to="localPath('/product/pariwisata')" >Pariwisata </nuxt-link></li>
              </ul>

            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div>
              <h5 class="text-primary mb-1">Link</h5>
              <ul>
                <li><nuxt-link :to="localPath('/about/profil-perusahaan')">Tentang Kami </nuxt-link></li>
                <li><nuxt-link :to="localPath('/promo')"> Promo </nuxt-link></li>
                <li><nuxt-link :to="localPath('/news')"> Berita & CSR </nuxt-link></li>
                <li><nuxt-link :to="localPath('/blog')"> Blog </nuxt-link></li>
                <li><nuxt-link :to="localPath('/faq')">FAQ </nuxt-link></li>
                <li><nuxt-link :to="localPath('/kontak')">Contact </nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="p-2 bg-brand-100 text-brand-600 text-xs text-center">
      <div class="container">
        <p class="mb-0">
          Primajasa Perdanaraya Utama © 2025 | web developed by 
          <a href="https://proweb.co.id" target="_blank" class="underline"> proweb</a>
        </p>
      </div>
    </div>
    <FloatingWa class="fixed bottom-4 right-4" />
  </div>
</template>

<script lang="ts" setup>
const localPath = useLocalePath(); 
const {locale} = useI18n()
 const { data: option, status } = useWpOptions(locale.value);
</script>

<style scoped>
.footer p {
  margin-bottom: 15px;
}
</style>
