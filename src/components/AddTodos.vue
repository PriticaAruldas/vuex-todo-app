<template>
    <div>
        <h3>Add Todos</h3>
        <div class="add">
            <form @submit = "onSubmit">
                <input type="text" v-model="title" placeholder="Add Todos..">
                <input type="submit" value="Submit">        
            </form>    
            <h1>Hi from smart girl</h1>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "AddTodo",
    data(){
        return {
            title:''
        }
    },
    methods:{
        ...mapActions(['addTodos']),
            
            onSubmit(e) {
            e.preventDefault();
            this.addTodos(this.title);
        }
    }
}
</script>

<style scoped>
    form {
        display:flex;
    }

    input[text="text"]{
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883 ;
        outline: 0;
    }

    input[type="submit"] {
        /* flex: 2; */
        background:#41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor:pointer;
    }

</style>
