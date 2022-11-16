import React from "react";
import "./Modal.css";
import { GrClose } from "react-icons/gr";
import metaMaskIcon from "../../assets/metaMaskIcon.webp";
import walletConnectIcon from "../../assets/walletConnectIcon.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

function Modal({ onClose, show, hide }) {
  return (
    <div
      onClick={onClose}
      className={show ? "modal show-modal" : "modal hide-modal"}
    >
      <section className="modal-main" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <p>Connect Wallet</p>
          <GrClose onClick={hide} className="close-modal" />
        </div>
        <div className="modal-body">
          <p>Choose your preferred wallet:</p>
          <button className="modal-select-btn">
            <div>
              <img src={metaMaskIcon} />
              <p>Metamask</p>
            </div>
            <MdKeyboardArrowRight />
          </button>
          <button className="modal-select-btn">
            <div>
              <img src={walletConnectIcon} />
              <p>WalletConnect</p>
            </div>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
