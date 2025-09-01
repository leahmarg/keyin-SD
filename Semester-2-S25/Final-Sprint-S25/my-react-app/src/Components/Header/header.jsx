import { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <div className="navbar">
        <Link to="/inquire">Inquire</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart {cart.length > 0 ? `(${cart.length})` : ""}</Link>
      </div>
    </nav>
  );
}
