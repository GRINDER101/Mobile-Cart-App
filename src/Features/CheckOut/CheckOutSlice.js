import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isClicked: false,
}

const CheckOutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        openCheckOutSlide: (state, action) => {
            state.isClicked = true;
        },
        closeCheckOutSlide: (state, action) => {
            state.isClicked = false;
        },
    },

});

export const {openCheckOutSlide, closeCheckOutSlide} = CheckOutSlice.actions;

export default CheckOutSlice.reducer;