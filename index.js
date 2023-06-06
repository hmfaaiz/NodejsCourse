const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const fs =require("fs");
const userRoute=require("./routes/user")
const dotenv=require("dotenv");


dotenv.config();
mongoose.connect(process.env.Db_Url).then(
    () => {
        console.log("Db is connected")
    })
    .catch((err)=>{
        console.log(err)
    })





app.use((req,res,next)=>{
    fs.appendFile("./log.txt",`${new Date().toLocaleString()} ${req.ip} ${req.path} ${req.method}\n`,
    (err,data)=>{
        next()
    }) 
})

app.use(express.json());
app.use("/api/users",userRoute);


app.listen(process.env.PORT, () => {
    console.log("Server is running")
});