import React from "react";
import { useDispatch } from "react-redux"
import { ChevronUp, ChevronDown } from "../icons"
import { removeitem, increaseamount, decreaseamount } from "../Features/Cart/CartSlice";


export const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
    return(
        <article className="cart-item" key={id}>
          <img src={img} title={title}></img>
          <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className="remove-btn" onClick={()=>dispatch(removeitem(id))}>remove</button>
          </div>
          <div>
            <button className="amount-btn" onClick={()=>{dispatch(increaseamount({id}))}}>
              <ChevronUp/>
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={()=>{
              if(amount < 2){
                dispatch(removeitem(id))
                return
              }
              dispatch(decreaseamount(id))}}>
              <ChevronDown/>
            </button>
          </div>
        </article>
    )
}