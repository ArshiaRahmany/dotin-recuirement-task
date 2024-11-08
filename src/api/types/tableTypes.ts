export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export interface LoginState {
  showPassword: boolean;
  username: string;
  password: string;
  loading: boolean;
  image: string;
}

export interface DataTableState {
  data: CartResponse | null;
  loading: boolean;
  error: string | null;
}
