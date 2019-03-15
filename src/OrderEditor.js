import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

class OrderEditor extends React.Component{
    constructor(props){
        super(props);
        console.log("editor created");
        console.log(props.order);
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
                  defaultValue={this.props.order.id}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  id="url"
                  label="Endpoint"
                  style={{ margin: 8 }}
                  placeholder="http://"
                  fullWidth
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
                  style={{ margin: 8 }}
                  type="number"
                  // style={{ width: 100 }}
                  fullWidth
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
                      // onClick={this.handleNext}
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