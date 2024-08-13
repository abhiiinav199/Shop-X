import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useAuth } from "@clerk/clerk-react";

const Cart = () => {
  const navigate = useNavigate();
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  const { cart, increaseQuantity, decreaseQuantity, removeItem, calculateTotal, checkout } = useContext(ProductContext);

  const handleCheckout = () => {
    checkout();
    toast.success('Order Placed Successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", // Enhanced theme
      transition: Bounce,
    });

    setTimeout(() => {
      navigate('/myorder');
    }, 1000);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-900 text-gray-200"> {/* Dark background with light text */}
      <h1 className="mb-8 text-3xl font-bold text-center text-white">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg"> {/* Dark table with subtle shadows */}
          <thead className="text-gray-300 bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-left">Product</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Quantity</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Price</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Total</th>
              <th className="px-4 py-3 text-sm font-medium text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {cart.length > 0 ? (
              cart.map(item => (
                <tr key={item.id} className="hover:bg-gray-700">
                  <td className="flex flex-col items-center gap-4 px-4 py-4 text-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-16 h-16 rounded-md shadow-md"
                    />
                    <span>{item.title}</span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="px-2 py-1 text-sm text-gray-900 bg-gray-300 rounded-md"
                        disabled={item.quantity <= 1}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-sm text-gray-900 bg-gray-300 rounded-md"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm">₹{item.price.toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm">₹{(item.quantity * item.price).toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm">
                    <button
                      className="hover:text-red-500 focus:outline-none text-sm text-red-400"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-400">No items in the cart.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 mt-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <div className="md:flex-row md:justify-between flex flex-col mb-4 text-xl font-semibold text-gray-300">
          <h2>Order Summary</h2>
          <div className="md:mt-0 mt-4 text-lg">
            <span className="font-medium">Subtotal:</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 md:w-40 w-full py-2 text-sm text-white bg-teal-500 rounded-md"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Enhanced theme
        transition={Bounce}
      />
    </div>
  );
};

export default Cart;
