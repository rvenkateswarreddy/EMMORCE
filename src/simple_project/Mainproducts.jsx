import React from "react";
import { decrement, increment } from "../globalstate_emmorce/slices";
import { useDispatch } from "react-redux";
import shopImage from "../assets/image1.jpeg";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const Mainproducts = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy1",
      price: 23000,
    },
    {
      id: 2,
      name: "Samsung Galax2",
      price: 23000,
    },

    {
      id: 7,
      name: "Samsung Galaxy3",
      price: 23000,
    },
    {
      id: 8,
      name: "Samsung Galaxy4",
      price: 23000,
    },
    {
      id: 9,
      name: "Samsung Galaxy 5",
      price: 23000,
    },
    {
      id: 10,
      name: "Samsung Galaxy 6",
      price: 23000,
    },
    {
      id: 11,
      name: "Samsung Galaxy 7",
      price: 23000,
    },
    {
      id: 12,
      name: "Samsung Galaxy 8",
      price: 23000,
    },
    {
      id: 13,
      name: "Samsung Galaxy 9",
      price: 23000,
    },
    {
      id: 14,
      name: "Samsung Galaxy 10",
      price: 23000,
    },
  ];
  return (
    <div className="productcontainer">
      {products.map((each, index) => {
        return (
          <div className="eachproduct" key={index}>
            <ToastContainer />
            <img src={shopImage} alt="image...;.." />
            <h3>Product Name:{each.name}</h3>
            <h3>Product Price:{each.price}</h3>
            <div className="buttons">
              <button
                onClick={() => {
                  dispatch(
                    increment({
                      id: each.id,
                      productname: each.name,
                      price: each.price,
                    })
                  );
                  toast.success("product successfully added to card list");
                }}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mainproducts;
