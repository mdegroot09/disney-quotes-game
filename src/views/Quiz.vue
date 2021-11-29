<template>
    <div class="quiz w-full h-full grid justify-center items-center">
        <div class="quizModule">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Quiz'
}
</script>

<style>
.quiz {
    position: absolute;
    top: 0;
}
.quizModule{
    width: calc(100vw - 50px);
    max-width: 800px;
    height: calc(100vh - 200px);
    max-height: 600px;
    background: blue;
}
</style>