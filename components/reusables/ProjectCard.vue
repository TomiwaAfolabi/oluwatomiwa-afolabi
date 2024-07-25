<template>
  <div>
    <NuxtLink
      v-for="(project, i) in projectsData"
      :key="i"
      class="w-full relative overflow-hidden"
      to=""
    >
      <div
        class="relative bg-white/40 p-6 flex flex-col sm:flex-row gap-8 rounded-none sm:rounded-xl justify-center items-center btn cursor-pointer mb-4"
      >
        <div class="w-full h-full absolute hover:opacity-0">
          <Icon
            class="w-[60px] h-[60px] relative top-[20%]"
            :name="project.icon"
          />
        </div>

        <div>
          <img class="max-w-[200px]" :src="imgInfo[0]" alt="project image" />
        </div>

        <div class="flex flex-col gap-1">
          <h1 class="text-xl">{{ project.title || "Project" }}</h1>
          <p class="text-[12px]">{{ project.tools || "Project tools" }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import projectsData from "~/static/projects.json";
export default {
  data() {
    return {
      projectsData,
    };
  },
  computed: {
    imgInfo() {
      let imginfo = [];
      projectsData.map((el) => imginfo.push(el.img.toString()));
      return imginfo;
    },
  },
};
</script>

<style>
.btn:hover,
.btn:active {
  box-shadow: 1px 1px 25px 10px rgba(139, 115, 75, 0.4);
}

.btn:before {
  content: "";
  position: absolute;
  top: 0%;
  left: -0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(#eae3d2, #eae3d2, #eae3d2);
  transition: all 200ms;
}

.btn:hover:before,
.btn:active:before {
  left: 105%;
}
</style>
