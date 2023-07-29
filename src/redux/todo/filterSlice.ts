import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED'
}

const filterSlice = createSlice({
    name: 'visibilityFilter',
    initialState: VisibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilter(state, action: PayloadAction<string>) {
            state = action.payload
            return state
        }
    }
})

export const { setVisibilityFilter } = filterSlice.actions
export default filterSlice.reducer