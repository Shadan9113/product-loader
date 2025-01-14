import React, { useEffect, useState } from "react";
import "./ProductLoader.css"

const ProductLoader = () => {
  const [products, setProducts] = useState([]); // Stores fetched products
  const [visible, setVisible] = useState(5); // Tracks visible products
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Load more products
  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };

  // Handle loading state
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.slice(0, visible).map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price} USD</p>
          </li>
        ))}
      </ul>
      {/* Show "Load More" button only if there are more products to display */}
      {visible < products.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default ProductLoader;
