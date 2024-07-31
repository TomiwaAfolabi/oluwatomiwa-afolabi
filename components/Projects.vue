<template>
  <div class="mt-10 mb-10 flex flex-col gap-20 px-4 overflow-auto">
    <div
      class="bg-[#EAE3D2] rounded-xl flex flex-col items-center mx-auto overflow-hidden p-4"
    >
      <div class="mt-2 text-center">
        <div class="flex flex-col gap-4">
          <p class="font-bold underline mb-2">Projects</p>
          <project-card :projectData="projectsData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from "~/static/projects.json";
import ProjectCard from "./reusables/ProjectCard.vue";
export default {
  components: { ProjectCard },
  data() {
    return {
      projectsData,
    };
  },
};
</script>

<style></style>
