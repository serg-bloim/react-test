import React from "react";
import { List, ListItemText, Grid, TextField, Button, withStyles } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import OrderEditor from "./OrderEditor";
import { defaultTo, findIndex } from 'lodash-es'

class OrdersUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        id: '',
        url: '',
        cnt: 0
      },
      orders: []
    };
    this.updateOrders();
  }
  updateOrders = () => {
    return fetch("/orders")
      .then(r => r.json())
      .then(json => {
        this.setState({ orders: json });
        return Promise.resolve(json);
      });
  }

  clickHandler(e, order) {
    this.setState({ selected: order });
    console.log(order);
    console.log("click");
  }
  handleEditorChange = (ord) => {
    var ord2 = Object.assign({}, ord, { modified: true });
    this.setState({ selected: ord2 });
  }

  handleEditorUpdate = () => {
    var ord = this.state.selected;
    var method = ord.isNew ? 'POST' : 'PUT';
    var url = ord.isNew ? '/orders' : '/orders/' + ord.id;
    fetch(url, {
      method: method,
      body: JSON.stringify(ord),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }).then(r => {
      this.updateOrders();
      return r.json();
    }).then(ord => {
      this.setState({ selected: ord });
    });
  }
  handleCreateNew = () => {
    this.setState(
      {
        selected: Object.assign({}, this.state.selected, { isNew: true, id: '' })
      }
    );
  }

  handleOrderDelete = () => {
    var id = this.state.selected.id;
    if (id) {
      var index = findIndex(this.state.orders, e => e.id === id);
      const url = "/orders/" + id;
      fetch(url, {
        method: 'DELETE',
      }).then(r => {
        return this.updateOrders();
      }).then(ords => {
        if (ords.length > 0) {
          if (index >= ords.length) {
            index = ords.length - 1;
          }
          this.setState({ selected: ords[index] });
        }
      });
    }
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
                      <ListItemText primary={ord.id} secondary={ord.cnt + " x " + ord.url} />
                    </ListItem>
                  )
                })
              }
            </List>
          </Grid>
          <Grid item xs={6}>
            <OrderEditor order={this.state.selected}
              isNew={this.state.selected.isNew}
              onChange={this.handleEditorChange}
              onUpdate={this.handleEditorUpdate}
              onDelete={this.handleOrderDelete}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default OrdersUI;
