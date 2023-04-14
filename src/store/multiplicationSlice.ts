import { createSlice } from '@reduxjs/toolkit'
interface IMultiplicationSlice {
    firstNum: number,
    secondNum: number
}
const initialState: IMultiplicationSlice = {
    firstNum: 0,
    secondNum: 0,
}

const multiplicationSlice = createSlice({
    name: 'multiplication',
    initialState,
    reducers: {
        setFirstNum: (state, payload) => {
            state.firstNum = payload.payload;
        },
        setSecondNum: (state, payload) => {
            state.firstNum = payload.payload;
        }

    }
})

export const { setFirstNum, setSecondNum } = multiplicationSlice.actions
export default multiplicationSlice.reducer;