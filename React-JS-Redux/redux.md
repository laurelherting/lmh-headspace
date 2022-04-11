# Redux basics

1. ref doc = https://redux.js.org/api/store
2. store
   holds state tree of app
   dispatch an action on it to change state
   not a class
   it's an obj with a few methods on it
   To create it, pass root reducing function to createStore
3. store methods
   -getState() = returns current state
   -dispatch(action) = dispatches action - only way to trigger state change
   -subscribe(listener) = adds a change listener - called anytime an action is dispatched
   -replaceReducer(nextReducer) = replaces the reducer currently used by the store to
   calculate the state, it's an advanced API

# 3 components contained in state/state tree:

1. simple or complex app?
   simple: to do app
   complex: lots of UIs
2. State tree is redundant: you can’t change/alter
   structure defined type, property string
   actions ex. increment and decrement
3. Pure and impure functions
   pure: don’t overwrite, returns an array
   impure: may have side effects, can overwrite values that you pass to them
   sometimes the functions you write have to be pure
   this function is called 'the Reducer'
4. Pure function
   Takes another approach
   Angular now picking up- takes 'previous state' & the action being dispatched
   ‘dispatching action’ & returns the ‘next state’ of your action

Redux Store, dispatch dummy action
dispatch({}); // 5

# Increment/decrement es6, when function defined in an object:

`onClick()`

Basics of Redux-thunk
Action creators, w/ Diagram
Section 7, lecture 76
https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/7605096?start=0

Tech interview Q:
.then()

## this statement returns a promise

    Axis.get();

    Once promise is resolved, dispatch an action, that’s sent off to all of our reducers

Action creators

old= const App = () => {}
Refactored, new=class App extends Component { render() return () }

Refactor app component, rather than make it a functional component, it should be class-based
Instad. That way we can access nice life-cycle method which will be automatically called. Once refactored use it to call action creator.

componentDidMount is preferred location of calling an initial AJAX request

Time not a big difference in time response between componentWillMount and componentDidMount

Uppercase and Lowercase Filename

- Uppercase file name
  - Components return objects or classes
    - ex. `Src/components/Header.js`
- Lowercase filename
  - Returns a function
    - Traditionally labeled w/ Lowercase leading chars
      - ex. `src/utils/validateEmails.js`

# Redux Thunk

- doc = https://redux.js.org/usage/writing-logic-thunks
- writing logic with thunks
- thunk = piece of code that does some display work
- write a func or code that can be used to perform the work later
- pattern of writing functions with logic inside that can interact
  with Redux store's dispatch and getState methods
- Thunks are the standard approach for writing async logic in Redux apps, commonly used for data fetching
