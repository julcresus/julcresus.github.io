import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Playstation from "./playstation";
import Home from "./home";
import EveryMindMatters from "./everymindmatters";
import PrideInLondon from "./prideinlondon";
import SgDesign from "./sgdesign";
import ESFA from "./esfa";
import ScrollToTop from 'react-router-scroll-top'


function App() {
  return (
    <div className="App">
      <Router basename='/' hashtype={"slash"}>
      <ScrollToTop>
      <div className="header">
        <h1>
          <a href='/'>julien cresus</a>
        </h1>
      </div>
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/playstation" component={Playstation} />
            
          <Route exact path="/prideinlondon" component={PrideInLondon} />
            
          <Route exact path="/everymindmatters" component={EveryMindMatters} />
            
          <Route exact path="/sgdesign" component={SgDesign} />
          <Route exact path="/esfa" component={ESFA} />
        </Switch>
        </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;
