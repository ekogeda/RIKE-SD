<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides = [
  './assets/img/partner-1.png',
  './assets/img/partner-2.png',
  './assets/img/partner-3.png',
  './assets/img/partner-4.png',
  './assets/img/partner-5.png',
  './assets/img/partner-6.png',
  // './assets/img/partner-7.png',
]

// carousel settings
const settings = {
  itemsToShow: 2,
  snapAlign: 'center',
}
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}
</script>
  
<template>
  <main class="main">
    <section class="section-slider">
      <div class="container">
        <div class="py-3">
          <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="2000">
            <Slide v-for="slide in slides" :key="slide">
              <div class="carousel__item">
                <img :src="slide" alt="slide">
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row gx-4 about-section">
        <div class="col-lg-7 col-md-6 order-md-2">
          <div class="about-section-content m-auto">
            <p class="s2b-text-warning-dark">Our Mission</p>
            <h3 class="fw-normal lh-1 mb-3">We Build Development through Knowledge-Based Economies and
              Innovation</h3>
            <p>
              Achieving development impacts by building new knowledge based economies in communities through responsible
              and responsive utilization of research and innovation outcomes and outputs
            </p>
            <button type="button" class="btn s2b-text-bg-primary mb-3">
              Learn more
              <span class="iconify" data-icon="material-symbols:arrow-right-alt-rounded"></span>
            </button>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 order-md-1">
          <img src="@/assets/mission.png" class="img-fluid" alt="about">
        </div>
      </div>

      <div class="feature-divider"></div>

      <div class="focus">
        <div class="row">
          <p class="s2b-text-warning-dark">Our Values</p>
          <h3 class="fw-normal lh-1 mb-3">What our objectives are</h3>

          <div class="col-md-6 order-md-1" style="z-index: 2;">
            <!-- <div class="col-md-6 order-md-1 d-none d-sm-block" style="z-index: 2;"> -->
            <!-- <div class="focus-scroll"> -->
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link active position-relative" id="v-pills-link1-tab" data-bs-toggle="pill"
                href="#v-pills-link1" role="tab" aria-controls="v-pills-link1" aria-selected="true">
                <div class="focus-tab">
                  <div class="d-flex justify-content-center align-items-center mb-2">
                    <div class="box rounded-circle me-3">01</div>
                    <div class="hold w-100">
                      <h6 class="mb-0">Research-Based Policy and Practice for African Economies</h6>
                      <p>
                        To promote, harness and mainstream research results and evidence synthesis into policies and
                        practices for state and non-state actors of the Africa economies.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="v-line"></div>
              </a>
              <a class="nav-link position-relative" id="v-pills-link2-tab" data-bs-toggle="pill" href="#v-pills-link2"
                role="tab" aria-controls="v-pills-link2" aria-selected="false">
                <div class="focus-tab">
                  <div class="d-flex justify-content-center align-items-center mb-2">
                    <div class="box rounded-circle me-3">02</div>
                    <div class="hold w-100">
                      <h6 class="mb-0">Innovation Advocacy for Impact Investment</h6>
                      <p>
                        To lead advocacy and capacity development for innovation systems and research-enabled impact
                        investment
                      </p>
                    </div>
                  </div>
                </div>
                <div class="v-line"></div>
              </a>
              <a class="nav-link position-relative" id="v-pills-link3-tab" data-bs-toggle="pill" href="#v-pills-link3"
                role="tab" aria-controls="v-pills-link3" aria-selected="false">
                <div class="focus-tab">
                  <div class="d-flex justify-content-center align-items-center mb-2">
                    <div class="box rounded-circle me-3">03</div>
                    <div class="hold w-100">
                      <h6 class="mb-0">Supporting Research Impact at Tertiary Institutions</h6>
                      <p>
                        To support and promote research to impact activities at the graduate and postgraduate levels of
                        tertiary institutions
                      </p>
                    </div>
                  </div>
                </div>
                <div class="v-line"></div>
              </a>
              <a class="nav-link position-relative" id="v-pills-link4-tab" data-bs-toggle="pill" href="#v-pills-link4"
                role="tab" aria-controls="v-pills-link4" aria-selected="false">
                <div class="focus-tab">
                  <div class="d-flex justify-content-center align-items-center mb-2">
                    <div class="box rounded-circle me-3">04</div>
                    <div class="hold w-100">
                      <h6 class="mb-0">Building National Quality Infrastructure for Research in African Economies</h6>
                      <p>
                        To catalyze the building and integration of national quality infrastructure into research
                        practices through the establishment of R4D led think thanks, communities of practice and
                        clusters of actors across the activity sectors of Africa economies
                      </p>
                    </div>
                  </div>
                </div>
                <div class="v-line"></div>
              </a>
              <a class="nav-link position-relative" id="v-pills-link5-tab" data-bs-toggle="pill" href="#v-pills-link5"
                role="tab" aria-controls="v-pills-link5" aria-selected="false">
                <div class="focus-tab">
                  <div class="d-flex justify-content-center align-items-center mb-2">
                    <div class="box rounded-circle me-3">05</div>
                    <div class="hold w-100">
                      <h6 class="mb-0">Empowering Impactful Research with Digital and Data Infrastructure in Africa</h6>
                      <p>
                        To provide digital and data powerhouse for national, regional and continental impactful research
                        based infrastructure, protocols, processes, procedures, activities, programs and projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="v-line"></div>
              </a>

            </div>
            <!-- </div> -->
          </div>

          <div class="col-md-6 order-md-2 d-none d-sm-block">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-link1" role="tabpanel"
                aria-labelledby="v-pills-link1-tab">
                <img src="@/assets/rec-1.png" class="img-fluid" alt="about">
              </div>
              <div class="tab-pane fade" id="v-pills-link2" role="tabpanel" aria-labelledby="v-pills-link2-tab">
                <img src="@/assets/rec-2.png" class="img-fluid" alt="about">
              </div>
              <div class="tab-pane fade" id="v-pills-link3" role="tabpanel" aria-labelledby="v-pills-link3-tab">
                <img src="@/assets/rec-3.png" class="img-fluid" alt="about">
              </div>
              <div class="tab-pane fade" id="v-pills-link4" role="tabpanel" aria-labelledby="v-pills-link4-tab">
                <img src="@/assets/rec-4.png" class="img-fluid" alt="about">
              </div>
              <div class="tab-pane fade" id="v-pills-link5" role="tabpanel" aria-labelledby="v-pills-link5-tab">
                <img src="@/assets/rec-5.png" class="img-fluid" alt="about">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-divider"></div>

      <div class="row gx-4 about-section">
        <div class="col-lg-7 col-md-6 order-md-2">
          <div class="about-section-content m-auto">
            <p class="s2b-text-warning-dark">Our Vision</p>
            <h3 class="fw-normal lh-1 mb-3">Driving Sustainable Development in Africa through STI and R4D Solutions</h3>
            <p>
              To fast track sustainable development in Africa using STI & R4D solutions for connecting and achieving
              global, continental, regional and national development agenda
            </p>
            <button type="button" class="btn s2b-text-bg-primary mb-3">
              Learn more
              <span class="iconify" data-icon="material-symbols:arrow-right-alt-rounded"></span>
            </button>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 order-md-1">
          <img src="@/assets/rec-6.png" class="img-fluid" alt="about">
        </div>
      </div>

      <div class="feature-divider"></div>

    </div>

    <div class="metrics pt-5 pb-1">
      <div class="container">
        <div class="text-center">
          <p class="s2b-text-warning-dark">Our activities</p>
          <h4>See our recent conferences</h4>

          <div class="metrics-content row justify-content-center align-items-center">
            <div class="col-lg-3 col-md-3 metrics-item">
              <h1>20+</h1>
              <p>Countries</p>
            </div>
            <div class="col-lg-3 col-md-3 metrics-item border border-dark border-top-0 border-bottom-0 border-sm-0">
              <h1>50+</h1>
              <p>Conferences</p>
            </div>
            <div class="col-lg-3 col-md-3 metrics-item">
              <h1>9K+</h1>
              <p>Participants</p>
            </div>
          </div>
        </div>

        <div class="row gy-3">
          <div class="col-md-6">
            <div class="fold">
              <div class="b-img fold-1"></div>

              <div class="card border-0 rounded-end">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h6 class="card-subtitle text-muted " style="font-size:12px">8, APRIL 2022</h6>
                  <h6 class="text-uppercase">First Africa student entrepreneurship conference</h6>
                  <span class="d-block" style="font-size:14px;">The conference provides a unique opportunity for
                    students to network,
                    exchange ideas, and gain valuable insights into the world of entrepreneurship.</span>

                  <div class="d-flex justify-content-between align-items-center comment-likes">
                    <div class="d-flex align-items-center">
                      <img src="@/assets/message.png" class="img-fluid me-1" alt="message icon" />
                      <span style="font-size:10px"> 15 Comments</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="@/assets/heart.png" class="img-fluid me-1" alt="heart icon" />
                      <span style="font-size:10px"> 255 Likes</span>
                    </div>
                  </div>

                  <button class="btn btn-outline-success">
                    <span class="iconify" data-icon="clarity:play-solid" style="color:lime"></span>
                    Watch video
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fold">
              <div class="b-img fold-2"></div>

              <div class="card border-0 rounded-end">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h6 class="card-subtitle text-muted " style="font-size:12px">8, APRIL 2022</h6>
                  <h6 class="text-uppercase">Investment in the future of Nigerian youth for economy development</h6>
                  <span class="d-block" style="font-size:14px;">Investing in the future of Nigerian youth is a
                    critical step towards sustainable economic growth and development in the country.</span>

                  <div class="d-flex justify-content-between align-items-center comment-likes">
                    <div class="d-flex align-items-center">
                      <img src="@/assets/message.png" class="img-fluid me-1" alt="message icon" />
                      <span style="font-size:10px"> 15 Comments</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="@/assets/heart.png" class="img-fluid me-1" alt="heart icon" />
                      <span style="font-size:10px"> 255 Likes</span>
                    </div>
                  </div>

                  <button class="btn btn-outline-success">
                    <span class="iconify" data-icon="clarity:play-solid" style="color:lime"></span>
                    Watch video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature-divider"></div>
    </div>

    <div class="container py-5">
      <div class="text-center mb-4">
        <p class="s2b-text-warning-dark">Team</p>
        <h4>Meet our Team</h4>
      </div>

      <div class="row g-4">
        <div class="col-md-4 position-relative text-center">
          <img src="@/assets/dr-map.png" class="img-fluid rounded-3" alt="Dr Map" />
          <div class="position-absolute floater">
            <div class="card border-0 rounded-3 shadow-sm" style="width:15rem">
              <div class="card-body text-center">
                <h5 style="font-size:18px">Dr. Mustapha Popoola</h5>
                <p class="s2b-text-primary">Convener</p>

                <div class="social-media">
                  <a href="#twitter"><img src="@/assets/twitter.png" class="img-fluid" alt="twitter" /></a>
                  <a href="#linkedin"><img src="@/assets/linkedin.png" class="img-fluid" alt="linkedin" /></a>
                  <a href="#facebook"><img src="@/assets/facebook.png" class="img-fluid" alt="facebook" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 position-relative text-center">
          <img src="@/assets/dr-map.png" class="img-fluid rounded-3" alt="Dr Map" />
          <div class="position-absolute floater">
            <div class="card border-0 rounded-3 shadow-sm" style="width:15rem">
              <div class="card-body text-center">
                <h5 style="font-size:18px">Dr. Mustapha Popoola</h5>
                <p class="s2b-text-primary">Convener</p>

                <div class="social-media">
                  <a href="#twitter"><img src="@/assets/twitter.png" class="img-fluid" alt="twitter" /></a>
                  <a href="#linkedin"><img src="@/assets/linkedin.png" class="img-fluid" alt="linkedin" /></a>
                  <a href="#facebook"><img src="@/assets/facebook.png" class="img-fluid" alt="facebook" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 position-relative text-center">
          <img src="@/assets/dr-map.png" class="img-fluid rounded-3" alt="Dr Map" />
          <div class="position-absolute floater">
            <div class="card border-0 rounded-3 shadow-sm" style="width:15rem">
              <div class="card-body text-center">
                <h5 style="font-size:18px">Dr. Mustapha Popoola</h5>
                <p class="s2b-text-primary">Convener</p>

                <div class="social-media">
                  <a href="#twitter"><img src="@/assets/twitter.png" class="img-fluid" alt="twitter" /></a>
                  <a href="#linkedin"><img src="@/assets/linkedin.png" class="img-fluid" alt="linkedin" /></a>
                  <a href="#facebook"><img src="@/assets/facebook.png" class="img-fluid" alt="facebook" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-divider d-none d-sm-block"></div>

    <div class="metrics py-5">
      <div class="container">
        <div class="row justify-content-between align-items-center p-4 rounded informed">
          <div class="col-md-6">
            <h3>Stay Informed with Our Latest Articles</h3>
            <span>Be the first to know when we post</span>
          </div>

          <div class="col-md-6">
            <form role="Subscriber">
              <label for="email" class="form-label">Email Address</label>
              <div class="d-flex align-items-end">
                <input class="form-control me-2" type="email" id="email" placeholder="Email Address"
                  aria-label="Email Address">
                <button class="btn s2b-text-bg-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

    <div class="feature-divider"></div>
  </main>
</template>


<style scoped>
.b-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.section-slider {
  background-color: #eee;
  margin-bottom: 4rem;
}

.fold {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 428px;
}

.fold-1 {
  background-image: url(../assets/rec-7.png);
}

.fold-2 {
  background-image: url(../assets/rec-8.png);
}

.fold button {
  width: 187px;
}

.comment-likes {
  width: 183px;
}

.box {
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link.active .box {
  background: #82D145;
  color: #fff;
}

.informed {
  background: #263238;
  color: #fff;
}

.floater {
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
}

.social-media a {
  width: 35px;
  height: 35px;
  margin: 0 12px;
  display: inline-block;
}

@media screen and (max-width: 600px) {
  .border-sm-0 {
    border: 0 !important
  }
}

@media screen and (max-width: 900px) and (min-width: 320px) {
  .nav-link {
    color: #000 !important;
  }

  .informed {
    border-radius: 0 !important;
  }

  .floater {
    top: 64%;
    left: 0;
    bottom: 0;
    transform: none;
  }

  .floater .card {
    border-radius: 0 !important;
  }

  .fold {
    grid-template-columns: 1fr;
  }

  .fold .card {
    height: 290px;
  }

  .fold-1 {
    background-image: url(../assets/rec-7-sm.png);
    height: 138px;
  }

  .fold-2 {
    background-image: url(../assets/rec-8-sm.png);
    height: 138px;
  }

  .fold button {
    width: 187px;
  }

  .comment-likes {
    width: 100%;
  }
}
</style>