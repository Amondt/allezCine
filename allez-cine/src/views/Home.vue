<template>
    <div id="main">
        Test
        <div v-for="(result, index) in results" :key='index'>
            {{ result.title }} <br>
        </div>
    </div>
</template>

<script>
import { getDataTmdb } from '../../apis/tmdbApi/tmdbApiMethods.js'

export default {
    name: 'home',
    data () {
        return {
            results: null
        }
    },
    mounted () {
        this.results = getDataTmdb('movie', 'en', 'popularity.desc', '1')
    }
}
</script>

<style scoped>
    #main {
        background-color: rgb(255, 255, 255);
    }

</style>
