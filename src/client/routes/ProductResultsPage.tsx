import React, { useEffect, useState } from 'react';
// create a product page that displays all the products in the mockData and make an API call to the endpoint you created

export default function ProductResultsPage() {
  interface Product {
    asin: string;
    thumbnail: string;
    name: string;
    price: number;
    currency_symbol: string;
    url: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products')
      .then(res => res.json())
      .then(data => setProducts(data.results))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h1>Product Results</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.asin} className="product-item">
            <img src={product.thumbnail} alt={product.name} />
            <h2>{product.name}</h2>
            <p>
              {product.price} {product.currency_symbol}
            </p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
