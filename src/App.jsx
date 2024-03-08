import React from "react";
import Cartshop from "./simple_project/Cartshop";
import { Provider } from "react-redux";
import store from "./globalstate_emmorce/store";
import Menubar from "./simple_project/Menubar";
import Cartlist from "./simple_project/Cartlist";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Menubar />
        <Routes>
          <Route path="/" element=<Cartshop /> />
          <Route path="/cartlist" element=<Cartlist /> />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
