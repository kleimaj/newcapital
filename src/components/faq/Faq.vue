<template>
  <!-- banner-section start -->
  <BannerSection msg="Banner Section" :bannerImageUrl="bannerData.bannerImageUrl"
    :bannerMobileImageUrl="bannerData.bannerMobileImageUrl" :bannerTitle="bannerData.bannerTitle"
    :bannerDescription="bannerData.bannerDescription" :bannerButton="bannerData.bannerButton"
    :offerTitle="bannerData.offerTitle" :offerLinkText="bannerData.offerLinkText" :offerLink="bannerData.offerLink"
    :additionalClass="bannerData.additionalClass" :bannerSectionClass="bannerData.bannerSectionClass" :isFaq="isFaq" />
  <!-- banner-section end -->

  <!-- benefit section start -->
  <section class="white-bg faq-block">
    <div class="container text-lg-start">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="faq-section me-xl-5 pe-xl-5">
            <div class="faq-question">
              <h3 class="sub-title">Do you require collateral to secure the loan?</h3>
              <p>No, loans through New Capital Financial are unsecured and do not require collateral.</p>
            </div>
            <div class="faq-question">
              <h3 class="sub-title">Can I pay off the loan at any time without a penalty?</h3>
              <p>Absolutely. There are no prepayment penalties and encourage our borrowers to repay their loan sooner
                to reduce interest charges. </p>
            </div>
            <div class="faq-question">
              <h3 class="sub-title">How will my interest rate be determined?</h3>
              <p>Your interest rate will depend on a number of factors like credit history, income, your ability to make
                on-time payments and the term length. </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="faq-section">
            <div class="faq-question">
              <h3 class="sub-title">Will my application automatically be approved if I’m already pre-approved?</h3>
              <p>You were pre-approved based on information from your credit report. We will evaluate the information you provide when you apply to establish if you meet specific creditworthiness requirements to be approved for the offer you received.  If you no longer meet those requirements or if your credit score has recently dropped, you may not be granted credit. In addition, if you currently have inadequate income to sustain your loan payments, extend credit to you.</p>
            </div>
            <div class="faq-question">
              <h3 class="sub-title">Why should I consider a personal loan over credit cards?</h3>
              <p>Personal loans have fair fixed interest rates, scheduled payments that won’t change and a set payoff date. With variable-rate credit card debt, your interest could rise at any time. If you make minimum payments on your card balances, you don’t make much progress on paying down the actual principal you owe, which means you could end up spending thousands of dollars in interest over time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- benefit section end -->
  <!-- faq-bottom images start -->
  <section class="faq-bottom">
    <img src="assets/images/faq-bottom.jpg" alt="faq-bottom" class="d-md-block d-none img-fluid">
    <img src="assets/images/faq-bottom-mobile.jpg" alt="faq-bottom" class="d-md-none d-block img-fluid">
  </section>
  <!-- faq-bottom images end -->
</template>
<script>
import BannerSection from '../themes/BannerSection.vue'

export default {
  name: 'FaqComponent',
  components: {
    BannerSection,
  },
  props: {
    msg: String
  },
  data: () => ({
    isFaq: true,
    bannerData: {
      bannerImageUrl: 'assets/images/faq-banner.jpg',
      bannerMobileImageUrl: 'assets/images/faq-mobile.jpg',
      bannerTitle: 'Answers to some Frequently Asked Questions',
      additionalClass: 'personal-details',
      bannerSectionClass: 'faq-banner',
    }
  }),
  mounted() {
    this.$root.footer.isHome = false;
  },
}
</script>
