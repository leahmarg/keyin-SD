import "./home.css";
import Header from "../../Components/Header/header";
import { MainImg } from "../../Components/mainimg";
import { HomeMiddle } from "../../Components/homemiddle";
import Footer from "../../Components/Footer/footer";
import { SmoothAll } from "../../Components/SmoothAll";

export function Home() {
  return (
    <>
      <Header></Header>
      <MainImg></MainImg>
      <SmoothAll>
        <HomeMiddle></HomeMiddle>
        <Footer></Footer>
      </SmoothAll>
    </>
  );
}
