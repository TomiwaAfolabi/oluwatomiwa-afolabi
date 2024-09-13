<template>
  <div v-for="(project, i) in projectData" :key="i">
    <NuxtLink
      class="w-full h-full flex relative overflow-hidden"
      :to="project.link"
    >
      <div
        class="w-full relative bg-white/40 p-2 sm:p-6 gap-8 flex justify-center items-center btn cursor-pointer mb-4 rounded-xl"
        :class="{
          'text-white  before:bg-white': isTheme && themeId == '1',
          '': isTheme && themeId == '2',
          '': isTheme && themeId == '3',
        }"
      >
        <ClientOnly
          ><div
            class="w-full h-full flex justify-center items-center absolute hover:opacity-0 rounded-xl"
            :class="{
              'text-white bg-black/[50%] ': isTheme && themeId == '1',
              '': isTheme && themeId == '2',
              '': isTheme && themeId == '3',
            }"
          >
            <Icon
              class="w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] relative"
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
        if (e.type !== "touchstart") {
          el.classList.add("hover_effect");
        }
        if (e.type === "touchstart") {
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
    themeId: {
      type: String,
      default: "",
    },
    isTheme: {
      type: Boolean,
      default: false,
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
  border-radius: 20px;
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
