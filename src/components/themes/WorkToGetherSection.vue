<template>
    <section class="work-together" :class="workToGetherSectionClass">
        <div class="container">
            <div class="text-md-center text-start together-title" :class="sectionHeaderClass">
                <h2 class="title white-txt" v-html="workToGetherTitle"></h2>
                <p class="white-txt" v-html="workToGetherDescription"></p>
                <div class="pre-qualified" v-if="isPreQualified">
                    <a href="/checkrate" class="comman-btn light-btn big-btn">Get Pre-Qualified</a>
                </div>
            </div>
        </div>
        <div class="work-details" v-if="isAboutSectionWorkDetails">
            <div class="deserv-section offer-peoples">
                <div class="deserve-img offer-img">
                    <div class="img-section">
                        <img src="assets/images/girls.jpg" alt="offer-people" class="d-md-block d-none img-fluid" />
                        <img src="assets/images/girls-mobile.jpg" alt="offer-people" class="d-md-none d-block img-fluid" />
                    </div>
                    <div class="deserve-content repayment-section m-0">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12 p-0">
                                    <div class="simple-block">
                                        <h2 class="sub-title text-md-start">Borrowers come to us <br
                                                class="d-md-block d-none"> to get personalized loan options with:</h2>
                                        <ul class="financial-list text-lg-start">
                                            <li>Fair repayment terms</li>
                                            <li>Fast funding within 48 hours</li>
                                            <li>Competitive, fixed interest rates</li>
                                            <li>A simple, hassle-free experience</li>
                                            <li>No hidden fees or prepayment penalty</li>
                                        </ul>
                                        <div class="see-rate">
                                            <a href="/checkrate" class="comman-btn light-btn">See MY RATE</a>
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
export default {
    props: [
        'workToGetherSectionClass',
        'sectionHeaderClass',
        'workToGetherTitle',
        'workToGetherDescription',
        'isPreQualified',
        'isAboutSectionWorkDetails',
    ]
}

</script>

 