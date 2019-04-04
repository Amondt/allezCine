<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <router-view/>
    <Social/>
    <Footer/>
  </div>
</template>

<script>
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
import Social from './social/Social.vue'


export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Social
  }
}
</script>

<style>
@import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');

html, body {
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
