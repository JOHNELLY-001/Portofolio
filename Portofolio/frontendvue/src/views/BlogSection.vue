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
          </div>
          <a :href="post.link" target="_blank"
             class="inline-block mt-4 text-teal-400 hover:underline">Read More →</a>
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
          title: 'The Intersection of Music & AI',
          date: 'Aug 2025',
          excerpt: 'Exploring how artificial intelligence is transforming music production and composition.',
          image: require('@/assets/images/netflix.movies_tvshows.jpeg'),
          link: '#'
        },
        {
          title: 'How I Built My Portfolio SPA',
          date: 'Jul 2025',
          excerpt: 'A step-by-step breakdown of creating this very site using Vue and Tailwind.',
          image: require('@/assets/images/People.png'),
          link: '#'
        },
        {
          title: 'Composing for Video Games',
          date: 'Jun 2025',
          excerpt: 'An inside look at how I create immersive soundtracks for indie games.',
          image: require('@/assets/images/porto.webp'),
          link: '#'
        }
      ]
    }
  }
}
</script>
