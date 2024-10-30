import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from './productCard';
import './productCard.css';

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;