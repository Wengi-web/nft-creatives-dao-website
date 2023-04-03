import React, { useState } from "react";

function NFTCreationPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle NFT creation and storage on Filecoin network using the file variable
  };

  return (
    <div className="nft-creation-page">
      <h2>Create an NFT</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png, .gif, .mp4, .mov"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Create NFT</button>
      </form>
      <style>
        {`
          .nft-creation-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-size: 1.2rem;
            font-family: "Ubuntu", sans-serif;
          }

          .nft-creation-page h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #d4a373;
            border-radius: 5px;
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
          }

          .form-group textarea {
            resize: vertical;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #5f4339;
          }

          button[type="submit"] {
            background-color: #d4a373;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
          }

          button[type="submit"]:hover {
            background-color: #5f4339;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default NFTCreationPage;
