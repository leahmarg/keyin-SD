import "./footer.css";

export default function Footer() {
  return (
    <nav>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-location">
            <h2>Our Location</h2>
            <h3>233 Lemon Lane, St. John's, NL</h3>
            <h3>A1C 3F6</h3>
            <h4>+1 (709) 625 - 5807</h4>
          </div>
          <div className="footer-list">
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Our Policies</li>
              <li>Contact</li>
              <li>Work with Us</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
