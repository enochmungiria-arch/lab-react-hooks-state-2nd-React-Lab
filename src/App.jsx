import { useEffect, useState} from 'react'
import ProductList from "./components/ProductList"
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import {sampleProducts} from './components/ProductList';
import './App.css'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
    const [cartItems, setCartItems] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((previousMode) => !previousMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]); 

    const handleAddToCart = (product) => {
        // Add product to cartItems state
        // give each product a unique key when adding to cart
        const productWithId = { ...product, id: Date.now() };
        setCartItems([...cartItems, productWithId]);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filterProductsByCategory = (sampleProducts, category) => {
        if (category === 'All') {
            return sampleProducts;
        }
        return sampleProducts.filter(sampleProduct => sampleProduct.category === category);
    };
    const filteredProducts = filterProductsByCategory(sampleProducts, selectedCategory);

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      
            <h1>Welcome to the Store</h1>
            <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode}/>
            <ProductList products={filteredProducts} onAddToCart={handleAddToCart} onFilter={handleCategoryChange}/>
            <Cart cartItems={cartItems} onAddToCart={handleAddToCart}/>
        </div>
    );
};
    

export default App
