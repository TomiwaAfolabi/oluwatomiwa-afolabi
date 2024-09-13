<template>
  <nav
    class="w-full max-w-[99%] flex h-[150px] sm:h-[120px] bg-[#EAE3D2] rounded-[8px] transition-all duration-[1000ms] ease-in-out"
    :class="{
      'bg-neutral-950/20 ': isTheme && themeId == '1',
    }"
  >
    <div
      class="md:p-4 p-2 flex flex-col gap-2.5 overflow-y-scroll"
      :class="{
        'text-white': isTheme && themeId == '1',
        '': isTheme && themeId == '2',
        '': isTheme && themeId == '3',
      }"
    >
      <p>Oluwatomiwa Afolabi | Front-End Engineer | AWS Cloud Engineer</p>
      <div class="flex gap-2 flex-wrap">
        <div class="flex gap-2">
          <a
            class="hover:scale-10 cursor-pointer"
            href="https://www.linkedin.com/in/tomiwa-afolabi-41761421a/"
            target="_blank"
          >
            <Icon name="grommet-icons:linkedin" size="1.5em" />
          </a>

          <a
            class="cursor-pointer"
            href="https://github.com/TomiwaAfolabi/"
            target="_blank"
          >
            <Icon name="grommet-icons:github" size="1.5em" />
          </a>
        </div>
        <div
          class="w-full flex justify-start mt-[5px] max-w-[25px] xs:max-w-[50px] h-[15px] xs:h-[20px] rounded-full border-2 border-[#D1B399] bg-[#EAE3D2] transition-all ease-in duration-300"
          :class="{
            'bg-[#bf7739] justify-end': isTheme,
            ' !bg-white  border-black/60': isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
        >
          <div
            class="w-full h-[13px] xs:h-[16px] max-w-[10px] xs:max-w-[20px] bg-[#c98e5a] border-2 border-[#bf7739] rounded-full cursor-pointer"
            :class="{
              '!bg-[#EAE3D2] justify-end border-none mt-[1.8px] mr-[2px] xs:h-[12.5px] ':
                isTheme,
              ' !bg-black/60  ': isTheme && themeId == '1',
              '': isTheme && themeId == '2',
              '': isTheme && themeId == '3',
            }"
            @click="toggleTheme"
          ></div>
        </div>
      </div>
    </div>

    <div class="md:w-full w-1/2 flex justify-end md:p-8 p-4">
      <!-- General NavBar -->
      <ul class="md:flex hidden gap-4">
        <NuxtLink to="/"
          ><li
            class="hover:bg-[#D1B399] px-8 py-2 pt-2 rounded-lg cursor-pointer hover:scale-110 underline hover:no-underline"
            :class="{
              'text-white hover:bg-black/[25%]': isTheme && themeId == '1',
              '': isTheme && themeId == '2',
              '': isTheme && themeId == '3',
            }"
          >
            Home
          </li></NuxtLink
        >

        <NuxtLink to="/Projects">
          <li
            class="hover:bg-[#D1B399] px-8 py-2 pt-2 rounded-lg cursor-pointer hover:scale-110 underline hover:no-underline"
            :class="{
              'text-white hover:bg-black/[25%]': isTheme && themeId == '1',
              '': isTheme && themeId == '2',
              '': isTheme && themeId == '3',
            }"
          >
            Project
          </li></NuxtLink
        >
        <NuxtLink to="/About"
          ><li
            class="hover:bg-[#D1B399] px-8 py-2 pt-2 rounded-lg cursor-pointer hover:scale-110 underline hover:no-underline"
            :class="{
              'text-white hover:bg-black/[25%]': isTheme && themeId == '1',
              '': isTheme && themeId == '2',
              '': isTheme && themeId == '3',
            }"
          >
            About
          </li></NuxtLink
        >
      </ul>

      <!-- dropdwon icon  -->
      <div class="block md:hidden">
        <div
          class="flex justify-end cursor-pointer"
          :class="{
            'text-white hover:bg-black/[25%]': isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
          @click.prevent="toggleDropdown"
        >
          <Icon name="ic:round-table-rows" size="1.5em" />
        </div>
        <!-- dropdown -->
        <div
          class="w-[100px] bg-[#D1B399] rounded-lg overflow-scroll absolute md:relative right-[20px]"
          :class="{
            '!bg-black/[20%] hover:!bg-black/[25%]': isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
          v-if="showDropdown"
        >
          <ul class="block md:hidden gap-4">
            <NuxtLink to="/" @click.prevent="toggleDropdown"
              ><li
                class="hover:bg-[#EAE3D2] px-8 py-2 pt-4 rounded-lg cursor-pointer"
                :class="{
                  'text-white hover:!bg-black/[15%]': isTheme && themeId == '1',
                  '': isTheme && themeId == '2',
                  '': isTheme && themeId == '3',
                }"
              >
                Home
              </li></NuxtLink
            >
            <NuxtLink to="/projects" @click.prevent="toggleDropdown">
              <li
                class="hover:bg-[#EAE3D2] px-8 py-2 pt-4 rounded-lg cursor-pointer"
                :class="{
                  'text-white hover:!bg-black/[15%]': isTheme && themeId == '1',
                  '': isTheme && themeId == '2',
                  '': isTheme && themeId == '3',
                }"
              >
                Project
              </li></NuxtLink
            >
            <NuxtLink to="/about" @click.prevent="toggleDropdown"
              ><li
                class="hover:bg-[#EAE3D2] px-8 py-2 pt-4 rounded-lg cursor-pointer"
                :class="{
                  'text-white hover:!bg-black/[15%]': isTheme && themeId == '1',
                  '': isTheme && themeId == '2',
                  '': isTheme && themeId == '3',
                }"
              >
                About
              </li></NuxtLink
            >
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { theme } from "../../store/theme";

export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  computed: {
    isTheme() {
      return theme.state.isTheme;
    },
    themeId() {
      return theme.state.themeNo;
    },
  },

  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleTheme() {
      theme.commit("switchTheme");
      console.log(this.isTheme);
    },
  },
};
</script>
<style></style>
