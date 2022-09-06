import thunkMiddleware from 'redux-thunk'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector,} from "react-redux"
import {root} from "./root";
// объединяя reducer-ы с помощью combineReducers,
export const rootReducer = combineReducers({
  root,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
export type AppDispatch  = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

