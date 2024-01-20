import React from "react";
import { Navbar } from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { totalamount } from "./Features/Cart/CartSlice";
import Modal from "./Components/Modal";
import { CheckOut } from "./Components/CheckOut";

function App() {
  const {cartItems} = useSelector((store)=> store.cart)
  const {isOpen} = useSelector((store)=> store.modal)
  const {isClicked} = useSelector((store)=> store.checkout)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(totalamount())
  }, [cartItems])
  return (
    <main>
      {isClicked && <CheckOut/>}
      {isOpen && <Modal/>}
      <Navbar />
      <CartContainer/>
    </main>
  );
}

export default App;
