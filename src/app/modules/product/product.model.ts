import mongoose, { Model, Schema } from "mongoose";
import { IProduct } from "./product.interface";
export interface IProductDocument extends IProduct {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IProductModel extends Model<IProductDocument> {
  getBrandProduct(name: string): Promise<IProductDocument[]>;
}
const productSchema = new Schema<IProductDocument, IProductModel>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
productSchema.statics.getBrandProduct = async function (payload: string) {
  return await this.find({ brand: payload });
};
export const Product = mongoose.model<IProductDocument, IProductModel>(
  "Product",
  productSchema
);
