console.log('-index.js-');
import { combineReducers, createStore } from 'redux'


//------------------------------------------------------
// Action(s)
const INCREMENT = "increment"
const DECREMENT = "decrement"
const ADD_NEW_REVIEW = "add-new-review"
//------------------------------------------------------
// Action creator(s)
function increment(value) {
    return { type: INCREMENT, value };
}
function decrement(value) {
    return { type: DECREMENT, value };
}
function addNewReview(review) {
    return { type: ADD_NEW_REVIEW, review };
}
//------------------------------------------------------
// reducer(s)

function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer..');
    switch (action.type) {
        case INCREMENT:
        case ADD_NEW_REVIEW:
            return Object.assign({}, state, { count: state.count + (action.value ? action.value : 1) })
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value })
        default:
            return state;
    }
}

function reviewsReducer(state = [], action) {
    console.log('reviewsReducer..');
    switch (action.type) {
        case ADD_NEW_REVIEW:
            return [...state, action.review]
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer
});

//------------------------------------------------------

// store 
let preloadedState = {
    counter: {
        count: 10
    },
    reviews: [
        { stars: 5, author: 'nag@gmail.com', body: 'bla bla' }
    ]
}
let store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//------------------------------------------------------


// View
document.getElementById('inc')
    .addEventListener('click', function () {
        store.dispatch(increment(1))
    });
document.getElementById('dec')
    .addEventListener('click', function () {
        store.dispatch(decrement(1))
    });
document.getElementById('newReview')
    .addEventListener('click', function () {
        let newReview = { stars: 5, author: 'nag@gmail.com', body: '..' }
        store.dispatch(addNewReview())
    });


let span = document.getElementById('dsp');

store.subscribe(function () {
    let state = store.getState();
    span.innerText = state.counter.count
})
//------------------------------------------------------    