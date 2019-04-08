<template>
    <div id="main">
        <div class="container">
            <div v-if="result === 404">
                Error
            </div>
            <div v-else-if="result">
                <div id="details">
                    <div v-if="result.title">
                        <div class="flex">
                            <img :src="imageSrc" alt="poster film">
                            <div class="infos">
                                <div id="stars" v-for="i in 5" :key="i">
                                    <font-awesome-icon v-if="5 - Math.round(result.vote_average / 2) < i" icon="star" />
                                    <font-awesome-icon v-else style="color: #9e9e9e;" icon="star" />
                                </div>
                                <h1>{{ result.title }} ({{ result.release_date.split('-')[0] }})</h1>
                                <h3>Synopsis</h3>
                                <p>{{ result.overview }}</p>
                                <span v-for="(genre, index) in result.genres" :key="index" class="genre">{{ genre.name }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <img :src="imageSrc" alt="poster film">
                        <h1>{{ result.name }} ({{ result.first_air_date.split('-')[0] }})</h1><span>{{ result.vote_average }}</span>
                        <h3>Synopsis</h3>
                        <p>{{ result.overview }}</p>
                        <span v-for="(genre, index) in result.genres" :key="index" class="genre">{{ genre.name }}</span>
                    </div>
                </div>
                <Commentaries :key="commentKey" :forceRerender="forceRerender"/>
            </div>
            <div v-else>
                Loading...
            </div>
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
@media only screen and (min-width: 1200px) {
    .container {
        display: block;
        margin: 50px auto;
        width: 60%;
    }
    .flex {
        display: flex;
        flex-direction: row;
        text-align: left;
    }
}
@media only screen and (max-width: 1200px) {
    .container {
        display: block;
        margin: 50px auto;
        width: 80%;
    }
    .flex {
        display: flex;
        flex-direction: row;
        text-align: left;
    }
}
@media only screen and (max-width: 992px) {
    .container {
        display: block;
        margin: 50px auto;
        width: 80%;
    }
    .flex {
        display: flex;
        flex-direction: row;
        text-align: left;
    }
}
@media only screen and (max-width: 768px) {
    .container {
        display: block;
        margin: 50px auto;
        width: 95%;
    }
    .flex {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
}
#details {
    margin-bottom: 50px;
}

img {
    height: 400px;
    border-radius: 3px;
    display: block;
    margin: auto;
}
.infos {
    margin-left: 20px;
}
#stars {
    display: flex;
    flex-direction: row;
    float: right;
}
h1 {
    margin-bottom: 50px;
}
p {
    margin-bottom: 50px;
}
.genre {
    margin: 50px 10px;
    padding: 5px 15px 5px 15px;
    background-color: #fcfcfc;
    border-radius: 6px;
    box-shadow: 0 0 1px 0 gray, 0 1px 10px 0 gray;
}

</style>
