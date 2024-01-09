<template>
  <footer class="main-footer" v-if="isHome">
    <div div class="container">
      <div class="f-top">
        <div class="row justify-content-between">
          <div class="col-xxl-3 col-xl-3 col-lg-2 col-md-6">
            <div class="f-block p-0 logo-block">
              <router-link to="/" class="navbar-brand">
                <img src="assets/images/logo.png" alt="logo" class="img-fluid"/>
              </router-link>
              <p class="d-md-none d-block">© 2024 New Capital Financial. All Rights Reserved.</p>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
            <div class="f-block">
              <div class="d-flex text-lg-start">
                <ul class="f-list me-xl-5 me-3">
                  <li>
                    <router-link to="/about">ABOUT US</router-link>
                  </li>
                  <li>
                    <router-link to="/personal">PERSONAL LOANS</router-link>
                  </li>
                  <!--<li>
                    <router-link to="/mortgage">MORTGAGE LOANS</router-link>
                  </li>-->
                  <li>
                    <router-link to="/checkrate">CHECK MY RATE</router-link>
                  </li>
                  <li>
                    <router-link to="/faq">FAQS</router-link>
                  </li>
                </ul>
                <ul class="f-list">
                  <li>
                    <router-link to="/contact">CONTACT US</router-link>
                  </li>
                  <li>
                    <router-link to="/career">CAREERS</router-link>
                  </li>
                  <li>
                    <router-link to="/privacy">PRIVACY POLICY</router-link>
                  </li>
                  <li>
                    <router-link to="/terms">TERMS & CONDITIONS</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6">
            <div class="f-block">
              <h2 class="d-md-none d-block mb-4">Accreditation</h2>

              <img src="assets/images/accreditation.svg" alt="accreditation" class="acc-img img-fluid"/>

            </div>
          </div>
          <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-6">
            <div class="f-block">
              <h2 class="d-md-none d-block">Social</h2>
              <p>Follow us today on:</p>
              <div class="socail-icon d-flex">
                <a href="https://www.facebook.com/newcapitalfinancialofficial?mibextid=LQQJ4d" class="icon">
                  <img src="assets/images/facebook.svg" alt="fb" class="img-fluid"/>
                </a>
                <a href="https://www.instagram.com/newcapitalfinancial/" class="icon">
                  <img src="assets/images/instagram.svg" alt="insta" class="img-fluid"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="f-bottom">
        <div class="f-block p-0 text-lg-start">
          <p class="d-md-block d-none">© 2024 New Capital Financial. All Rights Reserved.</p>
          <p>Cyprus Financial Group, Inc., DBA New Capital Financial. is Utah-licensed, Which conducts consumer lending or related activities under the Utah Department of Financial Institutions, Title 70C Consumer Credit Code, as required by law, with its main office located at 8 The Green Suite B, Dover, DE 19901, telephone number: <a href="tel:8883153319">888-315-3319.</a> This site is directed at and made available to persons in the continental U.S., Alaska, and Hawaii only. Loans are not available in all states. Annual Percentage Rates (APRs) range from 5.20% APR to 35.99% APR, with the lowest rates for the most creditworthy borrowers. Rates are subject to change daily. Minimum loan amount is $5,000.00. Maximum loan amount is $100,000.00. Loans are funded through a third party. Cyprus Financial Group, Inc., DBA New Capital Financial. has no control over participating third-party lender creditworthiness eligibility criteria. Eligibility is not guaranteed and requires that you meet credit and other conditions, including: (a) you are continuing to meet the criteria for this prescreened offer; (b) your credit report, application and credit history meet our pre-established credit criteria; (c) your monthly debt-to-income ratio; and (d) your employment status. Personal loan offers provided to customers who originated via paid Google or Bing advertisement feature rate quotes on Cyprus Financial Group, Inc., DBA New Capital Financial. of no greater than 35.99% APR with terms from 12 to 144 months. Your actual rate depends upon credit score, loan amount, loan term, and credit usage and history and will be agreed upon between you and the lender. An example of total amount paid on a personal loan of $10,000 for a term of 36 months at a rate of 10% would be equivalent to $11,616.12 over the 36-month life of the loan. All loans may be subject to origination fees ranging from 1%–5% of the loan amount, if permitted under applicable state law.</p>
          <p>We will never discriminate based on race, color, religion, sex, marital status, national origin, or ancestry.
          </p>
          <p>For additional loan options, please call <a href="tel:8883153319">888-315-3319.</a></p>
        </div>
      </div>
    </div>
  </footer>
  <footer class="main-footer else-home-footer" v-else>
    <div div="" class="container">
      <div class="f-top">
        <div class="row justify-content-between">
          <div class="col-xl-3 col-lg-2 col-md-6">
            <div class="f-block p-0 logo-block">
              <router-link to="/" class="navbar-brand">
                <img src="assets/images/logo.png" alt="logo" class="img-fluid"/>
              </router-link>
              <p class="d-md-none d-block">© 2024 New Capital Financial. All Rights Reserved.</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="f-block">
              <div class="d-flex">
                <ul class="f-list me-5">
                  <li>
                    <router-link to=""></router-link>
                  </li>
                  <li>
                    <router-link to="/personal">Our Loans</router-link>
                  </li>
                  <li>
                    <router-link to="/about">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/faq">FAQs</router-link>
                    <a href="faq.html"></a></li>
                  <li>
                    <router-link to="/contact">Contact Us</router-link>
                  </li>
                </ul>
                <ul class="f-list">
                  <li>
                    <router-link to=""></router-link>
                  </li>
                  <li>
                    <router-link to="/checkrate">Get my Quote</router-link>
                  </li>
                  <li>
                    <router-link to="/terms">Terms of Use</router-link>
                  </li>
                  <li>
                    <router-link to="/privacy">Privacy Policy</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="f-block">
              <h2 class="d-md-none d-block mb-4">Accreditation</h2>
              <a href="https://www.bbb.org/us/ca/irvine/profile/loans/new-capital-financial-1126-1000100968"
                 target="_blank">
                <img src="assets/images/accreditation.svg" alt="accreditation" class="acc-img img-fluid"/>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="f-block">
              <h2 class="d-md-none d-block">Social</h2>
              <p>Follow us today on:</p>
              <div class="socail-icon d-flex">
                <a href="https://www.facebook.com/newcapitalfinancialofficial?mibextid=LQQJ4d" target="_blank"
                   class="icon">
                  <img src="assets/images/facebook.svg" alt="fb" class="img-fluid"/>
                </a>
                <a href="https://www.instagram.com/newcapitalfinancial/" target="_blank" class="icon">
                  <img src="assets/images/instagram.svg" alt="insta" class="img-fluid"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="f-bottom">
        <div class="f-block p-0">
          <p class="d-md-block d-none">© 2024 New Capital Financial. All Rights Reserved.</p>
          <p>Cyprus Financial Group, Inc., DBA New Capital Financial. is Utah-licensed, Which conducts consumer lending or related activities under the Utah Department of Financial Institutions, Title 70C Consumer Credit Code, as required by law, with its main office located at 8 The Green Suite B, Dover, DE 19901, telephone number: <a href="tel:8883153319">888-315-3319.</a> This site is directed at and made available to persons in the continental U.S., Alaska, and Hawaii only. Loans are not available in all states. Annual Percentage Rates (APRs) range from 5.20% APR to 35.99% APR, with the lowest rates for the most creditworthy borrowers. Rates are subject to change daily. Minimum loan amount is $5,000.00. Maximum loan amount is $100,000.00. Loans are funded through a third party. Cyprus Financial Group, Inc., DBA New Capital Financial. has no control over participating third-party lender creditworthiness eligibility criteria. Eligibility is not guaranteed and requires that you meet credit and other conditions, including: (a) you are continuing to meet the criteria for this prescreened offer; (b) your credit report, application and credit history meet our pre-established credit criteria; (c) your monthly debt-to-income ratio; and (d) your employment status. Personal loan offers provided to customers who originated via paid Google or Bing advertisement feature rate quotes on Cyprus Financial Group, Inc., DBA New Capital Financial. of no greater than 35.99% APR with terms from 12 to 144 months. Your actual rate depends upon credit score, loan amount, loan term, and credit usage and history and will be agreed upon between you and the lender. An example of total amount paid on a personal loan of $10,000 for a term of 36 months at a rate of 10% would be equivalent to $11,616.12 over the 36-month life of the loan. All loans may be subject to origination fees ranging from 1%–5% of the loan amount, if permitted under applicable state law.</p>
          <p>We will never discriminate based on race, color, religion, sex, marital status, national origin, or ancestry.
          </p>
          <p>For additional loan options, please call <a href="tel:8883153319">888-315-3319.</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterSection',
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show_header: false,
    }
  },
  components: {},
  methods: {},

}

</script>

 