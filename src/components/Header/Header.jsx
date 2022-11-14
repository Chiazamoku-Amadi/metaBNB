import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);

  function handleNavbarClick() {
    setOpenNavbar(!openNavbar);
  }

  return (
    <div className="header">
      <div className="header-logo-container">
        <img src={Logo} className="header-logo" />
      </div>
      <div className="menu">
        <nav>
          <button onClick={handleNavbarClick} className="hamburger">
            {openNavbar ? <GrClose /> : <GiHamburgerMenu />}
          </button>
          <ul className={openNavbar ? "hamburgerNavbar" : "navbar"}>
            <li>Home</li>
            <li>Place to Stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
        </nav>
        <button className="header-btn">Connect Wallet</button>
      </div>
    </div>
  );
}

export default Header;
