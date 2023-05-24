<script setup></script>
  
<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="d-flex justify-content-between">
        <img src="@/assets/s2b.png" alt="S2B logo">

        <div>
          <span class="iconify me-2" data-icon="skill-icons:instagram"></span>
          <span class="iconify" data-icon="logos:facebook"></span>
          <span class="iconify mx-2" data-icon="skill-icons:twitter"></span>
          <span class="iconify" data-icon="skill-icons:linkedin"></span>
        </div>
      </div>

      <hr class="my-4" />

      <div class="row g-3">
        <div class="col-md-3">
          <h5 class="s2b-text-primary">Contact Us</h5>
          <p>S2B@gmail.com</p>
          <p>XYZ Plaza, Lekki, Lagos, Nigeria</p>
          <p>+2348034562345</p>
          <p>+2347056342134</p>
        </div>
        <div class="col-md-3">
          <h5 class="s2b-text-primary">Our Services</h5>
          <p>Home</p>
          <p>About Us</p>
          <p>Events</p>
          <p>Blog</p>
        </div>
        <div class="col-md-3">
          <h5 class="s2b-text-primary">Events</h5>
          <p>Speakers</p>
          <p>Featured Attendees</p>
        </div>
        <div class="col-md-3">
          <form role="Subscriber">
            <label for="email" class="form-label s2b-text-primary">Join Our Community</label>
            <div class="input-group">
              <input class="form-control form-control-sm" type="email" id="email" placeholder="Enter your email address"
                aria-label="Join Our Community">
              <div class="input-group-text p-0 s2b-text-bg-primary">
                <button class="btn btn-sm rounded-0 rounded-end s2b-text-bg-primary" type="submit">
                  <span class="iconify" data-icon="bi:send-fill"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <p class="text-center my-4">Copyright (c) 2023 S2B All rights reserved</p>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background: #E6F6DA;
}
</style>