<template>
  <div
    class="mx-none md:mx-auto body bg-[url('~/assets/img/portfolio-bg-image.jpg')]"
  >
    <div class="flex justify-center p-6"><WebNav /></div>

    <NuxtPage />
    <WebFooter />
  </div>
</template>
<script></script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
