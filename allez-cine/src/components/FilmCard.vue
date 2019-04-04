<template>
    <div id="card" @click="displayDetails" class='md-elevation-4'>
        <img :src="this.imageSrc" alt="film poster">
        <h3>{{ film.title || film.name }}</h3>
        <p>{{ film.release_date || film.first_air_date }}</p>
    </div>
</template>

<script>
export default {
    name: 'card',
    data () {
        return {
            imageSrc: `https://image.tmdb.org/t/p/w500/${this.film.poster_path}`
        }
    },
    props: {
        film: {
            type: Object
        }
    },
    methods: {
        displayDetails() {
            this.$router.push(`/details/${this.film.id}`)
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
    width: 200px;
    margin: 20px;
    border-radius: 3px;
    background: #D5D8DC;
}
img {
    width: 100%;
    border-radius: 3px 3px 0 0;
}
</style>
