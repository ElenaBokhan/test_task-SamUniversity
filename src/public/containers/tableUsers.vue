<template>          
    <table>
        <tr>            
        <th>User Name
            <font-awesome-icon icon="sort" class="search-icon" @click="sort('user.surname')"/>
            <font-awesome-icon icon="search" @click="showInput=!showInput"/>
        </th>
        <th>Number of posts
            <font-awesome-icon icon="sort" class="search-icon" @click="sort('posts.length')"/>            
        </th>
        <th>Last post date
            <font-awesome-icon icon="sort" class="search-icon" @click="sort"/>
            <font-awesome-icon icon="search" @click="showInput=!showInput"/>
        </th>                
        </tr> 
        <tr v-if="showInput===true">
            <td colspan="3">
                <searchField />
            </td> 
        </tr>            
        <item 
        v-for="item of filteredItems || items" 
        :key="item.user.id" 
        :item="item"
        :type ="'users'"
        />
    </table>
</template>

<script>
import item from '../components/list_users.vue'
import searchField from '../components/searchUser.vue'
import _ from 'lodash'

export default {
    components: { item, searchField },
    data() {
        return {
            items: [],
            filteredItems: null,          
            url: "http://localhost:8080/src/server/db/users.json",
            isSortName: false,
            showInput: false
        }
    },
    methods: {
        sort(value) {            
            const firstCase = i => _.get(i, value)
            const secondCase = i => this.getLastPost(i)
            const param = typeof value === "string" ? firstCase : secondCase
           
            this.isSortName ? this.items.sort((a,b) => param(a) > param(b) ? 1 : -1)
                            : this.items.sort((a,b) =>  param(a) < param(b) ? 1 : -1);         
            this.isSortName = !this.isSortName;           
        },        
        getLastPost(el){                       
            return el.posts.map(el=> el.createdAt).sort().reverse()[0] 
        },
        search(e){
            e = e.trim().toLowerCase()
            const newDate = e.replace(/[\d-:\s]/gi, "")            
            this.filteredItems = !!newDate ? this.items.filter(({user}) => `${user.surname} ${user.name} ${user.patronymic}`.toLowerCase().includes(e))
                                           : this.items.filter((el) => `${this.getLastPost(el)}`.includes(e))
        },
        getList(){
            this.filteredItems = null; 
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
table {
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
    margin: auto;
}
th, td:first-child {
    background: #AFCDE7;
    color: white;
    
}
th, td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    padding: 10px 20px;
}
td {
    background: #D8E6F3;
}
th:first-child, td:first-child {
    text-align: left;
}

.search-icon{
    cursor: pointer;    
}
.search-icon:hover{  
    color: rgba(150, 173, 180, 0.62);   
}
</style>