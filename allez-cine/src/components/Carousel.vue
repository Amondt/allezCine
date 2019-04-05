<template>
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides" 
        class='slide'
        :key="slide.id">
        <h4> {{ slide.title }} </h4>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='button1' @click="previous">≺</button>
      <button class='button1' @click="next">≻</button>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'LASTEST ONLINE MOVIES ',
          id: 1
        },
        {
          title: 'I am Slide B',
          id: 2
        },
        {
          title: 'I am Slide C',
          id: 3
        },
        {
          title: 'I am Slide D',
          id: 4
        },
        {
          title: 'I am Slide E',
          id: 5
        }
      ]
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
  }
}
</script>


<style scoped>
.md-field {
  box-shadow: none;
}

div.carousel {
    width: 100%;
    background-color: blue;
}

div.slide {
    width: 100%;
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
  width: 24em;
  min-height: 25em;
}

.slide[data-v-e3565ce0] {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20em;
    flex: 0 0 0em;
    height: 100%;
    margin: 1em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0.1em dashed #000;
    border-radius: 0%;
    -webkit-transition: -webkit-transform 1.3s ease-in-out;
    transition: -webkit-transform 1.3s ease-in-out;
    transition: transform 1.3s ease-in-out;
    transition: transform 1.3s ease-in-out, -webkit-transform 1.3s ease-in-out;
}



.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
div.slide{
    width:400px!important;
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