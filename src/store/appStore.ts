import { configureStore } from '@reduxjs/toolkit'
import multiplicationSlice from './multiplicationSlice'

const appStore = configureStore({
    reducer: {
        multiplication: multiplicationSlice
    }
})

export default appStore;