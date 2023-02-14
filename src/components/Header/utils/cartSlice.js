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
        },
        addQty:(state,action) =>{
            state.qty.push(action.payload)
        },
        addPrice:(state,action)=>{
            state.price.push(action.payload)
        },
        removeQty: (state,action)=>{
            state.qty.splice(action.payload, 1);            
        },
        removePrice: (state,action)=>{
            state.price.splice(action.payload, 1);
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearItem,addQty,addPrice,removeQty, removePrice}=cartSlice.actions