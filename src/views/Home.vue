<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <Todos/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/todos.vue'

export default {
  name: 'Home',
  components: {
    Todos
  }
}
</script>

<style  lang="scss">
body{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background:rgb(191, 238, 191); 
}
.container{
  max-width:1100px;
  margin: auto;
  overflow:auto;
  padding: 0 2rem;
}
</style>
