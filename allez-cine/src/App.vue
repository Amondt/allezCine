<template>
  <div id="app">
    <Menu/>
    <router-view :key="$route.fullPath"/>
    <Footer/>
    <Social/>
  </div>
</template>

<script>
import Menu from './header/Menu.vue'
import Footer from './footer/Footer.vue'
import Social from './social/Social.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
    Social
  }
}
</script>

<style>
@import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');


* {
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box;
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
