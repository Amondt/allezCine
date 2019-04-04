<template>
    <div id="main">
        <div v-if="resultsMov">
            <h2 class='title'>Films</h2>
            <div class="container">
                <FilmCard v-for="(i, index) in 10" :key='index' :film="resultsMov[i-1]" />
            </div>
        </div>
        <div v-else>Loading...</div>
        <div v-if="resultsSer">
            <h2 class='title'>Series</h2>
            <div class="container">
                <FilmCard v-for="(i, index) in 10" :key='index' :film="resultsSer[i-1]" />
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>

import { getDataTmdbMov } from '../../apis/tmdbApi/tmdbApiMethods.js'
import { getDataTmdbSer } from '../../apis/tmdbApi/tmdbApiMethods.js'
import FilmCard from '../components/FilmCard.vue'

export default {
    name: 'home',
    components: {
        FilmCard
    },
    data () {
        return {
            resultsMov: null,
            resultsSer: null
        }
    },
    mounted () {
        this.resultsMov = getDataTmdbMov('en', 'vote_average.desc', '1')
        this.resultsSer = getDataTmdbSer('en', 'vote_average.desc', '1')
    }
}
</script>

<style scoped>

<<<<<<< HEAD
=======


>>>>>>> feature-front
.title {
    margin: 60px 150px 40px 150px;
    text-align: left;
    border-left: 5px solid red;
    padding-left: 10px;
}

.center {
    display: block;
    margin: auto;
}

.container {
    margin: 20px 200px;
    display: flex;
    flex-flow: row wrap;
}

</style>
