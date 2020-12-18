<template>
  <form action="#" class="search-form">
          <input type="text" class="search-field" v-model="searchString" />
          <button class="btn-search" @click="$parent.searchUser(searchString)">
            search
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

</style>