// import

// define actions
    // 1. start timer
    // 2. stop timer
    // 3. count

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';
    
// action creators

function startTimer() {
    //when press start button
    return {
        type: START_TIMER
    }
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

// define reducer

const TIMER_DURATION = 1500;

//상태초기화
const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION,
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default: 
            return state;
    }
}

// reducer functions

function applyStartTimer(state) {
    return {
        // state 덮어쓰기
        ...state,
        isPlaying: true,
    };
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
    };
}   

function applyAddSecond(state) {
    if(state.elapsedTime < TIMER_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1  
        };
    } else {
        return {
            ...state,
            isPlaying: false,
        };
    }
}

// export action creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond,
};

export { actionCreators };

// export reducer

export default reducer;