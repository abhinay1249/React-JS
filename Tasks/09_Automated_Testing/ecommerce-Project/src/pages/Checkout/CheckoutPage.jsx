import axios from 'axios';
import { useState, useEffect } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([null]);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data);
    
    };
    fetchCheckoutData();
  }, []);

  useEffect(()=>{
    const fetchPaymentSummary = async () => {

      const response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);

    };
    fetchPaymentSummary();

  },[cart])

  // Calculating the Total Products present in the cart

  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader totalItems={totalItems}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}