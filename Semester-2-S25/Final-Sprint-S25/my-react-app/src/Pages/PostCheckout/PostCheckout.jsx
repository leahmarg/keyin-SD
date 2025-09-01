import { useEffect, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../Components/Header/header";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import Footer from "../../Components/Footer/footer";
import "./PostCheckout.css";
import { SmoothAll } from "../../Components/SmoothAll";

export function PostCheckout() {
  return (
    <>
      <Header />
      <LogoHeader />
      <SmoothAll>
        <div className="thank-you">
          <h1>Thank you for your purchase!</h1>
        </div>
        <Footer />
      </SmoothAll>
    </>
  );
}
