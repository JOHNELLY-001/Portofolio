<template>
  <section class="bg-black text-white min-h-screen px-10 py-16 font-serif">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-teal-300">Contact</h2>
      <p class="text-gray-400 mt-3 text-lg">Let's work together or just say hello</p>
    </div>

    <!-- Contact Form -->
    <div class="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
      <form @submit.prevent="sendMessage">
        <div class="mb-6">
          <label class="block mb-2 text-teal-400">Name</label>
          <input v-model="form.name" type="text" required
                 class="w-full px-4 py-3 rounded bg-black border border-gray-700 focus:border-teal-400 focus:outline-none">
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-teal-400">Email</label>
          <input v-model="form.email" type="email" required
                 class="w-full px-4 py-3 rounded bg-black border border-gray-700 focus:border-teal-400 focus:outline-none">
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-teal-400">Message</label>
          <textarea v-model="form.message" rows="5" required
                    class="w-full px-4 py-3 rounded bg-black border border-gray-700 focus:border-teal-400 focus:outline-none"></textarea>
        </div>
        <button type="submit"
                class="w-full bg-teal-400 text-black font-bold py-3 rounded hover:bg-teal-300 transition">
          Send Message
        </button>
      </form>
    </div>

    <!-- Social Links -->
    <div class="text-center mt-10 space-x-6">
      <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank"
         class="text-teal-400 hover:text-teal-200 text-xl">
        <i :class="link.icon"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      socialLinks: [
        { icon: 'fab fa-github', url: 'https://github.com/yourusername' },
        { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
        { icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com/yourusername' }
      ]
    }
  },
  methods: {
    sendMessage() {
      alert(`Thanks, ${this.form.name}! Your message has been sent.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<!-- FontAwesome icons -->
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
