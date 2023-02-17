import { Product } from '@model/Product';
import { Products } from '@model/Products';
import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/appHEmkJzhzPZOu9s';
const API_TOKEN = 'Bearer patnDmggBHtalffj1.f3d4a959eeb7d405a397ba9189aa8eee1fffc23de37d5eccf9329f1f46a636e1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_TOKEN
  }
});

export const fetchProducts = () => {
  return api.get<Products>('/products');
}

export const fetchProduct = (id: Product['id']) => {
  return api.get<Product>(`products/${id}`);
}
