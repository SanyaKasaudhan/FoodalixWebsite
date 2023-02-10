import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearItem: ()=>{
            state.items=[]
        },
        removeItem: ()=>{
            state.items.pop();
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearItem}=cartSlice.actions