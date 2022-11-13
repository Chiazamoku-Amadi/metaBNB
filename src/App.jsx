import "./App.css";
import Header from "./components/Header/Header";
import heroHouse1 from "./assets/heroHouse1.webp";
import heroHouse2 from "./assets/heroHouse2.webp";
import heroHouse3 from "./assets/heroHouse3.webp";
import heroHouse4 from "./assets/heroHouse4.webp";
import MBToken from "./assets/MBTokenLogo.webp";
import Metamask from "./assets/MetamaskLogo.webp";
import OpenSea from "./assets/OpenSeaLogo.webp";

function App() {
  return (
    <>
      <section className="container">
        <Header />
        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-text-title">
              Rent a <span className="purple">Place</span> away from{" "}
              <span className="purple">Home</span> in the{" "}
              <span className="purple">Metaverse</span>
            </h1>
            <p className="hero-text-description">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="hero-search">
              <input
                type="text"
                placeholder="Search for location"
                className="search-input"
              />
              <label htmlFor="search">
                <button className="search-btn">Search</button>
              </label>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images1">
              <img src={heroHouse1} className="hero-image" />
              <img src={heroHouse2} className="hero-image" />
            </div>
            <div className="hero-images2">
              <img src={heroHouse3} className="hero-image" />
              <img src={heroHouse4} className="hero-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="community-logos">
        <img src={MBToken} className="logo" />
        <img src={Metamask} className="logo" />
        <img src={OpenSea} className="logo" />
      </section>
    </>
  );
}

export default App;
