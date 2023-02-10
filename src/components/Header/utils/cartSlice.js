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
        clearItem: (state)=>{
            state.items=[]
        },
        removeItem: (state,action)=>{
            state.items.splice(action.payload, 1);
            console.log(state,"state")
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearItem}=cartSlice.actions