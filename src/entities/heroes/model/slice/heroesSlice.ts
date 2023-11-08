import { createSlice } from "@reduxjs/toolkit"
import { IHeroesSchema } from "../types/reducerSchema"

const initialState: IHeroesSchema = {
    page: 1,
}

const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        incrementPage(state) {
            state.page = state.page--
        },

        decrementPage(state) {
            state.page = state.page++
        },
    },
})

export const { reducer: heroesReducer, actions: heroesActions } = heroesSlice
