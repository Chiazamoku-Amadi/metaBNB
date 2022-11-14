import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/footerLogo.svg";
import FacebookIcon from "../../assets/facebookIcon.webp";
import InstagramIcon from "../../assets/instagramIcon.webp";
import TwitterIcon from "../../assets/twitterIcon.webp";
import CopyrightIcon from "../../assets/copyrightIcon.webp";

function Footer() {
  return (
    <section className="footer-container">
      <div className="logo-section">
        <img src={FooterLogo} />
        <div className="socials">
          <img src={FacebookIcon} />
          <img src={InstagramIcon} />
          <img src={TwitterIcon} />
        </div>
        <div className="copyright">
          <img src={CopyrightIcon} />
          <p>{new Date().getFullYear()} Metabnb</p>
        </div>
      </div>
      <nav className="community">
        <p>Community</p>
        <ul>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </nav>
      <nav className="places">
        <p>Places</p>
        <ul>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
      </nav>
      <nav className="about-us">
        <p>About Us</p>
        <ul>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;
