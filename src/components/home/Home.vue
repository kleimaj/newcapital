<template>
  <!-- section:1 Banner and Carusal section -->
  <section class="p-0">
    <div class="slider-section">
      <div class="banner-section">
        <div class="banner-item">
          <img src="assets/images/banner-images.webp" alt="banner-img" class="img-fluid" />
        </div>
      </div>
      <div class="banner-content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-12">
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-xl-6 col-lg-6 col-md-6 p-0">
                  <div class="personal-details text-center">
                    <h1>
                      Purpose-driven <br />
                      personal loans
                    </h1>
                    <p>
                      Fast funding from <br />
                      $10,000 to $100,000.
                    </p>
                    <router-link
                      to="/checkrate"
                      class="comman-btn light-btn view-ratebtn d-md-none d-flex"
                      >CHECK MY RATE</router-link
                    >
                    <span class="d-md-none d-flex justify-content-center"
                      >Doesn’t affect your credit score.</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section:1 End -->
  <!-- section:2 Choose finance and form section-->
  <section class="choose-section">
    <div class="container">
      <div class="row justify-content-center m-0">
        <div class="col-xl-10 col-lg-12 col-md-12 p-0">
          <div class="row justify-content-center flex-md-row flex-column-reverse m-0">
            <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6 mx-md-auto p-0">
              <div class="outer-block">
                <div class="financial-block">
                  <h2 class="title m-0">
                    Choose New Capital <br />
                    Financial for:
                  </h2>
                  <ul class="financial-list textleft">
                    <li>Fast funding within 1-3 business days</li>
                    <li>No hidden fees or surprises</li>
                    <li>Simple, secure online application</li>
                    <li>Fixed rates, clear terms</li>
                    <li>
                      The chance to consolidate debt and save with lower monthly payments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 p-0">
              <div class="easy-quote">
                <div class="custom-form">
                  <div class="quote-title">
                    <h2 class="mb-3">
                      Get started with a quick and <br />
                      easy quote
                    </h2>
                    <p>
                      <b>If you received an offer code</b> enter it below and select
                      “CHECK MY RATE”.
                    </p>
                  </div>
                  <form id="frmchakrate" ref="form">
                    <div class="custom-row">
                      <div class="error-message">
                        <input
                          placeholder=" "
                          class="form-control"
                          v-model="formInfo.offer"
                          id="offer"
                        />
                        <label for="offer" class="form-label">Offer Code</label>
                      </div>
                      <span v-if="msg.offer" class="error-msg">{{
                          msg.offer
                        }}</span>
                    </div>
                    <div id="emailHelp" class="offer-msg text-left ms-3">
                      <b>No offer code?</b> Fill out the form below. All fields required.
                    </div>
                    <div class="custom-row">
                      <div class="error-message">
                        <input
                          id="firstname"
                          placeholder=" "
                          type="text"
                          class="form-control"
                          v-model="formInfo.firstname"
                        />
                        <label for="firstname" class="form-label required"
                          >First Name</label
                        >
                      </div>
                      <span v-if="msg.firstname" class="error-msg">{{
                        msg.firstname
                      }}</span>
                    </div>
                    <div class="custom-row">
                      <div class="error-message">
                        <input
                          id="lastname"
                          placeholder=" "
                          type="text"
                          class="form-control"
                          v-model="formInfo.lastname"
                        />
                        <label for="lastname" class="form-label required"
                          >Last Name</label
                        >
                      </div>
                      <span v-if="msg.lastname" class="error-msg">{{
                        msg.lastname
                      }}</span>
                    </div>
                    <div class="custom-row">
                      <div class="error-message">
                        <input
                          id="email"
                          placeholder=" "
                          type="text"
                          class="form-control"
                          v-model="formInfo.email"
                        />
                        <label for="email" class="form-label required"
                          >Email Address</label
                        >
                      </div>
                      <span v-if="msg.email" class="error-msg">{{ msg.email }}</span>
                    </div>
                    <div class="custom-row">
                      <div class="error-message">
                        <input
                          id="phone"
                          placeholder=" "
                          type="text"
                          class="form-control"
                          v-model="formInfo.phone"
                        />
                        <label for="phone" class="form-label required">Phone</label>
                      </div>
                      <span v-if="msg.phone" class="error-msg">{{ msg.phone }}</span>
                    </div>
                    <div class="custom-row">
                      <div class="error-message">
                      <input type="text" placeholder=" " class="form-control" id="loanamount" v-model="formInfo.loanamount">
                      <label for="loanamount" class="form-label required">Loan Amount</label>
                    </div>
                      <span v-if="msg.loanamount" class="error-msg">{{msg.loanamount}}</span>
                    </div>
                    <vue-turnstile site-key="0x4AAAAAAAIoEXeVt7ZTyzpT" v-model="token" />
                    <!-- <vue-turnstile site-key="1x00000000000000000000AA" v-model="token" /> -->

                     <div
                       class="credit-block d-flex flex-lg-row flex-column align-items-center"
                     >
                       <button
                         type="button"
                         value="submit"
                         class="comman-btn light-btn view-ratebtn"
                         :disabled="submitted"
                         @click="validateForm()"
                       >
                         CHECK MY RATE
                       </button>
                       <p>Doesn’t affect your credit score</p>
                     </div>
                     <p class="view-rate mb-0">
                       By clicking ‘CHECK MY RATE’, you authorize – with respect to the
                       telephone number provided above and any other telephone number
                       associated or related to you that may be provided to us in the
                       future — New Capital Financial® can contact you by phone, text,
                       email, mail, or by artificial or pre-recorded voice, even if you
                       have listed yourself on any Do-Not-Call List. You also agree to our
                       Privacy Policy and Terms of Use, and further agree that any person
                       or entity contacting you pursuant to your consent here may use an
                       automatic telephone dialing system, even if the telephone number you
                       provided above (or any telephone number associated with you) is
                       connected to a mobile phone and even if you might be charged for the
                       call. Your consent to receive automated calls or text messages is
                       not required for any purchase or availability of goods/services from
                       New Capital Financial®. If you do not consent, you may call us at
                       <a href="tel:(888) 315-3319">(888) 315-3319</a> to continue your
                       inquiry.
                     </p>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   <!-- section:2 End -->
  <!-- section:3 Steps and check my rate Section -->
  <StepSection msg="Step Section" />
  <!-- section:3 End -->

  <!-- section:4 accomplish section start -->
  <AccomplishSection msg="Accomplish Section" />
  <!-- section:4 End -->
  <DebtCalc />
  <!-- Section 5 newcapital and carusal images -->
  <NewCapitalSection msg="New Capital Section" />

  <!-- Section:6 deserve section and check my rate -->
  <DeserveSection msg="Deserve Section" />
  <!-- section:6 End-->
</template>
<style>
.carousel__prev,
.carousel__next {
  display: none !important;
}
</style>

<script>
import StepSection from "../home/StepSection.vue";
import AccomplishSection from "../home/AccomplishSection.vue";
import NewCapitalSection from "../home/NewCapitalSection.vue";
import DeserveSection from "../home/DeserveSection.vue";
import DebtCalc from "./DebtCalc.vue";
//import Multiselect from "@vueform/multiselect";
import { useToast } from "vue-toastification";
import "@vueform/multiselect/themes/default.css";
import axios from "axios";
import VueTurnstile from 'vue-turnstile';
import router from "@/router";

export default {
  name: "HomeComponent",
  components: {
    VueTurnstile,
    StepSection,
    AccomplishSection,
    NewCapitalSection,
    DeserveSection,
    DebtCalc,
   // Multiselect,
  },
  data: () => ({
    submitted: false,
    toast: useToast(),
    token: '',
    formInfo: {
      offer: '',
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      token: "",
      turnstile:"",
      loanamount: "",
      utm_campaign: "",
      utm_source: "",
      utm_medium: "",
    },

    msg: [],
    slides: [
      {
        id: "1",
        title: "Debt consolidation",
        imageUrl: "assets/images/consolidation.jpg",
        imageAlt: "consolidation",
      },
      {
        id: "2",
        title: "Home improvements",
        imageUrl: "assets/images/improvements.jpg",
        imageAlt: "improvements",
      },
      {
        id: "3",
        title: "Medical care",
        imageUrl: "assets/images/cost.jpg",
        imageAlt: "cost",
      },
      {
        id: "4",
        title: "Major purchases",
        imageUrl: "assets/images/purchases.jpg",
        imageAlt: "purchases",
      },
      {
        id: "5",
        title: "Travel",
        imageUrl: "assets/images/travel.jpg",
        imageAlt: "travel",
      },
      {
        id: "6",
        title: "Debt consolidation",
        imageUrl: "assets/images/consolidation.jpg",
        imageAlt: "consolidation",
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      itemsToScroll: 4,
      snapAlign: "center",
    },
    breakpoints: {
      // 700px and up
      1499: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      // 1024 and up
      1199: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      991: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      769: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      480: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      320: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    },
  }),
  mounted() {
    this.$root.footer.isHome = true;
},
  computed: {
    offerCode() {
      return this.formInfo.offer;
    }
  },

  watch: {
    offerCode() {
      if(this.formInfo.offer.length > 8 && this.formInfo.offer.indexOf("@") === -1) {

        axios.get(this.$store.state.rootDataURL + 'customer/mail/'+this.formInfo.offer, this.formInfo)
            .then((res) => {
              this.formInfo.firstname = res.data.firstName;
              this.formInfo.lastname = res.data.lastName;
              this.formInfo.phone = null;
              this.formInfo.email = null;
              this.formInfo.loanamount = null;
              this.generalerror = "";
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error)

              // error.response.status Check status code
            }).finally(() => {

          //Perform action in always
        });
      }
      else {
        if (this.formInfo.offer.indexOf("@") === -1) this.msg["offer"] = "";
        else this.msg["offer"] = "Please Enter a valid offer code.";
      }
    },


    email(value) {
      if (value != null) {
        if (/^[^@]+@\w+(\.\w+)+\w$/.test(value)) this.msg["email"] = "";
        else this.msg["email"] = "Invalid Email Address";
      }
    },
    firstname(value) {
      if(value !=null)
      {

        if (value.trim() != "") this.msg["firstname"] = "";
        else this.msg["firstname"] = "Please Enter Firstname.";
      }
    },
    lastname(value) {
      if(value !=null)
      {

        if (value.trim() != "") this.msg["lastname"] = "";
        else this.msg["lastname"] = "Please Enter Lastname.";
      }
    },

    phone(value) {
      if(value !=null)
      {

        if (value.trim() != "") this.msg["phone"] = "";
        else this.msg["phone"] = "Please Enter Phone number.";
      }
    },
    loanamount(value) {
      if (value != null) this.msg["loanamount"] = "";
      else this.msg["loanamount"] = "Please Enter a Loan amount.";
    },
  },
  methods: {
    validateForm() {
      this.submitted = true;
      if (this.formInfo.firstname && this.formInfo.lastname && this.formInfo.email && this.formInfo.phone && this.formInfo.loanamount ) {

        this.formInfo.token = this.token;
        this.formInfo.utm_campaign = this.$route.query.utm_campaign;
        this.formInfo.utm_source = this.$route.query.utm_source;
        this.formInfo.utm_medium = this.$route.query.utm_medium;


        axios.post(this.$store.state.rootDataURL + 'customershort', this.formInfo)
            .then((res) => {
              //Perform Success Action
              // eslint-disable-next-line no-console
              console.log(res)

              this.toast.success("Form Submitted Successfully", {
                timeout: 2000,
              });
              router.push({ path: 'congratulations' })
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error)
              this.submitted = false;
              this.toast.error("Unable to Submit Form", {
                timeout: 2000,
              });
              // error.response.status Check status code
            }).finally(() => {

          //Perform action in always
        });

      } else {
        this.toast.error("Please fill all required fields.", {
          timeout: 2000,
        });
        this.submitted = false
        return false;
        
      }
    },
  },
};
</script>
<style scoped>
.error-msg {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 12px;
  color: red;
}
.required:after {
  content: " *";
  color: red;
}
button:disabled {
  background: #dddddd;
}
</style>
