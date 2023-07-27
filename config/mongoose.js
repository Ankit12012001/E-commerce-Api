const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
const db = mongoose.connect('mongodb://0.0.0.0:27017/ecommerceDB', {
    useNewUrlParser: true
}).then(()=>{
    console.log("connected");
})



module.exports = db;