import { useCart } from '../context/CartContext.jsx';
import { CartItem } from '../components/CartItem.jsx';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add items to your cart to continue shopping</p>
          <Link
            to="/"
            className="inline-block bg-[#4CAF50] text-white px-6 py-3 rounded hover:bg-[#45a049] transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart ({cart.length} items)</h2>
        <div className="divide-y divide-gray-200">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg text-gray-600">Total Amount:</span>
            <span className="text-2xl font-bold text-[#4CAF50]">${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-end gap-4">
            <Link
              to="/"
              className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </Link>
            <button
              className="bg-[#4CAF50] text-white px-8 py-3 rounded hover:bg-[#45a049] transition-colors"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 