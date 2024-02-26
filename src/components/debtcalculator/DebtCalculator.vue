<template>
    <!-- benefit section start -->
    <div class="backdrop">
        <section class="container debt-block mt-2 pt-md-5">
            <div class="white-bg border-radius-card mb-3 pb-2">
            <button class="toggle-btn" @click="toggleCalc(1)"><img class="toggle-1" src="assets/images/arrow-down.png" alt="down arrow"/></button>
        <div class="container toggle-1-content bg-white text-lg-start mb-4 px-md-5">
            <div class="col-lg-12 col-md-12">
                <div class="debt-section text-center">
                <div class="debt-question mb-4 d-flex flex-column align-items-md-center">
                    <h3 class="col-md-6 mb-4 lh-sm">Eliminate Credit
                        Card Debt and
                        Save With a
                        Personal Loan</h3>
                    <p class="col-md-10"><strong>Consolidate multiple debts into one manageable monthly payment.</strong> Credit card debt can  
    feel overwhelming, but there is a  way out. Switch to a personal loan  for a smarter, faster route to ﬁnancial freedom. Ready to compare and see the difference for yourself? Just ﬁll in your total unsecured debt below to estimate your savings with  New Capital Financial.</p>
    <br/>
    <a href="#">How it works.</a>
                </div>
                </div>
                <div class="debt-section custom-form d-block d-md-flex align-items-end justify-content-between">
                    <div class="debt-question custom-row mb-md-0 col-md-6">
                        <p><strong>Total Unsecured Debt</strong></p>
                        <br/>
                        <div class="error-message">
                        <input class="form-control" placeholder="$0"/>
                        <label class="form-label">Total</label>
                        </div>
                    </div>
                    <div class="debt-question mb-0 col-md-6">
                        <div class="button-group d-none d-md-flex align-items-center justify-content-evenly">
                            <button class="btn blue mb-3 mb-md-0">CALCULATE</button>
                            <button class="btn clear mb-4 mb-md-0">RESET</button>
                        </div>
                    </div>
                </div>
                <div class="d-block d-md-flex">
                    <div class="debt-section box purple mt-4 me-md-2 col-md-6">
                        <h4 class="header">Current Payoff</h4>
                        <p class="pt-2">Time to Payoff: <strong>30 Years</strong></p>
                        <p>Total Interest Paid: <strong>$0.00</strong></p> 
                        <p>Interest Rate: <strong>22%</strong></p>
                        <p>Monthly Payment: <strong>$0.00</strong></p>
                        <p>Total Cost: <strong>$0.00</strong></p>
                        <div class="savings">
                            <h5>Total Savings:</h5>
                            <h1>$0.00</h1>
                            <p class="col-md-6 m-auto mb-4">Payoff numbers are calculated based on the national average</p>
                        </div>
                    </div>
                    <div class="debt-section box blue mt-4 ms-md-2 col-md-6">
                        <h4 class="header">Consolidation Loan</h4>
                        <p class="pt-2">Time to Payoff: <strong>5 Years</strong></p>
                        <p>Total Interest Paid: <strong>$0.00</strong></p> 
                        <p>Interest Rate: <strong>22%</strong></p>
                        <p>Monthly Payment: <strong>$0.00</strong></p>
                        <p>Total Cost: <strong>$0.00</strong></p>
                        <div class="savings">
                            <h5>Total Savings:</h5>
                            <h1>$0.00</h1>
                            <p class="col-md-6 m-auto mb-4">Payoff numbers are calculated based on the national average</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="bg-white toggle-1-hidden text-lg-start mb-4 px-md-5  d-none">
                <div class="col-lg-12 col-md-12">
                <div class="debt-section text-center">
                <div class="debt-question mb-4 d-flex flex-column align-items-md-center">
                    <h3 class="col-md-12 mb-4 lh-sm">Eliminate Credit
                        Card Debt and
                        Save With a
                        Personal Loan</h3>
                </div>
                </div>
                </div>
            </div>
            </div>
            <div class="white-bg mb-3 pb-2 border-radius-card">
            <button class="toggle-btn" @click="toggleCalc(2)"><img class="toggle-2" src="assets/images/arrow-down.png" alt="down arrow"/></button>

            <div class="container toggle-2-content bg-white text-lg-start mb-4">
            <div class="col-lg-12 col-md-12">
                <div class="debt-section text-center">
                    <div class="debt-question">
                    <h3 class="mb-md-4">Minimum Payment 
    Calculator</h3>
                    <p>Trying to pay down a large credit card balance? Let us know how much you’d like to pay a month, or when you’d like to be debt-free, and we’ll help you come up with a monthly payment plan.</p>
                    </div>
                </div>
                <div class="d-block d-md-flex align-items-start">
                    <div class="debt-section custom-form col-md-6 px-md-4">
                        <div class="debt-question custom-row">
                            <p><strong>What is your credit card balance?</strong></p>
                            <br/>
                            <div class="error-message">
                            <input class="form-control" placeholder="$0"/>
                            <label class="form-label">Total</label>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>What is the interest rate on your credit card?</strong></p>
                            <br/>
                            <div class="multiselect form-select form-control">
                                <div class="multiselect-wrapper">
                                    <option>Interest + 1% of balance</option>
                                </div>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>How is your minimum payment calculated?</strong></p>
                            <br/>
                            <div class="multiselect form-select form-control">
                                <div class="multiselect-wrapper">
                                    <option>Interest + 1% of balance</option>
                                </div>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p class="text-black">Your minimum payment: <strong>$15</strong></p>
                            <p class="text-black mt-4"><strong>Select a payment schedule based on:</strong></p>
                            <br/>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Minimum payment
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label" for="flexRadioDefault2">
                                Fixed payment
                            </label>
                            </div>
                        </div>
                        <div class="debt-question d-flex flex-column mb-0 flex-md-row ">
                            <button class="btn blue mb-3 mb-md-0 me-md-4">CALCULATE</button>
                            <button class="btn clear mb-4 mb-md-0 ms-md-4">CLEAR ALL</button>
                        </div>
                        <div class="schedule mt-4 d-flex">
                            <p>Hello</p>
                        </div>
                    </div>
                    <div class="col-md-6 pe-md-4 pt-md-5">
                        <div class="debt-section box blue pb-4 px-md-4 mt-md-4">
                            <p class="pt-2 mt-4"><strong>With a minimum payment:</strong></p>
                            <p class="col-md-6 m-auto mb-3">It will take you <strong>0 months</strong> to be rid of your debt.</p> 
                            <div class="savings">
                                <h5>In that time, you will pay:</h5>
                                <h1 class="mb-0 pb-2">$0.00</h1>
                                <h5 class="mb-4">in interest.</h5>
                                <a href="#">Show payment schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="bg-white toggle-2-hidden text-lg-start mb-4 px-md-5  d-none">
                <div class="col-lg-12 col-md-12">
                <div class="debt-section text-center">
                <div class="debt-question mb-4 d-flex flex-column align-items-md-center">
                    <h3 class="col-md-12 mb-4 lh-sm">Minimum Payment Calculator</h3>
                </div>
                </div>
                </div>
            </div>
            </div>
            <div class="white-bg mb-3 pb-2 border-radius-card">
            <button class="toggle-btn" @click="toggleCalc(3)"><img class="toggle-3" src="assets/images/arrow-down.png" alt="down arrow"/></button>
            <div class="container toggle-3-content bg-white text-lg-start pb-4 px-md-5 ">
            <div class="col-lg-12 col-md-11">
                <div class="debt-section text-center">
                    <div class="debt-question">
                    <h3 class="mb-md-4">Personal Loan
    Calculator</h3>
                    <p class="col-md-10 m-auto">This personal loan calculator will help
                        you determine the monthly
                        payments on a loan. To see your
                        estimated monthly payments and
                        total interest you’ll pay, just enter the
                        loan amount, loan term and interest
                        rate in the fields below and click
                        calculate.
                    </p>
                    </div>
                </div>
                <div class="d-block d-md-flex justify-content-center">
                    <div class="debt-section custom-form col-md-6 pe-md-4">
                        <div class="debt-question custom-row">
                            <h3 class="text-black mb-2 loan-info mb-md-4">Loan info</h3>
                            <p><strong>Loan amount</strong></p>
                            <br/>
                            <div class="error-message">
                            <input class="form-control" placeholder="$0"/>
                            <label class="form-label">Amount</label>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>Loan term (yrs)</strong></p>
                            <br/>
                            <div class="multiselect form-select form-control">
                                <div class="multiselect-wrapper">
                                    <option>5</option>
                                </div>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>Interest rate</strong></p>
                            <br/>
                            <div class="error-message">
                            <input class="form-control" placeholder="5.95"/>
                            <label class="form-label percent">%</label>
                            </div>
                        </div>
                        <div class="debt-question d-flex flex-column mb-0 mb-md-5 mt-md-5 flex-md-row">
                            <button class="btn blue mb-3 mb-md-0 me-md-4">CALCULATE</button>
                            <button class="btn clear mb-4 mb-md-0 ms-md-4">CLEAR ALL</button>
                        </div>
                    </div>
                    <div class="debt-section box box-result blue pb-4 mb-4 text-start col-md-6 ms-md-4 align-self-start px-md-4 mt-md-5">
                        <h3 class="pt-2 mt-4 ps-3"><strong>Your results:</strong></h3>
                        <div class="box-row d-flex"><p>Total prinicipal paid</p> <p><strong>$10,000</strong></p></div>
                        <div class="box-row d-flex"><p>Total interest paid</p> <p><strong>$1,585.74</strong></p></div>
                        <div class="box-row d-flex"><p><strong>Estimated payment</strong></p> <p class="jumbo"><strong>$193</strong></p></div>
                        <div class="box-row d-flex"><p><strong>Loan term (yrs)</strong></p> <p class="jumbo"><strong>5</strong></p></div>
                        <div class="text-center pt-4">
                        <!-- <a href="#" class="text-center text-decoration-underline">Show amortization schedule</a> -->
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="bg-white toggle-3-hidden text-lg-start mb-4 px-md-5 d-none">
                <div class="col-lg-12 col-md-12">
                <div class="debt-section text-center">
                <div class="debt-question mb-4 d-flex flex-column align-items-md-center">
                    <h3 class="col-md-12 mb-4 lh-sm">Personal Loan Calculator</h3>
                </div>
                </div>
                </div>
            </div>
            
        </div>
        </section>
        <div class="mb-4 check-rate">
                <img src="assets/images/bg-element_2.png" alt="visual element" />
                <div class="container text-center pb-3 pb-md-5 pt-md-5">
                <h3><strong>We're here for you.</strong><br class="d-md-none"/> Get your available rate today with <strong>no impact to your credit score.</strong></h3>
                <div class="debt-question">
                <button class="btn blue">CHECK MY RATE</button>
                </div>
                <p class="pb-2 col-md-8 m-auto">This calculator is meant for educational purposes only. It is a tool to estimate monthly payments solely based on the information you provide. The loan rates, amounts, monthly payments, and terms are not guaranteed and do not constitute a credit offer.</p>
                </div>
            </div>
    </div>
    <!-- benefit section end -->
    <!-- debt-bottom images start -->
    <section class="debt-bottom">
      
    </section>
    <!-- faq-bottom images end -->
  </template>
  <script>
  
  export default {
    name: 'DebtCalculatorComponent',
    props: {
      msg: String
    },
    data: () => ({
    //   isFaq: true,
        toggleOneHidden: false,
        toggleTwoHidden: false,
        toggleThreeHidden: false,
    }),

    mounted() {
      this.$root.footer.isHome = false;
    },
    computed: {
    offerCode() {
      return this.formInfo.offer;
    }
  },

  methods: {
    toggleCalc(section) {
              // eslint-disable-next-line no-console
        // console.log(section);
        switch (section) {
            case 1:
                this.toggleOneHidden = !this.toggleOneHidden
                if (this.toggleOneHidden) {
                    document.querySelector('.toggle-1').src='assets/images/arrow-up.png';
                    document.querySelector('.toggle-1-content').style="display: none;";
                    document.querySelector('.toggle-1-hidden').style="display: block !important;";
                }
                else {
                    document.querySelector('.toggle-1').src='assets/images/arrow-down.png'
                    document.querySelector('.toggle-1-content').style="";
                    document.querySelector('.toggle-1-hidden').style="";
                }
                break;
                case 2:
                this.toggleOneHidden = !this.toggleOneHidden
                if (this.toggleOneHidden) {
                    document.querySelector('.toggle-2').src='assets/images/arrow-up.png';
                    document.querySelector('.toggle-2-content').style="display: none;";
                    document.querySelector('.toggle-2-hidden').style="display: block !important;";
                }
                else {
                    document.querySelector('.toggle-2').src='assets/images/arrow-down.png'
                    document.querySelector('.toggle-2-content').style="";
                    document.querySelector('.toggle-2-hidden').style="";
                }
                break;

                case 3:
                this.toggleOneHidden = !this.toggleOneHidden
                if (this.toggleOneHidden) {
                    document.querySelector('.toggle-3').src='assets/images/arrow-up.png';
                    document.querySelector('.toggle-3-content').style="display: none;";
                    document.querySelector('.toggle-3-hidden').style="display: block !important;";
                }
                else {
                    document.querySelector('.toggle-3').src='assets/images/arrow-down.png'
                    document.querySelector('.toggle-3-content').style="";
                    document.querySelector('.toggle-3-hidden').style="";
                }
                break;
        
            default:
                break;
        }
      }
  },
  }
  </script>
  