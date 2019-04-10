<template>
    <div id="comments" >
        <h2>Commentaires</h2>
        <div class="allComment">
            <form id="addCom" @submit="addComment">
                <div class='inputTitle'>
                    <label for="title"></label>
                    <textarea style="height: 50px; border-radius: 15px;" placeholder='Titre...' name="title"/>
                </div>
                <div class="inputComment">
                    <label for="comment"></label>
                    <textarea style="height: 150px; border-radius: 15px;" placeholder="Ajouter un commentaire..." class="textComment" name="comment"/>
                </div>
                <md-button class="md-raised md-primary" type="submit">Ajouter le commentaire</md-button>
            </form>
        </div>
        <div class="subComment">
            <div v-if="comments" class="subContainer">
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
.md-card{
box-shadow: 0 0px 0px 0px rgba(0,0,0,.2), 0 0px 1px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
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
    margin: 0;
}

.delete {
    cursor: pointer;
}

.m-card {
    border-radius: 10px;
}

.title{
    margin:0;
}

textarea {
    resize:none;
    padding:10px;
    border: 1px solid #cdcfcd;
    width: 100%;
}

.allComment{
    box-shadow: -1px 2px 4px 1px rgba(190, 190, 190, 0.7), -1px 2px 20px rgba(255, 255, 255, 0.6);
    padding: 15px;
    border-radius: 10px;
    margin: 20px;
}
.subComment{
    box-shadow: -1px 2px 4px 1px rgba(190, 190, 190, 0.7), -1px 2px 20px rgba(255, 255, 255, 0.6);
    padding: 15px;
    border-radius: 10px;
    margin:20px;
}
.comment{
    margin:auto;
    text-align: left;
}

.inputTitle, label {
    width: 100%;
}
</style>
