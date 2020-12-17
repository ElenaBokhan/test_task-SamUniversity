<template>
  <div>
    <header>        
        <div class="cart">            
            <button class="btn-cart">Cart</button>
            <cart ref="cartRef"/>
        </div>
    </header>
    <main>
        <catalog ref="catalog" />
    </main>
  </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'

export default {
    components: { cart, catalog },    
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style lang="sass">

</style>