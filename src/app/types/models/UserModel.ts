import { Category } from "../Category";

export interface UserModel {
  name: string;
  description: string;
  price: number;
  category?: Category;
  imageFile?: File;
}
