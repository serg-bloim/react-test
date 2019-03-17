const express = require('express');
const _ = require('lodash');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
// import orders from './orders'
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
var orders = require("./orders").orders
// create a GET route
app.get('/orders', (req, res) => {
    res.send(orders);
  });
app.put('/orders/:orderId', (req,res)=>{
    var id = req.params['orderId'];
    var ind = _.findIndex(orders, (ord)=>ord.id === id)
    if(ind >= 0){
        orders[ind] = req.body;
    }
    orders[id] = req.body;
    res.send(req.body);
});