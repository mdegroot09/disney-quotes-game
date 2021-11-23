<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HighScores/>
</template>

<script>
import HighScores from './components/HighScores.vue'
import movieQuote from 'popular-movie-quotes'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    HighScores
  },
  mounted(){
    let quotes = movieQuote.getAll()
    console.log(quotes)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkslateblue;
}
</style>
