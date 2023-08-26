import { createSlice } from "@reduxjs/toolkit"; 

const carouselSlice = createSlice({
    name: 'carousel',
    initialState:{
        cPointer: 0,
        leftPosArr : [0,100, 200, 300]
    },
    reducers:{
        moveSlide(state, action){
            const ctr = action.payload;
            let difCtr = (state.cPointer - ctr)*100;
            state.leftPosArr = state.leftPosArr.map((i)=>{
                return i+difCtr
            })
            state.cPointer = ctr
        }
    }
})

export const carouselActions = carouselSlice.actions
export default carouselSlice