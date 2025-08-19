<template>
  <section class="bg-black text-white min-h-screen px-10 py-16 font-serif">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-teal-300">My Works</h2>
      <p class="text-gray-400 mt-3 text-lg">A collection of my creations in code and music</p>
    </div>

    <!-- Developer Projects -->
    <div>
      <h3 class="text-2xl text-teal-300 mb-6">💻 Developer Projects</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(project, index) in devProjects" :key="index"
             class="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-500">
          <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover">
          <div class="p-5">
            <h4 class="text-xl font-bold">{{ project.title }}</h4>
            <p class="text-gray-400 mt-2">{{ project.description }}</p>
            <a :href="project.link" target="_blank"
               class="inline-block mt-4 text-teal-400 hover:underline">View Project →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-gray-700 my-16">

    <!-- Music Works -->
    <div>
      <h3 class="text-2xl text-teal-300 mb-6">🎵 Music Works</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(music, index) in musicProjects" :key="index"
             class="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-500">
          <img :src="music.image" :alt="music.title" class="w-full h-40 object-cover">
          <div class="p-5">
            <h4 class="text-xl font-bold">{{ music.title }}</h4>
            <p class="text-gray-400 mt-2">{{ music.description }}</p>
            <a :href="music.link" target="_blank"
               class="inline-block mt-4 text-teal-400 hover:underline">Listen →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      devProjects: [
        {
          title: 'EmployeeTranfer Portal',
          description: 'A platform that simplify job trasfer process by connecting employees who want to transfer their job location',
          image: require('@/assets/images/employee.png'),
          link: '#'
        },
        {
          title: 'Football academy',
          description: 'Official Gaydo Sports centre website page created in colab with Gibsoni Tech Solutions',
          image: require('@/assets/images/gaydo1.png'),
          link: 'https://gaydofootballacademy.vercel.app/'
        },
        {
          title: 'BingwaFix',
          description: 'An official platform that connects verified Fundi for all your serveice needs',
          image: require('@/assets/images/smartfundi.png'),
          link: '#'
        }
      ],
      musicProjects: [
        {
          title: 'In progress',
          description: 'Still in progress... coming soon!',
          image: require('@/assets/images/music1.jpg'),
          link: '#'
        },
        {
          title: 'In progress',
          description: 'Still in progress... coming soon!',
          image: require('@/assets/images/music2.jpg'),
          link: '#'
        },
        {
          title: 'In progress',
          description: 'Still in progress... coming soon!',
          image: require('@/assets/images/1417702.jpg'),
          link: '#'
        }
      ]
    }
  }
}
</script>
