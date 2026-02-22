function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  total,
  confirmOrder,
}) {
  return (
    <div className="cart">
      <h2>Your Cart ({cart.length})</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div>
            <h4>{item.name}</h4>
            <p>${item.price} x {item.qty}</p>
          </div>

          <div className="controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>

            <button
              className="remove"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button
        className="confirm"
        disabled={!cart.length}
        onClick={confirmOrder}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Cart;