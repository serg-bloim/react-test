import React from "react";
import { List, ListItemText, Grid, TextField, Button } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import OrderEditor from "./OrderEditor";
import { defaultTo } from 'lodash-es'
class OrdersUI extends React.Component {
  // state={selected:{}};
  constructor(props){
super(props);
this.state={selected:{id:5}};
  }
  clickHandler(e, order) {
    this.setState({ selected: order });
    console.log(order);
    console.log("click");
  }

  render = ()=> {
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <List>
              {
                this.props.orders.map(ord => {
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
            {/* {this.state.selected.id} */}
          </Grid>
          <Grid item xs={6}>
          {/* {this.state.selected.id} */}
          <OrderEditor
            order={this.state.selected}
            />
            {this.state.selected.id}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default OrdersUI;
