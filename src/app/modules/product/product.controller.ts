import { Response, Request, NextFunction } from "express";
import { getProductByBrandFromDb, saveNewProduct } from "./product.service";

export const createNewProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const product = await saveNewProduct(payload);
    res.status(200).json({ product });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
export const getProductByBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brandName } = req.params;
    const products = await getProductByBrandFromDb(brandName);
    if (products.length < 1) {
      throw new Error("something went wrong! try again");
    }
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
