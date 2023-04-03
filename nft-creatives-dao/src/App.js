import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NFTCreationPage from "./pages/NFTCreationPage";
import DAOVotingPage from "./pages/DAOVotingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/nft-creation" element={<NFTCreationPage />} />
          <Route path="/dao-voting" element={<DAOVotingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
