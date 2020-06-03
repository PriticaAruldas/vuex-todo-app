<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <AddTodos/>
    <filterTodos/>
    <Todos/>
    <router-view/>
  </div>
</template>

<script>
 
import Todos from './components/todos.vue'
import AddTodos from './components/AddTodos.vue'
import filterTodos from './components/FilterTodos.vue'
 
export default {
  name: "app",
  components: {
    Todos,
    AddTodos,
    filterTodos
  } 
  
}
</script>

<style lang="scss">
</style>
