import express from 'express';
import cconnectBD from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';

dotenv.config();
const app = express();
cconnectBD();

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow));

app.get('/', (req, res)=>{
    res.send('API running')
});

app.get('/api/products', (req, res)=>{
    res.json(products)
});

app.get('/api/products/:id', (req, res)=>{
    const product = products.find(p => p._id === req.params.id);
    res.json(product )
});