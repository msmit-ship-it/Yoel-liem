
import React from 'react';

const OrdersScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
       <i className="fa-solid fa-receipt text-6xl text-gojek-green mb-4"></i>
      <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
      <p className="text-gray-600 mt-2">You have no active orders at the moment.</p>
    </div>
  );
};

export default OrdersScreen;
