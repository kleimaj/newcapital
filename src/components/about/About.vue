<template>
    <!-- banner-section start -->
    <BannerSection msg="Banner Section" :bannerImageUrl="bannerData.bannerImageUrl"
        :bannerMobileImageUrl="bannerData.bannerMobileImageUrl" :bannerTitle="bannerData.bannerTitle"
        :bannerDescription="bannerData.bannerDescription" :bannerButton="bannerData.bannerButton"
        :offerTitle="bannerData.offerTitle" :offerLinkText="bannerData.offerLinkText" :isAbout="bannerData.isAbout" />
    <!-- banner-section end -->

    <!-- benefit section start -->
    <BenefitSection msg="Benefit Section" :benefitSectionClass="benifitData.benefitSectionClass"
        :isCareerSection="benifitData.isCareerSection" :benefitSectionTitle="benifitData.benefitSectionTitle"
        :benefitSectionDescription="benifitData.benefitSectionDescription" />
    <!-- benefit section end -->

    <!-- banner-section start -->
    <BannerStriveSection msg="Banner Strive Section" :rowClass="bannerStriveData.rowClass"
        :colClass="bannerStriveData.colClass" :financialBlockClass="bannerStriveData.financialBlockClass"
        :bannerStriveTitleClass="bannerStriveData.bannerStriveTitleClass"
        :bannerStriveTitle="bannerStriveData.bannerStriveTitle"
        :bannerStriveDescriptionList="bannerStriveData.bannerStriveDescriptionList"
        :isAboutComponet="bannerStriveData.isAboutComponet" :bannerStriveImageUrl="bannerStriveData.bannerStriveImageUrl"
        :bannerStriveMobileImageUrl="bannerStriveData.bannerStriveMobileImageUrl" />
    <!-- banner-section end -->

    <!-- work-together section start -->
    <WorkToGetherSection msg="Work To Gether Section" :sectionHeaderClass="workToGetherData.sectionHeaderClass"
        :workToGetherTitle="workToGetherData.workToGetherTitle"
        :workToGetherDescription="workToGetherData.workToGetherDescription"
        :isPreQualified="workToGetherData.isPreQualified"
        :isAboutSectionWorkDetails="workToGetherData.isAboutSectionWorkDetails" />
    <!-- work-together section end -->
<div>
    
</div>
</template>
<script>
import BannerSection from '../themes/BannerSection.vue'
import BenefitSection from '../themes/BenefitSection.vue'
import BannerStriveSection from '../themes/BannerStriveSection.vue'
import WorkToGetherSection from '../themes/WorkToGetherSection.vue'


export default {
    name: 'AboutComponent',
    components: {
        BannerSection,
        BenefitSection,
        BannerStriveSection,
        WorkToGetherSection,
    },
    props: {
        msg: String
    },
    data() {
        return {
           
            bannerData: {
                bannerOverlayImageUrl: 'assets/images/1111.png',
                bannerImageUrl: 'assets/images/about-banner.jpg',
                bannerMobileImageUrl: 'assets/images/about-mobile.jpg',
                bannerTitle: 'Our goal is to help you reach yours',
                bannerDescription: 'New Capital Financial is here to offer the best possible financial solutions for our customers. With personal loans that are straightforward, convenient and trusted, people turn to us for the funds that can help them accomplish their goals. ',
                bannerButton: 'Get my loan options',
                isAbout: true,
            },
            benifitData: {
                benefitSectionClass: 'text-lg-start',
                isCareerSection: true,
                benefitSectionTitle: 'Our experience <br class="d-md-none d-block"> is your benefit.',
                benefitSectionDescription: 'From paying off high-rate debt to covering any of life’s expenses, we’re at your service. Our experts have spent more than a decade in the financial services industry, and they know what to do to help you get where you want to go.As a trusted leader, New Capital Financial strives to find the right loan to suit every customer’s needs and situation.',
            },
            bannerStriveData: {
                rowClass: 'm-0',
                colClass: 'p-0',
                financialBlockClass: 'me-xl-5 text-lg-start',
                bannerStriveTitleClass: 'm-0',
                bannerStriveTitle: 'New Capital strives to:',
                bannerStriveDescriptionList: `
                    <li>Be the go-to financial partner borrowers can depend on for a personal loan.</li>
                    <li>Provide a simple, secure platform that gives customers access to simple solutions.</li>
                    <li>Offer guidance and assistance throughout the process, so our customers feel confident
                        they are getting what they need.</li>
                `,
                isAboutComponet: true,
                bannerStriveImageUrl: 'assets/images/strives.jpg',
                bannerStriveMobileImageUrl: 'assets/images/offer-mobile.jpg',
            },
            workToGetherData: {
                sectionHeaderClass: 'text-md-center text-start together-title',
                workToGetherTitle: 'Let’s work together.',
                workToGetherDescription: 'If you’re ready to consolidate debt, tackle an expense or pay off some bills, we want to help you make it happen. Even though every customer is unique and has different financial circumstances, we believe in a consistent approach that focuses on service and reliability.',
                isPreQualified: false,
                isAboutSectionWorkDetails: true,
            }
        }
    },
    methods:{
       
       
    },
     mounted() {
        this.$root.footer.isHome = false;
       
    },
    
   
}
</script>

<style>
.page-banner .banner-content p {
    font-size: 30px;
    line-height: 37px;
    color: #2e0a46;
    margin: 34px 80px 50px 0;
}
</style>