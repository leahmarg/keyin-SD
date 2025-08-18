import { useContext } from "react";
import Header from "../../Components/Header/header";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import "./checkout.css";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/footer";

export function Checkout() {
  const { cart, setCart } = useContext(CartContext); // make sure setCart is exposed in your context
  const navigate = useNavigate();
  const { purchaseCart } = useContext(CartContext);

  const cartTotal = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const hst = cartTotal * 0.15; // 15% HST
  const total = cartTotal + hst;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    purchaseCart(cart);
    console.log("Form submitted"); // check in console
    navigate("/PostCheckout");
  };

  return (
    <>
      <Header></Header>
      <LogoHeader></LogoHeader>
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>
      <div className="checkout">
        <div className="checkout-items">
          <h2>Order Summary</h2>
          <div className="order-summ">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.imageURL} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="summ-total">
            <h4>Cart Total: ${cartTotal}</h4>
            <h4>HST: ${hst}</h4>
            <h3>Total: ${total}</h3>
          </div>
        </div>

        <div className="checkout-form">
          <h2>Billing Details</h2>
          <form onSubmit={handlePlaceOrder}>
            <label>
              Name:
              <input type="text" required />
            </label>
            <label>
              Address:
              <input type="text" required />
            </label>
            <label>
              Card Number:
              <input type="text" required />
            </label>
            <label>
              CVV:
              <input type="text" required />
            </label>
            <label>
              Card expiration:
              <input type="month" required />
            </label>
            <div className="button-container">
              <button type="submit">Place Order</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
