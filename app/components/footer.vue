<template>
  <div>
    <section class="footer bg-primary text-light text-sm pt-12 pb-6">
      <div class="container">
        <img src="/logo-white.png" alt="" class="mb-5 h-12" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <div>
            <!-- col one -->
            <div>
              <h5 class="text-white mb-1">Alamat</h5>
              <p>
                Jl. Mayjen Sutoyo No.32, RT.8/RW.8, <br />
                Cililitan, Kec. Kramat jati, Kota Jakarta Timur, <br />
                Jakarta 13630
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <!-- col 2 -->
            <div>
              <h5 class="text-white mb-1">Kontak</h5>
              <div class="flex flex-col gap-2">
                <span class="flex gap-2 items-center">
                  <icon name="fluent:mail-16-regular" class="text-xl" />
                  <span> info.primajasa@gmail.com</span>
                </span>
                <span class="flex gap-2 items-center">
                  <icon name="fluent:call-20-regular" class="text-xl" />
                  <span> +628 1212 19545</span>
                </span>
              </div>
            </div>
            <div>
              <p class="text-white textlbase mb-2">Connect With Us</p>
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
              <h5 class="text-light mb-1">Product</h5>
              <ul>
                <li><nuxt-link to="/">Bus Regular </nuxt-link></li>
                <li><nuxt-link to="/">Red White Star</nuxt-link></li>
                <li><nuxt-link to="/">Moda </nuxt-link></li>
                <li><nuxt-link to="/">Shuttle </nuxt-link></li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div>
              <h5 class="text-light mb-1">Link</h5>
              <ul>
                <li><nuxt-link to="/">Tentang Kami </nuxt-link></li>
                <li><nuxt-link to="/"> Promo </nuxt-link></li>
                <li><nuxt-link to="/"> Berita & CSR </nuxt-link></li>
                <li><nuxt-link to="/">FAQ </nuxt-link></li>
                <li><nuxt-link to="/">Contact </nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="p-2 bg-brand-900 text-light text-xs text-center">
      <div class="container">
        <p class="mb-0">
          Primajasa Perdanaraya Utama © 2025 | Powered by
          <a href="https://proweb.co.id" target="_blank" class="underline"> proweb</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer p {
  margin-bottom: 15px;
}
</style>
