const express = require('express');
const _ = require('lodash');
const uuidv1 = require('uuid/v1');
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
  app.delete('/orders/:orderId', (req,res)=>{
      var id = req.params['orderId'];
      _.remove(orders, o=>o.id===id);
      res.send()
  });
  app.post('/orders', (req,res)=>{
      var id = uuidv1()
      var ord = _.pick(Object.assign({},req.body, {id:id}), ['id', 'url','cnt']);
      orders.push(ord);
      console.log('Creating');
      console.log(ord);
      res.send(ord);
  });