import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Playstation from "./playstation";
import EveryMindMatters from "./everymindmatters";
import PrideInLondon from "./prideinlondon";
import SgDesign from "./sgdesign";

function Home() {
  return (
    <div className="App">
      <div class="container">
        <p id="intro" class="intro">
           I design interfaces and experiences for every type of user.
          <br></br>
          <br></br>
          Currently, <TextLoop interval={1300}>
                      <div>
                          <span>designing </span>
                      </div>
                      <div>creating </div>
                      <div>coding </div>
                      <div>testing </div>
                      <div>working </div>
                      <div>researching </div>
                  </TextLoop> @ Methods, London, UK.
                  <br></br>
                  <br></br>
                  You can check my CV <a href='./pdf/cv.pdf' target='_blank'>here</a>.
        </p>

      </div>
      <div class='bottom_button'>
        <a>Scroll down for my projects</a>
      </div>
      <div class="projects">
      <div class='project'>
              <img src='./img/mod.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Methods - Armed Forces Recruitment Program</p>
                <p class='tags'>ux design, responsive ui Design, coding</p>
              </div>
              <Link to="/mod" class='button'>
                  See the project
              </Link>
          </div>
     
          
          <div class='project'>
              <img src='./img/emm.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Methods - Every Mind Matters</p>
                <p class='tags'>ux design, research, user testing</p>
              </div>
              <Link to="/everymindmatters" class='button'>
                  See the project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/esfa.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Methods - ESFA</p>
                <p class='tags'>ux design, research, user testing</p>
              </div>
              <Link to="/esfa" class='button'>
                  See the project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/sg.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Societe Generale Design</p>
                <p class='tags'>UX design, UI Design</p>
              </div>
              <Link to="/sgdesign" class='button'>
                  See the project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/ps.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>University Case Study: Playstation Store</p>
                <p class='tags'>UX design, UI Design, App Redesign</p>
              </div>
              <Link to="/playstation" class='button'>
                  See the project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/pride.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Pride in London</p>
                <p class='tags'>UI Design</p>
              </div>
              <Link to="/prideinlondon" class='button'>
                  See the project
              </Link>
          </div>
          
          </div>

      
    </div>
    
  );
}

export default Home;
