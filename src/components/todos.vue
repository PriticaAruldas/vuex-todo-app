<template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>Double Click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="Complete-box"></span> = Complete
            </span>
        </div>
        <h1>Todo List</h1>
        <div class="todos">
            <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" :key="todo.id" class="todo" v-bind:class="{'is-complete':todo.completed}">
                {{ todo.title }}
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>  
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"Todos",
    methods:{
       ...mapActions(['fetchTodos','deleteTodo','updateTodo']),
        onDblClick(todo){
            const updtodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updtodo);
        }
    }, 
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>

<style scoped>
.todos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo{
    border: 1px solid #ccc;
    background:lavender;
    padding : 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
}
.legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.Complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background:blue;
}

.incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: black;
}
.is-complete{
    background-color: chocolate;
    color:cornsilk;
}

@media (max-width: 500px){
    .todos{
        grid-template-columns: 1fr;
    }
}
</style>
