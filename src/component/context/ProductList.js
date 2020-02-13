import React from 'react'; 
import Cars from '@/component/context/Cars';

const ProductList = props => (
  <div className="product-list">
    <h2>Product list:</h2>
    <Cars />
  </div>
);

export default ProductList;