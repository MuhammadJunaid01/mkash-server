import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const saveNewProduct = async (payload: IProduct): Promise<IProduct> => {
  try {
    const product = new Product(payload);
    const newProdcut = await product.save();
    if (!newProdcut) {
      throw new Error("Something wrong ! try again");
    }
    return newProdcut as unknown as IProduct;
  } catch (error: any) {
    return error.message;
  }
};
export const getProductByBrandFromDb = async (
  payload: string
): Promise<IProduct[]> => {
  try {
    const products = Product.getBrandProduct(payload);
    return products as unknown as IProduct[];
  } catch (error) {
    return error;
  }
};
