import { ReactNode } from "react"
import { Provider } from "react-redux"

import { FC } from "react"
import { createStore } from "./Store"
import { createWrapper } from "next-redux-wrapper"

interface IStoreProvideProps {
    children?: ReactNode
    store: ReturnType<typeof createStore>
}

export const StoreProvider: FC<IStoreProvideProps> = (props) => {
    const { children, store } = props

    return <Provider store={store}>{children}</Provider>
}

export const storeWrapper = createWrapper<ReturnType<typeof createStore>>(createStore)
