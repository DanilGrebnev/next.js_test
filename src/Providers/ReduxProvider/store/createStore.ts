import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { heroesReducer } from "@/entities/heroes"

export const createStore = () => {
    const store = configureStore<StateSchema>({
        reducer: {
            heroes: heroesReducer,
        },
    })

    return store
}

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>
export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
