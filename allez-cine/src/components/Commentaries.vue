<template>
    <div id="comments" >
        <h2>Commentaires</h2>
        <md-card class="md-elevation-10">
            <form id="addCom" @submit="addComment">
                    <md-field>
                        <label style="margin-left:20px" for="title">Titre</label>
                        <md-input name="title"></md-input>
                    </md-field>

                <md-card>
                    <md-field >
                        <label for="comment">Commentaire</label>
                        <md-textarea name="comment"></md-textarea>
                    </md-field>
                </md-card>

                <md-button class="md-raised md-primary" type="submit">Ajouter le commentaire</md-button>
            </form>
        </md-card>
        <md-card class="md-elevation-10">
            <div v-if="comments" class="container" md-with-hover>
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
        </md-card>
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

<style scoped>
img {
    float: left;
}

.md-field .md-input, .md-field .md-textarea {
    height: 32px;
    padding: 0;
    display: block;
    flex: 1;
    border: none;
    background: none;
    transition: .4s cubic-bezier(.25,.8,.25,1);
    transition-property: font-size,padding-top,color;
    font-family: inherit;
    font-size: 16px;
    line-height: 32px;
    padding-left: 15px;
}

h2 {
    text-align: left;
}

.md-primary {
    background-color: red;
    color: #ffffff;
    border-radius: 3px;
    margin-bottom: 30px;
    
}

#comments {
    width: 100%;
    margin: auto;
}

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

.m-card {
    border-radius: 10px;
}
</style>
