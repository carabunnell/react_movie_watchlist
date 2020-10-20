import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Watchlist} />
          <Route exact path="/watchlist" component={Watchlist} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
