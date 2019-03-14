import React from "react";
import ReactDOM from "react-dom";
import OrdersUI from "./Orders";

import "./styles.css";

function App() {
  return (
    <div className="App">
    <OrdersUI orders={[1,2].map(e=>({id:e}))}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
