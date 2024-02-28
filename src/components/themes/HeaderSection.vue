<template>
    <header class="landing-header">
    <div class="header-top">
      <div class="ca-block d-flex align-items-center">
        <p class="m-0 clock">
          <img src="assets/images/geo-alt-fill.svg" alt="clock" class="img-fluid" />Irvine, CA</p>
        <p class="time my-0">
          <img src="assets/images/clock.svg" alt="clock" class="img-fluid" /> Monday – Friday: 7 a.m. to 7 p.m. | Saturday: 9 a.m. to 1 p.m.
        </p>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="header-menu" v-if="show_header">
        <ul>
          <li><router-link @click="show_header = false" to="/about" >About Us</router-link></li>
          <li><router-link @click="show_header = false" to="/personal">Personal Loans</router-link></li>
         <!-- <li><router-link @click="show_header = false" to="/mortgage">Mortgage Loan</router-link></li>-->
         <li><router-link @click="show_header = false" to="/debt-calculator">Debt Calculator</router-link></li>
          <li><router-link @click="show_header = false" to="/checkrate">Check My Rate</router-link></li>
          <li><router-link @click="show_header = false" to="/faq">FAQs</router-link></li>
          <li><router-link @click="show_header = false" to="/contact">Contact Us</router-link></li>
          <li><router-link @click="show_header = false" to="/career">Careers</router-link></li>
        </ul>

      </div>
      <router-link to="/" class="navbar-brand">
        <img src="assets/images/logo.png" alt="logo" class="img-fluid" />
      </router-link>
      <div class="btn-group ms-auto">
        <router-link to="/checkrate" class="comman-btn light-btn me-3 ms-auto d-lg-flex d-none">CHECK MY
          RATE</router-link>
        <a href="tel:888-315-3319" class="ms-auto d-flex comman-btn blue-btn phone-btn"><img src="assets/images/phone.svg"
            alt="phone" class="img-fluid me-2" />
          888-315-3319</a>
        <div class="menu-burger toggle-menu" :class="show_header == false ? '' : 'open'" @click="show_header = !show_header">
          <a href="#" class="burger">
            <span></span>
            <span></span>
            <span></span>
          </a>

        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      show_header:false,
     
    }
  },
  
  
}

</script>

 