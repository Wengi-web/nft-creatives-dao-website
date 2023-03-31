import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <h2>About NFT Creatives DAO</h2>
      <p>
        NFT Creatives DAO is a decentralized autonomous organization (DAO)
        dedicated to empowering African creatives and promoting African art and
        culture through the use of non-fungible tokens (NFTs).
      </p>
      <p>
        Our mission is to create a platform that enables African creatives to
        monetize their work and connect with a global audience, while preserving
        the authenticity and cultural richness of African art.
      </p>
      <h3>How it works</h3>
      <p>
        African creatives can submit their artwork to be minted as NFTs on our
        platform. Each NFT represents a unique piece of artwork and is stored on
        the Filecoin network for secure and decentralized storage.
      </p>
      <p>
        Once the NFT is minted, it can be bought and sold on various NFT
        marketplaces or held as a collectible. A portion of the proceeds from
        each sale is automatically sent to the artist's wallet, while the
        remaining proceeds are distributed to the members of the DAO who
        participate in the creation and curation of the platform.
      </p>
      <h3>Join us</h3>
      <p>
        If you are an African creative interested in minting your artwork as an
        NFT, or if you want to join our community and help us promote African art
        and culture, please <Link to="/contact">contact us</Link> or visit our
        <Link to="/dao-voting">DAO voting</Link> page to participate in our
        decision-making process.
      </p>
      <style>
        {`
          .about-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-size: 1.2rem;
            font-family: "Ubuntu", sans-serif;
          }

          .about-page h2,
          .about-page h3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .about-page p {
            margin-bottom: 1rem;
          }

          .about-page a {
            color: #d4a373;
            text-decoration: none;
            font-weight: bold;
          }

          .about-page a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export default About;
