import React from "react";
import ReactDOM from "react-dom";
import OrdersUI from "./Orders";

import "./styles.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={ abc:[] };
    fetch("/orders")
    .then(r=>{return r.json()})
    .then(json=>{
      console.log(json);
      this.setState({ abc: json });
    });
    // setTimeout(()=>{
    //   this.setState({ abc: [1, 2, 3, 4, 5] });
    // },1000)
  }
  render = () => {
    return (
      <div className="App">
      <OrdersUI orders={this.state.abc.map(e => ({ id: e }))} />
        {/* <OrdersUI orders={[1, 2, 3, 4].map(e => ({ id: e }))} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
