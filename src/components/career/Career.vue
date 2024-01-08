<template>
    <!-- banner-section start -->
    <BannerSection msg="Banner Section" :bannerImageUrl="bannerData.bannerImageUrl"
        :bannerMobileImageUrl="bannerData.bannerMobileImageUrl" :bannerTitle="bannerData.bannerTitle"
        :bannerDescription="bannerData.bannerDescription" :bannerButton="bannerData.bannerButton"
        :offerTitle="bannerData.offerTitle" :offerLinkText="bannerData.offerLinkText" :offerLink="bannerData.offerLink"
        :additionalClass="bannerData.additionalClass" :bannerSectionClass="bannerData.bannerSectionClass" />
    <!-- banner-section end -->

    <!-- benefit section start -->
    <BenefitSection msg="Benefit Section" :isCareerSection="benifitData.isCareerSection" />
    <!-- benefit section end -->
</template>
<script>
import BannerSection from '../themes/BannerSection.vue'
import BenefitSection from '../themes/BenefitSection.vue'


export default {
    name: 'CareerComponent',
    components: {
        BannerSection,
        BenefitSection,
    },
    props: {
        msg: String
    },
    data: () => ({
        bannerData: {
            bannerImageUrl: 'assets/images/career-banner.jpg',
            bannerMobileImageUrl: 'assets/images/career-banner-mobile.jpg',
            bannerTitle: 'Be a part of the New Capital Team',
            bannerDescription: 'New Capital Financial strives to help people on their journey to a better financial future.',
            additionalClass: 'personal-details',
            bannerSectionClass: 'career-banner',
        },
        benifitData: {
            isCareerSection: false,
        },
    }),
    mounted() {
        this.$root.footer.isHome = false;
    },

}
</script>
