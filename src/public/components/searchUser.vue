<template>
  <form action="#">
          <input  type="text"                  
                  v-model="searchString"
                  placeholder="Type..." />
          <button @click="$parent.search(searchString)">
            search 
          </button>
           <button  class = "search-all"
                    @click="$parent.getList()">
            show All
          </button>
        </form>
</template>

<script>
export default {
  data(){
    return{
      searchString:"",   
    }
  }
}
</script>

<style>
form{
    justify-content: center;
    margin: auto;
    display: flex;
}
form input{
    box-sizing: border-box;    
    color: #537999;
    padding: 6px;
    background-color: white;
    border: none;
    border-bottom: 2px solid #fafafa;
}
form input:focus{
    outline: none;
}
button{
  background-color: white;
  border-style: none;
  color: #466174;
  font-size: 14px;
  padding: 0 10px;
  outline-style: none;
  font-weight: 700; 
  cursor: pointer;
}
button:hover{
   color: #5e8bac;
}
.search-all{
  margin-left: 20px;
  font-size: 14px;
  padding: 5px 20px;
  font-weight: 700;
}
input::placeholder {
    color: rgb(177, 177, 177);
    font-size: 12px;
  }
</style>