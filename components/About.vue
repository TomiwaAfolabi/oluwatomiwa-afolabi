<template>
  <div class="mt-10 mb-[290px] flex flex-col gap-20 px-4 py-4">
    <div
      class="w-full max-w-auto lg:max-w-[1150px] bg-[#EAE3D2] rounded-xl flex flex-col mx-auto p-4 sm:p-6"
      :class="{
        'text-white !bg-black/[25%]': isTheme && themeId == '1',
        '': isTheme && themeId == '2',
        '': isTheme && themeId == '3',
      }"
    >
      <div
        class="border-black border-b-2 flex justify-center mb-2 p-2 text-xl"
        :class="{
          'border-white': isTheme && themeId == '1',
          '': isTheme && themeId == '2',
          '': isTheme && themeId == '3',
        }"
      >
        <div
          class="flex gap-2 border-black hover:border-inherit border-r-[0.5px] hover:bg-[#D1B399] cursor-pointer p-2"
          :class="{
            'text-white hover:!bg-black/[25%] border-white ':
              isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
          @click.prevent="toggleEducation"
        >
          <div>
            <Icon
              class="ml-4 mr-4 md:mr-0"
              name="fluent:hat-graduation-12-filled"
              size="1.5em"
            ></Icon>
          </div>
          <p class="mr-[20px] mt-[2px] hidden md:block">EDUCATION</p>
        </div>
        <div
          class="flex gap-2 border-black hover:border-inherit border-l-[0.5px] hover:bg-[#D1B399] cursor-pointer p-2"
          :class="{
            'text-white hover:!bg-black/[25%] border-white ':
              isTheme && themeId == '1',
            '': isTheme && themeId == '2',
            '': isTheme && themeId == '3',
          }"
          @click.prevent="toggleExperience"
        >
          <div>
            <Icon
              class="ml-[20px] mr-4 md:mr-0"
              name="mingcute:user-star-fill"
              size="1.3em"
            ></Icon>
          </div>
          <p class="mt-[2px] pr-2 hidden md:block">EXPERIENCE</p>
        </div>
      </div>

      <!-- Education Section -->
      <div v-if="showEducation" class="mt-2 p-4 text-xl show_about">
        <div class="flex gap-2">
          <p class="w-0 typewriter overflow-scroll whitespace-nowrap pb-2">
            - B.SC, Computer Science (Systems Engineering) Middlesex University
            Mauritius (2018 – 2022) Flic en Flac, Mauritius.
          </p>
          <div class="flex gap-0 blinker lg:hidden">
            <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
            <Icon
              class="md:mr-0 mt-[3px] text-[#b32727]"
              name="ic:twotone-keyboard-double-arrow-right"
              size="1.2em"
            ></Icon>
          </div>
        </div>
        <div class="flex gap-2">
          <p
            class="w-0 typewriter overflow-scroll whitespace-nowrap delay2 pb-2"
          >
            - Basic Digital Skills Training (By Haptics, Sponsored By Google).
          </p>
          <div class="flex gap-0 blinker md:hidden">
            <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
            <Icon
              class="md:mr-0 mt-[3px] text-[#b32727]"
              name="ic:twotone-keyboard-double-arrow-right"
              size="1.2em"
            ></Icon>
          </div>
        </div>
        <div class="flex gap-2">
          <p
            class="w-0 typewriter overflow-scroll whitespace-nowrap delay3 pb-2"
          >
            - Lagos State Employability Support Project – Vocational training
            Exercise (By LSETF and UNDP).
          </p>
          <div class="flex gap-0 blinker lg:hidden">
            <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
            <Icon
              class="md:mr-0 mt-[3px] text-[#b32727]"
              name="ic:twotone-keyboard-double-arrow-right"
              size="1.2em"
            ></Icon>
          </div>
        </div>
        <div class="flex gap-2">
          <p
            class="w-0 typewriter overflow-scroll whitespace-nowrap delay4 pb-2"
          >
            - ALX Foundations & AWS Cloud Academy.<span
              class="bg-black text-[15px] font-200 blinker"
              >|</span
            >
          </p>
          <div class="flex gap-0 blinker sm:hidden">
            <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
            <Icon
              class="md:mr-0 mt-[3px] text-[#b32727]"
              name="ic:twotone-keyboard-double-arrow-right"
              size="1.2em"
            ></Icon>
          </div>
        </div>
        <p class="w-0 typewriter overflow-hidden whitespace-nowrap"></p>
      </div>
      <!-- Experience-section -->
      <div v-if="showExperience" class="p-6 text-[20px]">
        <div class="show_about">
          <p class="font-bold">May 2022 – present</p>
          <div class="mb-4">
            <p class="w-0 typewriter overflow-hidden whitespace-nowrap">
              ALX Foundations & AWS Cloud Academy, ALX Africa. <br />• Learnt
              self-development skills as well as other leadership qualities
              required to build a GROWTH mindset. <br />• Developed soft skills
              necessary to work effectively with team members while executing
              mini projects. <br />
              • Acquired skills in MS office tools like Excel and created
              powerpoint presentation slides to communicate project ideas.<br />
              • Engaged in AWS cloud computing foundational training and got
              certified as an AWS cloud practitioner. <br />
              • Commenced training as an AWS Solutions Architect where I have
              worked on projects including hosting static websites in an S3
              bucket, <br />while enabling versioning and S3 buckets lifecycle
              policies, migrating a mariaDB database from an EC2 instance to a
              RDS database in a <br />private subnet, implemented the use of a
              Bastion host to access and update an EC2 instance in a separate
              private subnet and more.
            </p>

            <div class="flex gap-0 blinker lg:hidden items-center">
              <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
              <Icon
                class="md:mr-0 mt-[3px] text-[#b32727]"
                name="ic:twotone-keyboard-double-arrow-right"
                size="1.2em"
              ></Icon>
            </div>
          </div>

          <p class="font-bold">September 2022 – February 2024</p>

          <div class="mb-4">
            <p class="w-0 typewriter overflow-hidden whitespace-nowrap">
              Front-End Developer Intern, Spleet Africa. <br />• Interpretation
              of UX/UI designs from Figma into VueJs code with the use of
              Tailwind CSS for styling. <br />• Creating re-useable components
              for the client side. <br />• Implementing new product designs and
              functionalities, while adapting new technologies such as Vue 3 as
              well as Nuxt 3 framework to <br />
              provide proper software architecture, implement seos & metadata,
              utilize standard component design methods with composition Api,
              <br />thereby ensuring flexible programming and clean code.
              <br />• Utilizing GitLab for update and management of webpages.
            </p>
            <div class="flex gap-0 blinker lg:hidden items-center">
              <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
              <Icon
                class="md:mr-0 mt-[3px] text-[#b32727]"
                name="ic:twotone-keyboard-double-arrow-right"
                size="1.2em"
              ></Icon>
            </div>
          </div>

          <p class="font-bold">May 2019 – Aug. 2019</p>
          <div class="mb-4">
            <p class="w-0 typewriter overflow-hidden whitespace-nowrap">
              Software Developer Intern, Sterling Bank Plc.<br />
              • Worked in an agile software environment with weekly sprint
              meetings.<br />
              • Assisted the software development team in their day-to-day tasks
              which included design of new app features for the banking
              application, <br />optimizing the app to meet the end-users
              functional and non-functional requirements, working on the
              front-end design of the web applications<br />
              using HTML5, CSS, React, firebase authentication and other
              software development duties and assisted with the troubleshooting
              of user queries with<br />
              the banking applications.
            </p>
            <div class="flex gap-0 blinker lg:hidden items-center">
              <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
              <Icon
                class="md:mr-0 mt-[3px] text-[#b32727]"
                name="ic:twotone-keyboard-double-arrow-right"
                size="1.2em"
              ></Icon>
            </div>
          </div>

          <p class="font-bold">Feb 2018 – Apr. 2018</p>
          <div class="mb-4">
            <p class="w-0 typewriter overflow-hidden whitespace-nowrap">
              Assistant Formwork Carpenter, Lagos State Employment Trust Fund
              (LSETF). <br />• Attended trainings focusing on construction
              practices to be applied on site. <br />• Assisted the formwork
              carpenters in construction of the column, slab and beam formwork
              for buildings.
              <span class="bg-black text-[15px] font-200 blinker">|</span>
            </p>
            <div class="flex gap-0 blinker lg:hidden items-center">
              <span class="text-[15px] font-bold text-[#b32727]">Scroll </span>
              <Icon
                class="md:mr-0 mt-[3px] text-[#b32727]"
                name="ic:twotone-keyboard-double-arrow-right"
                size="1.2em"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { theme } from "../store/theme";
export default {
  data() {
    return {
      showExperience: false,
      showEducation: true,
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
    toggleEducation() {
      if (this.showExperience) {
        (this.showExperience = false), (this.showEducation = true);
      }
    },
    toggleExperience() {
      if (this.showEducation) {
        (this.showEducation = false), (this.showExperience = true);
      }
    },
  },
};
</script>

<style>
.show_about {
  animation-name: show_about;
  animation-duration: 3s;
}
@keyframes show_about {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.typewriter {
  animation: typewriter 3s steps(40, end) forwards;
}

.delay2 {
  animation-delay: 2s;
}
.delay3 {
  animation-delay: 3s;
}
.delay4 {
  animation-delay: 5s;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media screen and (max-width: 1185px) {
  .typewriter {
    animation: typewriter 3s steps(20, end) forwards;
    overflow: scroll;

    animation-direction: alternate;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .delay2 {
    animation-delay: 2s;
  }
  .delay3 {
    animation-delay: 5s;
  }
  .delay4 {
    animation-delay: 7s;
  }
}
.blinker {
  animation: blink 0.8s infinite;
}
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
