<template>
  <div class="cart-block ">
    <!--div class="d-flex">
        <strong class="d-block">Всего товаров</strong> <div id="quantity"></div>
    </div>
    <hr-->
    <div class="cart-items">
        
        <item 
        v-for="item of items" 
        :key="item.id_product" 
        :item="item" 
        :type="'cart'"
        @deleteitem="removeItem"/>
    </div>
    <!--hr>
    <div class="d-flex">
        <strong class="d-block">Общая ст-ть:</strong> <div id="price"></div>
    </div-->
</div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            url:  "http://localhost:8080/server/db/cart.json",            
            urlUser: "http://localhost:8080/server/db/usersCatalog.json",
            items: [],
            usersData: []
        }
    },
    methods: {
        addItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find) {
                find.quantity++
            } else {
                this.items.push(Object.assign({}, item, {quantity: 1}))
            }
        },
        removeItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.quantity--
            } else {
                this.items.splice(this.items.indexOf(find), 1)
            }
        }
    },
    mounted() {
        this.$parent.get(this.url).then(d => this.items = d)
        this.$parent.get(this.urlUser).then(d => this.usersData = d)

    }
}
</script>

<style>

</style>