<template>
  <div class='carousel-view'>
     <div class="textInImg">
       <h1>LATEST <span>ON</span>LINE <span>MO</span>VIES </h1>
     </div>
    <div v-if="films">
      <transition-group
        class='carousel'
        tag="div">
        <div v-for="(slide, index) in slides" class='slide' :key="index" @click="displayDetails(slide.id)">
            <img :src="slide.imageSrc" alt="poster image" class="query">
        </div>
        
      </transition-group>
    </div>
    <div v-else></div>
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
          id: null
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: null
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: null
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: null
        },
        {
          title: 'LASTEST ONLINE MOVIES ',
          imageSrc: null,
          id: null
        }
      ],
      films: null
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
    },
    displayDetails (id) {
      this.$router.push(`/details/movie/${id}`)
    }
  },
  created () {
    this.films = getDataTmdbMov('movie', 'popularity.desc', 'en')
  },
  mounted () {
    for (let i = 0; i < 5; i++) {
      this.slides[i].imageSrc = (this.films[i].poster_path ? `https://image.tmdb.org/t/p/w500/${this.films[i].poster_path}` : '/assets/img/salut.png')
      this.slides[i].id = this.films[i].id
    }
  },
  beforeMount () {
    const self = this 
    setInterval(function() { self.next() }, 10000)
  }
}
</script>


<style scoped>

.textInImg {
  color:#fff;
  text-align: center;
  position: relative;
  top:0px;
  width:80%;
  background-color:transparent;
  height: 70px;
}

span {
  color:red;
}


div.data-v-e3565ce0 {
  width: 100vw;
}


.md-field {
  box-shadow: none;
}

div.carousel {
  width: 100%;
  height: 200px;
}

.carousel-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5em;
}
.carousel {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 25em;
  max-width: 100vw;
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
  transition: .1s;
}
img:hover {
  border: 1px solid #5c5c5c;
  filter: grayscale(40%);
  cursor: pointer;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
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

@media only screen and (max-width: 600px) {
    .slide[data-v-e3565ce0][data-v-e3565ce0]{
          flex: 1 0 13em;
          margin: 4px;
          height: 0;
    }
    .textInImg[data-v-e3565ce0] {
      height: 0;
    }
    img{
      width: 80%;
      height: 230px!important;
    }
    h1{
      font-size: 25px;
    }
}

/* @media only screen and (min-width: 1200px) {
    .flex {

    }
}
@media only screen and (min-width: 960px){
.container {
    max-width: 1000px;
}
}

@media only screen and (max-width: 992px) {
    .flex {
        display: flex;
        flex-direction: row;
        text-align: left;
    }
}
@media only screen and (max-width: 768px) {
    .flex {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
} */
</style>