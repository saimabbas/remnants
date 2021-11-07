import "./App.css";
import { useEffect, useState } from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Unknown from "../src/assets/unknown.png";
import Remains1 from "../src/assets/remains-1.png";
import Remains2 from "../src/assets/remains-2.png";
import Remains3 from "../src/assets/remains-3.png";
import Remains4 from "../src/assets/remains-4.png";
import Gif1 from "../src/assets/gif1.gif";
import { FaCaretDown } from "react-icons/fa";
import $ from "jquery";
function App() {
  const [ETH, setETH] = useState(0.045);
  useEffect(() => {
    $(".q1").click(() => {
      $(".q1 svg").toggleClass("rotate");
      $(".a1").slideToggle(350);
    });
    $(".q2").click(() => {
      $(".q2 svg").toggleClass("rotate");
      $(".a2").slideToggle(350);
    });
    $(".q3").click(() => {
      $(".q3 svg").toggleClass("rotate");
      $(".a3").slideToggle(350);
    });
    $(".q4").click(() => {
      $(".q4 svg").toggleClass("rotate");
      $(".a4").slideToggle(350);
    });
    $(".q5").click(() => {
      $(".q5 svg").toggleClass("rotate");
      $(".a5").slideToggle(350);
    });
  }, []);
  const Tog1 = () => {
    setETH(0.045);
    $("#1").addClass("activeTab");
    $("#2, #3").removeClass("activeTab");
  };
  const Tog2 = () => {
    setETH(0.09);
    $("#2").addClass("activeTab");
    $("#1, #3").removeClass("activeTab");
  };
  const Tog3 = () => {
    setETH(0.0135);
    $("#3").addClass("activeTab");
    $("#2, #1").removeClass("activeTab");
  };
  return (
    <main className="remnants">
      {/* hero Section */}
      <div className="hero">
        <div className="box">
          <div className="header">
            <h1 className="header-left cursive">The Remnants</h1>
            <div className="header-right">
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaDiscord />
              </a>
              <button className="main-btn">MINT</button>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="cursive">Welcome to the Remnants</h1>
            <h3>
              The Remnants is a collection of 3500 hostile characters surviving
              in a post-apocalyptic world stricken by rivalry, hunger and
              natures perils. Living on the Ethereum blockchain, the future of
              the metaverse provides significant opportunity for survival.
            </h3>
            <button className="main-btn">MINT</button>
          </div>
        </div>
      </div>
      {/* Mint Section */}
      <div className="mint">
        <div className="box">
          <h1 className="cursive mainheading">Mint a Remnant</h1>
          <div className="mint-grid">
            <div className="mint-grid-left">
              <img src={Unknown} alt="" />
            </div>
            <div className="mint-grid-right">
              <div className="mint-grid-right-content">
                <div className="toggle-grid">
                  <h2 id="1" className="activeTab" onClick={Tog1}>
                    1
                  </h2>
                  <h2 id="2" onClick={Tog2}>
                    2
                  </h2>
                  <h2 id="3" onClick={Tog3}>
                    3
                  </h2>
                </div>
                <h2>{ETH} ETH</h2>
                <main>
                  <h6>5 mints per person</h6>
                  <button className="main-btn">MINT</button>
                </main>
              </div>
            </div>
          </div>
          <div className="three-card-grid">
            <div className="three-card-grid-cell">
              <h2 className="cursive">Outbreak </h2>
              <p>
                It's been 9 months since the outbreak. A virus causing mutation
                and disease has swept through the Metaverse. 3500 survivors now
                reside on the Ethereum blockchain, these, are the Remaining.
              </p>
            </div>
            <div className="three-card-grid-cell">
              <h2 className="cursive">Survival </h2>
              <p>
                Looting, fighting and un-conventional means of survival have
                ensued. The Remaining have armed themselves with a selection of
                weapons to increase their chances of survival. Hunger is the
                least of their problem in the post-apocalypse.
              </p>
            </div>
            <div className="three-card-grid-cell">
              <h2 className="cursive">Future </h2>
              <p>
                The future is not certain for The Remnants. Some choose to get
                by using brute force, and some go for a more scientific approach
                trying to find a cure for the virus. Where will your loyalties
                lie?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* All That Remains Section */}
      <div className="remains">
        <div className="box">
          <div className="remains-content">
            <h1 className="cursive mainheading">All That Remains</h1>
            <div className="remains-grid">
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains1} alt="" />
                </main>
                <h6>Nigel</h6>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains2} alt="" />
                </main>
                <h6>Richard</h6>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains3} alt="" />
                </main>
                <h6>Jonny</h6>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains4} alt="" />
                </main>
                <h6>Gareth</h6>
              </div>
            </div>
            <div className="remains-main-grid">
              <div className="rmg-cell">
                <h1>One of a kind generated nfts</h1>
              </div>
              <div className="remains-grid-cell">
                <main className="remains-grid-cell-special">
                  <img src={Gif1} alt="" />
                </main>
                <h6>Jonny</h6>
              </div>
              <div className="rmg-cell rmg-cell-2">
                <main>
                  <p>5000</p>
                  <h4>To be minted</h4>
                </main>
                <main>
                  <p>500</p>
                  <h4>Presale spaces</h4>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="faq">
        <div className="box">
          <div className="faq-content">
            <h1 className="cursive mainHeading">FAQ</h1>
            <div className="faq-grid">
              <div className="faq-box">
                <div className="faq-q q1">
                  <p>What are The Remnants? </p>
                  <FaCaretDown />
                </div>
                <div className="faq-a a1">
                  The Remnants is a collection of 3500 hostile characters
                  surviving in a post-apocalyptic world stricken by rivalry,
                  hunger and natures perils. Living on the Ethereum blockchain,
                  the future of the metaverse provides significant opportunity
                  for survival. Each Survivor is algorithmically generated from
                  a wide array of attributes and verifiable on the blockchain
                  (ERC-721 standard). No two survivors will be the same.
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-q q2">
                  <p>How many will be available to mint?</p>
                  <FaCaretDown />
                </div>
                <div className="faq-a a2">
                  The Remnants is a collection of 3500 hostile characters
                  surviving in a post-apocalyptic world stricken by rivalry,
                  hunger and natures perils. Living on the Ethereum blockchain,
                  the future of the metaverse provides significant opportunity
                  for survival. Each Survivor is algorithmically generated from
                  a wide array of attributes and verifiable on the blockchain
                  (ERC-721 standard). No two survivors will be the same.
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-q q3">
                  <p>When will The Remnants be available to mint? </p>
                  <FaCaretDown />
                </div>
                <div className="faq-a a3">
                  The Remnants is a collection of 3500 hostile characters
                  surviving in a post-apocalyptic world stricken by rivalry,
                  hunger and natures perils. Living on the Ethereum blockchain,
                  the future of the metaverse provides significant opportunity
                  for survival. Each Survivor is algorithmically generated from
                  a wide array of attributes and verifiable on the blockchain
                  (ERC-721 standard). No two survivors will be the same.
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-q q4">
                  <p>What blockchain will you be using? </p>
                  <FaCaretDown />
                </div>
                <div className="faq-a a4">
                  The Remnants is a collection of 3500 hostile characters
                  surviving in a post-apocalyptic world stricken by rivalry,
                  hunger and natures perils. Living on the Ethereum blockchain,
                  the future of the metaverse provides significant opportunity
                  for survival. Each Survivor is algorithmically generated from
                  a wide array of attributes and verifiable on the blockchain
                  (ERC-721 standard). No two survivors will be the same.
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-q q5">
                  <p>How much will it cost to mint one Remnant? </p>
                  <FaCaretDown />
                </div>
                <div className="faq-a a5">
                  The Remnants is a collection of 3500 hostile characters
                  surviving in a post-apocalyptic world stricken by rivalry,
                  hunger and natures perils. Living on the Ethereum blockchain,
                  the future of the metaverse provides significant opportunity
                  for survival. Each Survivor is algorithmically generated from
                  a wide array of attributes and verifiable on the blockchain
                  (ERC-721 standard). No two survivors will be the same.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="cta">
        <div className="box">
          <div className="cta-content">
            <h1 className="cursive">JOIN THE COMMUNITY</h1>
            <main>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaDiscord />
              </a>
            </main>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="box">
          <div className="footer-content">
            <h1>2021 The Remnants</h1>
            <main>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaDiscord />
              </a>
              <a href="">Whitepaper</a>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
