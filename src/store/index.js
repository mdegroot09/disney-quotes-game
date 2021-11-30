import {createStore} from 'vuex'

export default createStore({
    state: {
        highScore: 0,
        currentScore: 0
    },
    mutations: {
        updateCurrentScore(state, i){
            if(i > state.highScore){
                state.highScore = i
            }
            state.currentScore++
        }
    }
})