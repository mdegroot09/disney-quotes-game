<template>
  <div class="home w-full h-full grid justify-center items-center">
    <h1 class="font-bold text-4xl h-full grid justify-center items-end m-1">
      <span class="text-center">The Movie Quoter</span>
    </h1>
    <h3 class="text-center text-xl m-7">
      Discover just how bad you are at quoting movies
    </h3>
    <div class="h-full grid justify-center items-start">
      <router-link to="/quiz" class="bg-blue-800 h-14 w-28 text-center text-white grid items-center rounded-lg">
        Begin
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  grid-template-rows: 1fr 150px 1fr;
}
</style>
