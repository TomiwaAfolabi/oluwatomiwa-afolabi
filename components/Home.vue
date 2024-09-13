<template>
  <div class="w-full mt-20 mb-10 flex flex-col px-4 py-4">
    <!-- section 1 -->
    <div
      class="w-full bg-[#EAE3D2] rounded-xl flex items-center flex-col sm:flex-col-reverse lg:flex-row"
      :class="{
        'text-white !bg-black/[25%]': isTheme && themeId == '1',
        '': isTheme && themeId == '2',
        '': isTheme && themeId == '3',
      }"
    >
      <div
        v-for="(img, i) in images"
        :key="i"
        class="w-full lg:w-1/2 h-full flex justify-center items-center p-4 myImages fade transition-all duration-[1000ms] ease-in-out"
      >
        <img
          :src="img"
          class="w-full h-[70vh] sm:h-[99vh] object-cover rounded-xl"
          :class="{
            grayscale: isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
        />
      </div>

      <div class="w-full lg:w-1/2 items-center text-center px-4">
        <h2 class="underline sm:mt-2">Bio</h2>
        <p class="md:mt-4 mt-0 show">
          Oluwatomiwa Afolabi is a Software Engineer with a passion for creating
          ideas to tackle challenges and engineering world-class products to
          solve real-life problems. He holds a AWS Cloud practitioner and AWS
          Solutions Architect certifcation as well as a BSc in Computer Science
          and Systems Engineering from Middlesex University. He has also
          completed training programs including Google Digital Marketing
          trainning, Computer training in software engeerng and more.
        </p>

        <!-- section 2 -->
        <div
          class="w-full flex flex-col justify-center bg-[#EAE3D2] rounded-xl mx-auto overflow-scroll mt-10 mb-4 p-4"
          :class="{
            'text-white !bg-black/[25%] border-2 border-white':
              isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
        >
          <div
            class="w-full flex flex-row items-center justify-center border-black border-b-[2px] gap-2 md:gap-8 p-4"
            :class="{
              'border-white': isTheme && themeId == '1',
              '': isTheme && themeId == '2',
              '': isTheme && themeId == '3',
            }"
          >
            <div
              class="w-full max-w-[250px] flex justify-center hover:bg-[#EAE3D2] hover:text-[#99522C] md:bg-[#D1B399] border-inherit md:border-black pt-2 md:pt-4 pb-2 rounded-lg cursor-pointer"
              @click.prevent="togglePortfolio"
              :class="{
                'text-white hover:!bg-black/[25%]  md:bg-transparent border-2 !border-white  hover:text-white':
                  isTheme && themeId == '1',
                '': isTheme && themeId == '2',
                '': isTheme && themeId == '3',
              }"
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
              class="w-full max-w-[250px] flex justify-center hover:bg-[#EAE3D2] hover:text-[#99522C] md:bg-[#D1B399] pt-2 md:pt-4 pb-2 rounded-lg cursor-pointer"
              @click.prevent="toggleSkills"
              :class="{
                'text-white hover:!bg-black/[25%] md:bg-transparent border-2 border-white hover:text-white':
                  isTheme && themeId == '1',
                '': isTheme && themeId == '2',
                '': isTheme && themeId == '3',
              }"
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
              <div class="mt-0 md:mt-8 pt-6 md:pt-0">
                <a
                  href="https://drive.google.com/file/d/1ASF80I7J9FgQyvJpRXQHkuBmRWLozvua/view?usp=sharing"
                  target="_blank"
                  class="decoration-inherit cursor-pointer p-[3px] xs:p-4 hover:bg-[#EAE3D2] bg-[#D1B399] w-4 h-4 hover:text-[#99522C] rounded-lg text-[8px] xs:text-[12px] sm:text-[15px]"
                  :class="{
                    'text-white bg-inherit  hover:!bg-black/[25%] border-2 border-white hover:text-white':
                      isTheme && themeId == '1',
                    '': isTheme && themeId == '2',
                    '': isTheme && themeId == '3',
                  }"
                >
                  View my Resume
                </a>
              </div>
            </div>

            <!-- Skills content -->
            <div
              v-if="showSkills"
              class="flex flex-wrap mt-10 justify-center gap-[50px] overflow-scroll"
            >
              <div v-for="(skill, index) in skillData.skills" :key="index">
                <div
                  class="w-[80px] gap-1 justify-center text-center cursor-pointer space"
                >
                  <Icon :name="skill.iconName" size="4.5em"></Icon>
                  <p class="text-[18px]">{{ skill.alt }}</p>
                </div>
              </div>
              <div class="gap-1 flex justify-center cursor-pointer space">
                <img
                  class="w-[100px]"
                  src="~/assets/img/aws-cpp.png"
                  alt="cloud-prac-badge"
                />
              </div>
              <div class="gap-1 flex justify-center cursor-pointer space">
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
import { theme } from "../store/theme";
let slideIndex = 0;
export default {
  mounted() {
    this.showImages();
  },

  data() {
    return {
      showPortfolio: true,
      showElevatorPitch: false,
      showSkills: false,
      images: ["bio-pic.jpg", "profile-pic_2.jpg", "profile-pic.jpg"],
      skillData,
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
    showImages() {
      let slides = document.getElementsByClassName("myImages");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(this.showImages, 3000);
    },
  },
};
</script>

<style>
/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 3s;
}

.show {
  animation-name: show;
  animation-duration: 5s;
}
.space {
  animation-name: space;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes space {
  0% {
    scale: 0.9;
  }
  50% {
    scale: 1;
  }
  100% {
    scale: 0.9;
  }
}
</style>
