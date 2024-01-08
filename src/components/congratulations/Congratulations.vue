<template>
  <!-- banner-section start -->
  <BannerSection msg="Banner Section" :bannerImageUrl="bannerData.bannerImageUrl"
    :bannerMobileImageUrl="bannerData.bannerMobileImageUrl" :bannerTitle="bannerData.bannerTitle"
    :bannerDescription="bannerData.bannerDescription" :bannerButton="bannerData.bannerButton"
    :offerTitle="bannerData.offerTitle" :offerLinkText="bannerData.offerLinkText" :offerLink="bannerData.offerLink"
    :additionalClass="bannerData.additionalClass" :bannerSectionClass="bannerData.bannerSectionClass" />
  <!-- banner-section end -->

  <!-- benefit section start -->
  <BenefitSection msg="Benefit Section" :benefitSectionClass="benifitData.benefitSectionClass"
    :isCareerSection="benifitData.isCareerSection" :benefitSectionTitle="benifitData.benefitSectionTitle"
    :benefitSectionDescription="benifitData.benefitSectionDescription" :descriptionClass="benifitData.descriptionClass" />
  <!-- benefit section end -->
</template>
<script>
import BannerSection from '../themes/BannerSection.vue'
import BenefitSection from '../themes/BenefitSection.vue'


export default {
  name: 'CongratsComponent',
  components: {
    BannerSection,
    BenefitSection,
  },
  data: () => ({
    bannerData: {
      bannerImageUrl: 'assets/images/congratulations.jpg',
      bannerMobileImageUrl: 'assets/images/congratulations-mobile.jpg',
      bannerTitle: 'Congratulations!',
      bannerDescription: 'A loan specialist will call you shortly to review your offer.',
      additionalClass: 'personal-details',
      bannerSectionClass: 'congratulations-banner',
    },
    benifitData: {
      benefitSectionClass: 'situation-block assistance-call',
      isCareerSection: true,
      benefitSectionDescription: 'If you need immediate assistance, please call <a href="tel:888-315-3319">888-315-3319</a>.',
      descriptionClass: 'text-center',
    },
  }),
  props: {
    msg: String
  },
  mounted() {
    this.$root.footer.isHome = false;
  },
}

</script>