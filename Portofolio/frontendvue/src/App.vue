<template>
  <div :class="theme">
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
    <!-- <router-view /> -->

    <!-- Other components -->
     <section id="home">
       <HeroSection/>
     </section>

     <section id="about">
       <AboutSection/>
     </section>

     <section id="projects">
       <ProjectSection/>
     </section>

     <section id="resume">
       <ResumeSection/>
     </section>

     <section  id="blog">
       <BlogSection/>
     </section>

     <section id="contact">
       <ContactSection/>
     </section>

  </div>
</template>

<script>
import Navbar from './components/NavbarSection.vue'
import AboutSection from './views/AboutSection.vue';
import BlogSection from './views/BlogSection.vue';
import ContactSection from './views/ContactSection.vue';
import HeroSection from './views/HeroSection.vue';
import ProjectSection from './views/ProjectSection.vue';
import ResumeSection from './views/ResumeSection.vue';

export default {
  components: { 
    Navbar,
    HeroSection,
    AboutSection,
    ProjectSection,
    ResumeSection,
    BlogSection,
    ContactSection,
   },

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
  transition: background-color 0.3s ease, color 0.3s ease;
}
.light {
  background-color: white;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
