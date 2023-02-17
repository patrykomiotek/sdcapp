import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchProducts } from '@services/products';

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
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    // API request
    try {
      const response = await fetchProducts();
      console.log(response.data);
      setProducts(response.data.records);
    } catch (error) {
      setIsError(true);
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
      {isError && <p>Error!</p>}
      {products.map((item: Product) => {
        return <div key={item.id}><p>{item.fields.name}</p></div>
      })}
    </div>
  );
}
