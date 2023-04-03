import React from "react";

function NFTCard(props) {
  // Extract the necessary data from the props
  const { name, image, description, price } = props;

  // Define the function to upload the data to Filecoin network
  const uploadToIPFS = async () => {
    // TODO: Implement the upload functionality using Filecoin network
  };

  // Define the function to purchase the NFT
  const purchaseNFT = async () => {
    // TODO: Implement the purchase functionality and handle the monetization aspect
  };

  return (
    <div className="nft-card">
      <img src={image} alt={name} className="nft-image" />
      <h3 className="nft-name">{name}</h3>
      <p className="nft-description">{description}</p>
      <div className="nft-actions">
        <button onClick={uploadToIPFS}>Upload to Filecoin</button>
        <button onClick={purchaseNFT}>Purchase for {price} FIL</button>
      </div>
      <style>
        {`
          .nft-card {
            border: 1px solid #5f4339;
            border-radius: 5px;
            padding: 1rem;
            margin-bottom: 1rem;
          }

          .nft-image {
            width: 100%;
            height: auto;
            margin-bottom: 1rem;
          }

          .nft-name {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .nft-description {
            margin-bottom: 1rem;
          }

          .nft-actions {
            display: flex;
            justify-content: space-between;
          }

          .nft-actions button {
            background-color: #d4a373;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
          }

          .nft-actions button:hover {
            background-color: #5f4339;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default NFTCard;
