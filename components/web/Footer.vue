<template>
  <footer
    class="w-full flex justify-center pt-2 pb-2 gap-2 bg-[#EAE3D2] overflow-auto bottom-0"
    :class="{
      'text-white !bg-black/[25%]': isTheme && themeId == '1',
      '': isTheme && themeId == '2',
      '': isTheme && themeId == '3',
    }"
  >
    <div
      class="h-auto flex flex-col sm:flex-row gap-0 sm:gap-2 p-2 sm:p-1 overflow-auto"
    >
      <div class="flex gap-[5px]">
        <div class="block md:hidden">
          <Icon
            class="mb-[5px] block md:hidden"
            name="fluent-emoji-high-contrast:telephone"
            size="1.0em"
          >
          </Icon
          >:
        </div>

        <div class="flex gap-2">
          <p class="text-[10px] md:text-[15px] hidden md:block">Telephone:</p>
          <span class="text-[13px] md:text-[15px] underline pt-1 md:pt-0"
            >+2349056674075</span
          >
        </div>
      </div>
      <div class="flex gap-2">
        <div class="block md:hidden">
          <Icon name="bx:bxs-envelope" size="1.0em"></Icon>:
        </div>

        <div class="flex gap-2">
          <p class="text-[10px] md:text-[15px] hidden md:block">Email:</p>
          <span class="underline text-[13px] md:text-[15px] pt-1 md:pt-0"
            >tomiwasanto@gmail.com</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { theme } from "../../store/theme";
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
<style></style>
