<template>
    <div class="quiz w-full h-full grid justify-center items-center">
        <div class="quizModule grid grid-rows-3">
            <div class="grid grid-cols-2 text-3xl">
                <span class="grid justify-start items-center">Quote #{{currentQuestion + 1}}</span>
                <span class="grid justify-end items-center">Score: {{currentScore}}/{{completedQuestions}}</span>
            </div>
            <div class="question grid grid-rows-5 justify-items-start text-3xl">
                <p class="w-full text-center px-6 py-8 text-4xl">"{{correctQuote}}"</p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(0)" ref="movie0">a. {{movie0}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(1)" ref="movie1">b. {{movie1}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(2)" ref="movie2">c. {{movie2}}</button>
                </p>
                <p class="grid items-center px-6">
                    <button class="choice hover:text-blue-800" @click="this.checkIfCorrect(3)" ref="movie3">d. {{movie3}}</button>
                </p>
            </div>
            <div class="grid justify-center">
                <button class="btn hide" @click="this.nextQuestion()" ref="nextBtn">next</button>
                <button class="btn hide" @click="this.newQuiz()" ref="newBtn">new</button>
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
        return this.initiateQuiz()
    },
    methods: {
        initiateQuiz(){
            let quotes = movieQuote.getSomeRandom(40)
            let movie0 = quotes[0].movie
            let movie1 = quotes[1].movie
            let movie2 = quotes[2].movie
            let movie3 = quotes[3].movie
            let correctIndex = Math.floor(Math.random() * 4)
            let correctQuote = quotes[correctIndex].quote
            let completedQuestions = 0
            let currentQuestion = 0
            let responses = [{correctIndex, choice: null}]

            return {
                quotes,
                movie0,
                movie1,
                movie2,
                movie3,
                correctIndex,
                correctQuote,
                completedQuestions,
                currentQuestion,
                responses
            }
        },
        checkIfCorrect(i){
            if(this.completedQuestions >= 10){
                this.$refs['nextBtn'].classList.value = 'hide'
                return
            }
            this.completedQuestions++
            if(this.completedQuestions == 10){
                this.$refs['nextBtn'].classList.value = 'hide'
                this.$refs['newBtn'].classList.value = 'btn'
            }
            else {
                this.$refs['nextBtn'].classList.value = 'btn'
            }
            if(i === this.correctIndex){
                this.$store.commit('updateCurrentScore')
                let correctRef = `movie${i}`
                this.$refs[correctRef].classList.value = 'choice text-green-600'
            }
            else {
                let incorrectRef = `movie${i}` 
                this.$refs[incorrectRef].classList.value = 'choice text-red-600'

                let correctRef = `movie${this.correctIndex}`
                this.$refs[correctRef].classList.value = 'choice text-green-600'
            }
        },
        resetDisplays(){
            this.$refs['movie0'].classList.value = 'choice hover:text-blue-800'
            this.$refs['movie1'].classList.value = 'choice hover:text-blue-800'
            this.$refs['movie2'].classList.value = 'choice hover:text-blue-800'
            this.$refs['movie3'].classList.value = 'choice hover:text-blue-800'
        },
        nextQuestion(){
            this.$refs['nextBtn'].classList.value = 'btn hide'
            this.currentQuestion++
            if(this.completedQuestions >= 10){
                return
            }
            else {
                this.resetDisplays()
                this.movie0 = this.quotes[this.completedQuestions * 4].movie
                this.movie1 = this.quotes[this.completedQuestions * 4 + 1].movie
                this.movie2 = this.quotes[this.completedQuestions * 4 + 2].movie
                this.movie3 = this.quotes[this.completedQuestions * 4 + 3].movie
                this.correctIndex = Math.floor(Math.random() * 4)
                this.correctQuote = this.quotes[(this.completedQuestions * 4) + this.correctIndex].quote
            }
        },
        newQuiz(){
            let data = this.initiateQuiz()
            this.quotes = data.quotes
            this.movie0 = data.movie0
            this.movie1 = data.movie1
            this.movie2 = data.movie2
            this.movie3 = data.movie3
            this.correctIndex = data.correctIndex
            this.correctQuote = data.correctQuote
            this.completedQuestions = data.completedQuestions
            this.currentQuestion = data.currentQuestion
            this.responses = data.responses            
            this.resetDisplays()
            this.$store.commit('resetCurrentScore')
            this.$refs['newBtn'].classList.value = 'btn hide'
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
    grid-template-rows: auto repeat(4, 1fr);
}
.choice {
    padding: 10px 0;
}
.btn {
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    --tw-bg-opacity: 1;
    background-color: rgba(30, 64, 175, var(--tw-bg-opacity));
    border-width: 2px; 
    width: 7rem/* 112px */;
    height: 3rem/* 48px */;
    margin-bottom: 2.5rem/* 40px */;
    border-radius: 0.5rem/* 8px */;
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    font-weight: 600;
}
.hide {
    opacity: 0;
}
</style>