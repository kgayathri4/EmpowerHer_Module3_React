import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  console.log("🔁 App re-rendered");

  const [counter, setCounter] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 2000 },
  ];

  // ✅ useMemo for expensive calculation
  const totalPrice = useMemo(() => {
    console.log("💰 Calculating total price");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // ✅ useCallback to memoize function reference
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected Product:", product.name);
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;
