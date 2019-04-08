<template>
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">

      <div
        v-for="(slide, index) in slides" 
        class='slide'
        :key="index">
        <img :src="slide.imageSrc" alt="poster image">
      </div>
    </transition-group>
  </div>
</template>


<script>

import { getDataTmdbMov } from '../../apis/tmdbApi/tmdbApiMethods.js'

export default {
  data () {
    return {
      slides: [
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: 1,
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: 2
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: 3
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: 4
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: 5
        }
      ],
      films: null,
      swipe: null
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  },
  created () {
    this.films = getDataTmdbMov('movie', 'popularity.desc', 'en')
  },
  mounted () {
    for (let i = 0; i <= 5; i++) {
      this.slides[i].imageSrc = (this.films[i].poster_path ? `https://image.tmdb.org/t/p/w500/${this.films[i].poster_path}` : '/assets/img/salut.png')
    }
  },
  beforeMount () {
    const self = this 
    setInterval(function() { self.next() }, 10000)
  }
}
</script>


<style scoped>
.md-field {
  box-shadow: none;
}

div.carousel {
    width: 100%;
    /* background-color: blue; */
}

div.slide {
    /* width: 100%; */
}

.carousel-view {
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 25em;
}

.slide[data-v-e3565ce0] {
    -webkit-box-flex: 0;
    -ms-flex: 2 0 26em;
    flex: 2 0 26em;
    height: 400px;
    margin: 0em 5em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 0%;
    -webkit-transition: -webkit-transform 1.3s ease-in-out;
    transition: -webkit-transform 1.3s ease-in-out;
    transition: transform 1.3s ease-in-out;
    transition: transform 1.3s ease-in-out, -webkit-transform 1.3s ease-in-out;
}

img {
  height: 100%!important;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
div.slide{
    /* width:400px!important; */
}

button  {
    margin-top: 12px;
    width: 80px;
    color: #494949 !important;
    text-transform: uppercase;
    background: #ffffff;
    padding: 0px;
    border: 1px solid #494949 !important;
    border-radius: 6px;
    display: inline-block;
    font-size: 1.5em;
    font-weight: 900;
}

button:hover {
  color: #ffffff !important;
  background: #b9b9b8;
  border-color: #575655 !important;
  transition: all 0.4s ease 0s;
}
@media all and (max-width:30em){
  a.button{
    display: block;
    margin: 0.4em auto;
  }
}
</style>