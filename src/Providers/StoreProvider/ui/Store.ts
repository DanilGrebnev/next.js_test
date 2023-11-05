import { PayloadAction, configureStore, createReducer, createSlice } from "@reduxjs/toolkit"
import { RootSchema } from "./RootSchema"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const createStore = () => {
    const store = configureStore<RootSchema>({
        reducer: {
            counter: counterSlice.reducer,
        },
    })

    return store
}

export type RootState = ReturnType<typeof createStore>["getState"]

export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
