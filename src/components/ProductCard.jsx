// Import cart context hook for managing cart operations
import { useCart } from '../context/CartContext.jsx';

// ProductCard component displays individual product information and cart controls
export const ProductCard = ({ product }) => {
  // Get cart manipulation functions from context
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-xl border-2 border-gray-100 p-4 flex flex-col">
      {/* Product title with truncation for long names */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
      
      {/* Product description with 2-line clamp */}
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
        {product.description}
      </p>
      
      {/* Product image container */}
      <div className="flex-grow flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
      </div>
      
      {/* Price and cart action buttons */}
      <div className="flex items-center justify-between">
        <span className="text-[#4CAF50] text-xl font-bold">${product.price}</span>
        {/* Conditional rendering of Add/Remove button based on cart state */}
        {product.inCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-white border-2 border-gray-800 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100"
          >
            REMOVE ITEM
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-white border-2 border-gray-800 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100"
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}; 