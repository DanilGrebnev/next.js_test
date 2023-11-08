"use client"

import { Provider } from "react-redux"
import { createStore } from "../store/createStore"

interface IStoreProvider {
    children: React.ReactNode
}

export const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
    const store = createStore()

    return <Provider store={store}>{children}</Provider>
}
