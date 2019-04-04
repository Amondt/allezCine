<template>
    <div id="main">
        <div id="details">
            <img :src="imageSrc" alt="poster film">
            <h1>{{ this.result.title }} ({{ this.result.release_date.split('-')[0] }})</h1><span>{{ this.result.vote_average }}</span>
            <h3>Synopsis</h3>
            <p>{{ this.result.overview }}</p>
            <span v-for="(genre, index) in this.result.genres" :key="index">{{ genre.name }}</span>
        </div>
        <div id="comments">
            <h2>Commentaires</h2>
            <form action="" method="post" id="addCom">
                <input type="text" name="title" placeholder="Titre">
                <textarea type="text" name="comment" placeholder="Commentaire"></textarea>
                <button type="submit" id="submitBtn">Ajouter le commentaire</button>
            </form>
            <div class="comment">  <!-- v-for -->

            </div>
        </div>
        
    </div>
</template>

<script>

import { getDetailsTmdb } from '../../apis/tmdbApi/tmdbApiMethods.js'
import { getComments, createComment, deleteComment } from '../../apis/commentsDbApi/commentsDbApiMethods.js'

export default {
    name: 'detail',
    data () {
        return {
            result: null,
        }
    },
    created () {
        this.result = getDetailsTmdb(this.$route.params.type, this.$route.params.filmId, 'en')
    },
    computed: {
        imageSrc () {
            return `https://image.tmdb.org/t/p/w500/${this.result.poster_path}`
        }
    }
}
</script>

<style scoped>

img {
    width: 200px;
}
</style>
