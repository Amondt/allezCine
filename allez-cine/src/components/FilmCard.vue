<template>
    <div id="card" @click="displayDetails" class='md-elevation-4'>
        <v-layout v-if="film.id" column fill-height justify-space-between class="text-xs-center">
            <div>
                <img :src="this.imageSrc" alt="film poster">
                <h4 class='mt-2'>{{ film.title || film.name }}</h4>
            </div>
            <p class="mb-2">{{ film.release_date != null ? film.release_date.split('-')[0] : film.first_air_date.split('-')[0] }}</p>
        </v-layout>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
export default {
    name: 'card',
    data () {
        return {
            imageSrc: this.film.poster_path ? `https://image.tmdb.org/t/p/w500/${this.film.poster_path}` : '/assets/img/salut.png',
            type: this.film.title ? 'movie' : 'tv'
        }
    },
    props: {
        film: {
            type: Object
        }
    },
    methods: {
        displayDetails() {
            this.$router.push(`/details/${this.type}/${this.film.id}`)
        }
    }
}
</script>

<style scoped>
#card {
    transition: 0.1s;
    width: 140px;
    height: 316px;
    margin: 10px;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    box-shadow: 0 0px 0px 0px rgba(0,0,0,.2), 0 0px 1px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)
}

#card:hover {
    filter: grayscale(40%);
    cursor: pointer;
    transform: scale(1.05)
}

img {
    width: 100%;
    border-radius: 3px 3px 0 0;
}
</style>
