<!-- App.vue -->
<template>
  <div class="container-fluid d-flex flex-column">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ServicesSection />
    <PortfolioSection />
    <FooterComponent />
    <ContactUs/>
    <BlogComponent/>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import FooterComponent from './components/Footer.vue'
import ContactUs from './components/ContactUs.vue'
import BlogComponent from './components/BlogSection.vue'
</script>

<style>
/* Global styles */
body, html {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #666666;
}

#app{
  display: block;
  margin: 0 auto;
  padding: 0;
}
</style>
