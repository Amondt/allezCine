<template>
    <div id="main">
        <v-container>
            <div v-if="resultsMov">
                <h2 class='title'>Films</h2>
                <div class="contain">
                    <FilmCard v-for="(i, index) in 12" :key='index' :film="resultsMov[i-1]" />
                </div>
            </div>
            <div v-else>Loading...</div>
            <div v-if="resultsSer" class="mt-5">
                <h2 class='title'>Series</h2>
                <div class="contain">
                    <FilmCard v-for="(i, index) in 12" :key='index' :film="resultsSer[i-1]" />
                </div>
            </div>
            <div v-else>Loading...</div>
        </v-container>
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
        this.resultsMov = getDataTmdbMov('en', 'popularity.desc', '1')
        this.resultsSer = getDataTmdbSer('en', 'popularity.desc', '2')
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
    justify-content: space-between;
}

</style>
