<template>
    <section class="accomplish">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-9 col-lg-11 col-md-12">
                    <div class="accomplish-detail text-center">
                        <h2 class="title m-0">What would you like to accomplish?</h2>
                        <p>New Capital Financial <br class="d-md-none d-block"> loans can be used for:</p>
                    </div>
                    <div class="row d-md-flex d-none">
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <div class="inner-block">
                                    <img src="assets/images/consolidation.jpg" alt="consolidation" class="img-fluid" />
                                </div>
                                <h2>Debt Consolidation</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <div class="inner-block">
                                    <img src="assets/images/improvements.jpg" alt="improvements" class="img-fluid" />
                                </div>
                                <h2>Home Improvements</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <div class="inner-block">
                                    <img src="assets/images/care.jpg" alt="care" class="img-fluid" />
                                </div>
                                <h2>Medical Care</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <div class="inner-block">
                                    <img src="assets/images/cost.jpg" alt="cost" class="img-fluid" />
                                </div>
                                <h2>Moving Costs</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <div class="inner-block">
                                    <img src="assets/images/purchases.jpg" alt="purchases" class="img-fluid" />
                                </div>
                                <h2>Major Purchases</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <div class="inner-block">
                                    <img src="assets/images/travel.jpg" alt="travel" class="img-fluid" />
                                </div>
                                <h2>Travel</h2>
                            </div>
                        </div>
                    </div>
                    <div class="loans-slider d-md-none d-block">
                        <Carousel :wrap-around="true">
                            <Slide v-for="slide in slides" :key="slide.id">
                                <div class="carousel__item">
                                    <div class="loan-item">
                                        <div class="accomplish-block">
                                            <h2>{{ slide.title }}</h2>
                                            <div class="inner-block">
                                                <img :src="slide.imageUrl" :alt="slide.imageAlt" class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <template #addons>
                                <Navigation />
                                <Pagination />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'AccomplishSection',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    slides: [
      { id: '1', title: 'Debt consolidation', imageUrl: 'assets/images/consolidation.jpg', imageAlt: 'consolidation' },
      { id: '2', title: 'Home improvements', imageUrl: 'assets/images/improvements.jpg', imageAlt: 'improvements' },
      { id: '3', title: 'Medical care', imageUrl: 'assets/images/cost.jpg', imageAlt: 'cost' },
      { id: '4', title: 'Major purchases', imageUrl: 'assets/images/purchases.jpg', imageAlt: 'purchases' },
      { id: '5', title: 'Travel', imageUrl: 'assets/images/travel.jpg', imageAlt: 'travel' },
      { id: '6', title: 'Debt consolidation', imageUrl: 'assets/images/consolidation.jpg', imageAlt: 'consolidation' },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      itemsToScroll: 4,
      snapAlign: 'center',
    },
    breakpoints: {
      // 700px and up
      1499: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
      // 1024 and up
      1199: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      991: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      769: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      480: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      320: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
    },
  }),
};

</script>
