import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PlaceToStay from "./components/PlaceToStay/PlaceToStay";
import inspirationHousesData from "./inspirationHousesData";
import Cards from "./components/Cards/Cards";
import heroImage from "./assets/heroImage.webp";
import MBToken from "./assets/MBTokenLogo.webp";
import Metamask from "./assets/MetamaskLogo.webp";
import OpenSea from "./assets/OpenSeaLogo.webp";
import NftsImage from "./assets/nftsImage.png";

function App() {
  const inspirationHouseCards = inspirationHousesData.map(
    (inspirationHouseCard) => {
      return <Cards key={inspirationHouseCard.id} {...inspirationHouseCard} />;
    }
  );

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="/"
          element={
            <>
              <section className="hero">
                <div className="hero-text">
                  <h1 className="hero-text-title">
                    Rent a <span className="purple">Place</span> away from{" "}
                    <span className="purple">Home</span> in the{" "}
                    <span className="purple">Metaverse</span>
                  </h1>
                  <p className="hero-text-description">
                    we provide you access to luxury and affordable houses in the
                    metaverse, get a chance to turn your imagination to reality
                    at your comfort zone
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
                <img src={heroImage} className="hero-image" />
              </section>
              <section className="community-logos">
                <img src={MBToken} className="logo" />
                <img src={Metamask} className="logo" />
                <img src={OpenSea} className="logo" />
              </section>
              <section className="inspiration">
                <h3 className="inspiration-title">
                  Inspiration for your next adventure
                </h3>
                <div className="inspiration-house-cards">
                  {inspirationHouseCards}
                </div>
              </section>
              <section className="nfts">
                <div>
                  <h3 className="nfts-title">Metabnb NFTs</h3>
                  <p className="nfts-description">
                    Discover our NFT gift cards collection. Loyal customers gets
                    amazing gift cards which are traded as NFTs. These NFTs
                    gives our cutomer access to loads of our exclusive services.
                  </p>
                  <button className="nfts-btn">Learn More</button>
                </div>
                <img src={NftsImage} className="nfts-image" />
              </section>
            </>
          }
        />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Route>
    </Routes>
  );
}

export default App;
