<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                </h3>
                <small>(Price: {{ stock.price }}  | Quantity: {{ stock.quantity}})</small>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuanitity}">
                </div>

                <div class="pull-right">
                    <button class="btn btn-success"
                    @click="sellOrder"
                    :disabled="insufficientQuanitity || quantity <= 0 || isNaN(quantity)"
                    >{{insufficientQuanitity ? 'Not enough' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>


<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['stock'],

        data() {
            return {
                quantity: 0
            }
        },

        computed: {
            insufficientQuanitity() {
                return this.stock.quantity <= this.quantity
            }
        },

        methods: {
            ...mapActions(['sellStock']),
            sellOrder() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                
                this.sellStock(order)
                this.quantity = 0
            }
        }
    }
</script>