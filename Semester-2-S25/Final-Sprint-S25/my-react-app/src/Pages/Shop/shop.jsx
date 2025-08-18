import { ItemList } from "../../Components/ItemList";
import Header from "../../Components/Header/header";
import { useItems } from "../../Components/useItems";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import "./shop.css";
import Footer from "../../Components/Footer/footer";

export function Shop() {
  const items = useItems();

  return (
    <>
      <Header></Header>
      <LogoHeader></LogoHeader>
      <div className="shop">
        <div className="shop-container">
          <ItemList items={items} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
