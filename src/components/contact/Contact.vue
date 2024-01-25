<template>
  <!-- banner-section start -->
  <BannerSection
    msg="Banner Section"
    :bannerImageUrl="bannerData.bannerImageUrl"
    :bannerMobileImageUrl="bannerData.bannerMobileImageUrl"
    :bannerTitle="bannerData.bannerTitle"
    :bannerDescription="bannerData.bannerDescription"
    :bannerButton="bannerData.bannerButton"
    :offerTitle="bannerData.offerTitle"
    :offerLinkText="bannerData.offerLinkText"
    :offerLink="bannerData.offerLink"
    :additionalClass="bannerData.additionalClass"
    :bannerSectionClass="bannerData.bannerSectionClass"
    :isContact="isContact"
  />
  <!-- banner-section end -->

  <!-- form section start -->
  <section class="form-section blue-bg contact-section">
    <div class="container">
      <h2 class="white-txt">
        Every loan application represents a real person’s needs and goals. <br />
        <b>Our team is ready to answer any questions you may have along the way.</b>
      </h2>
      <div class="custom-form contact-form check-my-form p-0">
        <form id="frmcontactus" ref="form">
          <span v-if="generalerror" class="error-msg">{{ generalerror }}</span>
          <div class="row flex-md-row flex-column-reverse">
            <div class="col-lg-6 col-md-12">
              <div class="custom-row">
                <div class="error-message">
                  <input
                    id="debt"
                    placeholder=" "
                    type="text"
                    class="form-control required"
                    v-model="firstname"
                  />
                  <label for="debt" class="form-label required">Name (First, Last)</label>
                </div>
                <span v-if="msg.firstname" class="error-msg">{{ msg.firstname }}</span>
              </div>
              <div class="custom-row">
                <div class="error-message">
                  <input
                    id="debt"
                    placeholder=" "
                    type="email"
                    class="form-control required"
                    v-model="email"
                  />
                  <label for="debt" class="form-label required">Email Address</label>
                </div>
                <span v-if="msg.email" class="error-msg">{{ msg.email }}</span>
              </div>
              <div class="custom-row">
                <div class="error-message">
                  <input
                    id="debt"
                    placeholder=" "
                    type="text"
                    class="form-control required"
                    v-model="phone"
                  />
                  <label for="debt" class="form-label required">Phone Number</label>
                </div>
                <span v-if="msg.phone" class="error-msg">{{ msg.phone }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="custom-row">
                <div class="error-message">
                  <input id="debt" placeholder=" "  v-model="subject" type="text" class="form-control" />
                  <label for="debt" class="form-label">Subject</label>
                </div>
              </div>
              <div class="custom-row">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Message (Max 500 characters)"
                    id="floatingTextarea2"
                    style="height: 210px"
                    v-model="message"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-end submit-btn">
            <table><tr><td><vue-turnstile site-key="0x4AAAAAAAIoEXeVt7ZTyzpT" v-model="token" /></td></tr>
              <tr><td><button id="subBtn" type="button" class="comman-btn light-btn" @click="validateForm()">
              Submit
            </button></td></tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- form section end -->
</template>

<script>
import BannerSection from "../themes/BannerSection.vue";
import { useToast } from "vue-toastification";
import axios from "axios";
import router from "@/router";
import VueTurnstile from "vue-turnstile";

export default {
  name: "ContactComponent",
  components: {
    VueTurnstile,
    BannerSection,
  },
  data: () => ({
    subject:"",
    message:"",
    token:"",
    isContact: true,
    toast: useToast(),
    email: "",
    firstname: "",
    phone: "",
    generalerror: "",
    formInfo: {
      subject:"",
      message:"",
      token:"",
      email: "",
      firstname: "",
      phone: "",
    },

    msg: [],
    bannerData: {
      bannerImageUrl: "assets/images/contact-us-banner-page.jpg",
      bannerMobileImageUrl: "assets/images/contact-us-banner-mobile.jpg",
      bannerTitle: "Contact Us",
      bannerDescription:
        'Our friendly team <br class="d-md-none d-block"> would love to hear from you!',
      additionalClass: "personal-details",
      bannerSectionClass: "contact-us",
    },
  }),
  mounted() {
    this.$root.footer.isHome = false;
  },
  watch: {
    email(value) {
      if (value != null) {
        if (/^[^@]+@\w+(\.\w+)+\w$/.test(value)) this.msg["email"] = "";
        else this.msg["email"] = "Please enter valid email address";
      }
    },
    firstname(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["firstname"] = "";
        else this.msg["firstname"] = "Please enter a name.";
      }
    },
    phone(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["phone"] = "";
        else this.msg["phone"] = "Please enter valid phone number.";
      }
    },
  },
  methods: {
    validateForm() {
      if (this.firstname && this.phone && this.email) {
        this.formInfo.name = this.firstname;
        this.formInfo.phone = this.phone;
        this.formInfo.email = this.email;
        this.formInfo.subject = this.subject;
        this.formInfo.message = this.message;

        this.formInfo.token = this.token;


        axios.post(this.$store.state.rootDataURL + 'customer/contactus', this.formInfo)
            .then((res) => {
              //Perform Success Action
              // eslint-disable-next-line no-console
              console.log(res)

              this.toast.success("Form Submitted Successfully", {
                timeout: 2000,
              });
              router.push({ path: 'thankyou' })
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error)
              this.toast.error("Please fill all required fields.", {
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
        return false;
      }
    },
  },
};
</script>
<style>
/* .page-banner .banner-content h1 {
    font-size: 48px;
    line-height: 55px;
}
.banner-content .personal-details h2 {
  margin: 0px !important;
} */
<style scoped > .error-msg {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 12px;
  color: red;
}
.required:after {
  content: " *";
  color: red;
}
#subBtn {
  margin: auto;
}
</style>
