import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menubar = () => {
  const cart = useSelector((state) => state.cart);
  const count = cart.cartarray.length;
  const total = cart.totalvalue;
  return (
    <div className="menubar">
      <Link to="/" style={{ color: "green" }}>
        Home
      </Link>
      <span>cart:{count}</span>
      <span style={{ color: "greenyellow" }}>Total amount:{total}</span>
      <Link to="/cartlist" style={{ color: "aliceblue" }}>
        CARTLIST
      </Link>
    </div>
  );
};

export default Menubar;
