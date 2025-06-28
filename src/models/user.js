const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    lowercase: true,
    trim:true, 
    // unique: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male","female","other"].includes(value)){
        throw new Error("Gender data is not valid")
      }
    }
  },
  photoUrl:{
    type: String,
  },
  about:{
    type: String,
    default: "This is the default user"
  },
  skills:{
    type: [String],
    validate(value){
      if(value.length >4){
        throw new Error("Skill not more than 4 ")  
      }
    }
  }
},{
  timestamps:true,
});

// const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User" , userSchema)