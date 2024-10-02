<!-- App.vue -->
<template>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Footer />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Global styles */
body {
  font-family: 'Poppins', sans-serif;
}
</style>
