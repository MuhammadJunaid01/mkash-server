import express from "express";
import { createNewProduct, getProductByBrand } from "./product.controller";
const router = express.Router();
router.post("/", createNewProduct);
router.get("/:brandName", getProductByBrand);

export default router;
