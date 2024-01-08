<template>
    <section class="page-banner strives-section" :class="bannerStriveSectionClass">
        <div class="banner-content">
            <div class="container">
                <div class="row justify-content-end" :class="rowClass">
                    <div class="col-xl-6 col-lg-12 col-md-12" :class="colClass">
                        <div class="financial-block" :class="financialBlockClass">
                            <h2 class="title" :class="bannerStriveTitleClass" v-html="bannerStriveTitle"></h2>
                            <ul class="financial-list" v-html="bannerStriveDescriptionList"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-banner-img">
            <div class="overlay-img d-xl-none d-md-block" v-if="isAboutComponet">
                <img src="assets/images/1111.png" alt="overlay" class="img-fluid">
            </div>
            <img :src="bannerStriveImageUrl" alt="about" class="d-md-block d-none img-fluid">
            <img :src="bannerStriveMobileImageUrl" alt="about" class="d-md-none d-block img-fluid">
        </div>
    </section>
</template>
<script>
export default {
    props: [
        'bannerStriveSectionClass',
        'rowClass',
        'colClass',
        'financialBlockClass',
        'bannerStriveTitleClass',
        'bannerStriveTitle',
        'bannerStriveDescriptionList',
        'isAboutComponet',
        'bannerStriveImageUrl',
        'bannerStriveMobileImageUrl',

    ]
}
</script>
