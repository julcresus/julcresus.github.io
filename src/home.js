import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Playstation from "./playstation";
import EveryMindMatters from "./everymindmatters";
import PrideInLondon from "./prideinlondon";
import SgDesign from "./sgdesign";

function Home() {
  return (
    <div className="App">
      <div class="container">
        <p id="intro" class="intro">
          Currently, <TextLoop interval={1300}>
                      <div>
                          <span>designing </span>
                      </div>
                      <div>creating </div>
                      <div>coding </div>
                      <div>testing </div>
                      <div>working </div>
                      <div>researching </div>
                  </TextLoop> @ Cognizant, London, UK, <br></br>where I design interfaces and experiences for every type of user.
                  <br></br>
                  <br></br>
                  You can find more about me <Link to="/aboutme">here</Link> and check my CV <a href='./pdf/cv.pdf' target='_blank'>here</a>.
                  <br></br>
                  <br></br>
                  You can also see some examples of my work <HashLink to="/#project">below</HashLink>.
                  
        </p>

      </div>

      <div id='project' class="projects">
      <div class='project'>
              <img src='./img/shyl.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Dam Digital - Shy Lifestyle</p>
                <p class='tags'>app design, ux research, ux design</p>
              </div>
              <Link to="/shyl" class='btn btn-outline-dark btn-lg'>
                  View project
              </Link>
          </div> 
          <div class='project '>
              <img src='./img/rethink.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Dam Digital - Rethink</p>
                <p class='tags'>ux design, responsive ui Design, product design</p>
              </div>
              <Link to="/rethink" class='btn btn-outline-dark btn-lg'>
                  View project
              </Link>
          </div>
          <div class='project '>
              <img src='./img/shya.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Dam Digital - Shy Aviation</p>
                <p class='tags'>ux design, user research</p>
              </div>
              <Link to="/shya" class='btn btn-outline-dark btn-lg'>
                  View project
              </Link>
          </div>

        <div class='project '>
              <img src='./img/mag.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Dam Digital - McArthurGlen</p>
                <p class='tags'>app design, responsive web design, ux research </p>
              </div>
              <Link to="/#" class='btn btn-outline-dark btn-lg disabled'>
                  View project
              </Link>
          </div>
      <div class='project'>
              <img src='./img/mod.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Methods - Armed Forces Recruitment Program</p>
                <p class='tags'>ux design, responsive ui Design, coding</p>
              </div>
              <Link to="/mod" class='btn btn-outline-dark btn-lg '>
                  View project
              </Link>
          </div>
          
          <div class='project'>
              <img src='./img/emm.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Methods - Every Mind Matters</p>
                <p class='tags'>ux design, research, user testing</p>
              </div>
              <Link to="/everymindmatters" class='btn btn-lg btn-outline-dark'>
                  View project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/esfa.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Methods - ESFA</p>
                <p class='tags'>ux design, research, user testing</p>
              </div>
              <Link to="/esfa" class='btn btn-outline-dark btn-lg '>
                  View project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/sg.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Societe Generale Design</p>
                <p class='tags'>UX design, UI Design</p>
              </div>
              <Link to="/sgdesign" class='btn btn-outline-dark btn-lg '>
                  View project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/ps.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>University Case Study: Playstation Store</p>
                <p class='tags'>UX design, UI Design, App Redesign</p>
              </div>
              <Link to="/playstation" class='btn btn-outline-dark btn-lg '>
                  View project
              </Link>
          </div>
          <div class='project'>
              <img src='./img/pride.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Pride in London</p>
                <p class='tags'>UI Design</p>
              </div>
              <Link to="/prideinlondon" class='btn btn-outline-dark btn-lg '>
                  View project
              </Link>
          </div>
          
          </div>

      
    </div>
    
  );
}

export default Home;
