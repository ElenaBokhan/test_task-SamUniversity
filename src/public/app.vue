<template>
  <div class="container">
    <!-- <header></header> -->
    <main>        
        <users />
    </main>
    <!-- <footer></footer> -->
  </div>
</template>

<script>

import users from './containers/tableUsers.vue'

export default {
    components: { users },    
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style>  
.container {
    max-width: 920px;
    min-height: 100%;
    margin: 0 auto;	
    background-color: #e8e8e8;
    display: flex;
    flex-direction: column;		
}
header, footer{
    min-height: 60px;
    width: 100%;
    padding: 20px;
    /* display: flex;
    justify-content: space-between; */
    background-color: #467588;
    flex: 0 0 auto;	
}
main{
    flex: 1 0 auto;
    display: flex;
}
</style>