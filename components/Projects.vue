<template>
  <div class="mt-10 flex flex-col gap-20 px-4">
    <div
      class="bg-[#EAE3D2] rounded-xl flex flex-col items-center mx-auto overflow-scroll p-8"
    >
      <div class="mt-2 text-center">
        <div class="flex flex-col gap-4">
          <p class="font-bold underline mb-2 text-4xl">Projects</p>
          <project-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./reusables/ProjectCard.vue";
export default {
  components: { ProjectCard },
};
</script>

<style></style>
