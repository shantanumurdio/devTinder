const mongoose = require("mongoose");
const validator = require("validator")

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
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email Address " + value)
      }
    }
  },
  password: {
    type: String,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Enter a strong password " + value)
      }
    }
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
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid Photo URL " + value)
      }
    }
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