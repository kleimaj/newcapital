<template>
  <!-- form-apply section desgin start -->
  <section class="form-desgin">
    <div class="container">
      <div class="check-details">
        <h2>We look forward to working with you!</h2>
        <h3>Your personal loan offer is just a few steps away.</h3>
        <h4>
          For expedited service, call <a href="tel:888-315-3319">888-315-3319</a>. Or
          simply continue below.
        </h4>
        <p>
          <b>Please note:</b> The security of your personal information is very important
          to us. <br />
          We employ high levels of encryption to keep your information safe and
          confidential. <br />
          Verify your information by completing any empty fields then click REQUEST A QUOTE. <br />
          <b>This will NOT affect your credit score.</b>
        </p>
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-12">
            <div class="custom-form contact-form check-my-form">
              <form name="checkmyrate" ref="form">
                <div class="row align-items-center mb-lg-4">
                  <div class="col-lg-6 col-md-12">
                    <div class="d-flex mb-3">
                      <span
                          class="offer-code text-md-start m-md-0 d-md-inline-block d-grid"
                      >If you have an Offer Code, please enter it here.
                        <img
                            src="assets/images/right-arrow-offer.svg"
                            alt="right"
                            class="img-fluid m-auto"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="custom-row">
                      <div class="error-message">
                        <input
                            id="offer"
                            placeholder=" "
                            type="text"
                            class="form-control"
                            v-model="offer_code"
                        />
                        <label for="offer" class="form-label">Offer Code</label>
                      </div>
                      <span v-if="msg.offer" class="error-msg">{{
                          msg.offer
                        }}</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="firstname">
                        <label for="offer" class="form-label required">First Name</label>
                      </div>
                      <span v-if="msg.firstname" class="error-msg">{{ msg.firstname }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="lastname">
                        <label for="offer" class="form-label required">Last Name</label>
                      </div>
                      <span v-if="msg.lastname" class="error-msg">{{ msg.lastname }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="address">
                        <label for="offer" class="form-label required">Address</label>
                      </div>
                      <span v-if="msg.address" class="error-msg">{{ msg.address }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="address2">
                        <label for="offer" class="form-label">Address 2</label>
                      </div>
                      <span v-if="msg.address2" class="error-msg">{{ msg.address2 }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="city">
                        <label for="offer" class="form-label required">City</label>
                      </div>
                      <span v-if="msg.city" class="error-msg">{{ msg.city }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group custom-row">
                          <div class="error-message">
                            <Multiselect
                                class="form-select form-control required"
                                aria-label="Default select example"
                                v-model="statevalue"
                                :options="stateoptions"
                                :canClear="false" />
                          </div>
                          <span v-if="msg.state" class="error-msg">{{ msg.state }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group custom-row">
                          <div class="error-message">
                            <input type="text" placeholder=" " class="form-control" id="offer" v-model="zipcode">
                            <label for="offer" class="form-label required">Zip Code</label>
                          </div>
                          <span v-if="msg.zipcode" class="error-msg">{{ msg.zipcode }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="phone">
                        <label for="offer" class="form-label required">Cell Phone</label>
                      </div>
                      <span v-if="msg.phone" class="error-msg">{{ msg.phone }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="hphone">
                        <label for="offer" class="form-label">Home Phone</label>
                      </div>
                      <span v-if="msg.hphone" class="error-msg">{{ msg.hphone }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="email">
                        <label for="offer" class="form-label required">Email Address</label>
                      </div>
                      <span v-if="msg.email" class="error-msg">{{ msg.email }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 cust-input-wrapper">
                    <div class="form-group custom-row">
                      <div class="error-message">
                        <input type="text" placeholder=" " class="form-control" id="offer" v-model="totaldebt">
                        <label for="offer" class="form-label required">Total Debt</label>
                      </div>
                      <span v-if="msg.totaldebt" class="error-msg">{{ msg.totaldebt }}</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 cust-input-wrapper loanamt">
                  <div class="form-group custom-row">
                    <div class="error-message">
                      <input type="text" placeholder=" " class="form-control" id="offer" v-model="loanamount">
                      <label for="offer" class="form-label required">Loan Amount</label>
                    </div>
                    <span v-if="msg.loanamount" class="error-msg">{{ msg.loanamount }}</span>
                  </div>
                </div>


                <div class="request-block">

                    <!-- <vue-turnstile site-key="1x00000000000000000000AA" v-model="token" /> -->
                  <vue-turnstile site-key="0x4AAAAAAAIoEXeVt7ZTyzpT" v-model="token" />
                  <div class="d-flex justify-content-center align-items-end submit-btn">
                    <button
                      type="button"
                      value="submit"
                      class="comman-btn light-btn"
                      :disabled="submitted"
                      @click="validateForm()"
                    >
                      REQUEST A QUOTE
                    </button>
                  </div>
                  <p class="request-quote">
                    By clicking “REQUEST A QUOTE”, you authorize—with respect to the
                    telephone number provided above and any other telephone number
                    associated with or related to you that may be provided to us in the
                    future—Cyprus Financial Group, Inc., DBA New Capital Financial.
                    can contact you by phone, text, email, mail, or by artificial or
                    pre-recorded voice, even if you have listed yourself on any
                    Do-Not-Call List. You also agree to the Privacy Policy and Terms &
                    Conditions and further agree that any person or entity contacting you
                    pursuant to your consent here may use an automatic telephone dialing
                    system, even if the telephone number you provided above (or any
                    telephone number associated with you) is connected to a mobile phone
                    and even if you might be charged for the call. Your consent to receive
                    automated calls or text messages is not required for any purchase or
                    availability of goods/services from Cyprus Financial Group, Inc., DBA
                    New Capital Financial. If you do not consent, you may call us at
                    <a href="tel:888-315-3319">888-315-3319</a> to continue your inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- form-apply section desgin end -->
</template>
<script>
import Multiselect from "@vueform/multiselect";
import { useToast } from "vue-toastification";
import "@vueform/multiselect/themes/default.css";
import VueTurnstile from "vue-turnstile";
import axios from "axios";
import router from "@/router";

export default {
  name: "CheckrateComponent",
  components: {
    VueTurnstile,
    Multiselect,
  },
  data: () => ({

      submitted:false,
    loanamount:  "",
    formInfo: {
          offer:'',
          token: '',
          email: "",
          firstname: "",
          lastname: "",
          cell: "",
          address: "",
          city: "",
          address2: "",
          zip: "",
          totaldebt: "",
          loanamount: "",
          phone: "",
          state: "",
          utm_campaign: "",
          utm_source: "",
          utm_medium: "",
    },

    offer_code:'',
    token: '',
    toast: useToast(),
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    city: "",
    address2: "",
    zipcode: "",
    totaldebt: "",
    hphone: "",
    msg: [],
    statevalue: "State",
    stateoptions: [
      { label: "State", value: "State" },
      { label: "Alabama", value: "AL" },
      { label: "Alaska", value: "AK" },
      { label: "Arizona", value: "AZ" },
      { label: "Arkansas", value: "AR" },
      { label: "California", value: "CA" },
      { label: "Colorado", value: "CO" },
      { label: "Connecticut", value: "CT" },
      { label: "District of Columbia", value: "DC" },
      { label: "Delaware", value: "DE" },
      { label: "Florida", value: "FL" },
      { label: "Georgia", value: "GA" },
      { label: "Hawaii", value: "HI" },
      { label: "Idaho", value: "ID" },
      { label: "Illinois", value: "IL" },
      { label: "Indiana", value: "IN" },
      { label: "Iowa", value: "IA" },
      { label: "Kansas", value: "KS" },
      { label: "Kentucky", value: "KY" },
      { label: "Louisiana", value: "LA" },
      { label: "Maine", value: "ME" },
      { label: "Maryland", value: "MD" },
      { label: "Massachusetts", value: "MA" },
      { label: "Michigan", value: "MI" },
      { label: "Minnesota", value: "MN" },
      { label: "Mississippi", value: "MS" },
      { label: "Missouri", value: "MO" },
      { label: "Montana", value: "MT" },
      { label: "Nebraska", value: "NE" },
      { label: "Nevada", value: "NV" },
      { label: "New Hampshire", value: "NH" },
      { label: "New Jersey", value: "NJ" },
      { label: "New Mexico", value: "NM" },
      { label: "New York", value: "NY" },
      { label: "North Carolina", value: "NC" },
      { label: "North Dakota", value: "ND" },
      { label: "Ohio", value: "OH" },
      { label: "Oklahoma", value: "OK" },
      { label: "Oregon", value: "OR" },
      { label: "Pennsylvania", value: "PA" },
      { label: "Rhode Island", value: "RI" },
      { label: "South Carolina", value: "SC" },
      { label: "South Dakota", value: "SD" },
      { label: "Tennessee", value: "TN" },
      { label: "Texas", value: "TX" },
      { label: "Utah", value: "UT" },
      { label: "Vermont", value: "VT" },
      { label: "Virginia", value: "VA" },
      { label: "Washington", value: "WA" },
      { label: "West Virginia", value: "WV" },
      { label: "Wisconsin", value: "WI" },
      { label: "Wyoming", value: "WY" }
    ],
  }),
  computed: {
    offerCode() {
      return this.offer_code??"";
    }
  },
  watch: {
    offerCode() {
      if(this.offer_code != null && this.offer_code.length > 8 && this.offerCode.indexOf("@") === -1) {

        axios.get(this.$store.state.rootDataURL + 'customer/mail/'+this.offer_code)
            .then((res) => {
              this.firstname = res.data.firstName;
              this.lastname = res.data.lastName;
              this.address = res.data.address;
              this.city = res.data.city;
              this.statevalue = res.data.stateCode;
              this.zipcode = res.data.zip;
              this.phone = null;
              this.email = null;

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
        if (this.offerCode.indexOf("@") === -1) this.msg["offer"] = "";
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
      if (value != null) {
        if (value.trim() != "") this.msg["firstname"] = "";
        else this.msg["firstname"] = "Please Enter Firstname.";
      }
    },
    lastname(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["lastname"] = "";
        else this.msg["lastname"] = "Please Enter Lastname.";
      }
    },

    phone(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["phone"] = "";
        else this.msg["phone"] = "Please Enter Phonenumber.";
      }
    },
    totaldebt(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["totaldebt"] = "";
        else this.msg["totaldebt"] = "Please Enter Total Debt.";
      }
    },
    loanamount(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["loanamount"] = "";
        else this.msg["loanamount"] = "Please Enter a Loan Amount.";
      }
    },
    city(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["city"] = "";
        else this.msg["city"] = "Please Enter City.";
      }
    },
    statevalue(value) {
      if (value != null) {
        if (value != null) this.msg["state"] = "";
        else this.msg["state"] = "Please Select State.";
      }
    },
    address(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["address"] = "";
        else this.msg["address"] = "Please Enter Address.";
      }
    },
    zipcode(value) {
      if (value != null) {
        if (value.trim() != "") this.msg["zipcode"] = "";
        else this.msg["zipcode"] = "Please Enter Zipcode.";
      }
    },
  },
  mounted() {
    function postVisit(offer_code) {
      // eslint-disable-next-line no-console
      console.log(" "+offer_code)

      axios.post('https://getncf.com/visit/' + offer_code)
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log("Visit Submitted Successfully "+res)
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log("Visit Error  "+error)

            // eslint-disable-next-line no-empty-function
          }).finally(() => { });
    }

    this.$root.footer.isHome = false;

    // eslint-disable-next-line no-console
    console.log(this.$route.query.promocode)
    this.offer_code = this.$route.query.promocode

    if(this.offer_code !== undefined)
      postVisit(this.offer_code)

  },
  methods: {
    validateForm() {

      this.submitted = true;
      if (
        this.firstname &&
        this.lastname &&
        this.phone &&
        this.statevalue !='State' &&
        this.email &&
        this.city &&
        this.zipcode &&
        this.address &&
        this.totaldebt && this.loanamount && (this.offer_code.indexOf("@") === -1)
      ) {
        this.formInfo.firstname = this.firstname;
        this.formInfo.address = this.address;
        this.formInfo.city = this.city;
        this.formInfo.cell = this.phone;
        this.formInfo.email = this.email;
        this.formInfo.lastname =this.lastname;
        this.formInfo.state = this.statevalue;
        this.formInfo.zip = this.zipcode
        this.formInfo.totaldebt = this.totaldebt;
        this.formInfo.phone = this.phone;
        this.formInfo.address2 = this.address2;
        this.formInfo.offer = this.offer_code;
        this.formInfo.token = this.token;
        this.formInfo.loanamount = this.loanamount;
        this.formInfo.utm_campaign = this.$route.query.utm_campaign;
        this.formInfo.utm_source = this.$route.query.utm_source;
        this.formInfo.utm_medium = this.$route.query.utm_medium;
        
        axios.post(this.$store.state.rootDataURL + 'customer', this.formInfo)
            .then((res) => {
              //Perform Success Action
              // eslint-disable-next-line no-console
              console.log(res)

              this.toast.success("Form Submitted Successfully", {
                timeout: 2000,
              });

              function postConversion(offer_code) {
                // eslint-disable-next-line no-console
                console.log(" "+offer_code)

                axios.post('https://getncf.com/conversion/' + offer_code)
                    .then((res) => {
                      // eslint-disable-next-line no-console
                      console.log("Conversion Submitted Successfully "+res)
                    })
                    .catch((error) => {
                      // eslint-disable-next-line no-console
                      console.log("Conversion Error  "+error)

                      // eslint-disable-next-line no-empty-function
                    }).finally(() => { });
              }

              postConversion(this.offer_code)


              router.push({ path: 'congratulations' })
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error)
              this.toast.error("Unable to Submit Form", {
                timeout: 2000,
              });
              this.submitted = false;
              // error.response.status Check status code
              // eslint-disable-next-line no-empty-function
            }).finally(() => {});
      } else {
        this.toast.error("Please fill all required Fields.", {
          timeout: 2000,
        });
        this.submitted = false;
        return false;
      }
    },

  },
};
</script>
<style scoped>
button:disabled {
  background: #dddddd;
}
.loanamt{
  width: 100%;
}
</style>