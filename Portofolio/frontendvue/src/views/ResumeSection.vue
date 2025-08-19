<template>
  <section class="bg-black text-white min-h-screen px-10 py-16 font-serif">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-teal-300">Resume</h2>
      <p class="text-gray-400 mt-3 text-lg">Experience & Education</p>
    </div>

    <!-- Timeline -->
    <div class="relative border-l border-teal-400 pl-8 space-y-10">
      <div v-for="(item, index) in timeline" :key="index" class="relative">
        <!-- Dot -->
        <span class="absolute -left-4 top-1 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">
          {{ index + 1 }}
        </span>
        <h3 class="text-2xl font-bold text-teal-300">{{ item.title }}</h3>
        <p class="text-gray-400">{{ item.period }}</p>
        <p class="mt-2">{{ item.description }}</p>
      </div>
    </div>

    <!-- Skills -->
    <div class="mt-16">
      <h3 class="text-2xl font-bold text-teal-300 mb-6">Skills</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(skill, index) in skills" :key="index"
             class="bg-gray-900 p-5 rounded-lg shadow-md hover:scale-105 transform transition duration-500">
          <h4 class="text-xl font-bold text-teal-400">{{ skill.name }}</h4>
          <p class="text-gray-400 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>

    <!-- Download CV -->
    <div class="text-center mt-16">
      <a href="/cv.pdf" download
         class="bg-teal-400 text-black font-bold px-6 py-3 rounded-lg shadow hover:bg-teal-300 transition">
        📄 Download CV
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          title: 'Software Developer - SmartMinds.tech',
          period: '2023 - Present',
          description: 'Developing web and mobile solutions for clients using modern tech stacks.'
        },
        {
          title: 'Freelance Musician',
          period: '2017 - Present',
          description: 'Composing music, making melodies and collaborating with talented musicians. (Gospel & Inspirational songs)'
        },
        {
          title: 'Bachelor of science in Telecommunication Engineering',
          period: '2023 - 2027',
          description: 'Specialized in Computer networking and configuring network protocols at University of Dar-Es-Salaam.'
        }
      ],
      skills: [
        { name: 'JavaScript / Vue.js', level: 'Intermediate' },
        { name: 'TailwindCSS', level: 'Intermediate' },
        { name: 'Python / Machine Learning', level: 'Intermediate' },
        { name: 'Music Production', level: 'Intermediate' },
        { name: 'Networking Engineering', level: 'Intermediate' },
        { name: 'UI/UX Design', level: 'Intermediate' },
        { name: 'Mobile App Dev.', level: 'Intermediate' }
      ]
    }
  }
}
</script>
