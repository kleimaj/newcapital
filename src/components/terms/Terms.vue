<template>
  <!-- great-news section start -->

  <div class="scrolldiv great-news congratulations">
    <div class="custom-padding terms-condition">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-12">
            <div class="terms-section">
              <div class="position-relative">
                <h1 class="title blue-text">Terms &amp; Conditions </h1>
                <perfect-scrollbar>
                  <div class="overlay-section">
                    <div class="sidebar-scroll">
                      <div class="terms-details">
                        <p>Please note that all calls with the company may be recorded or monitored for quality assurance
                          and training purposes.</p>
                        <p>Cyprus Financial Group Inc. DBA New Capital Financial provides “The User” with access to its
                          content, resources, tools for communication, public forums, commerce platforms, and other
                          services through its network of websites, “The Service”. Cyprus Financial Group Inc. DBA New
                          Capital Financial provides its service to the user, subject to the following Terms of Service.
                        </p>
                        <p>Cyprus Financial Group Inc. DBA New Capital Financial is not responsible for providing you
                          access facilities or equipment (in any form) to its service. You, “The User”, by using this
                          website, and BY COMPLETING THE REGISTRATION PROCESS AND CLICKING THE “SUBMIT” BUTTON, comprehend
                          and agree that “The Service” may include advertisements and sponsorships and that these are
                          necessary for Cyprus Financial Group Inc. DBA New Capital Financial to provide “The Service”.
                          You also comprehend and agree that Cyprus Financial Group Inc. DBA New Capital Financial makes
                          no representations or warranties about the suitability, reliability, availability, timeliness,
                          and accuracy of the information, products, services and related graphics contained within “The
                          Service” for any purpose. “The Service” is provided “as is” without warranty of any kind. Cyprus
                          Financial Group Inc. DBA New Capital Financial hereby disclaims all warranties and conditions
                          with regard to “The Service”.
                        </p>
                        <b>THE SERVICE IS SUBJECT TO THE APPLICABLE RETAINER AGREEMENTS AND LEGAL DISCLAIMER.</b>
                        <p><b>ACKNOWLEDGMENT AND ACCEPTANCE OF TERMS OF SERVICE</b></p>
                        <p>“The Service” is provided to you, “The User”, under the terms and conditions and any amendments
                          thereto and any operating rules or policies that may be published from time to time by Cyprus
                          Financial Group Inc. DBA New Capital Financial as part of the Terms of Service/Legal Disclaimer
                          and related disclosures which are cumulatively included herein by reference. The Cyprus
                          Financial Group Inc. DBA New Capital Financial Terms of Service comprises the entire agreement
                          between “The User” and Cyprus Financial Group Inc. DBA New Capital Financial and supersedes any
                          prior agreements pertaining to the subject matter contained herein. BY COMPLETING THE
                          REGISTRATION PROCESS AND CLICKING THE “SUBMIT” BUTTON, YOU ARE AGREEING TO BE BOUND BY THE
                          Cyprus Financial Group Inc. DBA New Capital Financial Terms of Service, Legal Disclaimer and
                          applicable terms of the Retainer Agreement.</p>
                        <p><b>MODIFICATION OF THESE TERMS OF USE</b></p>
                        <p>Cyprus Financial Group Inc. DBA New Capital Financial reserves the right to change any of the
                          terms, conditions, and notices under which “The Services” are offered. You are responsible for
                          regularly reviewing these terms and conditions, including changes/modifications if any
                          incorporated by us from time to time. Your continued use of “The Service” constitutes your
                          agreement to all such terms, conditions, and notices.</p>
                        <p><b>MODIFICATION TO “THE SERVICE”</b></p>
                        <p>Cyprus Financial Group Inc. DBA New Capital Financial reserves the right to modify or
                          discontinue, temporarily or permanently, “The Service” (or any part of “The</p>
                      </div>
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>
              <!-- <div class="overlay">
                  <img src="assets/images/overlay-scroll.png" alt="overlay" class="img-fluid">
                </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- </perfect-scrollbar> -->
<!-- great-news section end --></template>
<script>
export default {
  name: "TermsComponent",
  // minScrollbarLength: 20,
  props: {
    msg: String,

  },
  mounted() {
    this.$root.footer.isHome = false;
  },
};


</script>
