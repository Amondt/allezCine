<template>
    <div id="main">
        <div v-if="result === 404">
            Error
        </div>
        <div v-else-if="result">
            <div id="details">
                <div v-if="result.title">
                    <img :src="imageSrc" alt="poster film">
                    <h1>{{ result.title }} ({{ result.release_date.split('-')[0] }})</h1><span>{{ result.vote_average }}</span>
                    <h3>Synopsis</h3>
                    <p>{{ result.overview }}</p>
                    <span v-for="(genre, index) in result.genres" :key="index">{{ genre.name }}</span>
                </div>
                <div v-else>
                    <img :src="imageSrc" alt="poster film">
                    <h1>{{ result.name }} ({{ result.first_air_date.split('-')[0] }})</h1><span>{{ result.vote_average }}</span>
                    <h3>Synopsis</h3>
                    <p>{{ result.overview }}</p>
                    <span v-for="(genre, index) in result.genres" :key="index">{{ genre.name }}</span>
                </div>
            </div>
            <Commentaries :key="commentKey" :forceRerender="forceRerender"/>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>

import { getDetailsTmdb } from '../../apis/tmdbApi/tmdbApiMethods.js'
import Commentaries from '../components/Commentaries.vue'

export default {
    name: 'detail',
    components: {
        Commentaries
    },
    data () {
        return {
            result: null,
            commentKey: 0
        }
    },
    mounted () {
        this.result = getDetailsTmdb(this.$route.params.type, this.$route.params.filmId, 'en')
    },
    computed: {
        imageSrc () {
            return `https://image.tmdb.org/t/p/w500/${this.result ? this.result.poster_path : ''}`
        },

    },
    methods: {
        forceRerender() {
        this.commentKey += 1;  
        }
    }
}
</script>

<style scoped>

img {
    width: 200px;
    margin-top: 47px;
}

</style>
