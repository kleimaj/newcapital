<template>
    <section class="accomplish">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-9 col-lg-11 col-md-12 m-4">
                    <div class="accomplish-detail text-center">
                        <h2 class="title m-0 mt-4">What would you like to accomplish?</h2>
                        <p>New Capital Financial <br class="d-md-none d-block"> loans can be used for:</p>
                    </div>
                    <div class="row d-md-flex d-none">
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <!-- <div class="inner-block"> -->
                                    <img src="assets/images/icons/debt-consolidation.png" width="93" alt="consolidation"/>
                                <!-- </div> -->
                                <h2>Debt Consolidation</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <!-- <div class="inner-block"> -->
                                    <img src="assets/images/icons/home-improvement.png" alt="improvements" />
                                <!-- </div> -->
                                <h2>Home Improvements</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <!-- <div class="inner-block"> -->
                                    <img src="assets/images/icons/medical-care.png" alt="care"/>
                                <!-- </div> -->
                                <h2>Medical Care</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <!-- <div class="inner-block"> -->
                                    <img src="assets/images/icons/moving-costs.png" alt="cost"/>
                                <!-- </div> -->
                                <h2>Moving Costs</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <!-- <div class="inner-block"> -->
                                    <img src="assets/images/icons/major-purchases.png" alt="purchases"/>
                                <!-- </div> -->
                                <h2>Major Purchases</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="accomplish-block">
                                <!-- <div class="inner-block"> -->
                                    <img src="assets/images/icons/travel.png" alt="travel"/>
                                <!-- </div> -->
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
                                            <!-- <div class="inner-block"> -->
                                                <img :src="slide.imageUrl" :alt="slide.imageAlt"  />
                                            <!-- </div> -->
                                            <h2 class="mt-4">{{ slide.title }}</h2>

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
      { id: '1', title: 'Debt consolidation', imageUrl: 'assets/images/icons/debt-consolidation.png', imageAlt: 'consolidation' },
      { id: '2', title: 'Home improvements', imageUrl: 'assets/images/icons/home-improvement.png', imageAlt: 'improvements' },
      { id: '3', title: 'Medical care', imageUrl: 'assets/images/icons/medical-care.png', imageAlt: 'cost' },
      { id: '4', title: 'Major purchases', imageUrl: 'assets/images/icons/major-purchases.png', imageAlt: 'purchases' },
      { id: '5', title: 'Travel', imageUrl: 'assets/images/icons/travel.png', imageAlt: 'travel' },
      { id: '6', title: 'Moving Costs', imageUrl: 'assets/images/icons/moving-costs.png', imageAlt: 'moving-costs' },
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
