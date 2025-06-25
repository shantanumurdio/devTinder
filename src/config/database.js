const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shantanumurdio:e4CKhw1cjr6xdyH5@namastenode.5skcjsr.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode"
  );
};

module.exports = connectDB;

