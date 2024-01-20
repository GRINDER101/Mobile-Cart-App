import { useDispatch } from "react-redux"
import { clearcart } from "../Features/Cart/CartSlice"
import { closeModal } from "../Features/Modal/ModalSlice"

const Modal = () => {
    const dispatch = useDispatch()
    return(
        <aside className="modal-container">
          <div className="modal">
            <h4> Do yo want to remove all the items in the list?</h4>
            <div className="btn-container">
              <button type="button" className="btn confirm-btn" onClick={()=> {dispatch(clearcart()); dispatch(closeModal())}}>Confirm</button>
              <button type="button" className="btn clear-btn" onClick={()=>dispatch(closeModal())}>Cancel</button>
            </div>
          </div>
        </aside>
    )
}

export default Modal