function Modal({ clearCart }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Order Confirmed</h2>
        <p>Your desserts are on the way!</p>

        <button onClick={clearCart}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;