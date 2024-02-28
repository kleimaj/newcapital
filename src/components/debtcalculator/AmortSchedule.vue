<template>
    <div class="table-entry d-flex align-items-center">
        <div class="col-md-2">
            <p class="month">{{ date }}</p>
        </div>
        <div class="col-md-2">
            <p class="min-payment">${{ parseFloat(payment).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
        </div>
        <div class="col-md-2">
            <p class="min-payment">${{ parseFloat(principal).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
        </div>
        <div class="col-md-2">
            <p class="interest-paid">${{ parseFloat(interest).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
        </div>
        <div class="col-md-2">
            <p class="principal-paid">${{  parseFloat(totalInterest).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
        </div>
        <div class="col-md-2">
            <p class="remaining-balance">${{ parseFloat(balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
        </div>
    </div>
    </template>
    <script>
    export default {
        name: 'AmortSchedule',
        props: ['date', "payment", "principal", "interest", "totalInterest", "balance"]
    }
    
    </script>