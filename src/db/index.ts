import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.DB_URL!)
    .then(() => {
      console.log("database is connected successfully");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connect;
