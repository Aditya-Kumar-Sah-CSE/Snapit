const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>About SNAPIT</h3>
          <p>
            SNAPIT is your one-stop online grocery store delivering
            fresh and quality products at your doorstep.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@snapit.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SNAPIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
