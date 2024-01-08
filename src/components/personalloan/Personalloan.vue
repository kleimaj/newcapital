<template>
  <!-- banner-section start -->
  <BannerSection msg="Banner Section" :bannerImageUrl="bannerData.bannerImageUrl"
    :bannerMobileImageUrl="bannerData.bannerMobileImageUrl" :bannerTitle="bannerData.bannerTitle"
    :bannerDescription="bannerData.bannerDescription" :bannerButton="bannerData.bannerButton"
    :offerTitle="bannerData.offerTitle" :offerLinkText="bannerData.offerLinkText" :offerLink="bannerData.offerLink"
    :additionalClass="bannerData.additionalClass" :isPersnalLoan="isPersnalLoan" />
  <!-- banner-section end -->

  <!-- benefit section start -->
  <BenefitSection msg="Benefit Section" :benefitSectionClass="benifitData.benefitSectionClass"
    :isCareerSection="benifitData.isCareerSection" :benefitSectionTitle="benifitData.benefitSectionTitle"
    :benefitSectionDescription="benifitData.benefitSectionDescription" />

  <!-- benefit section end -->

  <!-- discover section start -->
  <section class="comman-bg discover">
    <!-- <div class="container-fluid"> -->
    <div class="discover-slider">
      <div class="title-details">
        <h2 class="title text-center mb-0" data-aos="animation-scale" data-aos-duration="1000" data-aos-easing="ease">
          What can we help you accomplish?
        </h2>
        <p class="text-center" data-aos="animation-scale-y" data-aos-delay="300" data-aos-duration="1000"
          data-aos-easing="ease">
          Common loan uses include:
        </p>
      </div>
      <div class="slider-possible">
        <carousel :items-to-show="3" :breakpoints="breakpoints" :wrap-around="true" paginationColor="#000000"
          paginationActiveColor="#efefef">
          <slide v-for="slide in slider_data" :key="slide">
            <div class="slider-item text-center">
              <div class="cost-content">
                <img :src="'assets/images/'+ slide.image_name"   alt="moveing" class="img-fluid" />
                <div class="item-content">
                  <h2 class="sub-title white-txt">{{slide.image_title}}</h2>
                  <p class="m-0 white-txt">{{slide.image_desc}}</p>
                </div>
              </div>
            </div>

          </slide>
          <template #addons>
            <navigation>
              <template #next>
                <span class="next-arrow slide-arrow"> </span>
              </template>
              <template #prev>
                <span class="slide-arrow prev-arrow"> </span>
              </template>
            </navigation>
            <pagination />
          </template>
        </carousel>

      </div>
    </div>
    <div class="d-flex justify-content-center started-btn">
      <a href="/checkrate" class="comman-btn light-btn big-btn">GET STARTED</a>
    </div>
    <!-- </div> -->
  </section>
  <!-- discover section end -->

  <section class="step-section services-main">
    <div class="container">
      <div class="solution-blocks">
        <h2 class="title text-center mb-0">
          The loan you need, the service you deserve.
        </h2>
        <p>New Capital offers <br class="d-md-none d-block"> solutions that are:</p>
        <div class="process-step">
          <div class="row">
            <div class="col-md-4">
              <div class="step-block d-flex flex-lg-row flex-md-column align-items-start">
                <img src="assets/images/quick.svg" alt="quick" class="img-fluid" />
                <div class="quick-content">
                  <h2>Quick</h2>
                  <p class="text-start">
                    Same-day approval decision, funds sent within 48 hours
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step-block d-flex flex-lg-row flex-md-column align-items-start">
                <img src="assets/images/budget-friendly.svg" alt="step" class="img-fluid" />
                <div class="quick-content">
                  <h2>Budget-friendly</h2>
                  <p class="text-start">
                    No collateral or origination fee, competitive rates
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step-block d-flex flex-lg-row flex-md-column align-items-start">
                <img src="assets/images/convenient.svg" alt="step" class="img-fluid" />
                <div class="quick-content">
                  <h2>Convenient</h2>
                  <p class="text-start">
                    One monthly payment, set repayment term
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="work-details apply-main-section">
      <div class="deserv-section offer-peoples">
        <div class="deserve-img offer-img white-bg">
          <div class="apply-today">
            <img src="assets/images/rate-people.jpg" alt="offer-people" class="d-md-block d-none img-fluid" />
            <img src="assets/images/rate-mobile.jpg" alt="offer-people" class="d-md-none d-block img-fluid" />
          </div>
          <div class="deserve-content m-0">
            <div class="container">
              <div class="row d-flex justify-content-end m-0">
                <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12 p-0">
                  <div class="simple-block">
                    <div class="apply-content">
                      <h2 class="section-title primary-color text-md-start text-center">
                        Apply for your loan today:
                      </h2>
                      <ul>
                        <li>
                          <span>1</span>Get your rate quote with no impact to
                          your credit score.
                        </li>
                        <li>
                          <span>2</span>Decide which loan option is <br />
                          right for your situation.
                        </li>
                        <li>
                          <span>3</span>Get a fast approval decision, sign
                          <br />
                          the agreement and get funded.
                        </li>
                      </ul>
                      <div class="bottom-section">
                        <a href="/checkrate" class="comman-btn light-btn">See My Rate</a>
                        <span class="offer">Doesn’t affect your credit score. <br />
                          <a href="/checkrate">Did you receive an offer in the mail?</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import BannerSection from '../themes/BannerSection.vue'
import BenefitSection from '../themes/BenefitSection.vue'

export default {
  name: 'PersonalComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BannerSection,
    BenefitSection,
  },
 
  data: () => ({
    slider_data:[{
      image_title:'Debt Consolidation',
      image_desc:"Pay off multiple debts and have one easier monthly payment.",
      image_name:'debt.jpg'
    },{
      image_title:'Credit Card Refinancing',
      image_desc:"Eliminate high-rate credit card balances and save.",
      image_name:'bills.jpg'
    },{
      image_title:'Moving Costs',
      image_desc:"Make a move that's less stressful",
      image_name:'moveing-cost.jpg'
    }],
    // carousel settings
    isPersnalLoan: true,
    settings: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    breakpoints: {
      // 700px and up
      1499: {
        itemsToShow: 3,
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
    bannerData: {
      bannerImageUrl: 'assets/images/personal-loan-banner.webp',
      bannerMobileImageUrl: 'assets/images/personal-loan-mobiles.jpg',
      bannerTitle: 'One personal loan, <br class="d-md-block d-none" /> numerous purposes',
      bannerDescription: 'Apply for $10,000 <br /> up to $100,000.',
      bannerButton: 'See My Rate',
      offerTitle: true,
      offerLink: 'check-my-rate.html',
      offerLinkText: 'Did you receive an offer in the mail?',
      additionalClass: 'personal-details',
    },
    benifitData: {
      benefitSectionClass: 'situation-block',
      isCareerSection: true,
      benefitSectionTitle: 'Get the right solution for your situation.',
      benefitSectionDescription: 'We believe the purpose of a lending service is to help people fulfill a financial goal or need. So we provide easy access to customized personal loans with fixed rates and flexible terms, so you can get the money necessary to take care of life’s expenses.',
    },
  }),
  mounted() {
    this.$root.footer.isHome = false;
  },
};

</script>