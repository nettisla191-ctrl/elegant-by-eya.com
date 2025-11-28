export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};
