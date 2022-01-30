import React from "react";
import {useSelector} from "react-redux";
import { Modal }  from "react-bootstrap"
//import "bootstrap/dist/css/bootstrap.min.css";
const CartModal =(props) => {
    const {list} = useSelector(state => state);
    return (
        
       
       
        <Modal style={{opacity:1}} onHide={() =>props.setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {list.map(item => {
                return (
                    <>
                    <img src={item.imgUrl} />
                    <span>{item.price}</span>
                    </>
                )
            })}
        </Modal.Body>
        
      </Modal>
       
    )
}

export default CartModal;