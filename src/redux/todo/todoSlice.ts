import { createSlice, nanoid } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface TodoItem {
    id: string
    text: string
    completed: boolean
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: '1', text: 'Learn React', completed: false },
        { id: '2', text: 'Learn Redux', completed: false },
        { id: '3', text: 'Learn Redux-ToolKit', completed: false },
    ] as TodoItem[],
    reducers: {
        addTodo: {
            prepare: (text: string) => {
                return { payload: { id: nanoid(), text, completed: false } }
            },
            reducer: (state: TodoItem[], action: PayloadAction<TodoItem>) => {
                const uncompletedIton = state.filter(todo => todo.completed === false)
                const completedIton = state.filter(todo => todo.completed === true)
                uncompletedIton.push(action.payload)
                state = [...uncompletedIton, ...completedIton]
                return state
            },
        },
        doneTodo(state, action: PayloadAction<string>) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = true
                state.splice(state.indexOf(todo), 1)
                state.push(todo)
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    },
    // toggleTodo: (state, action) => {
    // }
})

export const { addTodo, doneTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer