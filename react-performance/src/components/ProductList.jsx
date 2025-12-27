function ProductList({ products, onSelectProduct }) {
  console.log("🔁 ProductList re-rendered");

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => onSelectProduct(product)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
