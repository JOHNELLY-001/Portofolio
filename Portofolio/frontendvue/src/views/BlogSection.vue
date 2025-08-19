<template>
  <section class="bg-black text-white min-h-screen px-10 py-16 font-serif">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-teal-300">Blog</h2>
      <p class="text-gray-400 mt-3 text-lg">Thoughts, Tutorials & Creative Journeys</p>
    </div>

    <!-- Blog Grid -->
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(post, index) in posts" :key="index"
           class="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-500">
        <img :src="post.image" :alt="post.title" class="w-full h-40 object-cover">
        <div class="p-5 flex flex-col justify-between h-full">
          <div>
            <h4 class="text-xl font-bold text-teal-300">{{ post.title }}</h4>
            <p class="text-gray-400 text-sm">{{ post.date }}</p>
            <p class="mt-3">{{ post.excerpt }}</p>

            <a :href="post.link" target="_blank"
             class="inline-block mt-2 text-teal-400 hover:underline">Read More →</a>
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
      posts: [
        {
          title: 'The Evolution of Software',
          date: 'Jul 2025',
          excerpt: 'Exploring the future of Programming and how software has been evolving.',
          image: require('@/assets/images/software.jpg'),
          link: 'https://www.linkedin.com/posts/john-elly-55a16228a_software-30-the-future-of-programming-activity-7343593490376777730-tIQ4?utm_source=share&utm_medium=member_android&rcm=ACoAAEYlYpYB0J22k0lDY73zG7BRh_e9ANWM6Xc'
        },
        {
          title: 'How I Built prompt-aware AI',
          date: 'Jul 2025',
          excerpt: 'I successfully reached a milestone of building a simple propt-aware AI that can offer first ad tips, give movies and weather recommendation.',
          image: require('@/assets/images/PSX_20250426_164607.jpg'),
          link: 'https://www.linkedin.com/posts/john-elly-55a16228a_python-ai-rulebasedai-activity-7344071753041649664-ajCw?utm_source=share&utm_medium=member_android&rcm=ACoAAEYlYpYB0J22k0lDY73zG7BRh_e9ANWM6Xc'
        },
        {
          title: 'Thinking of Environment Suistainability',
          date: 'Jul 2025',
          excerpt: 'How can the environment meet the needs of humanity with all the destruction and harmful activities going on..?',
          image: require('@/assets/images/env.jpg'),
          link: 'https://www.linkedin.com/posts/john-elly-55a16228a_environment-greenenergy-sustainableenvironment-activity-7347914502299959297-ik9Q?utm_source=share&utm_medium=member_android&rcm=ACoAAEYlYpYB0J22k0lDY73zG7BRh_e9ANWM6Xc'
        }
      ]
    }
  }
}
</script>
