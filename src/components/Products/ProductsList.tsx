import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: string;
  fields: {
    name: string;
    price: string;
    status: string;
  }
}

export const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    // API request
    try {
      const response = await axios.get('https://api.airtable.com/v0/appHEmkJzhzPZOu9s/products', {
        headers: {
          Authorization: 'Bearer patnDmggBHtalffj1.f3d4a959eeb7d405a397ba9189aa8eee1fffc23de37d5eccf9329f1f46a636e1'
        }
      });
      console.log(response.data);
      setProducts(response.data.records);
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
    // set state
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {products.map((item: Product) => {
        return <div key={item.id}><p>{item.fields.name}</p></div>
      })}
    </div>
  );
}
