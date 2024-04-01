
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const app = express();


app.use(express.json()); 


mongoose
       .connect(process.env.DATABASE_URL)
       .then(()=>console.log("DB CONNECTED"))
       .catch((error)=>console.log("DB FAILED TO CONNECT",error));
// Start the server
const PORT=3000;
app.listen(3000,()=>
{
    console.log(`Backend server started at ${PORT}`);
}
)
