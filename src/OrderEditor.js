import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { defaultTo } from 'lodash-es';

class OrderEditor extends React.Component{
  constructor(ps){
    super(ps);
    this.state={};
    this.handleChange.bind(this);
  }
  handleChange(event, propName) {
    var ord = Object.assign({}, this.props.order, {[propName]:event.target.value})
    this.props.onChange(ord);
  }
   render(){
        return(
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  id="uuid"
                  label="ID"
                  style={{ margin: 8 }}
                  margin="normal"
                  value={this.props.order.id}
                  onChange={e=>{this.setState({order: {id:e.target.value}});}}
                  fullWidth
                  InputProps={{
                    // readOnly: true,
                  }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  id="url"
                  label="Endpoint"
                  style={{ margin: 8 }}
                  // placeholder="http://"
                  value={this.props.order.url}
                  fullWidth
                  onChange={e=>this.handleChange(e, "url")}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  id="amount"
                  label="Amount"
                  propName="cnt"
                  style={{ margin: 8 }}
                  type="number"
                  // style={{ width: 100 }}
                  value={this.props.order.cnt}
                  fullWidth
                  onChange={e=>this.handleChange(e, "cnt")}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
                <Grid item xs={6}>
              </Grid>
                <Grid item xs={3}>
                <Button
                      variant="contained"
                      color="primary"
                      onClick={this.props.onUpdate}
                      // className={classes.button}
                      >
                      {'Update'}
                    </Button>
              </Grid>
            </Grid>
        )
    }
}

export default OrderEditor;