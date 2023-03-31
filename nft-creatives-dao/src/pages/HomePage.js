import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import video1 from "../assets/video1.mp4";

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to NFT Creatives DAO</h2>
      <p>
        NFT Creatives DAO is a decentralized autonomous organization (DAO)
        dedicated to empowering African creatives and promoting African art and
        culture through the use of non-fungible tokens (NFTs).
      </p>
      <p>
        Our platform allows African creatives to mint their artwork as NFTs on
        the Filecoin network, enabling them to monetize their work and connect
        with a global audience. Each NFT represents a unique piece of artwork
        and is stored securely on the Filecoin network for decentralized
        storage.
      </p>
      <p>
        Our mission is to promote African art and culture and to empower African
        creatives to earn a living from their work. We believe that the
        blockchain technology and NFTs have the potential to revolutionize the
        art world, and we are committed to being at the forefront of this
        movement in Africa.
      </p>
      <div className="image-section">
        <img src={image1} alt="African art piece" />
        <img src={image2} alt="Another African art piece" />
      </div>
      <div className="video-section">
        <video controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <style>
        {`
          .home-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-size: 1.2rem;
            font-family: "Ubuntu", sans-serif;
          }

          .home-page h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .home-page p {
            margin-bottom: 1rem;
          }

          .image-section {
            display: flex;
            justify-content: space-around;
            margin-top: 2rem;
          }

          .image-section img {
            max-width: 400px;
            height: auto;
          }

          .video-section {
            margin-top: 2rem;
          }

          .video-section video {
            max-width: 800px;
            height: auto;
          }
        `}
      </style>
    </div>
  );
}

export default HomePage;
