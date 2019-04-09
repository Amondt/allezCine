<template>
    <div id="header">
        <v-navigation-drawer v-if="window.width < 960" clipped fixed v-model="drawer" dark app>
            <v-list>
                <v-list-tile router to="/home">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile router to="/films">
                    <v-list-tile-action>
                        <v-icon>local_movies</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Films Populaires</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile router to="/series">
                    <v-list-tile-action>
                        <v-icon>tv</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Séries TV</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app fixed clipped-left flat absolute dark>
            <div v-if="window.width < 960">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            </div>
            <div v-else>
                <v-btn depressed active-class="active" router to="/home">Home</v-btn>
                <v-btn depressed active-class="active" router to="/films">Films Populaires</v-btn>
                <v-btn depressed active-class="active" router to="/series">Séries TV</v-btn>
            </div>
            
            <v-spacer></v-spacer>
            <v-card light class="px-3 py-1" ripple width="300" style="borderRadius:20px;" id="searchBar">
                <input type="search" name="q" aria-label="Search through site content" placeholder="Recherche">
            </v-card>
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

#searchBar {
    transition: .1s;
}

.active {
    background: none;
    color: #ED473E;
}

</style>
