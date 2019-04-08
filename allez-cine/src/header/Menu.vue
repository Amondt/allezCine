<template>
    <div id="header">   
        <a class="menu-toggle">
            <span class="fa fa-bars"></span>
        </a>
        <div class="navbar" v-if="windowWidth > 500">
            <nav>
                <router-link to='/home' id="home" :class="['home']">Home</router-link>
                <router-link to='/films' id="films" :class="['films']">Films Populaires</router-link>
                <router-link to='/series' id="series" :class="['series']">Séries TV</router-link>
            </nav>
            <div class="search">
                <input type="search" id="site-search" name="q"
                aria-label="Search through site content" placeholder="Recherche">
            </div>
        </div>
        <div class="navbar" v-else>
            <div v-if="icon"> 
                <i class="fas fa-bars" @click="menuClick"/>
            </div>
            <div v-else>
                <nav>
                    <router-link to='/home' id="home" :class="['home']">Home</router-link>
                    <router-link to='/films' id="films" :class="['films']">Films Populaires</router-link>
                    <router-link to='/series' id="series" :class="['series']">Séries TV</router-link>
                </nav>
            </div>
            <div class="search">
                <input type="search" id="site-search" name="q"
                aria-label="Search through site content" placeholder="Recherche">
            </div>
        </div>
        <Carousel />
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
    name: 'menuTop',
    data(){
        return{
            windowWidth: window.innerWidth,
        }
    },
    components: {
        Carousel
    },
mounted () {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
            console.log(this.windowWidth);
        }
},

}
</script>

<style scoped>
img {
    margin-left: 23px;
    margin-top: 30px;
    float: left;
}

#header {
    background-color: rgb(0, 0, 0);
    color: #ffffff;
}

.navbar{
    display:flex;
    justify-content: space-between;
}

a, a:visited {
	outline:none;
	color:red;
}

a:hover{
	text-decoration:underline;
    border: #e35885;
    background-color: red;
    color: #ffffff!important;
    transition: all 1s ease 0s;
}

section, footer, header, aside, nav{
	display: block;
}

/*-------------------------
	The menu
--------------------------*/

nav {
    padding: 25px;
    background-color: #000000;
    float: left;
}


nav a{
    margin-left: 10px;
	padding: 0px 10px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;
	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

nav a:hover{
    text-decoration:underline!important;
    border: 10px red;
    border-color: red;
    background-color: transparent;
    color: red!important;
    transition: all 1s ease 0s;

}

nav.home .home,
nav.films .films,
nav.series .series,
nav.contact .contact{
	background-color:#e35885;
}

p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
}

p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	text-transform:uppercase;
	font-size:18px;
}
.resource {
    margin: 20px 0;
}

.router-link-exact-active {
    color: red!important;
}

label {
    /* float: right; */
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
    font-size: 1.2em;
    
}

.note {
    font-size: .8em;
}

button {
    background: #ED213A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #93291E, #ED213A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #93291E, #ED213A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #ffffff;
    font-size: 1.2em;
    border: none;
    border-radius: 3px;
    padding: 10px;
    height: 44px;
    transition: all 1s ease 0s;
}
button:hover {
    background: #ED213A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #93291E, #ED213A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #93291E, #ED213A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #ffffff;
    font-size: 1.2em;
    border: none;
}


.search {
    float: right;
    padding: 20px;
}

#site-search {
    border-radius: 66px;
    border: none;
    padding: 2px;
    -webkit-transition: .2s;
    transition: .2s;
    width: 250px;
    padding-left: 20px;
}

#site-search:focus {
    width: 450px;
    outline-width: 0;
}

@media only screen and (max-width: 768px) {
  .navbar, nav, .search {
    flex-direction: column;
  }
  nav, .search {
    margin: 0;
  }
  nav {
    display:none;
    }
 
}

.fa, .fas{
    font-size: 30px;
    position: absolute;
    top:15px;
    left: 13px;
}

/* wrapper styles */
.wrapper {
  position: relative;
  min-height: 100vh;
}

/* small screens styles */
@media (max-width: 767px) {
  .sidebar {
    position: absolute;
    top: 0; left: 0; right: 0;
  }
  
  /* navigation styles */
  nav {
    -webkit-columns: 2;
    -moz-columns: 2;
    -ms-columns: 2;
    columns: 2;
    -webkit-column-gap: 2px;
    -moz-column-gap: 2px;
    -ms-column-gap: 2px;
    column-gap: 2px;
    padding: 2px;
  }
  nav > router-link {
    display: inline-block;
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    padding-left: 1rem;
  }
  .wrapper {
    transform: translateX(0) translateZ(0);
    transition: transform .2s;
    will-change: transform;
  }  

  /* button deco */
  [class^="nav-button"] {
    display: block;
    z-index: 1;
    height: 3.5rem; width: 3.5rem;
    background-color: transparent;
    background-image: linear-gradient(to right, #333, #333),
      linear-gradient(to right, #333, #333),
      linear-gradient(to right, #333, #333);
    background-position: center top, center, center bottom;
    background-repeat: no-repeat;
    background-size: 3.5rem .9rem;
    padding: 0;
    outline: 0;
    border: 0;
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  
  /* here's goes the push top effect */
  body:target .wrapper {
    transform: translateY(19rem); /* based on navigation's height */
  }
  .nav-button-close,
  body:target .nav-button-open {
    display: none;
  }
  .nav-button-open,
  body:target .nav-button-close {
    display: block;
  }
  
} /* end of small screen media queries */

router-link {
  color: #fff;
}
.wrapper {
  padding: 2rem;
  background-color: #eee;
  color: #333;
}
.sidebar {
  background: #333;
  color: #ddd;
}
nav router-link {
  margin-bottom: 2px;
  text-decoration: none;
  background: rgba(255,255,255, 0.1);
}


</style>
