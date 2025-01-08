import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/public/assets/logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Your dream space deserves the best execution, and that’s where United Buildpro Pvt Ltd excels. Our construction services encompass everything from foundational work to structural builds, tailored to residential, commercial, and industrial needs. We pride ourselves on using high-quality materials and advanced techniques to ensure durability and efficiency in every project we undertake.
          </p>
          <div className="social-icons">
            <i><img src="/public/assets/instagram.png"/></i>
            <i><img src="/public/assets/linkedin.png"/></i>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Living</a></li>
              <li><a href="#">Storage</a></li>
              <li><a href="#">Dining</a></li>
              <li><a href="#">Bedroom</a></li>
              <li><a href="#">Matress</a></li>
              <li><a href="#">Study</a></li>
              <li><a href="#">Office</a></li>
              <li><a href="#">Outdoor</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Residential</a></li>
              <li><a href="#">Institutional</a></li>
              <li><a href="#">Commercial</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p>2024 © All rights reserved - Cozy Comfort</p>
        <div className="payment">
          <img src="public/assets/payments.png"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
