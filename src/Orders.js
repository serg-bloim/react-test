import React from "react";
import { List, ListItemText, Grid, TextField, Button } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import OrderEditor from "./OrderEditor";
import { defaultTo } from 'lodash-es'
class OrdersUI extends React.Component {
  // state={selected:{}};
  constructor(props) {
    super(props);
    this.state = { 
      selected: { id: 5 },
      orders: []
    };
    this.updateOrders();
  }
  updateOrders = () => {
    fetch("/orders")
    .then(r=>r.json())
    .then(json=>{
      this.setState({ orders: json });
    });
  }

  clickHandler(e, order) {
    this.setState({ selected: order });
    console.log(order);
    console.log("click");
  }
  handleEditorChange = (ord) => {
    var ord2 = Object.assign({}, ord, {modified:true});
    this.setState({selected : ord2});
  }

  handleEditorUpdate = () => {
    var ord = this.state.selected;
    fetch('/orders/'+ord.id,{
      method:'PUT',
      body:JSON.stringify(ord),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }).then(r => {
      if (r.ok) {
        alert('Updated');
      }
      else {
        alert('Failed to update');
      }
      this.updateOrders();
    })
  }
  render = () => {
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <List>
              {
                this.state.orders.map(ord => {
                  return (
                    <ListItem
                      key={ord.id}
                      selected={this.state.selected.id === ord.id}
                      onClick={e => this.clickHandler(e, ord)}>
                      <ListItemText primary={ord.id} />
                    </ListItem>
                  )
                })
              }
            </List>
          </Grid>
          <Grid item xs={6}>
            <OrderEditor order={this.state.selected}
            onChange={this.handleEditorChange}
            onUpdate={this.handleEditorUpdate}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default OrdersUI;
