import { ItemList } from "../../Components/ItemList";
import Header from "../../Components/Header/header";
import { useItems } from "../../Components/useItems";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import "./shop.css";
import Footer from "../../Components/Footer/footer";
import { SmoothAll } from "../../Components/SmoothAll";

export function Shop() {
  const items = useItems();

  return (
    <>
      <Header></Header>
      <LogoHeader></LogoHeader>
      <SmoothAll>
        <div className="shop">
          <div className="shop-container">
            <ItemList items={items} />
          </div>
        </div>

        <Footer></Footer>
      </SmoothAll>
    </>
  );
}
