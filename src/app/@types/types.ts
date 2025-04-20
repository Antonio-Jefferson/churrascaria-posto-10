export type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

export type CartItem = MenuItem & {
  qty: number;
  flavors?: string[];
};

export type FormData = {
  nome: string;
  numero: string;
  bairro: string;
  rua: string;
  residencia: string;
  referencia: string;
};
