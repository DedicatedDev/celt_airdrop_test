import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Minter } from "./pages/CeltMinter";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="minter" element={<Minter />} />
      </Routes>
    </Router>
   
  );
}

export default App;
