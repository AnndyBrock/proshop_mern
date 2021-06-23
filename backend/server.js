import express from 'express';
import connectBD from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import colors from 'colors';

dotenv.config();
const app = express();
connectBD();

app.use(express.json())

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow));

app.get('/', (req, res)=>{
    res.send('API running')
});