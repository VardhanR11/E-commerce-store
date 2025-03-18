import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../components/ProductCard.jsx';
import { api } from '../services/api';

export const Products = () => {
  // State for category filter and sort options
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('none');

  // Fetch product categories using React Query
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories
  });

  // Fetch products based on selected category
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => selectedCategory === 'all' 
      ? api.getProducts()
      : api.getProductsByCategory(selectedCategory)
  });

  // Sort products based on selected sort option
  const sortProducts = (products) => {
    if (sortBy === 'none') return products;
    return [...products].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating.rate - a.rating.rate;
      return 0;
    });
  };

  // Show loading spinner while fetching data
  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
    </div>
  );

  // Show error message if data fetching fails
  if (error) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center text-red-600">
        <p className="text-xl">Failed to load products</p>
        <p className="text-sm mt-2">Please try again later</p>
      </div>
    </div>
  );

  const sortedProducts = sortProducts(products);

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Filter and sort controls */}
      <div className="mb-8 flex justify-end">
        <div className="flex gap-4 items-center">
          {/* Category filter dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#4CAF50]"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>

          {/* Sort options dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#4CAF50]"
          >
            <option value="none">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}; 