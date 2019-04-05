<template>
    <div id="card" @click="displayDetails" class='md-elevation-4'>
        <div v-if="film.id">
            <img :src="this.imageSrc" alt="film poster">
            <h3>{{ film.title || film.name }}</h3>
            <p>{{ film.release_date != null ? film.release_date.split('-')[0] : film.first_air_date.split('-')[0] }}</p>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
export default {
    name: 'card',
    data () {
        return {
            imageSrc: (this.film.poster_path ? `https://image.tmdb.org/t/p/w500/${this.film.poster_path}` : '../assets/not-aval.png'),
            type: (this.film.title ? 'movie' : 'tv')
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
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 140px;
    margin: 10px;
    border-radius: 3px;
    background: #D5D8DC;
}
img {
    width: 100%;
    border-radius: 3px 3px 0 0;
}
</style>
