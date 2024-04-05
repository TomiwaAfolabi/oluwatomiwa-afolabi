<template>
  <div class="w-full mt-10 mb-10 flex flex-col px-4">
    <!-- section 1 -->
    <div
      class="w-full bg-[#EAE3D2] rounded-xl flex flex-col lg:flex-row justify-center"
    >
      <div class="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="../assets/img/bio-pic.jpg"
          class="max-w-full md:max-w-[40vw] rounded-t-xl md:rounded-none lg:rounded-xl bg-cover"
        />
      </div>

      <div class="w-full lg:w-1/2 items-center text-center">
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
        <!-- section 2 -->
        <div
          class="w-full flex flex-col justify-center bg-[#EAE3D2] rounded-xl mx-auto overflow-scroll mt-10 p-4"
        >
          <div
            class="w-full flex flex-row items-center justify-center border-black border-b-[2px] gap-2 md:gap-8 p-4"
          >
            <div
              class="w-full max-w-[250px] flex justify-center hover:bg-[#D1B399] md:bg-[#D1B399] border-inherit md:border-black pt-2 md:pt-4 pb-2 rounded-lg cursor-pointer"
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
              class="w-full max-w-[250px] flex justify-center hover:bg-[#D1B399] md:bg-[#D1B399] pt-2 md:pt-4 pb-2 rounded-lg cursor-pointer"
              @click.prevent="toggleElevatorPitch"
            >
              <div>
                <Icon
                  class="md:mb-1.5 mr-0 md:mr-[8px]"
                  name="mdi:lightbulb-on"
                  size="1.6em"
                ></Icon>
              </div>
              <p class="hidden md:block mt-[1.5px] ml-4 md:ml-0">
                Elevator Pitch
              </p>
            </div>
            <div
              class="w-full max-w-[250px] flex justify-center hover:bg-[#D1B399] md:bg-[#D1B399] pt-2 md:pt-4 pb-2 rounded-lg cursor-pointer"
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

          <div class="w-full p-4">
            <!-- portfolio content -->
            <div v-if="showPortfolio" class="flex flex-col gap-4">
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
                  href="https://drive.google.com/file/d/1ASF80I7J9FgQyvJpRXQHkuBmRWLozvua/view?usp=sharing"
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
              class="flex justify-center gap-4 mt-6"
            >
              <div class="flex flex-col justify-center">
                <p class="text-center underline mb-4">Elevator Pitch</p>
                <div class="block md:hidden">
                  <a
                    class="decoration-inherit cursor-pointer hover:text-[#99522C]"
                    href="https://drive.google.com/file/d/1CE_DXfJ_Mnz-3huDbJXgKVR42QUY8nyH/preview"
                    target="_blank"
                    ><p>
                      -<span class="underline pl-2"
                        >Link to elevator pitch</span
                      >
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
              class="flex flex-wrap mt-10 justify-center gap-[25px] overflow-scroll"
            >
              <div v-for="(skill, index) in skillData.skills" :key="index">
                <div
                  class="w-[100px] gap-1 justify-center text-center cursor-pointer"
                >
                  <Icon :name="skill.iconName" size="4.5em"></Icon>

                  <p class="text-[18px]">{{ skill.alt }}</p>
                </div>
              </div>
              <div class="gap-1 flex justify-center cursor-pointer">
                <img
                  class="w-[100px]"
                  src="~/assets/img/aws-cpp.png"
                  alt="cloud-prac-badge"
                />
              </div>
              <div class="gap-1 flex justify-center cursor-pointer">
                <img
                  class="w-[100px]"
                  src="~/assets/img/aws-certified-solutions-architect-associate.png"
                  alt="cloud-prac-badge"
                />
              </div>
            </div>
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
