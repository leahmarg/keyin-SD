import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, imageURL, clickable = true }) => {
  return (
    <div className="item">
      <div className="item-img">
        <img src={imageURL} alt={name} />
        {clickable && (
          <div className="see-details-overlay">
            <Link to={`/details/${id}`} className="details-button">
              See Details
            </Link>
          </div>
        )}
      </div>
      <div className="item-name-price">
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Item;
