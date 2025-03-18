# E-Commerce Store with React & Tailwind CSS

A modern e-commerce web application built with React, featuring a clean UI, shopping cart functionality, and integration with the Fake Store API.

![E-Commerce Store Screenshot](screenshot.png)

## 🚀 Features

- **Product Listing**: Browse through products with images, descriptions, and prices
- **Shopping Cart**: Add/remove items, update quantities, and view total
- **Category Filtering**: Filter products by categories
- **Sort Options**: Sort products by price and ratings
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Persistent Cart**: Shopping cart data persists across page reloads

## 🛠️ Technologies Used

- **React 18**: Frontend library
- **React Router 6**: Navigation and routing
- **React Query**: Server state management
- **Tailwind CSS**: Styling and UI components
- **Axios**: API requests
- **Fake Store API**: Product data

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/e-commerce-store.git
   ```

2. Navigate to the project directory:
   ```bash
   cd e-commerce-store
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Configuration

### Environment Variables
No environment variables are required as the app uses the public Fake Store API.

### API Configuration
The app uses the following Fake Store API endpoints:
- GET `/products`: Fetch all products
- GET `/products/categories`: Fetch product categories
- GET `/products/category/{categoryName}`: Fetch products by category

## 📁 Project Structure

```
src/
├── components/         # Reusable components
│   ├── ProductCard.jsx
│   └── CartItem.jsx
├── context/           # React Context providers
│   └── CartContext.jsx
├── pages/             # Page components
│   ├── Products.jsx
│   └── Cart.jsx
├── services/          # API services
│   └── api.js
├── App.jsx           # Main app component
└── main.jsx         # Entry point
```

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom configuration:
- Custom color scheme with primary green (#4CAF50)
- Responsive design breakpoints
- Custom component classes

## 🔄 State Management

- **React Query**: Handles API data fetching and caching
- **React Context**: Manages shopping cart state
- **Local Storage**: Persists cart data

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The build files will be in the `dist/` directory.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for the product data
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React Query](https://tanstack.com/query/latest) for data fetching

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/e-commerce-store](https://github.com/yourusername/e-commerce-store)
