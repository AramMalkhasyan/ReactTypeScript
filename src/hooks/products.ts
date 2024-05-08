import { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios, {AxiosError} from "axios";

export function useProduct() {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  function addProduct (product: IProduct) {
    setProduct(prev => [... prev, product])
  }
  
  async function fetchData() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
      setProduct(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
    
  }

  useEffect(() => {
    fetchData()
  }, [])


  return {product, loading, error, addProduct}
}