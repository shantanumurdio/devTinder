const express = require("express");

const app = express();

app.use("/",(req,res) => {
    res.send("Namaste From Dashboard");
})

app.use("/hello",(req,res) => {
    res.send("Hello Hello Hello");
})



app.use("/test",(req,res) => {
    res.send("Hello From The Server!");
})


app.listen(3000, () => {
    console.log("Server Is Successfully Running")
})