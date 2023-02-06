const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jnhxgzk.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("conect with DB");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
