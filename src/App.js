import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ReactGA from 'react-ga';

// Import top project pages directly (no lazy loading for instant navigation)
import HMRC from "./pages/projects/hmrc";
import NaturalEngland from "./pages/projects/naturalengland";
import DEFRA from "./pages/projects/defra";
import Shyl from "./pages/projects/shyl";
import Rethink from "./pages/projects/rethink";
import Shya from "./pages/projects/shya";

// Initialize Google Analytics
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

// Lazy load components for better performance
const Home = lazy(() => import("./pages/home"));
const AboutMe = lazy(() => import("./pages/about/aboutme"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load less frequently visited project pages
const Playstation = lazy(() => import("./pages/projects/playstation"));
const EveryMindMatters = lazy(() => import("./pages/projects/everymindmatters"));
const PrideInLondon = lazy(() => import("./pages/projects/prideinlondon"));
const SgDesign = lazy(() => import("./pages/projects/sgdesign"));
const ESFA = lazy(() => import("./pages/projects/esfa"));
const Mod = lazy(() => import("./pages/projects/mod"));
const Mag = lazy(() => import("./pages/projects/mag"));

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

// Delayed loading component to prevent flash on quick loads
const LoadingFallback = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!showSpinner) return null;

  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #000',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

function App() {
  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <nav className="nav-header">
          <div className="nav-inner">
            <Link to="/" className="nav-logo">julien crésus-ashton</Link>
            <div className="nav-links">
              <Link to="/aboutme" className="nav-link">About</Link>
              <a
                href="./pdf/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                CV ↗
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/playstation" component={Playstation} />
            <Route exact path="/prideinlondon" component={PrideInLondon} />
            <Route exact path="/everymindmatters" component={EveryMindMatters} />
            <Route exact path="/sgdesign" component={SgDesign} />
            <Route exact path="/esfa" component={ESFA} />
            <Route exact path="/mod" component={Mod} />
            <Route exact path="/shya" component={Shya} />
            <Route exact path="/shyl" component={Shyl} />
            <Route exact path="/rethink" component={Rethink} />
            <Route exact path="/mag" component={Mag} />
            <Route exact path="/defra" component={DEFRA} />
            <Route exact path="/naturalengland" component={NaturalEngland} />
            <Route exact path="/hmrc" component={HMRC} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
