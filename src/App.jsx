import "./App.css";
import { useEffect, useState } from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Unknown from "../src/assets/unknown.png";
import Remains1 from "../src/assets/remains-1.png";
import Remains2 from "../src/assets/remains-2.png";
import Remains3 from "../src/assets/remains-3.png";
import Remains4 from "../src/assets/remains-4.png";
import Roadmap from "../src/assets/roadmap.png";
import Gif1 from "../src/assets/gif1.gif";
import WoodBackground from "../src/assets/sign.png";
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
                <img src={WoodBackground} className="wood-background" alt="" />
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
                <h2 className="cursive">{ETH} ETH</h2>
                <main>
                  {/* <h6>5 mints per person</h6> */}
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
                  <div className="remains-text-overly">
                    Rick was the CEO of his very own law firm, now he’s a stone
                    cold killer. Zombie or not, Rick doesn’t care. If you have
                    something he wants, he will take it. Rick has set up camp on
                    the outskirts of Longwood.
                  </div>
                </main>
                <h6>Nigel</h6>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains2} alt="" />
                  <div className="remains-text-overly">
                    Richard has seen some sh*t in his days. Nothing phases him
                    any more, zombies are the least of his worries. After losing
                    his wife to the apocalypse he is once again searching for
                    love. His wife isn’t dead, Rick just stole her 💔😦
                  </div>
                </main>
                <h6>Richard</h6>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains3} alt="" />
                  <div className="remains-text-overly">
                    Jonny has worked on a fishing boat most of his life, he has
                    never felt the touch of a woman. Coming home and seeing most
                    of the population have turned into zombies, he’s willing to
                    give anything a go.
                  </div>
                </main>
                <h6>Jonny</h6>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains4} alt="" />
                  <div className="remains-text-overly">
                    Gareth enjoys a good pint of lager, shame all the bars are
                    now closed due to unforseen circumstances. He now brews his
                    own moonshine and collects bottle caps to pass the time.
                  </div>
                </main>
                <h6>Gareth</h6>
              </div>
            </div>
            <div className="remains-main-grid">
              <div className="rmg-cell">
                <h1 className="cursive">One of a kind generated nfts</h1>
              </div>
              <div className="remains-grid-cell">
                <main className="remains-grid-cell-special">
                  <img src={Gif1} alt="" />
                </main>
                <h6>100% Unique</h6>
              </div>
              <div className="rmg-cell rmg-cell-2">
                <main>
                  <p>3500</p>
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
      {/* Roadmap */}
      <div className="roadmap">
        <h1 className="cursive mainheading">Roadmap</h1>
        <div className="box">
          <div class="roadmap-content">
            <div class="road-map-line"></div>
            <div class="roadmap-box-left">
              <div class="roadmap-box-content">
                <div class="roadmap-text-box">
                  <h6 className="cursive">1. SURVIVORS</h6>
                  <p>
                    After the virus outbreak, modern civilisation has collapsed.
                    Looting, fighting and survival instincts have kicked in. 500
                    survivors have been accounted for so far and will be
                    available at the pre-sale mint in December. Throughout their
                    exploration, Longwood Valley will be revealed.
                  </p>
                </div>
                <div class="roadmap-circle"></div>
              </div>
            </div>
            <div class="roadmap-box-right">
              <div class="roadmap-box-content">
                <div class="roadmap-circle"></div>
                <div class="roadmap-text-box">
                  <h6 className="cursive">2. THE REMNANTS</h6>
                  <p>
                    3000 more Remnants have managed to survive the outbreak.
                    These Remnants will be available to the public to mint
                    (December). Each Remnant will be unique and hold different
                    attributes. 5% of all mint funds will be added to the Camp
                    (Community wallet) . 5% will be given away to a homeless
                    charity voted on by the community, to support the true
                    survivors.
                  </p>
                </div>
              </div>
            </div>
            <div class="roadmap-box-left">
              <div class="roadmap-box-content">
                <div class="roadmap-text-box">
                  <h6 className="cursive">3. REBUILDING</h6>
                  <p>
                    Airdrop and reward phase begins. 50% of all royalties from
                    secondary market sales will be distributed back to holders,
                    weekly through the Camp. The more NFTs you hold, the higher
                    % you will earn from the Camp. Airdrops containing
                    attributes (weapons and clothing etc.) and companions will
                    be distributed. Airdrop criteria and frequency will be
                    announced soon.
                  </p>
                </div>
                <div class="roadmap-circle"></div>
              </div>
            </div>
            <div class="roadmap-box-right">
              <div class="roadmap-box-content">
                <div class="roadmap-circle"></div>
                <div class="roadmap-text-box">
                  <h6 className="cursive">4. A NEW WORLD</h6>
                  <p>
                    Recreating society with the aim of finding a cure. The Camp
                    will be developed to enable quests and challenges. Remnants
                    will be able to explore Longwood Valley in search of
                    supplies and Loot, while also gaining rewards from the
                    Community wallet. Companions will be airdropped to all
                    holders, giving each survivor a partner to support their
                    exploration within Longwood Valley.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All That Remains Section */}
      <div className="remains">
        <div className="box">
          <div className="remains-content">
            <h1 className="cursive mainheading">Meet the Team</h1>
            <div className="remains-grid">
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains1} alt="" />
                </main>
                <h4>Nigel</h4>
                <h5>Title</h5>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains2} alt="" />
                </main>
                <h4>Richard</h4>
                <h5>Title</h5>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains3} alt="" />
                </main>
                <h4>Jonny</h4>
                <h5>Title</h5>
              </div>
              <div className="remains-grid-cell">
                <main>
                  <img src={Remains4} alt="" />
                </main>
                <h4>Gareth</h4>
                <h5>Title</h5>
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
