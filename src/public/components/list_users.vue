<template v-if="type === 'users'">
            <tr>
                <td>{{ `${item.user.surname} ${item.user.name} ${item.user.patronymic}` }}</td>
                <td>{{ item.posts.length }}</td> 
                <td>{{ this.$parent.getLastPost(item) }}</td>
            </tr>             
</template> 

<script>
export default {
    // props: ['item', 'type']
    props: {
        item: { type: Object },
        type: { type: String, default: 'catalog' }
    },
    data() {
        return {
            newProduct: {
                name: '',
                price: 0
            }
        }
    },
    computed: {

    },
    methods: {
        createNew(item) {
            if(item.name && item.price) {
                this.$emit('createnew', item); //событие сгенерировано
                this.newProduct.name = '';
                this.newProduct.price = 0;
            }
        }
    }
}
</script>
