<template>
  <div class="mt-10 mb-10 flex flex-col gap-20 px-4">
    <div class="w-full bg-[#EAE3D2] rounded-xl flex flex-col mx-auto p-4">
      <div class="border-black border-b-2 flex justify-center mb-2 p-2 text-xl">
        <div
          class="flex gap-2 border-black hover:border-inherit border-r-[0.5px] hover:bg-[#D1B399] cursor-pointer"
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
          class="flex gap-2 border-black hover:border-inherit border-l-[0.5px] hover:bg-[#D1B399] cursor-pointer"
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
      <div v-if="showEducation" class="mt-2 pl-8 pr-2 text-xl">
        <p class="mb-2">
          - B.SC, COMPUTER SCIENCE (SYSTEMS ENGINEERING) Middlesex University
          Mauritius (2018 – 2022) Flic en Flac, Mauritius
        </p>
        <p class="mb-2">
          - Basic Digital Skills Training (By Haptics, Sponsored By Google).
        </p>
        <p class="mb-2">
          - Lagos State Employability Support Project – Vocational training
          Exercise (By LSETF and UNDP).
        </p>
        <p class="mb-2">- ALX Foundations & AWS Cloud Academy</p>
      </div>
      <!-- Experience-section -->
      <div v-if="showExperience" class="mt-4 pl-8 pr-2 text-[20px]">
        <div>
          <p class="mb-2">
            <span class="font-bold">May 2022 – present </span><br />
            <span>
              ALX Foundations & AWS Cloud Academy, ALX Africa. • Learnt
              self-development skills as well as other leadership qualities
              required to build a GROWTH mindset. • Developed soft skills
              necessary to work effectively with team members while executing
              mini projects. • Acquired skills in MS office tools like Excel and
              created powerpoint presentation slides to communicate project
              ideas. • Engaged in AWS cloud computing foundational training and
              got certified as an AWS cloud practitioner • Commenced training as
              an AWS Solutions Architect where I have worked on projects
              including hosting static websites in an S3 bucket, while enabling
              versioning and S3 buckets lifecycle policies, migrating a mariaDB
              database from an EC2 instance to a RDS database in a private
              subnet, implemented the use of a Bastion host to access and update
              an EC2 instance in a separate private subnet and more.
            </span>
          </p>
          <p class="mb-2">
            <span class="font-bold">September 2022 – February 2024 </span><br />
            <span>
              Front-End Developer Intern, Spleet Africa. • Interpretation of
              UX/UI designs from Figma into VueJs code with the use of Tailwind
              CSS for styling. • Creating re-useable components for the client
              side. • Implementing new product designs and functionalities,
              while adapting new technologies such as Vue 3 as well as Nuxt 3
              framework to provide proper software architecture, implement seos
              & metadata, utilize standard component design methods with
              composition Api, thereby ensuring flexible programming and clean
              code. • Utilizing GitLab for update and management of webpages.
            </span>
          </p>
          <p class="mb-2">
            <span class="font-bold">May 2019 – Aug. 2019 </span><br />
            <span
              >Software Developer Intern, Sterling Bank Plc. • Worked in an
              agile software environment with weekly sprint meetings. • Assisted
              the software development team in their day-to-day tasks which
              included design of new app features for the banking application,
              optimizing the app to meet the end-users functional and
              non-functional requirements, working on the front-end design of
              the web applications using HTML5, CSS, React, firebase
              authentication and other software development duties and assisted
              with the troubleshooting of user queries with the banking
              applications.</span
            >
          </p>

          <p class="mb-2">
            <span class="font-bold"> Feb 2018 – Apr. 2018 </span><br />
            <span
              >Assistant Formwork Carpenter, Lagos State Employment Trust Fund
              (LSETF). • Attended trainings focusing on construction practices
              to be applied on site. • Assisted the formwork carpenters in
              construction of the column, slab and beam formwork for
              buildings.</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showExperience: false,
      showEducation: true,
    };
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

<style></style>
