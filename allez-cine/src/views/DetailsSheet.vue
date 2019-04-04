<template>
    <div id="main">
        <div id="details">
            <div v-if="result">
                <img :src="imageSrc" alt="poster film">
                <h1>{{ result.title }} ({{ result.release_date.split('-')[0] }})</h1><span>{{ result.vote_average }}</span>
                <h3>Synopsis</h3>
                <p>{{ result.overview }}</p>
                <span v-for="(genre, index) in result.genres" :key="index">{{ genre.name }}</span>
            </div>
            <div v-else>
                Loading...
            </div>
        </div>
        <div id="comments">
            <h2>Commentaires</h2>
            <form action="" method="post" id="addCom">
                <input type="text" name="title" placeholder="Titre">
                <textarea type="text" name="comment" placeholder="Commentaire"></textarea>
                <button type="submit" id="submitBtn">Ajouter le commentaire</button>
            </form>
            <div v-if="comments">
                <div v-for="(comment, index) in comments" :key="index" class="comment">
                    <h3>{{ comment.titleComment }}</h3>
                    <p>{{ comment.descriptionComment }}</p>
                    <p>{{ comment.dateComment }}</p>
                    <span>{{ comment.counterComment }}</span>
                </div>
            </div>
            <div v-else>
                Loading...
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
            comments: null,
        }
    },
    mounted () {
        this.result = getDetailsTmdb(this.$route.params.type, this.$route.params.filmId, 'en'),
        this.comments = getComments(this.$route.params.filmId)
    },
    computed: {
        imageSrc () {
            return `https://image.tmdb.org/t/p/w500/${this.result ? this.result.poster_path : ''}`
        }
    }
}
</script>

<style scoped>

img {
    width: 200px;
}
</style>
