import {createSlice} from "@reduxjs/toolkit"
const au = createSlice({
    name: 'au',
    initialState: {ly: 6},
    reducers: {
        lw: (ki) => {
            ki.ly += 5
            console.log(ki.ly);
        },
        qu: (ki) => {
            ki.ly -= 2
            console.log(ki.ly);
        }
    }
})

export const {lw, qu} = au.actions
export default au.reducer