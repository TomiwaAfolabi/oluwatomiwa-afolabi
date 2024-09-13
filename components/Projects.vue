<template>
  <div class="mt-10 mb-10 flex flex-col gap-20 px-4 py-4">
    <div
      class="bg-[#EAE3D2] rounded-xl flex flex-col items-center mx-auto p-4 overflow-hidden"
      :class="{
        'text-white !bg-black/[25%]': isTheme && themeId == '1',
        '': isTheme && themeId == '2',
        '': isTheme && themeId == '3',
      }"
    >
      <div class="mt-2 text-center">
        <div class="flex flex-col gap-4">
          <p class="font-bold underline mb-2">Projects</p>
          <project-card
            :projectData="projectsData"
            :themeId="themeId"
            :isTheme="isTheme"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from "~/static/projects.json";
import ProjectCard from "./reusables/ProjectCard.vue";
import { theme } from "../store/theme";
export default {
  components: { ProjectCard },
  data() {
    return {
      projectsData,
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
};
</script>

<style></style>
