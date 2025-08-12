<template>
  <div :class="theme">
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavbarSection.vue'

export default {
  components: { Navbar },
  data() {
    return { theme: 'dark' }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
    }
  }
}
</script>

<style>
.dark {
  background-color: black;
  color: white;
}
.light {
  background-color: white;
  color: black;
}
</style>
