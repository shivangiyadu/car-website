const mongoose= require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(print.env.MONGODB_URL,{
        userNewUrlParser:true,
        userUnifiedTopology:true,
    })
    .then(()=>console.log("DB connected successfully"))
    .catch(()=>{
        console.log("Db connection failed");
        console.error(error);
        process.exit(1);
    })
}
