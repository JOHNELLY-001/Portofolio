<template>
  <header class="bg-black p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
    <!-- Logo -->
    <div class="text-teal-300 ml-5 flex items-center space-x-2">
      <span class="text-2xl font-serif font-bold">SmartMinds</span>
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
      </span>
    </div>

    <!-- Links (scroll to sections) -->
    <nav class="space-x-10 text-lg font-mono font-bold hidden md:flex">
      <a href="#home" class="text-white hover:text-teal-500 transition">Home</a>
      <a href="#about" class="text-white hover:text-teal-500 transition">About</a>
      <a href="#projects" class="text-white hover:text-teal-500 transition">Projects</a>
      <a href="#resume" class="text-white hover:text-teal-500 transition">Resume</a>
      <a href="#blog" class="text-white hover:text-teal-500 transition">Blog</a>
      <a href="#contact" class="text-white hover:text-teal-500 transition">Contact</a>
    </nav>

    <!-- Theme toggle -->
    <button @click="toggleTheme" class="text-teal-300 text-xl ml-6">
      <i class="bx" :class="darkMode ? 'bx-sun' : 'bx-moon'"></i>
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return { darkMode: true }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      document.documentElement.classList.toggle('dark', this.darkMode)
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth; /* Smooth scrolling effect */
}
</style>
