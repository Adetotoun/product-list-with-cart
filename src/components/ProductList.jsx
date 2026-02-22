import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div className="products">
      <h1 classname="h-desert">Deserts</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;