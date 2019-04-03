<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Footer,
    // Carousel
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
