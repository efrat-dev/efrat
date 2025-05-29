<template>
    <Navbar />
  <div class="font-sans bg-gray-900 text-white scroll-smooth">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection/>
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
