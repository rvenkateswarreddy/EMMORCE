import React from "react";
import "./whole.css";
import shopImage from "../assets/image1.jpeg";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../globalstate_emmorce/slices";
const Cartlist = () => {
  const list = useSelector((state) => state.cart.cartarray);
  const dispatch = useDispatch();
  return (
    <div className="cartlist">
      {list.length ? (
        list.map((each, index) => {
          return (
            <div className="eachproduct" key={index}>
              <img src={shopImage} alt="image...;.." />
              <h3>Product Name:{each.productname}</h3>
              <h3>Product Price:{each.price}</h3>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(
                      decrement({ id: each.id, productvalue: each.price })
                    );
                    toast.success("product removed successfully from cart");
                  }}
                >
                  REMOVE
                </button>
                <ToastContainer />
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="nolist">NO CARTS AVAILABLE HERE,PLEASE ADD PRODUCTS</h3>
      )}
    </div>
  );
};

export default Cartlist;
