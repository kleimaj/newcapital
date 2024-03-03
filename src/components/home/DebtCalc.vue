<template>
    <!-- benefit section start -->
    <div class="mt-4">
        <section class="container debt-block mt-2 pt-md-5">
            <div class="white-bg border-radius-card mb-3 pb-2">
            <button class="toggle-btn" @click="toggleCalc(1)"><img class="toggle-1" src="assets/images/arrow-down.png" alt="down arrow"/></button>
        <div class="container toggle-1-content bg-white text-lg-start mb-4 px-md-5">
            <div class="col-lg-12 col-md-12">
                <div class="debt-section text-center">
                <div class="debt-question mb-4 d-flex flex-column align-items-md-center">
                    <h3 class="col-md-7 mb-4 lh-sm">Eliminate Credit
                        Card Debt and
                        Save With a
                        Personal Loan</h3>
                    <p class="col-md-11"><strong>Consolidate multiple debts into one manageable monthly payment.</strong> Credit card debt can  
    feel overwhelming, but there is a  way out. Switch to a personal loan  for a smarter, faster route to ﬁnancial freedom. Ready to compare and see the difference for yourself? Just ﬁll in your total unsecured debt below to estimate your savings with  New Capital Financial.</p>
    <br/>
    <a class="d-none" href="#">How it works.</a>
                </div>
                </div>
                <div class="debt-section custom-form d-block d-md-flex align-items-end justify-content-between">
                    <div class="debt-question custom-row mb-md-0 col-md-6">
                        <p><strong>Total Unsecured Debt</strong></p>
                        <br/>
                        <div class="error-message">
                        <CurrencyInput :options="{ currency: 'USD',       
                            hideCurrencySymbolOnFocus: false,
                            hideGroupingSeparatorOnFocus: false,
                            hideNegligibleDecimalDigitsOnFocus: false,
                            valueRange: {min: 0, max: 100000}}" class="form-control" placeholder="$0" ref="inputRef" @keyup="autoCalculate($event)" v-model="totalDebt" type="text" />
                        <label class="form-label">Total</label>
                        </div>
                        <!-- <div class="debt-question custom-row mb-md-0">
                        <p><strong>Payoff Loan Term (yrs)</strong></p>
                        <br/>
                        <div class="error-message">
                        <input class="form-control" placeholder="$0" v-model="payOffTerm" @change="updateAllLoanTerms()" type="number" />
                        <label class="form-label">Years</label>
                        </div> -->
                    <!-- </div> -->
                    </div>
                    <div class="debt-question mb-0 col-md-6">
                        <div class="button-group d-flex flex-column flex-md-row d-md-flex align-items-center justify-content-evenly">
                            <button @click="calcPayOff()" class="btn blue mb-3 mb-md-0">CALCULATE</button>
                            <button @click="resetPayOff()" class="btn clear mb-4 mb-md-0">RESET</button>
                        </div>
                    </div>
                </div>
                <div class="d-block d-md-flex">
                    <div class="debt-section box purple mt-4 me-md-2 col-md-6">
                        <h4 class="header">Current Payoff</h4>
                        <p class="pt-2">Time to Payoff: <strong>30 Years</strong></p>
                        <p>Total Interest Paid: <strong>${{ parseFloat(payOffTotalInterest).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p> 
                        <p>Interest Rate: <strong>22%</strong></p>
                        <p>Monthly Payment: <strong>${{ parseFloat(payOffMonthly).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p>
                        <!-- <p>Total Cost: <strong>${{ payOffTotalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p> --><br/>
                        <div class="savings">
                            <h5>Total Cost:</h5>
                            <h1>${{ payOffTotalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</h1>
                            <p class="col-md-6 m-auto mb-4">Payoff numbers are calculated based on the national average</p>
                        </div>
                    </div>
                    <div class="debt-section box blue mt-4 ms-md-2 col-md-6">
                        <h4 class="header">Consolidation Loan</h4>
                        <p class="pt-2">Time to Payoff: <strong>5 Years</strong></p>
                        <p>Total Interest Paid: <strong>${{ parseFloat(consolidationTotalInterest).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p> 
                        <p>Interest Rate: <strong>6.95%</strong></p>
                        <p>Monthly Payment: <strong>${{ parseFloat(consolidationMonthly).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p>
                        <p>Total Savings: <strong>${{ consolidationSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p>
                        <div class="savings">
                            <h5>Total Cost:</h5>
                            <h1>${{ consolidationTotalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</h1>
                            <p class="col-md-6 m-auto mb-4 d-none">Payoff numbers are calculated based on the national average</p>
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
            <div class="mb-4 check-rate bg-white">
                <div class="container text-center pb-3 pb-md-5 pt-md-5">
                <h3><strong>We're here for you.</strong><br class="d-md-none"/> Get your available rate today with <strong>no impact to your credit score.</strong></h3>
                <div class="debt-question">
                <button class="btn blue" @click="redirectToCheckRate()">CHECK MY RATE</button>
                </div>
                <p class="pb-2 col-md-8 m-auto">This calculator is meant for educational purposes only. It is a tool to estimate monthly payments solely based on the information you provide. The loan rates, amounts, monthly payments, and terms are not guaranteed and do not constitute a credit offer.</p>
                </div>
            </div>
            
        </section>
    </div>
    <!-- faq-bottom images end -->
  </template>
  <script>
//   import { useCurrencyInput } from 'vue-currency-input'
  import CurrencyInput from "./CurrencyInput.vue";
  import router from '@/router';

  export default {
    name: 'DebtCalculatorComponent',
    components: {
        CurrencyInput,
    },
    props: {
      msg: String,
    },
    setup() {
        // const { inputRef } = useCurrencyInput({currency: "USD"});
        // const { inputRef2 } = useCurrencyInput({currency: "USD"});
        // const { inputRef3 } = useCurrencyInput({currency: "USD"});

        // return { inputRef, inputRef2, inputRef3 }
    },
    data: () => ({
        // Toggle States
        toggleOneHidden: false,
        
        // Calc 1 States
        totalDebt: "",
        payOffTotalInterest: 0,
        payOffMonthly: 0,
        payOffTotalCost: 0,
        // payOffTerm: 30,
        consolidationTotalInterest: 0,
        consolidationMonthly: 0,
        consolidationTotalCost: 0,
        consolidationSavings: 0,
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
    redirectToCheckRate() {
        router.push({ path: 'checkrate'});
    },
    autoCalculate(event) {
        if (event.target.value !== "") {
            this.calcPayOff();

        }

    },
    resetPayOff() {
        this.totalDebt = "";
        this.payOffTotalInterest = 0
        this.payOffMonthly = 0;
        this.consolidationTotalInterest= 0;
        this.consolidationMonthly= 0;
        this.payOffTotalCost = 0;
        this.consolidationTotalCost= 0;
        this.consolidationSavings = 0;
    },
    calcPayOff() {
        if (this.totalDebt <= 0 && this.totalDebt < 100000) {
            // this.resetPayOff();
        }
        else {
            var r1 = (.22)/12;
            var r2 = (.0695)/12;
            var n1 = 30 * 12;
            var n2 = 5*12;

            this.payOffMonthly = (parseFloat(this.totalDebt) * r1 * Math.pow(1+r1,n1)) / (Math.pow(1+r1,n1)-1);
            this.consolidationMonthly = (parseFloat(this.totalDebt) * r2 * Math.pow(1+r2,n2)) / (Math.pow(1+r2,n2)-1);
            this.payOffTotalInterest = this.payOffMonthly * n1 - parseFloat(this.totalDebt);
            this.consolidationTotalInterest = this.payOffMonthly * n2 - parseFloat(this.totalDebt);
            this.payOffTotalCost = parseFloat(this.totalDebt) + this.payOffTotalInterest;
            this.consolidationTotalCost = parseFloat(this.totalDebt) + this.consolidationTotalInterest;
            this.consolidationSavings = this.payOffTotalCost - this.consolidationTotalCost;
        }
    },
    
    toggleCalc(section) {
        switch (section) {
            case 1:
                this.toggleOneHidden = !this.toggleOneHidden
                if (this.toggleOneHidden) {
                    document.querySelector('.toggle-1').src='assets/images/arrow-up.png';
                }
                else {
                    document.querySelector('.toggle-1').src='assets/images/arrow-down.png'
                }
                document.querySelector('.toggle-1-content').classList.toggle("d-none");
                document.querySelector('.toggle-1-hidden').classList.toggle("d-none");
                break;
            default:
                break;
        }
      }
  },
  }
  </script>
  