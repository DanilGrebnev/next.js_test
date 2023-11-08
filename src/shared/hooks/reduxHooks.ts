import { createStore } from "@/Providers/ReduxProvider"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

type RootState = ReturnType<typeof createStore>["getState"]
type AppDispatch = ReturnType<typeof createStore>["dispatch"]

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<RootState>> = useSelector
