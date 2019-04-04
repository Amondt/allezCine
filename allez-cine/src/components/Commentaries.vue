<template>
    <div id="comments">
        <h2>Commentaires</h2>
        <form id="addCom" @submit="addComment">
            <input type="text" name="title" placeholder="Titre" require>
            <textarea type="text" name="comment" placeholder="Commentaire" require></textarea>
            <button type="submit" id="submitBtn">Ajouter le commentaire</button>
        </form>
        <div v-if="comments" class="container">
            <div v-for="(comment, index) in comments" :key="index" class="comment">
                <span class="delete" @click="delComment(comment.id)">X</span>
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
</template>

<script>

import { getComments, createComment, deleteComment } from '../../apis/commentsDbApi/commentsDbApiMethods.js'

export default {
    name: 'commentaries',
    data () {
        return {
            comments: null,
        }
    },
    props: {
        forceRerender: {
            type: Function
        }
    },
    mounted () {
        this.comments = getComments(this.$route.params.filmId)
    },
    methods: {
        addComment(e) {
            e.preventDefault()
            this.forceRerender()
            if (e.target.title.value != '' && e.target.comment.value != '') {
                createComment(this.$route.params.filmId, e.target.title.value, e.target.comment.value)
            }
        },
        delComment(id) {
            deleteComment(id)
            this.forceRerender()
        }
    }
}
</script>

<style>

.comment {
    width: 250px;
}

.container {
    display: flex;
    flex-flow: row wrap;
}

.delete {
    cursor: pointer;
}

</style>
