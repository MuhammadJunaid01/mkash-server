import express, { Application } from "express";
import cors from "cors";
import AuthRouter from "./app/modules/user/user.route";
import ProductRoute from "./app/modules/product/product.route";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/product", ProductRoute);

app.get("/", (req, res) => {
  res.send('<h1 style="text-align: center">Welcome to mkash server</h1>');
});
export default app;
