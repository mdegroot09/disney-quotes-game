<template>
    <div class="quiz w-full h-full grid justify-center items-center">
        <div class="quizModule grid grid-rows-2">
            <div class="grid grid-cols-2 text-3xl">
                <span class="grid justify-start items-center">Quote #1</span>
                <span class="grid justify-end items-center">Score: 0</span>
            </div>
            <div class="question grid grid-rows-5 justify-items-start text-4xl">
                <p class="w-full text-center px-6 py-8 text-6xl">"{{quote}}"</p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800">{{movie1}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800">{{movie2}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800">{{movie3}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800">{{movie4}}</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import movieQuote from 'popular-movie-quotes'

export default {
    name: 'Quiz',
    setup(){
        let quotes = movieQuote.getSomeRandom(4)
        console.log(quotes)

        const choice = Math.ceil(Math.random() * 4)
        const quote = quotes[choice].quote
        const movie1 = quotes[0].movie
        const movie2 = quotes[1].movie
        const movie3 = quotes[2].movie
        const movie4 = quotes[3].movie

        return {
            quote,
            movie1,
            movie2,
            movie3,
            movie4
        }
    },
    data(){
        return {

        }
    },
    mounted(){
        
    }
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