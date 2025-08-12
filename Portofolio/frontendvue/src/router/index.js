import AboutSection from '@/views/AboutSection.vue'
import BlogSection from '@/views/BlogSection.vue'
import ContactSection from '@/views/ContactSection.vue'
import HeroSection from '@/views/HeroSection.vue'
import ResumeSection from '@/views/ResumeSection.vue'
import ProjectSection from '@/views/ProjectSection.vue'
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default  new Router({
    mode: 'history',

    routes: [
        { path: '/', name: 'HeroSection', component: HeroSection},
        { path: '/about', name: 'AboutSection', component: AboutSection},
        { path: '/projects', name: 'ProjectSection', component: ProjectSection },
        { path: '/resume', name: 'ResumeSetion', component: ResumeSection},
        { path: '/blog', name: 'BlogSection', component: BlogSection},
        { path: '/contact', name: 'ContactSection', component: ContactSection},
    ]
})