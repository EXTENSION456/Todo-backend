const mongoose = require("mongoose");

const connnectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://Suprodip:YasfUUXTiN0x19P5@cluster0.epbfjnd.mongodb.net/todos");
    console.log("database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connnectDb;
