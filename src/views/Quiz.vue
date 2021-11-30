<template>
    <div class="quiz w-full h-full grid justify-center items-center">
        <div class="quizModule grid grid-rows-2">
            <div class="grid grid-cols-2 text-3xl">
                <span class="grid justify-start items-center">Quote #1</span>
                <span class="grid justify-end items-center">Score: {{currentScore}}/{{currentQuestion}}</span>
            </div>
            <div class="question grid grid-rows-5 justify-items-start text-4xl">
                <p class="w-full text-center px-6 py-8 text-6xl">"{{correctQuote}}"</p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(0)">a. {{movie1}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(1)">b. {{movie2}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(2)">c. {{movie3}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(3)">d. {{movie4}}</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import movieQuote from 'popular-movie-quotes'
import {mapState} from 'vuex';

export default {
    name: 'Quiz',
    data(){
        // let quotes = movieQuote.getSomeRandom(40)
        // console.log(quotes)

        // let movie1 = quotes[0].movie
        // let movie2 = quotes[1].movie
        // let movie3 = quotes[2].movie
        // let movie4 = quotes[3].movie
        // let correctIndex = Math.floor(Math.random() * 4)
        // let correctQuote = quotes[correctIndex].quote
        // let currentQuestion = 0

        // return {
        //     quotes,
        //     movie1,
        //     movie2,
        //     movie3,
        //     movie4,
        //     correctIndex,
        //     correctQuote,
        //     currentQuestion
        // }
        return this.initiateQuiz()
    },
    methods: {
        initiateQuiz(){
            let quotes = movieQuote.getSomeRandom(40)
            console.log(quotes)

            let movie1 = quotes[0].movie
            let movie2 = quotes[1].movie
            let movie3 = quotes[2].movie
            let movie4 = quotes[3].movie
            // let correctIndex = Math.floor(Math.random() * 4)
            let correctIndex = 0
            let correctQuote = quotes[correctIndex].quote
            let currentQuestion = 0

            return {
                quotes,
                movie1,
                movie2,
                movie3,
                movie4,
                correctIndex,
                correctQuote,
                currentQuestion
            }
        },
        checkIfCorrect(i){
            if(i === this.correctIndex){
                this.$store.commit('updateCurrentScore', i)
            }
            this.nextQuestion()
        },
        nextQuestion(){
            console.log(this.correctIndex)
            console.log(this.quotes[(this.currentQuestion * 4) + this.correctIndex].movie)
            console.log(this.correctQuote)
            this.currentQuestion++
            if (this.currentQuestion < 10){
                this.movie1 = this.quotes[this.currentQuestion * 4].movie
                this.movie2 = this.quotes[this.currentQuestion * 4 + 1].movie
                this.movie3 = this.quotes[this.currentQuestion * 4 + 2].movie
                this.movie4 = this.quotes[this.currentQuestion * 4 + 3].movie
                this.correctIndex = Math.floor(Math.random() * 4)
                // this.correctIndex = 0
                this.correctQuote = this.quotes[(this.currentQuestion * 4) + this.correctIndex].quote
            }
        }
    },
    computed: mapState({
        highScore: state => state.highScore,
        currentScore: state => state.currentScore
    })
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