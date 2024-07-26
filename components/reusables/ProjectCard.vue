<template>
  <div v-for="(project, i) in projectData" :key="i">
    <NuxtLink class="w-full relative overflow-hidden" :to="project.link">
      <div
        class="relative bg-white/40 p-2 sm:p-6 gap-8 flex justify-center items-center rounded-xl btn cursor-pointer mb-4"
      >
        <ClientOnly
          ><div class="w-full h-full absolute hover:opacity-0">
            <Icon
              class="w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] relative top-[40%] md:top-[20%]"
              :name="project.icon"
            ></Icon></div
        ></ClientOnly>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <img
            class="max-w-[200px]"
            :src="`${project.img}`"
            alt="project-image"
          />

          <div class="flex flex-col gap-1">
            <h1 class="text-xl">{{ project.title || "Project" }}</h1>
            <p class="text-[12px]">{{ project.tools || "Project tools" }}</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  mounted() {
    var element = document.getElementsByClassName("btn");

    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      element[i].addEventListener("touchstart", (e) => {
        e.preventDefault();
        el.classList.add("hover_effect");
      });
      element[i].addEventListener("touchend", (e) => {
        e.preventDefault();
        if (el.classList.contains("hover_effect")) {
          el.classList.remove("hover_effect");
        }
      });
    }
  },

  props: {
    projectData: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
.btn:hover,
.hover_effect {
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
.hover_effect {
  left: 105%;
}
.btn {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
</style>
