<template>
    <div id="header">
        
        <v-navigation-drawer v-if="window.width < 960" clipped fixed v-model="drawer" dark app>
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <h1><span class="titleP1">ALLEZ</span>CINE!</h1>
                    </v-list-tile-content>
                </v-list-tile>

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

                <!-- <v-list-tile-content style="width: fit-content;padding: 10px;">
                    <searchBar :isMobile='false' class="inputHamburger"/>        
                </v-list-tile-content> -->
            </v-list>
        </v-navigation-drawer>

        <v-container>
            <v-toolbar app fixed clipped-left flat absolute dark pa-0>
                <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="window.width < 960"></v-toolbar-side-icon>
                <v-toolbar-title v-else>
                    <v-btn depressed active-class="active" router to="/home">Home</v-btn>
                    <v-btn depressed active-class="active" router to="/films">Films Populaires</v-btn>
                    <v-btn depressed active-class="active" router to="/series">Séries TV</v-btn>
                </v-toolbar-title>
                
                <v-spacer></v-spacer>
                <!-- <v-card light class="px-3 py-1" ripple width="300" style="borderRadius:20px;" id="searchBar"> -->
                    <searchBar :isMobile='false' class="hidden-sm-and-down"/>        
                <!-- </v-card> -->
            </v-toolbar>
        </v-container>
        
        <v-layout my-3 pl-4>
            <h1><span class="titleP1">ALLEZ</span>CINE!</h1>
        </v-layout>
        <v-layout>
            <Carousel />
        </v-layout>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import searchBar from '../header/searchBar.vue'

export default {
    name: 'menuTop',
    data(){
        return {
            drawer: false,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    components: {
        Carousel,
        searchBar
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

.titleP1 {
    color: red;
    background: none;
}

h1 {
    color: #fff;
    background: none;
}

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

.v-toolbar__content .v-toolbar__extension {
    padding: 0!important;
    margin-right: 10px;
}

@media only screen and (max-width: 600px) {
.pl-4 {
    padding-left: 24px !important;
    display: flex;
    justify-content: center;
}
}
</style>
