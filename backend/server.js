import express from 'express'  // to create web servers we use express module
import data from './data'
// import {useParams} from 'react-router-dom'

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/api/products/:id', (req, res) => {  // backend api from where the data we take
    let productId = parseInt(req.params.id,10);
    const product = data.products.find(x => x.id === productId);
    let errorMsg ="Request format is not valid"
    if(Number.isNaN(productId)){
        res.send(errorMsg);
    } else {

        if (product) {
            res.send(product); 
        } else {
            res.status(404).send({msg: 'Product not found',productId: productId});
        }
    }
    
})

app.get('/api/products', (req, res) => {  // backend api from where the data we take
    res.send(data.products);
})

app.listen(1600, () => {console.log('http://localhost:1600/api/products/')});

