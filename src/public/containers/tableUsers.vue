<template>          
    <table>
        <tr>            
        <th>User Name
            <font-awesome-icon icon="sort" class="search-icon" @click="sort('user.surname')"/>
            <font-awesome-icon icon="search" @click="showInput=!showInput"/>            
            <searchField v-if="showInput===true"/>
        </th>
        <th>Number of posts
            <font-awesome-icon icon="sort" class="search-icon" @click="sort('posts.length')"/>            
        </th>
        <th>Last post date
            <font-awesome-icon icon="sort" class="search-icon" @click="sortPostDate"/>
            </th>                
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
import searchField from '../components/searchProduct.vue'

export default {
    components: { item, searchField },
    data() {
        return {
            items: [],
            lastPostDate: "",
            url: "http://localhost:8080/server/db/users.json",
            isSortName: false,
            showInput: false
        }
    },
    methods: {
        sort(param) {  
           this.isSortName ? this.items.sort((a,b) => a.param>b.param ? 1 : -1)
                           : this.items.sort((a,b) => a.param<b.param ? 1 : -1);         
           this.isSortName = !this.isSortName;           
        },
        sortPostNumber(){           
            this.isSortName ? this.items.sort((a,b) => a.posts.length>b.posts.length ? 1 : -1)
                            : this.items.sort((a,b) => a.posts.length<b.posts.length ? 1 : -1);         
            this.isSortName = !this.isSortName; 
        },
        sortPostDate(){                       
            this.isSortName ? this.items.sort((a,b) => this.getLastPost(a)>this.getLastPost(b) ? 1 : -1)
                            : this.items.sort((a,b) => this.getLastPost(a)<this.getLastPost(b) ? 1 : -1);         
            this.isSortName = !this.isSortName; 
        },
        getLastPost(el){
            return el.posts.map(el=> el.createdAt).sort().reverse()[0]
        },
        searchUser(e){
            debugger
            this.items.filter(el=> el.user.surname === e)
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