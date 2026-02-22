function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <div>
      <img src={product.image} alt={product.name} />
      
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      </div>
      <div>
        
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;