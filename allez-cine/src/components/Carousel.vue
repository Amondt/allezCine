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
      <button class='button1' @click="previous">⇦</button>
      <button class='button1' @click="next">⇨</button>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'I am Slide A',
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
.carousel-view {
    width: 100vw;
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
.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 0%;
  transition: transform 1.3s ease-in-out;
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
    width: 100px;
    color: #494949 !important;
    text-transform: uppercase;
    background: #ffffff;
    padding: 0px;
    border: 1px solid #494949 !important;
    border-radius: 6px;
    display: inline-block;
    font-size: 2em;
    
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