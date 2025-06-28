const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");

app.use(express.json());

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.firstName;
//   try {
//     const users = await User.find({ firstName: userEmail });
//     if (users.length === 0) {
//       res.status(404).send("user not found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("something went wrong");
//   }
// });


// find one user with same email or name
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const users = await User.findOne({emailId:userEmail})
//     if (!users) {
//       res.status(404).send("User Not found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });


//find all the userwith similar email id
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User Not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});


app.get("/feed", async(req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }
    catch (err) {
    res.status(400).send("Something went wrong");
  }
})

app.delete("/user", async (req,res)=>{
    const userId = req.body.userId
    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully")
    }
    catch (err){
        res.status(400).send("Something Went Wrong")
    }
})

app.patch("/user/:userId", async (req,res)=>{
    const userId = req.params?.userId;
    const data = req.body

    try{
      const ALLOWED_UPDATES = ["firstName","lastName","gender","skills","about","age"];

    const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k));
    if(!isUpdateAllowed){
      throw new Error("Update not allowed")
    }
        const user = await User.findByIdAndUpdate({_id:userId},data,{
          returnDocument: "after",
          runValidators: true,
        })

        res.send("user updated successfully")
    }
    catch (err){
        res.status(400).send("Updated failed:" + err.message)
    }
})



app.post("/signup", async (req, res) => {
  // console.log(req.body)
  //   const userObj = {
  //     firstName: "Mehul",
  //     lastName: "Hore",
  //     emailId: "mehulhore@gmail.com",
  //     password: "Mehul@123",
  //   };
  // create a new instance of user model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added succesfully");
  } catch (err) {
    res.status(400).send("Error while creating the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected succefully");
    app.listen(7777, () => {
      console.log("Server Is Successfully Running");
    });
  })
  .catch((err) => {
    console.error("Database not connected");
  });

// const { authAdmin } = require("./middleware/auth.js");
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

// app.get("/", (err, req, res , next) =>{
//     if(err){
//         res.status(500).send("Some Error Contact Support Team")

//     }
// })

// app.get("/loginData", (req,res)=> {
//     try{
//         throw new Error("djsdfkjf")
//     }
//     catch(err){
//         res.status(500).send("Some Error Contact Support Team")
//     }
// })

// app.get("/", (err, req, res , next) =>{
//     if(err){
//         res.status(500).send("Some Error Contact Support Team")

//     }
// })

// app.listen(7777, () => {
//   console.log("Server Is Successfully Running");
// });

// app.use("/",(req,res) => {
//     res.send("Namaste From Dashboard");
// })
