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
          title: 'SmartMinds Website',
          description: 'Company landing page with animations and responsive design.',
          image: require('@/assets/images/People.png'),
          link: '#'
        },
        {
          title: 'AI Music Generator',
          description: 'An AI-powered tool that composes melodies in different genres.',
          image: require('@/assets/images/protocols.jpeg'),
          link: '#'
        },
        {
          title: 'Portfolio SPA',
          description: 'Single Page Application for showcasing personal projects.',
          image: require('@/assets/images/netflix.movies_tvshows.jpeg'),
          link: '#'
        }
      ],
      musicProjects: [
        {
          title: 'Midnight Jazz',
          description: 'A smooth jazz track recorded with live instruments.',
          image: require('@/assets/images/PSX_20250421_111211.jpg'),
          link: '#'
        },
        {
          title: 'Synthwave Dreams',
          description: 'Electronic music inspired by retro 80s vibes.',
          image: require('@/assets/images/PSX_20250421_111211.jpg'),
          link: '#'
        },
        {
          title: 'Acoustic Sunrise',
          description: 'Relaxing acoustic guitar composition for early mornings.',
          image: require('@/assets/images/PSX_20250421_111211.jpg'),
          link: '#'
        }
      ]
    }
  }
}
</script>
