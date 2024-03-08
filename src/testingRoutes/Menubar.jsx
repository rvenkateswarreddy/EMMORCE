import React from "react";
import { Link } from "react-router-dom";
const Menubar = () => {
  return (
    <div class="menubar">
      <Link to="/login">Login</Link>
      <Link to="/signup">signup</Link>
    </div>
  );
};

export default Menubar;
