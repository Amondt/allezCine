<template>
    <div id="header">
        <v-navigation-drawer clipped fixed v-model="drawer" app>
            Drawer Menu
        </v-navigation-drawer>

        <v-toolbar app fixed clipped-left flat absolute dark>
            <div v-if="window.width < 960">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            </div>
            <div v-else>
                <router-link to='/home' id="home" :class="['home']">Home</router-link>
                <router-link to='/films' id="films" :class="['films']">Films Populaires</router-link>
                <router-link to='/series' id="series" :class="['series']">Séries TV</router-link>
            </div>
            
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
            drawer: true,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    components: {
        Carousel
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
        }
    }
}
</script>

<style scoped>
#header {
    background: #212121;
}
</style>
