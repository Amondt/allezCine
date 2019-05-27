<template>
    <div id='main'>
        <h2 class='title'>Films</h2>
        <div class="contain">
            <FilmCard v-for="(film, index) in films" :key='index' :film="film" />
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"></div>
        </div>
    </div>
</template>

<script>

import { getDataTmdbMov } from '../../apis/tmdbApi/tmdbApiMethods.js'
import FilmCard from '../components/FilmCard.vue'
import axios from "axios";

export default {
    name: 'films',
    components: {
        FilmCard
    },
    data () {
        return {
            busy: false,
            films: [],
            loading: true, 
            errored: false,
            page: 0,
        }
    },
    created () {
        this.films = getDataTmdbMov('en', 'popularity.desc', '1')
    },
    methods:{
        loadMore(films) {
            this.busy = true;
            // let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            // if (bottomOfWindow) {
                this.page++
                console.log(this.page)
                axios
                .get(`https://api.themoviedb.org/3/discover/tv?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&page=${this.page}`)
                .then(response => {
                    console.log (response.data.results)
                    // for (let i=0; i < response.data.results.length; i++){
                    //     this.films.push(response.data.results[i])
                    // }
                    this.films.push(...response.data.results)
                    this.busy = false;
                })
                .catch(error => {
                    console.log('this.page', this.page)
                    this.errored = true
                })
                .finally(() => this.loading = false)
            }
        // }   
    },
    beforeMount() {
        this.loadMore()
    }, 
    mounted(){
        this.scroll = this.films
    }
}
</script>

<style scoped>
.title {
    text-align: left;
    border-left: 5px solid red;
    padding-left: 10px;
}

.contain {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
}
</style>
