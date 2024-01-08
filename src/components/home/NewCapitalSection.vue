<template>
    <section class="new-capital">
        <div class="container">
            <h2 class="sub-title text-center">
                <span>Many have trusted</span> New Capital for their lending needs.
            </h2>
            <p class="d-md-block d-none">Here’s what some customers are saying:</p>
            <div class="excellent text-center">
                <div class="row">
                  <!-- TrustBox widget - Carousel --> <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="63053cdf91601441fb80aaa1" data-style-height="140px" data-style-width="100%" data-theme="light" data-stars="4,5" data-review-languages="en">   <a href="https://www.trustpilot.com/review/newcapitalfinancial.com" target="_blank" rel="noopener">Trustpilot</a> </div> <!-- End TrustBox widget -->
                </div>

            </div>
        </div>
    </section>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'NewCapitalSection',
    components: {

    },
    data: () => ({
        total_excellent_star:5,
        total_reviews:229,
        // carousel settings
        settings: {
            itemsToShow: 1,
            itemsToScroll: 4,
            snapAlign: 'center',
        },


        reviews: [{html:""},{html:"   <div class=\"excellent-item\">\n" +
              "                                    <div class=\"inner-review\">\n" +
              "                                      <div class=\"d-flex name-title\">\n" +
              "                                        <div class=\"round-icon ping-color\">\n" +
              "                                          <span>B</span>\n" +
              "                                        </div>\n" +
              "                                        <div class=\"name\">\n" +
              "                                          <h3>Beverly</h3>\n" +
              "                                          <h4 class=\"review\">Review</h4>\n" +
              "                                        </div>\n" +
              "                                      </div>\n" +
              "                                      <div class=\"start-design\">\n" +
              "                                            <span class=\"star\">\n" +
              "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
              "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
              "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
              "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
              "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
              "                                            </span>\n" +
              "\n" +
              "                                      </div>\n" +
              "                                      <h4 class=\"review\">\n" +
              "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
              "                                        Verified\n" +
              "                                      </h4>\n" +
              "                                      <p>\n" +
              "                                        The friendly and helpfulness of each person handling my application. The willingness to get me back on track with no judgement.\n" +
              "                                      </p>\n" +
              "                                    </div>\n" +
              "                                  </div>"},
          {html:"   <div class=\"excellent-item\">\n" +
                "                                    <div class=\"inner-review\">\n" +
                "                                      <div class=\"d-flex name-title\">\n" +
                "                                        <div class=\"round-icon ping-color\">\n" +
                "                                          <span>NS</span>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"name\">\n" +
                "                                          <h3>Nadine Stephens</h3>\n" +
                "                                          <h4 class=\"review\">Review</h4>\n" +
                "                                        </div>\n" +
                "                                      </div>\n" +
                "                                      <div class=\"start-design\">\n" +
                "                                            <span class=\"star\">\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                            </span>\n" +
                "\n" +
                "                                      </div>\n" +
                "                                      <h4 class=\"review\">\n" +
                "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
                "                                        Verified\n" +
                "                                      </h4>\n" +
                "                                      <p>\n" +
                "                                        Everything was completely explained to me. I was a very appreciative of the way I was treated I really believe that all of this will work out. I'll keep you updated.\n" +
                "                                      </p>\n" +
                "                                    </div>\n" +
                "                                  </div>"},
          {html:"   <div class=\"excellent-item\">\n" +
                "                                    <div class=\"inner-review\">\n" +
                "                                      <div class=\"d-flex name-title\">\n" +
                "                                        <div class=\"round-icon ping-color\">\n" +
                "                                          <span>E</span>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"name\">\n" +
                "                                          <h3>Enriqueta</h3>\n" +
                "                                          <h4 class=\"review\">Review</h4>\n" +
                "                                        </div>\n" +
                "                                      </div>\n" +
                "                                      <div class=\"start-design\">\n" +
                "                                            <span class=\"star\">\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                            </span>\n" +
                "\n" +
                "                                      </div>\n" +
                "                                      <h4 class=\"review\">\n" +
                "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
                "                                        Verified\n" +
                "                                      </h4>\n" +
                "                                      <p>\n" +
                "                                        My experience with the company was great. Everything was explained before I signed the documents. The questions asked were clear and able to understand. Thank you for your help.\n" +
                "                                      </p>\n" +
                "                                    </div>\n" +
                "                                  </div>"},
          {html:"   <div class=\"excellent-item\">\n" +
                "                                    <div class=\"inner-review\">\n" +
                "                                      <div class=\"d-flex name-title\">\n" +
                "                                        <div class=\"round-icon ping-color\">\n" +
                "                                          <span>J</span>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"name\">\n" +
                "                                          <h3>Judith</h3>\n" +
                "                                          <h4 class=\"review\">Review</h4>\n" +
                "                                        </div>\n" +
                "                                      </div>\n" +
                "                                      <div class=\"start-design\">\n" +
                "                                            <span class=\"star\">\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                            </span>\n" +
                "\n" +
                "                                      </div>\n" +
                "                                      <h4 class=\"review\">\n" +
                "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
                "                                        Verified\n" +
                "                                      </h4>\n" +
                "                                      <p>\n" +
                "                                       When I called, I was hesitant about calling. I just took a deep breath. The agent, that was assigned to me or answered the call was great, awesome. He took time and found the best program that fit my budget. I hung up the phone, feeling amazing and pleased. They answered all my questions.\n" +
                "                                      </p>\n" +
                "                                    </div>\n" +
                "                                  </div>"},
          {html:"   <div class=\"excellent-item\">\n" +
                "                                    <div class=\"inner-review\">\n" +
                "                                      <div class=\"d-flex name-title\">\n" +
                "                                        <div class=\"round-icon ping-color\">\n" +
                "                                          <span>J</span>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"name\">\n" +
                "                                          <h3>Jeffrey</h3>\n" +
                "                                          <h4 class=\"review\">Review</h4>\n" +
                "                                        </div>\n" +
                "                                      </div>\n" +
                "                                      <div class=\"start-design\">\n" +
                "                                            <span class=\"star\">\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                            </span>\n" +
                "\n" +
                "                                      </div>\n" +
                "                                      <h4 class=\"review\">\n" +
                "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
                "                                        Verified\n" +
                "                                      </h4>\n" +
                "                                      <p>\n" +
                "                                        Talking to the agent explaining everything thoroughly and if I had any questions I could ask and he'd explain everything to me and what I need to do and everything will be taken care of very clear and understanding.\n" +
                "                                      </p>\n" +
                "                                    </div>\n" +
                "                                  </div>"},
          {html:"   <div class=\"excellent-item\">\n" +
                "                                    <div class=\"inner-review\">\n" +
                "                                      <div class=\"d-flex name-title\">\n" +
                "                                        <div class=\"round-icon ping-color\">\n" +
                "                                          <span>D</span>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"name\">\n" +
                "                                          <h3>Denise</h3>\n" +
                "                                          <h4 class=\"review\">Review</h4>\n" +
                "                                        </div>\n" +
                "                                      </div>\n" +
                "                                      <div class=\"start-design\">\n" +
                "                                            <span class=\"star\">\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                            </span>\n" +
                "\n" +
                "                                      </div>\n" +
                "                                      <h4 class=\"review\">\n" +
                "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
                "                                        Verified\n" +
                "                                      </h4>\n" +
                "                                      <p>\n" +
                "                                        My Representative was knowledgeable about the program and it's benefits. She was advisable on the issues that concerned me. She explained the program in a way to help me make the right decision. She provided me with contact for the company should I have future questions. All in all I had a comfortable experience.\n" +
                "                                      </p>\n" +
                "                                    </div>\n" +
                "                                  </div>"},
          {html:"   <div class=\"excellent-item\">\n" +
                "                                    <div class=\"inner-review\">\n" +
                "                                      <div class=\"d-flex name-title\">\n" +
                "                                        <div class=\"round-icon ping-color\">\n" +
                "                                          <span>D</span>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"name\">\n" +
                "                                          <h3>Melissa</h3>\n" +
                "                                          <h4 class=\"review\">Review</h4>\n" +
                "                                        </div>\n" +
                "                                      </div>\n" +
                "                                      <div class=\"start-design\">\n" +
                "                                            <span class=\"star\">\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                                <img src=\"assets/images/star.svg\" alt=\"star slider-star\" class=\"img-fluid\" />\n" +
                "                                            </span>\n" +
                "\n" +
                "                                      </div>\n" +
                "                                      <h4 class=\"review\">\n" +
                "                                        <img src=\"assets/images/verified.svg\" alt=\"verified\" class=\"img-fluid\">\n" +
                "                                        Verified\n" +
                "                                      </h4>\n" +
                "                                      <p>\n" +
                "                                        Process was easy and customer service was great.\n" +
                "                                      </p>\n" +
                "                                    </div>\n" +
                "                                  </div>"}
        ],



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
