import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="foot-container">
        <img
          src="https://www.adityabirlacapital.com/-/media/Project/ABCL/Logo/footer-logo.png"
          alt="logo"
        />
        <div className="foot-menu">
          <p>About Us</p>
          <p>Careers</p>
          <p>Customer Service</p>
        </div>
        <div className="foot-menu">
          <p>Our Solutions</p>
          <p>Investors Relations</p>
          <p>Press and Media</p>
        </div>
        <div className="foot-menu">
          <p>Our Businesses</p>
          <p>Our Achievements</p>
          <p>CSR and Sustainability</p>
        </div>
        <div className="foot-menu">
          <p>Locate Us</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="foot-span">
          <span>© 2023, Aditya Birla Capital Ltd.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
