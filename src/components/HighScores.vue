<template>
    <div class="scores w-screen h-auto font-bold text-3xl">
        <h3>High Score: <span>{{highScore}}</span></h3>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: mapState({
        highScore: state => state.highScore
    })
}
</script>

<style>
.scores {
    padding: 15px 0 0 20px;
    position: absolute;
}
</style>