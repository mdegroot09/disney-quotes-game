<template>
  <HighScores/>
  <Background/>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/quiz">Quiz</router-link> -->
  </div>
  <router-view/>
</template>

<script>
import HighScores from './components/HighScores.vue'
import Background from './components/Background.vue'
import movieQuote from 'popular-movie-quotes'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    HighScores,
    Background
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
