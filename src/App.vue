<template>
  <div id="app">
    <NavBar />
    <HomePage />

  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import HomePage from './views/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage

    
    // HelloWorld
  }
}
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
