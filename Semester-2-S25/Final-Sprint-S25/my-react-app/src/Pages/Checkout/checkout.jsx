import { useContext } from "react";
import Header from "../../Components/Header/header";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import "./checkout.css";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import { SmoothAll } from "../../Components/SmoothAll";

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
    navigate("/PostCheckout"); // brings you to thank you page, clears cart
  };

  return (
    <>
      <Header></Header>
      <LogoHeader></LogoHeader>
      <SmoothAll>
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
                  <div className="item-descript">
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
          <div className="billing-container">
            <h2>Billing Details</h2>
            <form onSubmit={handlePlaceOrder} className="billing-form">
              <div className="row">
                <label>
                  Name:
                  <input type="text" required />
                </label>
                <label>
                  Email:
                  <input type="email" required />
                </label>
              </div>

              <label className="full-width">
                Address:
                <input type="text" required />
              </label>

              <label className="full-width">
                Card Number:
                <input type="text" required />
              </label>

              <div className="row">
                <label>
                  Security Code:
                  <input type="text" required />
                </label>
                <label>
                  Expiration:
                  <input type="month" required />
                </label>
              </div>
              <button type="submit">Purchase</button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </SmoothAll>
    </>
  );
}
