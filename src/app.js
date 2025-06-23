const express = require("express");

const app = express();
const { authAdmin } = require("./middleware/auth.js");
// app.use("/hello",(req,res) => {
//     res.send("Hello Hello Hello");
// })

// app.get("/user", (req,res) => {
//     res.send({firstName:"Shantanu",lastName:"Murdio"})
// })

// app.post("/user", (req,res) => {
//     console.log("Save Data to Database")
//     res.send("Add data successfully")
// })

// app.use("/test",(req,res) => {
//     res.send("Hello From The Server!");
// })

// multiple-rout handler
// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log(" Handling the router user ");
//     next();
//   },
//   (req, res, next) => {
//     console.log(" Handling the router user 1");
//     next();
//   },
//   (req, res) => {
//     console.log(" Handling the router user 2");
//     res.send("This is the 2th main router I want to return");
//   }
// );




// app.use("/admin", authAdmin)

// app.get("/admin/getAllData", (req,res)=> {
//     res.send("Give Access To All The Data")
// })

// app.get("/admin/deleteUser", (req,res)=> {
//     res.send("Give Access To Delete The User")
// })



app.get("/", (err, req, res , next) =>{
    if(err){
        res.status(500).send("Some Error Contact Support Team")

    }
})

app.get("/loginData", (req,res)=> {
    try{
        throw new Error("djsdfkjf")
    }
    catch(err){
        res.status(500).send("Some Error Contact Support Team")
    }
})

app.get("/", (err, req, res , next) =>{
    if(err){
        res.status(500).send("Some Error Contact Support Team")

    }
})



app.listen(7777, () => {
  console.log("Server Is Successfully Running");
});

// app.use("/",(req,res) => {
//     res.send("Namaste From Dashboard");
// })
