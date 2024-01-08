<template>
    <section class="step-section">
        <div class="container">
            <h2 class="title text-md-center mb-0">
                Get started in just <br class="d-md-none d-block"> <span>3 easy steps:</span>
            </h2>
            <div class="process-step">
                <div class="row">

                    <div class="col-md-4">
                        <div class="step-block d-flex flex-lg-row flex-md-column align-items-center">
                            <img src="assets/images/step-1.png" alt="step" class="img-fluid" />
                            <p>Get your rate quote with no impact to your credit score.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="step-block d-flex flex-lg-row flex-md-column align-items-center">
                            <img src="assets/images/step-2.png" alt="step" class="img-fluid" />
                            <p>Decide which loan option is right for your situation.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="step-block d-flex flex-lg-row flex-md-column align-items-center">
                            <img src="assets/images/step-3.png" alt="step" class="img-fluid" />
                            <p>
                                Get a fast approval decision, sign the agreement and get
                                funded.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <router-link to="/checkrate" class="comman-btn light-btn">CHECK MY RATE</router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'StepSection',
}

</script>
