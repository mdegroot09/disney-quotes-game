import {createStore} from 'vuex'

export default createStore({
    state: {
        highScore: 0,
        currentScore: 0
    },
    mutations: {
        updateCurrentScore(state){
            state.currentScore++
            if(state.currentScore > state.highScore){
                state.highScore = state.currentScore
            }
        }
    }
})