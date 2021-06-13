import express from 'express';
import cconnectBD from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutest.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import colors from 'colors';

dotenv.config();
const app = express();
cconnectBD();

app.use('/api/products', productRoutes);


app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow));

app.get('/', (req, res)=>{
    res.send('API running')
});

