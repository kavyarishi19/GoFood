const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://goFood:goFood@cluster0.jhborlm.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = async()=>{
        await mongoose.connect(mongoURI ,{ userNewUrlParser: true}, ()=>{
        console.log("connected");
    });
}

module.exports = mongoDB;
