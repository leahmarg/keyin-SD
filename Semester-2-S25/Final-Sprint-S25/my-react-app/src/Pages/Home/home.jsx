import "./home.css";
import Header from "../../Components/Header/header";
import { MainImg } from "../../Components/mainimg";
import { HomeMiddle } from "../../Components/homemiddle";
import Footer from "../../Components/Footer/footer";

export function Home() {
  return (
    <>
      <Header></Header>
      <MainImg></MainImg>
      <HomeMiddle></HomeMiddle>
      <Footer></Footer>
    </>
  );
}
