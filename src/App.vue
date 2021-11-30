<template>
  <HighScores/>
  <Background/>
  <router-view/>
</template>

<script>
import HighScores from './components/HighScores.vue'
import Background from './components/Background.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    HighScores,
    Background
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
