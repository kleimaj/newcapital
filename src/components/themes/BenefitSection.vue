<template>
    <section class="benefit-section" :class="benefitSectionClass" v-if="isCareerSection">
        <div class="container">
            <h2 v-if="benefitSectionTitle" v-html="benefitSectionTitle"></h2>
            <p v-if="benefitSectionDescription" v-html="benefitSectionDescription" :class="descriptionClass"></p>
        </div>
    </section>
    <section class="benefit-section situation-block service-section" v-else>
        <div class="container">
            <p>We believe that creating partnerships through impactful solutions is what sets us apart from other loan
                companies. They focus on the numbers, while we focus on our customers and their unique needs. </p>
            <h3>Help us continue our unwavering commitment to customer service. </h3>
            <p>We’re looking for positive, highly motivated and determined candidates to add to our growing team. If you
                think you have what it takes, we want to hear from you!
            </p>
            <p>Please email us at</p>
            <a href="mailto:careers@newcapitalfinancial.com">careers@newcapitalfinancial.com</a>
        </div>
    </section>
</template>
<script>
export default {
    props: [
        'benefitSectionClass',
        'isCareerSection',
        'benefitSectionTitle',
        'benefitSectionDescription',
        'descriptionClass'
    ]
}

</script>

 