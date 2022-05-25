import React from 'react'
import axios from "axios";

const baseURL = 'https://fakestoreapi.com/products';

export default function useApi() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, [products])
  return products
}