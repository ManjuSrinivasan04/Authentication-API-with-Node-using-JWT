const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); 
let mongoose=require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/User-mongoose",(err)=>{
    if(!err)
        console.log("Server Connected to Mongodb");
    
});

// Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
 
app.use("/user", user);
// PORT
const port = 6000;
app.listen(port,()=>{
    console.log("App is running on port ",port);
});





