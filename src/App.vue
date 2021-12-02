<template>
  <HighScores/>
  <Confetti/>
  <router-view/>
</template>

<script>
import HighScores from './components/HighScores.vue'
import Confetti from './components/Confetti.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    HighScores,
    Confetti
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkblue;
}
</style>
