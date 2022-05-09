import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clearTodo: () => {
            return {items: []} 
        }
    }
})
//Exporting action to todoSlice.actions
export const { addTodo, removeOne, clearTodo } = todoSlice.actions
//Exporting component as default component
export default todoSlice.reducer