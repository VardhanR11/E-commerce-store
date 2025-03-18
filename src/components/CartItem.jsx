// Import cart context hook for managing cart operations
import { useCart } from '../context/CartContext.jsx';

// CartItem component displays individual items in the shopping cart
export const CartItem = ({ item }) => {
  // Get cart manipulation functions from context
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-6 py-6">
      {/* Product image thumbnail */}
      <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2"
        />
      </div>
      
      {/* Product details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>
        <p className="text-blue-600 font-medium mt-1">${item.price}</p>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center gap-3">
        {/* Decrease quantity button */}
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        </button>
        
        {/* Quantity display */}
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        {/* Increase quantity button */}
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      {/* Remove item button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-gray-400 hover:text-red-600 transition-colors p-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}; 