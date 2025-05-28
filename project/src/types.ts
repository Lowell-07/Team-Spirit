export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subCategory: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  subCategories: {
    name: string;
    products: Product[];
  }[];
}