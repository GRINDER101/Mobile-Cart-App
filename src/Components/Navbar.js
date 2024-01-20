import React from "react";
import { useDispatch } from "react-redux";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { openCheckOutSlide } from "../Features/CheckOut/CheckOutSlice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const {amount} = useSelector((state)=> state.cart)
    
    return(
        <nav>
          <div className="nav-center">
            <h3>Mobile Cart</h3>
            <div className="nav-container">
                <div id="main">
                  <span className="span-a" onClick={()=>{dispatch(openCheckOutSlide())}}><CartIcon/></span>
                </div>
              <div className="amount-container">
                <p className="total-amount ">{amount}</p>
              </div>
            </div>
          </div>
        </nav>    
    )
}