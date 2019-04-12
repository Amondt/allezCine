<template>
    <div id='main'>
        <h2 class='title'>Films</h2>
        <div class="contain">
            <FilmCard v-for="(film, index) in results" :key='index' :film="film" />
        </div>
    </div>
</template>

<script>

import { getDataTmdbMov } from '../../apis/tmdbApi/tmdbApiMethods.js'
import FilmCard from '../components/FilmCard.vue'
import infiniteScroll from "vue-infinite-scroll";

export default {
name: 'films',
    components: {
        FilmCard
    },
    data () {
        return {
            results: null
        }
    },
    created () {
        this.results = getDataTmdbMov('en', 'popularity.desc', '1')
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
