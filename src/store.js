import { configureStore} from "@reduxjs/toolkit";
import cartReducer from './Features/Cart/CartSlice'
import modalReducer from './Features/Modal/ModalSlice'
import checkoutReducer from "./Features/CheckOut/CheckOutSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        checkout: checkoutReducer,
    },
});