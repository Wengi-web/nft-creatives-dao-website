import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/nft-creation" component={NFTCreationPage} />
          <Route path="/dao-voting" component={DAOVotingPage} />
        </Router>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
