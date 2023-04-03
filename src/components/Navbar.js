import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/nft-creation" activeClassName="active">
            Create NFT
          </NavLink>
        </li>
        <li>
          <NavLink to="/dao-voting" activeClassName="active">
            DAO Voting
          </NavLink>
        </li>
      </ul>
      <style>
        {`
          .navbar {
            background-color: #5f4339;
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .navbar ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .navbar li {
            margin-left: 1rem;
          }

          .navbar a {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            font-family: "Ubuntu", sans-serif;
          }

          .navbar a.active {
            font-weight: bold;
            background-color: #d4a373;
            border-radius: 5px;
            padding: 0.5rem 1rem;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
