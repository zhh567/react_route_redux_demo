import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import todosReducer from './todo/todoSlice'
import filterReducer from './todo/filterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
        filter: filterReducer,
    },
})