import React, { Fragment } from "react";
import "./scss/custom.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.js";
import Namegenerator from "./Components/NameGenerator/Namegenerator.js";
import Stories from "./Components/Stories/Stories.js";
import Characters from "./Components/Characters/Characters";
import Userlogin from "./Components/Userlogin/Userlogin";
import Signin from "./Components/Userlogin/Signin";
import Places from "./Components/Places/Places";
import Items from "./Components/Items/Items";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Fragment>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/namegenerator" element={<Namegenerator />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/places" element={<Places />} />
              <Route path="/items" element={<Items />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/userlogin" element={<Userlogin />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </Fragment>
        </Router>
      </div>
    </div>
  );
};

export default App;
