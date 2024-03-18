<template>
  <div class="w-full mt-20 flex flex-col gap-20 px-4">
    <!-- section 1 -->
    <div
      class="max-w-full h-[400px] bg-[#EAE3D2] rounded-xl flex mx-auto overflow-scroll p-4 md:p-0"
    >
      <div class="max-w-[500px] p-4 hidden md:block">
        <img src="../assets/img/bio-pic.jpg" class="rounded-xl md:w-[300px]" />
      </div>

      <div class="max-w-[400px] md:max-w-[500px] justify-end text-center">
        <h2 class="underline mt-4">Bio</h2>
        <p class="md:mt-4 mt-0 p-2">
          Oluwatomiwa Afolabi is a Software Engineer with a passion for creating
          ideas to tackle challenges and engineering world-class products to
          solve real-life problems. He holds a certification as an AWS cloud
          practitioner and a BSc in Computer Science and Systems Engineering
          from Middlesex University, he has also completed training programs
          including Google Digital Marketing trainning, Computer training in
          software engeerng and more.
        </p>
      </div>
    </div>
    <!-- section 2 -->
    <div
      class="max-w-full h-[450px] bg-[#EAE3D2] rounded-xl block md:flex mx-auto overflow-scroll mb-10"
    >
      <div
        class="md:max-w-[500px] h-[50px] md:h-full flex flex-row md:flex-col justify-center md:justify-start border-black border-r-0 md:border-r-2 border-b-[1px] md:border-b-0 gap-2 md:gap-8 md:gap-10 pt-2 md:pt-16 md:pr-[30px] md:pl-[30px] pb-[50px]"
      >
        <div
          class="flex bg-inherit hover:bg-[#D1B399] md:bg-[#D1B399] border-inherit md:border-black px-4 md:px-8 py-2 pt-2 md:pt-4 pb-8 md:pb-2 rounded-lg cursor-pointer"
          @click.prevent="togglePortfolio"
        >
          <div>
            <Icon
              class="md:mb-2 mr-0 md:mr-[10px]"
              name="gridicons:briefcase"
              size="1.5em"
            ></Icon>
          </div>

          <p class="hidden md:block">Portfolio</p>
        </div>
        <div
          class="flex bg-inherit hover:bg-[#D1B399] md:bg-[#D1B399] px-4 md:px-8 py-2 pt-2 md:pt-4 pb-8 md:pb-2 rounded-lg cursor-pointer"
          @click.prevent="toggleElevatorPitch"
        >
          <div>
            <Icon
              class="md:mb-1.5 mr-0 md:mr-[8px]"
              name="mdi:lightbulb-on"
              size="1.6em"
            ></Icon>
          </div>
          <p class="w-[100px] hidden md:block mt-[1.5px] ml-4 md:ml-0">
            Elevator Pitch
          </p>
        </div>
        <div
          class="flex bg-inherit hover:bg-[#D1B399] md:bg-[#D1B399] px-4 md:px-8 py-2 pt-2 md:pt-4 pb-8 md:pb-2 rounded-lg cursor-pointer"
          @click.prevent="toggleSkills"
        >
          <div>
            <Icon
              class="md:mb-2 mr-0 md:mr-4"
              name="bi:tools"
              size="1.3em"
            ></Icon>
          </div>
          <p class="hidden md:block">Skills</p>
        </div>
      </div>

      <div class="h-[300px] mt-[5px] md:mt-8">
        <!-- portfolio content -->
        <div
          v-if="showPortfolio"
          class="w-auto sm:w-[400px] md:w-[593px] md:h-[200px] h-[300px] flex flex-col gap-4 pl-10 pr-10"
        >
          <div class="md:mt-8 pt-6 md:pt-0">
            <p>- Team Project Slide deck</p>
            <a
              class="decoration-inherit cursor-pointer underline hover:text-[#99522C]"
              href="https://docs.google.com/presentation/d/1-zeLhJHzB1en4rx5-6lVxwIRuWOIB9u3/edit#sli de=id.p9"
              target="_blank"
            >
              Project Slides
            </a>
          </div>

          <div class="md:mt-8 pt-6 md:pt-0">
            <p>- Team Project Video</p>
            <a
              class="decoration-inherit cursor-pointer underline hover:text-[#99522C]"
              href="https://youtube.com/watch?v=5SGxDzU5vfY&feature=share"
              target="_blank"
            >
              Project Video
            </a>
          </div>
          <div class="md:mt-8 pt-6 md:pt-0">
            <p>- Resume</p>
            <a
              href="https://drive.google.com/file/d/1TzpDKu8PZiHlJNuMrn15Tgc-KUmzb2wt/view?usp=sharing"
              target="_blank"
              class="decoration-inherit cursor-pointer underline hover:text-[#99522C]"
            >
              View my Resume
            </a>
          </div>
        </div>
        <!-- Elevator Pitch content -->
        <div
          v-if="showElevatorPitch"
          class="w-auto sm:w-[400px] md:w-[593px] md:h-[200px] h-[300px] flex flex-col gap-4 pt-4 pl-10 md:pl-[70px] pr-10 md:pr-[60px]"
        >
          <div class="w-full mr-10">
            <p class="text-center underline mb-2">Elevator Pitch</p>
            <div class="block md:hidden">
              <a
                class="decoration-inherit cursor-pointer hover:text-[#99522C]"
                href="https://drive.google.com/file/d/1CE_DXfJ_Mnz-3huDbJXgKVR42QUY8nyH/preview"
                target="_blank"
                ><p>
                  -<span class="underline pl-2">Link to elevator pitch</span>
                </p></a
              >
            </div>

            <div class="hidden md:block">
              <iframe
                width="400"
                height="300"
                src="https://drive.google.com/file/d/1CE_DXfJ_Mnz-3huDbJXgKVR42QUY8nyH/preview"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
        <!-- Skills content -->
        <div
          v-if="showSkills"
          class="max-w-[400px] md:max-w-[523px] max-h-[300px] md:max-h-[300px] flex flex-wrap gap-[50px] mt-10 justify-center md:justify-start ml-0 md:ml-12 overflow-scroll mr-2 md:mr-0"
        >
          <div v-for="(skill, index) in skillData.skills" :key="index">
            <div
              class="w-[50px] gap-1 justify-center text-center cursor-pointer"
            >
              <Icon :name="skill.iconName" size="2.5em"></Icon>

              <p class="text-[17px]">{{ skill.alt }}</p>
            </div>
          </div>
          <div class="gap-1 flex justify-center cursor-pointer">
            <img
              class="w-[100px]"
              src="~/assets/img/aws-cpp.png"
              alt="cloud-prac-badge"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skillData from "../static/skills.json";
export default {
  data() {
    return {
      showPortfolio: true,
      showElevatorPitch: false,
      showSkills: false,
      skillData,
    };
  },
  methods: {
    togglePortfolio() {
      this.showElevatorPitch = false;
      this.showSkills = false;
      if (!this.showPortfolio) {
        this.showPortfolio = true;
      }
    },
    toggleElevatorPitch() {
      this.showPortfolio = false;
      this.showSkills = false;
      if (!this.showElevatorPitch) {
        this.showElevatorPitch = true;
      }
    },
    toggleSkills() {
      this.showPortfolio = false;
      this.showElevatorPitch = false;
      if (!this.showSkills) {
        this.showSkills = true;
      }
    },
  },
};
</script>

<style></style>
