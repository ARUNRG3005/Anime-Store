import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "40px" }}>Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            gap: "20px"
          }}
        >
          <img src={item.image} width="80" />
          <div>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <p>Qty: {item.qty}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
