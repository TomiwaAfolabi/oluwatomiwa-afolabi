<template>
  <div
    class="mx-none md:mx-auto body bg-[url('~/assets/img/portfolio-bg-image.jpg')]"
    :class="{
      grayscale: isTheme && themeId == '1',
      '': isTheme && themeId == '2',
      '': isTheme && themeId == '3',
    }"
  >
    <div class="flex justify-center p-2"><WebNav /></div>

    <NuxtPage />
    <WebFooter />
  </div>
</template>
<script>
import { theme } from "./store/theme";
export default {
  computed: {
    isTheme() {
      return theme.state.isTheme;
    },
    themeId() {
      return theme.state.themeNo;
    },
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
