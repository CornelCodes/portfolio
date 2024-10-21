<!-- HeroSection.vue -->
<template>
  <section class="hero-section">
     <!-- header section start -->
     <div class="header_section">
         
         <!-- banner section start -->
         <div class="banner_section layout_padding">
            <section class="slide-wrapper">
               <div class="container-fluid">
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-md-8">
                                    <div class="banner_taital_main intro-card-shadow">
                                       <h3 class="banner_text text-dark">Welcome to the <br>The Coding Tutor</h3>
                                       <h1 class="banner_taital text-dark">Empowering and crafting <br/>the <span>future</span>.</h1>
                                    </div>
                                 </div>
                                 <div class="col-md-4">
                                    <div class="social_icon">
                                       <ul>
                                          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-md-8">
                                    <div class="banner_taital_main intro-card-shadow">
                                       <h3 class="banner_text text-dark">Welcome to the <br>The Coding Tutor</h3>
                                       <h1 class="banner_taital text-dark">Empowering and crafting <br/>the <span>future</span>.</h1>
                                    </div>
                                 </div>
                                 <div class="col-md-4">
                                    <div class="social_icon">
                                       <ul>
                                          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div class="container">
               <div class="video_bt">
                  <div class="play_icon"><img src="@/assets/images/play-icon.png"></div>
               </div>
            </div>
         </div>
         <!-- banner section end -->
      </div>
      <!-- header section end -->
      
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section {
  /* padding: 50px 0; */
}
.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
.hero-section .btn {
  font-size: 1.25rem;
}

.intro-card-shadow{
   background-color: rgba(33, 33, 37, 0.7);
   border-radius: 13px;
   padding-top: 30px;
   padding-left: 30px;
}

.intro-card-shadow h1,h3{
   color: white!important;
   
}

.intro-card-shadow span{
   color: #2f9ff1;
}
</style>
