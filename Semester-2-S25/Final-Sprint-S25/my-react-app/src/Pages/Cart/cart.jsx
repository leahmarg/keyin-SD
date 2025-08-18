import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/header";
import { CartContext } from "../../CartContext";
import { ItemList } from "../../Components/ItemList";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import "./cart.css";
import Footer from "../../Components/Footer/footer";

export function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  console.log({ cart });

  const cartTotal = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const hst = cartTotal * 0.15; // 15% HST
  const total = cartTotal + hst;

  return (
    <>
      <Header />
      <LogoHeader />
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      <div className="cart">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Cart is empty!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.imageURL} alt={item.name} />
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h4>Cart Total: ${cartTotal}</h4>
              <h4>HST: ${hst}</h4>
              <h3>Total: ${total}</h3>
            </div>

            <div className="cart-actions">
              <Link to="/checkout" className="checkout-button">
                Go to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
