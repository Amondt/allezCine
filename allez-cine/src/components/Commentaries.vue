<template>


 <!-- <div class="md-layout md-gutter">
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
  </div> -->
    <div id="comments" >
        <h2>Commentaires</h2>
        <md-card class="md-elevation-10">
        

        <form id="addCom" @submit="addComment">
             <md-field>
      <label style="margin-left:20px">Titre</label>
      <md-input v-model="initial"></md-input>
    </md-field>

            <md-card>
                <md-field >
                    <label>Commentaire</label>
                    <md-textarea v-model="textarea"></md-textarea>
                </md-field>
            </md-card>

            <md-button class="md-raised md-primary">Ajouter le commentaire</md-button>
        </form>

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
h2 {
    text-align: left;
}

.md-primary {
    background-color: red;
    color: #ffffff;
    border-radius: 6px;
    
}

#comments {
    width: 800px;
    max-width: 900px;
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
