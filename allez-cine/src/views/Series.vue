<template>
    <div id='main'>
        <h2 class='title'>Series</h2>
        <div class="contain">
            <FilmCard v-for="(serie, index) in series" :key='index' :film="serie" />
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">...</div>
        </div> 
    </div> 
</template>

<script>

import { getDataTmdbSer } from '../../apis/tmdbApi/tmdbApiMethods.js'
import FilmCard from '../components/FilmCard.vue'
import axios from "axios";

export default {
    name: 'series',
    components: {
        FilmCard
    },
    data () {
        return {
            results: null,
            busy: false,
            series: [],
            loading: true, 
            errored: false,
            page: 0,
        }
    },
    methods:{
        loadMore(series) {
            this.busy = true;
                this.page++
                console.log(this.page)
                axios
                .get(`https://api.themoviedb.org/3/discover/tv?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&page=${this.page}`)
                .then(response => {
                    console.log (response.data.results)
                    this.series.push(...response.data.results)
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
    created () {
        this.results = getDataTmdbSer('en', 'popularity.desc', '1')
    },
        beforeMount() {
        this.loadMore()
    }, 
    mounted(){
        this.scroll = this.series
    }
}
</script>

<style scoped>

.title {
    text-align: left;
    border-left: 5px solid red;
    padding-left: 10px;
}

.center {
    display: block;
    margin: auto;
}

.contain {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
}
</style>
