const mongoose = require('mongoose'); // loading mongoose module
const config = require('./dbConfig'); // loading config module

const connectDB = async() => {
    try{
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex:true,
            useUnifiedTopology:true
        })
        console.log('Mongodb connected....');
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
};

module.exports = connectDB;
