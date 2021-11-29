<template>
    <div class="quiz w-full h-full grid justify-center items-center">
        <div class="quizModule grid grid-rows-2">
            <div class="grid justify-center items-center text-3xl">Quote 1/10</div>
            <div class="question grid grid-rows-5 justify-items-start text-4xl">
                <p class="grid w-full justify-center items-center px-6 py-8 text-6xl">"I am a really difficult quote"</p>
                <p class="grid items-center px-6">
                    <button>movie 1</button>
                </p>
                <p class="grid items-center px-6">
                    <button>movie 2</button>
                </p>
                <p class="grid items-center px-6">
                    <button>movie 3</button>
                </p>
                <p class="grid items-center px-6">
                    <button>movie 4</button>
                </p>
            </div>
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
    grid-template-rows: auto 1fr;
}
.question {
    grid-template-rows: auto repeat(5, 1fr);
}
</style>