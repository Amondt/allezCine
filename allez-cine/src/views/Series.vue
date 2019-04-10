<template>
    <div id='main'>
        <h2 class='title'>Series</h2>
        <div class="contain">
            <FilmCard v-for="(serie, index) in results" :key='index' :film="serie" />
        </div> 
    </div> 
</template>

<script>

import { getDataTmdbSer } from '../../apis/tmdbApi/tmdbApiMethods.js'
import FilmCard from '../components/FilmCard.vue'

export default {
    name: 'series',
    components: {
        FilmCard
    },
    data () {
        return {
            results: null
        }
    },
    created () {
        this.results = getDataTmdbSer('en', 'popularity.desc', '1')
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
    justify-content: space-between;
}
</style>
