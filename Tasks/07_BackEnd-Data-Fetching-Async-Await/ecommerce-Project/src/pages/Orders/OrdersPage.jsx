import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import OrderFavicon from '../../assets/images/icons/orders-favicon.png';
import './OrdersPage.css';
import { OrdersGrid } from './OrdersGrid';


export function OrdersPage({ cart }) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
      
    }
    ordersData();
  }, []);


  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href={OrderFavicon} />
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
}