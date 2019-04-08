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
            imageSrc: (this.film.poster_path ? `https://image.tmdb.org/t/p/w500/${this.film.poster_path}` : '/assets/img/salut.png'),
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
    transition: 0.1s;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 140px;
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

@media only screen and (max-width: 600px) {
    #card {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 440px;
    margin: 10px;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    box-shadow: 0 0px 0px 0px rgba(0,0,0,.2), 0 0px 1px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)
}
.container[data-v-fae5bece] {
    margin: 20px 25px!important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}
}


</style>
