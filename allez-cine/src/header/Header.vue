<template>
    <div id="header">
        <div id="navbar">
            <nav v-bind:class="active" v-on:click.prevent>
                <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
                <a href="#" class="projects" v-on:click="makeActive('projects')">Films Populaires</a>
                <a href="#" class="services" v-on:click="makeActive('services')">Séries TV</a>
            </nav>
            <div class="search">
                <input type="search" id="site-search" name="q"
                aria-label="Search through site content">
                <button>Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
    background-color: rgb(0, 0, 0);
    height: 80px;
    color: #ffffff;
}
a, a:visited {
	outline:none;
	color:#389dc1;
}

a:hover{
	text-decoration:none;
    background-color: #e35885;
}

section, footer, header, aside, nav{
	display: block;
}

/*-------------------------
	The menu
--------------------------*/

nav {
    /* display: inline-block; */
    margin: 13px auto 0px;
    background-color: #000000;
    /* -webkit-box-shadow: 0 1px 1px #ccc; */
    /* box-shadow: 0 1px 1px #ccc; */
    border-radius: 2px;
    float: left;
}


nav a{
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
    font-size: 1em;
    
}

.note {
    font-size: .8em;
}

button {
    background: #5d5b69;
    color: #ffffff;
    font-size: 1em;
}

.search {
    float: right;
    margin-right: 30px;
    align-items: baseline;
}

</style>
