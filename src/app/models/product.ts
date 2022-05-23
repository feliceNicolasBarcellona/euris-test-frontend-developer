export interface Product {
  id: string,
  title: string;
  category: string;
  reviews: string[];
  description: string;
  employee: string;
  price: number;
}

export interface PData {
  id: string,
  data: Product,
}
