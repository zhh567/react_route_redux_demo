import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        other: (state) => {
            fetch('/api/').then(res => {
                console.log(`网络请求成功：${res}`)
            }).catch(err => {
                console.log(`网络请求失败：${err}`)
            })
            state.value += 10
        }
    }
})

export const { increment, decrement, other } = counterSlice.actions

export default counterSlice.reducer