import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/appHEmkJzhzPZOu9s/products';
const API_TOKEN = 'Bearer patnDmggBHtalffj1.f3d4a959eeb7d405a397ba9189aa8eee1fffc23de37d5eccf9329f1f46a636e1';

export const fetchProducts = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: API_TOKEN
    }
  });
}

export const fetchProduct = (id: string) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: API_TOKEN
    }
  });
}