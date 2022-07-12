<template>
  <div id="app">
    <NavBar />
    <HomePage />

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import HomePage from './views/Home.vue'


// import HelloWorld from './components/HelloWorld.vue'

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
#app { 
  height: 100vh;

}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
