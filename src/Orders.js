import React from "react";
import { List, ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

class OrdersUI extends React.Component {
  state={}
  clickHandler(e, order){
    this.setState({selected:order.id});
  }

  render() {
    return (
      <div>
        <List>
          {
            this.props.orders.map(ord=>{
              return (
              <ListItem
                key={ord.id}
                selected={this.state.selected === ord.id}
                onClick={e=>this.clickHandler(e, ord)}>
                <ListItemText primary={ord.id}/>
              </ListItem>
              )
            })
            
          }
        </List>
      </div>
    );
  }
}

export default OrdersUI;
