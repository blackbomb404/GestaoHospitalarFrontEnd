import { Category } from './Category';

export interface ProductCard {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: number;
  imagePath: string
}
