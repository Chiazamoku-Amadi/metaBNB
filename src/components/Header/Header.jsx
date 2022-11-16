import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Modal from "../Modal/Modal";

function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [show, setShow] = useState(false);

  function showConnectWallet() {
    setShow(true);
  }

  function hideConnectWallet() {
    setShow(false);
  }

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
            <li>
              <Link to="/" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/place-to-stay" className="place-to-stay">
                Place to Stay
              </Link>
            </li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
        </nav>
        <Modal
          onClose={hideConnectWallet}
          show={show}
          hide={hideConnectWallet}
          className="modal"
        />
        <button onClick={showConnectWallet} className="header-btn">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Header;
