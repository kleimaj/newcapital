<template>
    <section class="page-banner" :class="bannerSectionClass">
        <div class="page-banner-img" v-if="isPersnalLoan">
            <div class="overlay-img">
                <img src="assets/images/1111.png" alt="overlay" class="img-fluid">
            </div>
            <img :src="bannerImageUrl" alt="about" class="d-md-block d-none img-fluid">
            <img :src="bannerMobileImageUrl" alt="about" class="d-md-none d-block img-fluid">
        </div>
        <div class="page-banner-img d-flex justify-content-end" v-else>
            <div class="overlay-img">
                <img src="assets/images/1111.png" alt="overlay" class="img-fluid">
            </div>
            <img :src="bannerImageUrl" alt="about" class="d-md-block d-none img-fluid">
            <img :src="bannerMobileImageUrl" alt="about" class="d-md-none d-block img-fluid">
        </div>
        <div class="banner-content">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-8" v-if="isContact">
                        <div class="your-content " :class="additionalClass">
                            <h1 v-html="bannerTitle"></h1>
                            <p v-if="isAbout" v-html="bannerDescription"></p>
                            <h2 v-else class="m-0" v-html="bannerDescription"></h2>
                            <a href="/checkrate" class="comman-btn light-btn big-btn" v-if="bannerButton">{{ bannerButton }}</a>
                            <span class="offer" v-if="offerTitle">
                                Doesn’t affect your credit score. <br />
                                <a href="/checkrate" v-if="offerLinkText">{{ offerLinkText }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-8" v-else-if="isFaq">
                        <div class="your-content " :class="additionalClass">
                            <h1 v-html="bannerTitle"></h1>
                            <a href="/checkrate" class="comman-btn light-btn big-btn" v-if="bannerButton">{{ bannerButton }}</a>
                            <span class="offer" v-if="offerTitle">
                                Doesn’t affect your credit score. <br />
                                <a href="/checkrate" v-if="offerLinkText">{{ offerLinkText }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-12" v-else-if="isPersnalLoan || isMortgage">
                        <div class="your-content " :class="additionalClass">
                            <h1 v-html="bannerTitle"></h1>
                            <p v-if="isAbout" v-html="bannerDescription"></p>
                            <h2 v-else v-html="bannerDescription"></h2>
                            <a href="/checkrate" class="comman-btn light-btn big-btn" v-if="bannerButton">{{ bannerButton }}</a>
                            <span class="offer" v-if="offerTitle">
                                Doesn’t affect your credit score. <br />
                                <a href="/checkrate" v-if="offerLinkText">{{ offerLinkText }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-12 text-lg-start" v-else>
                        <div class="your-content " :class="additionalClass">
                            <h1 class="m-0" v-html="bannerTitle"></h1>
                            <p v-if="isAbout" v-html="bannerDescription"></p>
                            <h2 v-else v-html="bannerDescription"></h2>
                            <a href="/checkrate" class="comman-btn light-btn big-btn" v-if="bannerButton">{{ bannerButton }}</a>
                            <span class="offer" v-if="offerTitle">
                                Doesn’t affect your credit score. <br />
                                <a href="/checkrate" v-if="offerLinkText">{{ offerLinkText }}</a>
                            </span>
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
        'bannerImageUrl',
        'bannerMobileImageUrl',
        'bannerTitle',
        'bannerDescription',
        'bannerButton',
        'offerTitle',
        'offerLinkText',
        'offerLink',
        'additionalClass',
        'bannerSectionClass',
        'isAbout',
        'isContact',
        'isFaq',
        'isPersnalLoan',
        'isMortgage',
    ]
}
</script>
