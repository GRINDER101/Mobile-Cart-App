import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearcart: (state) => {
            state.cartItems = [];
        },
        removeitem: (state, action) => {
            const itemid = action.payload
            state.cartItems = state.cartItems.filter((item)=> item.id !== itemid)
        },
        increaseamount: (state, {payload}) => {
            const cartItem = state.cartItems.find((item)=> item.id === payload.id)
            cartItem.amount = cartItem.amount+1
        },
        decreaseamount: (state, action) => {
            const itemid = action.payload
            const cartItem = state.cartItems.find((item)=> item.id === itemid)
            cartItem.amount = cartItem.amount-1
        },
        totalamount: (state) =>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=> {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },

    },   
})

export const {clearcart, removeitem, increaseamount, decreaseamount, totalamount} = CartSlice.actions;

export default CartSlice.reducer