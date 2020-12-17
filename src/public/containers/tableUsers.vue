<template>          
    <table>
        <tr>
        <th @click="sortUser(items)">User Name</th>
        <th @click="sortPostNumber(items)">Number of posts</th>
        <th>Last post date</th>                
        </tr>             
        <item 
        v-for="item of items" 
        :key="item.user.id" 
        :item="item"
        :type ="'users'"
        />
    </table>
</template>

<script>
import item from '../components/list_users.vue'

export default {
    components: { item },
    data() {
        return {
            items: [],
            lastPostDate: "",
            url: "http://localhost:8080/server/db/users.json",
        }
    },
    methods: {
        sortUser() {            
           this.items = this.items.sort((a,b) => {
                
                return
                a.user.surname-b.user.surname} )
                console.log(this.items)
        },
        sortPostNumber(){
            const newitem = {                
                    user:{
                        id:1,
                        name:"Евгений",
                        surname:"Закиров",
                        patronymic:"Сергеевич"
                    },
                    posts:[]
            }
            this.items = [...this.items, newitem]
        },
        addItem(item) {
            this.$parent.$refs.cartRef.addItem(item)
        },
        addNewCatalogItem(p) {
            this.items.push({
                id_product: new Date() + '',
                product_name: p.name,
                price: p.price
            })
        },
        filter(str) {
            if (!str) {
                this.filteredItems = this.items
            } else {
                let reg = new RegExp(str, 'gi')
                this.filteredItems = this.items.filter (item => item.product_name.search(reg))
            }
        }
    },
    mounted() {
        this.$parent.get(this.url)
        .then(data => {
            this.items = data           
        })
    }
}
</script>

<style>

</style>