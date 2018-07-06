<template>
    <div>
        <h1>Trade or View Portfolio</h1>
        <h6>You may save or load data</h6>
        <h6>Click on end day to begin new day</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>
