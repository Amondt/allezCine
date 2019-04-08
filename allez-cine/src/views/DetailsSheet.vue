<template>
    <div id="main">
        <div v-if="result === 404">
            Error
        </div>
        <div v-else-if="result">
            <div id="details">
                <div v-if="result.title" class="md-layout md-gutter">
                    <img :src="imageSrc" alt="poster film" class="md-layout-item">
                    <div class="md-layout-item">
                    <h1>{{ result.title }} ({{ result.release_date.split('-')[0] }})</h1><span>{{ result.vote_average }}</span>
                    <h3>Synopsis</h3>
                    <p>{{ result.overview }}</p>
                    <span v-for="(genre, index) in result.genres" :key="index">{{ genre.name }}</span>
                    </div>
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
h1 {
    margin-top: 50px;
    text-align: left;
}
h3 {
    text-align: left;
}

p {
    text-align: left;
}

img {
    width: 20%;
    margin-top: 47px;

}
span {
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgb(252, 252, 252);
    border-radius: 6px;
    box-shadow: 0 0 1px 0 gray, 0 1px 10px 0 gray;
    padding: 5px 15px 5px 15px;
}

</style>
