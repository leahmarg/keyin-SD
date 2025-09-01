import "./inquire.css";
import Header from "../../Components/Header/header";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import Footer from "../../Components/Footer/footer";
import { SmoothAll } from "../../Components/SmoothAll";

export function Inquire() {
  return (
    <>
      <Header></Header>
      <LogoHeader></LogoHeader>
      <SmoothAll>
        <div className="inquire-container">
          <div className="inquire-header">
            <div className="inquire-header-container">
              <div className="inquire-header-1">
                <img src="./handring.jpg" alt="Hands working on "></img>
              </div>
              <div className="inquire-header-2">
                <h2>Get in touch with us</h2>
                <h3>Want a custom piece? Need a quote? Have any questions?</h3>
                <h3>Leave us a message and we'll get back to you ASAP!</h3>
              </div>
              <div className="inquire-header-3">
                <img src="./homemiddle.jpg" alt="Hands working on "></img>
              </div>
            </div>
          </div>
          <div className="inquire-info-container">
            <div className="inquire-info">
              <h1>inquiries@harrhys.com</h1>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </SmoothAll>
    </>
  );
}
