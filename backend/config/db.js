import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DB connected: ${connect.connection.host}`.cyan.underline)
    }catch (e) {
        console.error(`${e.message}`.red.underline.bold);
        process.exit(1)
    }
};

export default connectDB;