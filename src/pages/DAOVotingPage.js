import React from "react";

function DAOVotingPage() {
  return (
    <div className="dao-voting-page">
      <h2>DAO Voting</h2>
      <p>
        As a decentralized autonomous organization, NFT Creatives DAO is
        governed by its members. If you want to participate in our decision-making process and help shape the future of the platform, please fill out the form below to join our DAO and start voting on proposals.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Join DAO</button>
      </form>
      <style>
        {`
          .dao-voting-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-size: 1.2rem;
            font-family: "Ubuntu", sans-serif;
          }

          .dao-voting-page h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .dao-voting-page p {
            margin-bottom: 1rem;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
          }

          .form-group input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #d4a373;
            border-radius: 5px;
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
          }

          .form-group input:focus {
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

export default DAOVotingPage;
