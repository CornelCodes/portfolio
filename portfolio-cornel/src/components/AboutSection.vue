<!-- AboutSection.vue -->
<template>
  <section class="about-section">
    <div class="row">
      <div class="col-md-8">
        <div class="container p-5">
          <h2>About The Coding Tutor</h2>
          <p>At The Coding Tutor, we’re passionate about empowering the next generation of developers, designers, and
            tech enthusiasts.
            <br /><br />Whether you’re a student taking your first steps in coding or looking to expand your skills, we
            offer personalized lessons designed to meet your unique learning style and goals.
            <br /><br />With a deep love for teaching and years of experience in full-stack development, we provide
            hands-on coding lessons that cover the essentials of web development, mobile app creation, and beyond.
            <br /><br />We believe in making technology approachable, fun, and practical, guiding you from the basics to
            building real-world applications.
            <br /><br /><br />Our services go beyond just tutoring—we also offer custom web and app development for
            businesses looking to create standout digital experiences.
            <br /><br />Whether you need a beautifully responsive website or a feature-rich mobile app, we’ve got you
            covered.
            <br /><br />Let’s turn your ideas into reality and make coding your superpower!
          </p>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <div class="container shadow-lg d-flex flex-column justify-content-between p-3 m-2">
          <div class="graphic"><img src="@/assets/images/graphic-3.jpg"></div>
          <div class="graphic"><img src="@/assets/images/graphic-2.jpg"></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-section {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.125rem;
}
</style>
