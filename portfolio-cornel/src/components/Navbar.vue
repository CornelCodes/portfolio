<!-- Navbar.vue -->
<template>
  <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <div class="logo"><a href="index.html"><img src="@/assets/images/logo.png"></a></div>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="service.html">Services</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  background-color: #fff;
}
.navbar-brand img {
  width: 120px;
}
</style>
