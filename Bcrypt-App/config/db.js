const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/AbhiDB").then(
        console.log("AbhiDB Connected successfully - ready for transactions !")
    )
}

module.exports = connectDB