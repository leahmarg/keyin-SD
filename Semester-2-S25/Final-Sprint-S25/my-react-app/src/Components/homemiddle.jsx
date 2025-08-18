import "./homemiddle.css";
import { Link } from "react-router-dom";

export function HomeMiddle() {
  return (
    <>
      <div className="home-middle">
        <div className="middle-container">
          <div className="middle-left">
            <h2>Hand restored, with love</h2>
            <p>
              Every piece in our collection is hand picked, hand restored and
              graded thoroughly. Explore our collection to find your next piece
              that you'll love for years to come!
            </p>
          </div>
          <div className="middle-right">
            <div className="middle-right-img-container">
              <div className="middle-right-img">
                <div className="img1">
                  <img src="./item01.jpg" alt="Pink Sapphire Ring"></img>
                </div>
                <div className="img2">
                  <img src="./item03.jpg" alt="Double stone diamond ring"></img>
                </div>
                <Link to="/shop" className="shop-button">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
