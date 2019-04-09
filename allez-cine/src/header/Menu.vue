<template>
    <div id="header">
        <v-navigation-drawer clipped fixed v-model="drawer" app>
            Drawer Menu
        </v-navigation-drawer>

        <v-toolbar app fixed clipped-left flat absolute dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" hidden-md-and-up></v-toolbar-side-icon>
            <!-- <v-toolbar-title hidden-md-and-up>Brewdog</v-toolbar-title> -->
            <nav hidden-sm-and-down>
                <router-link to='/home' id="home" :class="['home']">Home</router-link>
                <router-link to='/films' id="films" :class="['films']">Films Populaires</router-link>
                <router-link to='/series' id="series" :class="['series']">Séries TV</router-link>
            </nav>
            <v-spacer></v-spacer>
            <input type="search" name="q" aria-label="Search through site content" placeholder="Recherche">
        </v-toolbar>
        <v-layout mt-5 pt-4>
            <Carousel />
        </v-layout>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
    name: 'menuTop',
    data(){
        return {
            drawer: true
        }
    },
    components: {
        Carousel
    }
}
</script>

<style scoped>
#header {
    background: #212121;
}
</style>
