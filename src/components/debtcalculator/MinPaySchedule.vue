<template>
<div class="table-entry d-flex align-items-center">
    <div class="col-md-2">
        <p class="month">{{ month }}</p>
    </div>
    <div class="col-md-3">
        <p class="min-payment">${{ parseFloat(min).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
    </div>
    <div class="col-md-2">
        <p class="interest-paid">${{ parseFloat(interest).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
    </div>
    <div class="col-md-2">
        <p class="principal-paid">${{  parseFloat(principal).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
    </div>
    <div class="col-md-3">
        <p class="remaining-balance">${{ parseFloat(remaining).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
    </div>
</div>
</template>
<script>
export default {
    name: 'MinPaySchedule',
    props: ['month', "min", "interest", "principal", "remaining"]
}

</script>