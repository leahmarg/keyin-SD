import { useParams } from "react-router-dom";
import Header from "../../Components/Header/header";
import { useItem } from "../../Components/useItem";
import Item from "../../Components/Item/item";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import "./details.css";
import Footer from "../../Components/Footer/footer";

export function Details() {
  const { itemId } = useParams();
  const item = useItem(itemId);

  const { addToCart } = useContext(CartContext);

  if (item === undefined) {
    return <>Loading...</>;
  }

  return (
    <>
      <Header></Header>
      <LogoHeader></LogoHeader>
      <div className="details">
        <div className="detail-container">
          <div className="details-left">
            <img src={item.imageURL} alt={item.name}></img>
          </div>
          <div className="details-right">
            <h1>{item.name}</h1>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
