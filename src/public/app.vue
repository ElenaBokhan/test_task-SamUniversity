<template>
  <div>
    <header>  
        <div>LOGO</div>      
        <div class="cart">            
            <button class="btn-cart">Cart</button>
            <cart ref="cartRef"/>
        </div>
    </header>
    <main>
        <catalog ref="catalog" />
        <users />
    </main>
  </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'
import users from './containers/tableUsers.vue'

export default {
    components: { cart, catalog, users },    
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style lang="sass">

</style>