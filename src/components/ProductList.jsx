import React from 'react'
import ProductCard from './ProductCard'


const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({products, onAddToCart, onFilter}) => {
  if(!products || products.length === 0){
    return <div> No products available.</div>
  }

  return (
    <div className= 'Productlist'>
      <h2>Available Products</h2>
      
  <div className='filter'>
      
        <label htmlFor='category-select'>Category:</label>
        <select id="category-select" className='selection dropdown' onChange={onFilter}>
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {products.map((product) => (
        <ProductCard
         key={product.id}
         product={product}
         onAddToCart={onAddToCart}
          />
      ))}
    </div>
  )
}
export {sampleProducts}
export default ProductList
