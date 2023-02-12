import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        qty:[],
        price:[]
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
        },
        addQty:(state,action) =>{
            state.qty.push(action.payload)
        },
        addPrice:(state,action)=>{
            state.price.push(action.payload)
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearItem,addQty,addPrice}=cartSlice.actions