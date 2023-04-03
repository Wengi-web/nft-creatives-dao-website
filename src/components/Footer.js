import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 NFT Creatives DAO. All rights reserved.</p>
      <style>
        {`
          .footer {
            background-color: #5f4339;
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.8rem;
            font-family: "Ubuntu", sans-serif;
          }

          .footer p {
            margin: 0;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
