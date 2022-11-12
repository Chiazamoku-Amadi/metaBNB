import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.webp";

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="header-logo" />
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>Place to Stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </nav>
      <button className="header-btn">Connect Wallet</button>
    </div>
  );
}

export default Header;
