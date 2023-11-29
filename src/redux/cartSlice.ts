import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {CartItem, CartState} from "../types/db";
import {RoundPrice} from "../utils/functions";


const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    freeDelivery: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // dodawanie nowych itemów do koszyka z pozycji podglądu itemu
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const isDuplicate = state.items.find((item) => item.id === action.payload.id);
            if (isDuplicate){
                state.items.forEach((item) => {
                    if (item.id === action.payload.id){
                        if (item.amount < 999){
                            item.amount += action.payload.amount
                        }
                    }
                })
            } else {
                state.items.push(action.payload)
            }
            state.totalAmount += action.payload.amount;
            state.totalPrice += RoundPrice(action.payload.amount * action.payload.price);
        },
        // aktualizowanie itemów z pozycji koszyka
        updateCart: (state, action: PayloadAction<{id: string, amount: number}>) => {
            const currentItem = state.items.find((item) => item.id === action.payload.id);
            let toDelete: boolean = false;
            if (currentItem){
                let newTotalPrice: number = 0;
                let newTotalAmount: number = 0;
                state.items.forEach((item) => {
                    if (item.id === currentItem.id){
                        item.amount = action.payload.amount;
                    }
                    if (item.amount <= 0){
                        toDelete = true;
                    }
                    newTotalPrice += item.amount * item.price;
                    newTotalAmount += item.amount;
                })
                if (toDelete){
                    state.items = state.items.filter((to) => to !== currentItem);
                }
                state.totalPrice = RoundPrice(newTotalPrice);
                state.totalAmount = newTotalAmount;
            } else {
                console.log('cannot find element');
            }
        },
        // resetowanie całego koszyka
        resetCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalPrice = 0;
        },
    },
})

export const { addToCart, updateCart, resetCart } = cartSlice.actions
export default cartSlice.reducer