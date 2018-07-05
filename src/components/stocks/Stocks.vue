<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        data() {
            return {
                stocks: [
                    {id: 1, name: "BMW", price: 110},
                    {id: 2, name: "GOOGLE", price: 340},
                    {id: 3, name: "AAPL", price: 230},
                    {id: 4, name: "REA", price: 1310},
                ]
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>