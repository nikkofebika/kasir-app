const redux = require('redux')
const createStore = redux.createStore
let initialState = {
  name: 'Nikko',
  age: 24
}

// 2. reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: 'Nikko FE'
      }
      break;
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + action.newAge
      }
      break;
    default:
      return state
      break;
  }
}

// 1. Store
const store = createStore(rootReducer)
console.log('init store', store.getState());

// 4. subscribe
store.subscribe(() => {
  console.log('subcribe', store.getState())
})

// 3. dispatch
store.dispatch({ type: 'CHANGE_NAME' });
store.dispatch({ type: 'ADD_AGE', newAge: 5 });
console.log('dispatch', store.getState());