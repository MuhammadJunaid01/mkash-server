import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

async function bootStrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practise");
    console.log("connect db");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootStrap();
