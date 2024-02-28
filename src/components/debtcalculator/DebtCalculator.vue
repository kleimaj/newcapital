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
                        <input class="form-control" placeholder="$0" v-model="totalDebt" type="text" pattern="\d*"/>
                        <label class="form-label">Total</label>
                        </div>
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
                        <p>Total Cost: <strong>${{ consolidationTotalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p>
                        <div class="savings">
                            <h5>Total Savings:</h5>
                            <h1>${{ consolidationSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</h1>
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
                    <div class="debt-question d-flex flex-column align-items-md-center mb-md-4">
                    <h3 class="mb-md-4">Minimum Payment 
    Calculator</h3>
                    <p class="col-md-10">Trying to pay down a large credit card balance? Let us know how much you’d like to pay a month, or when you’d like to be debt-free, and we’ll help you come up with a monthly payment plan.</p>
                    </div>
                </div>
                <div class="d-block d-md-flex align-items-start">
                    <div class="debt-section custom-form col-md-6 px-md-4">
                        <div class="debt-question custom-row">
                            <p><strong>What is your credit card balance?</strong></p>
                            <br/>
                            <div class="error-message">
                            <input class="form-control" @change="minPaymentChange()" min="0" type="number" v-model="minTotal"/>
                            <label class="form-label">Total</label>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>What is the interest rate on your credit card?</strong></p>
                            <br/>
                            <select class="multiselect form-select form-control" v-model="minInterestRate">
                                    <option value=".01" selected>1%</option>
                                    <option value=".02">2%</option>
                                    <option value=".03">3%</option>
                                    <option value=".04">4%</option>
                                    <option value=".05">5%</option>
                                    <option value=".06">6%</option>
                                    <option value=".07">7%</option>
                                    <option value=".08">8%</option>
                                    <option value=".09">9%</option>
                                    <option value=".1">10%</option>
                                    <option value=".11">11%</option>
                                    <option value=".12">12%</option>
                                    <option value=".13">13%</option>
                                    <option value=".14">14%</option>
                                    <option value=".15">15%</option>
                                    <option value=".16">16%</option>
                                    <option value=".17">17%</option>
                                    <option value=".18">18%</option>
                                    <option value=".19">19%</option>
                                    <option value=".20">20%</option>
                                    <option value=".21">21%</option>
                                    <option value=".22">22%</option>
                                    <option value=".23">23%</option>
                                    <option value=".24">24%</option>
                                    <option value=".25">25%</option>
                                    <option value=".26">26%</option>
                                    <option value=".27">27%</option>
                                    <option value=".28">28%</option>
                                    <option value=".29">29%</option>
                                    <option value=".30">30%</option>
                                    <option value=".31">31%</option>
                                    <option value=".32">32%</option>
                                    <option value=".33">33%</option>
                                    <option value=".34">34%</option>
                                    <option value=".35">35%</option>
                                    <option value=".36">36%</option>
                                    <option value=".37">37%</option>
                                    <option value=".38">38%</option>
                            </select>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>How is your minimum payment calculated?</strong></p>
                            <br/>
                            <select class="multiselect form-select form-control" @change="minPaymentChange()" v-model="minCalculated">
                                <option value=".01" selected>Interest + 1% of balance</option>
                                <option value=".02">2% of balance</option>
                                <option value=".0208">2.08% of balance</option>
                                <option value=".025">2.5% of balance</option>
                                <option value=".0278">2.78% of balance</option>
                                <option value=".03">3% of balance</option>
                                <option value=".035">3.5% of balance</option>
                                <option value=".04">4% of balance</option>
                                <option value=".045">4.5% of balance</option>
                                <option value=".05">5% of balance</option>
                            </select>
                        </div>
                        <div class="debt-question custom-row">
                            <p class="text-black">Your minimum payment: <strong>${{ minPayment }}</strong></p>
                            <p class="text-black mt-4"><strong>Select a payment schedule based on:</strong></p>
                            <br/>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" @change="showFixedPayment()" checked>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Minimum payment
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" @change="showFixedPayment()">
                            <label class="form-check-label" for="flexRadioDefault2">
                                Fixed payment
                            </label>
                            </div>
                        </div>
                        <div class="debt-question custom-row fixed-payment d-none">
                            <p><strong>What fixed payment could you make monthly?</strong></p>
                            <br/>
                            <div class="error-message">
                            <input class="form-control" placeholder="$0" v-model="fixedPayment" @change="updateFixedPayment()"/>
                            <label class="form-label">Total</label>
                            </div>
                        </div>
                        <div class="debt-question d-flex flex-column mb-0 flex-md-row ">
                            <button @click="calcMinPayment()" class="btn blue mb-3 mb-md-0 me-md-4">CALCULATE</button>
                            <button @click="resetMinPayment()" class="btn clear mb-4 mb-md-0 ms-md-4">CLEAR ALL</button>
                        </div>
                    </div>
                    <div class="col-md-6 pe-md-4 pt-md-5">
                        <div class="debt-section box blue pb-4 px-md-4 mt-md-4">
                            <p class="pt-2 mt-4"><strong>With a {{ toggleFixedPayment ? 'fixed' : 'minimum' }} payment:</strong></p>
                            <p class="col-md-6 m-auto mb-3">It will take you <strong>{{ minMonths }} months</strong> to be rid of your debt.</p> 
                            <div class="savings">
                                <h5>In that time, you will pay:</h5>
                                <h1 class="mb-0 pb-2">${{ parseFloat(minInterest).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</h1>
                                <h5 class="mb-4">in interest.</h5>
                                <p class="link text-decoration-underline d-none d-md-block" role="button" @click="showPaymentSchedule()">{{togglePaymentSchedule ? 'Hide' : 'Show'}} payment schedule</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-none d-md-block">
                <div class="schedule payment-schedule d-none mt-4 p-4">
                            <h4>Payment Schedule</h4>
                            <div class="table d-flex align-items-center">
                                <div class="col-md-2">
                                    <p>Month</p>
                                </div>
                                <div class="col-md-3">
                                    <p>{{ toggleFixedPayment ? 'Fixed' : 'Minimum' }} Payment</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Interest Paid</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Prinicipal Paid</p>
                                </div>
                                <div class="col-md-3">
                                    <p>Remaining Balance</p>
                                </div>
                            </div>
                                <MinPaySchedule v-for="(item,idx) in MinPayItems" :key="idx" v-bind="item"/>
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
                    <div class="debt-question mb-md-3">
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
                            <input class="form-control" placeholder="$0" type="number" min="0" v-model="loanAmount"/>
                            <label class="form-label">Amount</label>
                            </div>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>Loan term (yrs)</strong></p>
                            <br/>
                            <input class="form-control" type="number" min="1" v-model="loanTerm"/>
                        </div>
                        <div class="debt-question custom-row">
                            <p><strong>Interest rate</strong></p>
                            <br/>
                            <div class="error-message">
                            <input class="form-control" type="number" min="0"  v-model="loanInterest"/>
                            <label class="form-label percent">%</label>
                            </div>
                        </div>
                        <div class="debt-question d-flex flex-column mb-0 mb-md-5 mt-md-5 flex-md-row">
                            <button @click="calcPersonalLoan()" class="btn blue mb-3 mb-md-0 me-md-4">CALCULATE</button>
                            <button @click="resetPersonalLoan()" class="btn clear mb-4 mb-md-0 ms-md-4">CLEAR ALL</button>
                        </div>
                    </div>
                    <div class="debt-section box box-result blue pb-4 mb-4 text-start col-md-6 ms-md-4 align-self-start px-md-4 mt-md-5">
                        <h3 class="pt-2 mt-4 ps-3"><strong>Your results:</strong></h3>
                        <div class="box-row d-flex"><p>Total prinicipal paid</p> <p><strong>${{ loanAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p></div>
                        <div class="box-row d-flex"><p>Total interest paid</p> <p><strong>${{ loanTotalInterest.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p></div>
                        <div class="box-row d-flex"><p><strong>Estimated payment</strong></p> <p class="jumbo"><strong>${{ loanMonthly.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></p></div>
                        <div class="box-row d-flex"><p><strong>Loan term (yrs)</strong></p> <p class="jumbo"><strong>{{ loanTerm }}</strong></p></div>
                        <div class="text-center pt-4">
                        <p role="button" @click="showAmortSchedule()" class="link text-center text-decoration-underline d-none d-md-block">{{ toggleAmortSchedule ? 'Hide' : 'Show' }} amortization schedule</p>
                    </div>
                    </div>
                </div>
                <div class="d-none d-md-block">
                <div class="schedule amort-schedule d-none mt-4 p-4">
                            <h4>Amortization Schedule</h4>
                            <div class="table d-flex align-items-center">
                                <div class="col-md-2">
                                    <p>Payment Date</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Payment</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Principal</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Interest</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Total Interest</p>
                                </div>
                                <div class="col-md-2">
                                    <p>Balance</p>
                                </div>
                            </div>
                                <AmortSchedule v-for="(item,idx) in AmortItems" :key="idx" v-bind="item"/>
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
                <button class="btn blue" @click="redirectToCheckRate()">CHECK MY RATE</button>
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
  import MinPaySchedule from './MinPaySchedule.vue';
  import AmortSchedule from './AmortSchedule.vue';
  import router from '@/router';
  export default {
    name: 'DebtCalculatorComponent',
    components: {
        MinPaySchedule,
        AmortSchedule
    },
    props: {
      msg: String
    },
    data: () => ({
        // Toggle States
        togglePaymentSchedule: false,
        toggleAmortSchedule: false,
        toggleOneHidden: false,
        toggleTwoHidden: false,
        toggleThreeHidden: false,
        toggleFixedPayment: false,
        
        // Calc 1 States
        totalDebt: "",
        payOffTotalInterest: 0,
        payOffMonthly: 0,
        payOffTotalCost: 0,
        consolidationTotalInterest: 0,
        consolidationMonthly: 0,
        consolidationTotalCost: 0,
        consolidationSavings: 0,

        // Calc 2 States
        MinPayItems: [],
        minInterest : 0.00,
        minMonths: 0,
        minTotal: "",
        minInterestRate: ".18",
        minCalculated: ".01",
        minPayment: 15,
        fixedPayment: 15,

        // Calc 3 States
        AmortItems: [],
        loanAmount: 10000,
        loanTerm: 5,
        loanInterest: 5.95,
        loanMonthly: 0.00,
        loanTotalInterest: 0.00,
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
    showPaymentSchedule(){
        document.querySelector('.payment-schedule').classList.toggle('d-none')
        this.togglePaymentSchedule = !this.togglePaymentSchedule;
    },
    showAmortSchedule(){
        document.querySelector('.amort-schedule').classList.toggle('d-none')
        this.toggleAmortSchedule = !this.toggleAmortSchedule;
    },
    showFixedPayment() {
        this.toggleFixedPayment = !this.toggleFixedPayment;
        document.querySelector('.fixed-payment').classList.toggle('d-none');
    },
    updateFixedPayment() {
        if (this.fixedPayment < this.minPayment) {
            this.fixedPayment = this.minPayment;
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
        if (this.totalDebt <= 0) {
            this.resetPayOff();
        }
        else {
            var r1 = (.22)/12;
            var r2 = (.0695)/12;
            var n1 = 30*12;
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
    minPaymentChange() {
        if (this.minTotal !== "") {
            if (this.minCalculated === ".01") {
                // eslint-disable-next-line no-console
                // console.log(this.minInterestRate, this.minTotal,'!');
                this.minPayment = Math.max(15,parseFloat(this.minInterestRate) * parseFloat(this.minTotal) / 12 + (.01 * parseFloat(this.minTotal)));
            }
            else {
                this.minPayment = Math.max(15,parseFloat(this.minCalculated) * parseFloat(this.minTotal))
            }
        }
        else {
            this.minPayment = 15
        }
        this.fixedPayment = this.minPayment;
    },
    resetMinPayment() {
        this.MinPayItems = [];
        this.minMonths = 0;
        this.minTotal = "";
        this.minInterest = 0.00;
        this.minPayment = 15;
        this.fixedPayment = 15;
    },
    calcMinPayment() {
        if ((this.minTotal <= 0 || this.minTotal > 100000 || this.minTotal === "") || (this.fixedPayment <= 0  || this.fixedPayment === "")) {
            this.resetMinPayment();
        }
        else {
            this.MinPayItems = [];

            var totalBalance = parseFloat(this.minTotal); 
            var monthlyInterestRate = parseFloat(this.minInterestRate / 12);
            var totalInterestPaid = 0;
            let i = 0;
            while(totalBalance > 0) {
                var row = {};
                row.month = i+1;
                row.interest = parseFloat(totalBalance * monthlyInterestRate).toFixed(2);
                if (this.toggleFixedPayment) {
                    // Use fixed payment
                    row.min = parseFloat(this.fixedPayment);
                }
                else {
                    // Use minPayment
                    row.min = totalBalance * parseFloat(this.minCalculated);
                    if (this.minCalculated === ".01") {
                        row.min = Math.max(15,parseFloat(this.minInterestRate) * totalBalance / 12 + (.01 * totalBalance));
                    }
                    if (this.minCalculated === ".01" && totalBalance < 15) {
                        row.principal = parseFloat(totalBalance);
                        row.min = parseFloat(row.principal) + parseFloat(row.interest);
                    }
                    if (row.min < 15 && totalBalance > 15) {
                        row.min = 15;
                    }
                    else if (row.min < 15 && totalBalance < 15) {
                        row.principal = parseFloat(totalBalance);
                        row.min = parseFloat(row.principal) + parseFloat(row.interest);
                    }
                }
                row.principal = row.min - row.interest
                row.remaining = totalBalance - row.principal < 0 ? 0: totalBalance - row.principal;

                this.MinPayItems.push(row);
                totalBalance = row.remaining;
                totalInterestPaid += parseFloat(row.interest);
                i++;
            }
            this.minMonths = i;
            this.minInterest = totalInterestPaid;
        }
    },
    resetPersonalLoan() {
        this.AmortItems = [];
        this.loanTotalInterest = 0;
        this.loanAmount= 0;
        this.loanMonthly= 0.00;
    },
    calcPersonalLoan() {
        this.AmortItems = [];
        if (this.loanAmount <= 0 || this.loanAmount === "" || this.loanAmount > 100000 || this.loanInterest <= 0  || this.loanInterest === "" || this.loanTerm <= 0 || this.loanTerm === "") {
            this.resetPersonalLoan();
        }
        else {
            var r = (this.loanInterest * .01)/12;
            var n = this.loanTerm*12;
            this.loanMonthly = (parseFloat(this.loanAmount) * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);

            var remaining = this.loanAmount;
            var totalInterest = 0;
            for (let i = 0; i < n; i++) {
                var row = {};
                var now = new Date();
                var current = new Date(now.getFullYear(), now.getMonth()+(i+1), 1)
                var nextMonth = current.toLocaleString('en-US',{month: 'short'});
                var year = current.getFullYear();
                row.date = nextMonth + " " + year;
                row.payment= this.loanMonthly;
                
                row.interest= remaining * r;
                row.principal= this.loanMonthly - row.interest;
                totalInterest += row.interest;
                row.totalInterest = totalInterest;
                remaining = remaining - this.loanMonthly + row.interest;
                row.balance= remaining;

                this.AmortItems.push(row);
            }
            this.loanTotalInterest = totalInterest;
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
                case 2:
                this.toggleTwoHidden = !this.toggleTwoHidden
                if (this.toggleTwoHidden) {
                    document.querySelector('.toggle-2').src='assets/images/arrow-up.png';
                }
                else {
                    document.querySelector('.toggle-2').src='assets/images/arrow-down.png'
                }
                document.querySelector('.toggle-2-content').classList.toggle("d-none");
                document.querySelector('.toggle-2-hidden').classList.toggle("d-none");
                break;

                case 3:
                this.toggleThreeHidden = !this.toggleThreeHidden
                if (this.toggleThreeHidden) {
                    document.querySelector('.toggle-3').src='assets/images/arrow-up.png';
                }
                else {
                    document.querySelector('.toggle-3').src='assets/images/arrow-down.png'
                }
                document.querySelector('.toggle-3-content').classList.toggle("d-none");
                document.querySelector('.toggle-3-hidden').classList.toggle("d-none");
                break;
        
            default:
                break;
        }
      }
  },
  }
  </script>
  