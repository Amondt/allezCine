<template>
    <div id="header">
         
        <div id="navbar">
            <img src="../assets/logo.png" alt="logo" height="42" width="42">
            <nav v-bind:class="active" v-on:click.prevent>
               
               <router-link to='/home' class="home" v-on:click="makeActive('home')">Home</router-link>
                <router-link to='/films' class="projects" v-on:click="makeActive('projects')">Films Populaires</router-link>
                <router-link to='/series' class="services" v-on:click="makeActive('services')">Séries TV</router-link>
            </nav>
            <div class="search">
                <input type="search" id="site-search" name="q"
                aria-label="Search through site content">
                <button>Search</button>
            </div>
            
        </div>
        <Carousel />
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
    components: {Carousel}
}
</script>

<style scoped>
img {
    margin-left: 20px;
    margin-top: 15px;
    float: left;
}

#header {
    background-color: rgb(0, 0, 0);
    height: 560px;
    color: #ffffff;
}
a, a:visited {
	outline:none;
	color:#389dc1;
}

a:hover{
	text-decoration:none;
    background-color: red;
    color: #000000!important;
    transition: all 1s ease 0s;
}

section, footer, header, aside, nav{
	display: block;
}

/*-------------------------
	The menu
--------------------------*/

nav {
    margin: 13px auto 0px;
    background-color: #000000;
    border-radius: 2px;
    float: left;
}


nav a{
    margin-left: 20px;
	display:inline-block;
	padding: 18px 30px;
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

nav a:first-child{
	border-radius:2px 0 0 2px;
}

nav a:last-child{
	border-radius:0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
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
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}
.resource {
  margin: 20px 0;
}

.home {
    color: red!important;
}

label {
    /* float: right; */
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
    /* float: right; */
    margin: 1.9rem 19px;
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
    margin-right: 30px;
    align-items: baseline;
}


</style>
