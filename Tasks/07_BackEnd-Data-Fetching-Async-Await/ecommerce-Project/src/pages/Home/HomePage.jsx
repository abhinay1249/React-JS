import axios from 'axios';
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import HomeFavicon from '../../assets/images/icons/home-favicon.png';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {

  const[products, setProducts] = useState([]);
  

  useEffect(() => {
    const getHomeData =  async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data);
    }
    
    getHomeData();

  },[]); //[] is the dependency array used to run only once


  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href={HomeFavicon} />

      <Header cart={cart}/>

      <div className="home-page">
          <ProductsGrid products={products}/>
      </div>
    </>
  );
}