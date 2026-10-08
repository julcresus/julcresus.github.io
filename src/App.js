import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import { lazy, Suspense, useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BackToTopButton from './components/BackToTopButton';
import PageTransition from './components/PageTransition';
import { PAGE_TITLES, PAGE_META } from "./data/pageMeta";
import { AnimatePresence } from 'framer-motion';

// Import top project pages directly (no lazy loading for instant navigation)
import HMRC from "./pages/projects/hmrc";
import NaturalEngland from "./pages/projects/naturalengland";
import DEFRA from "./pages/projects/defra";
import Shyl from "./pages/projects/shyl";
import Rethink from "./pages/projects/rethink";
import Shya from "./pages/projects/shya";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/home"));
const AboutMe = lazy(() => import("./pages/about/aboutme"));
const CV = lazy(() => import("./pages/about/cv"));
const Accessibility = lazy(() => import("./pages/accessibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

const EveryMindMatters = lazy(() => import("./pages/projects/everymindmatters"));
const SgDesign = lazy(() => import("./pages/projects/sgdesign"));
const Mod = lazy(() => import("./pages/projects/mod"));
const Mag = lazy(() => import("./pages/projects/mag"));



const PROJECT_ROUTES = new Set([
  '/hmrc', '/naturalengland', '/defra', '/shyl', '/rethink',
  '/shya', '/mag', '/mod', '/everymindmatters', '/sgdesign',
]);

// Handles scroll-to-top, per-page Helmet meta, and GA pageviews on route change
function RouteHandler() {
  const location = useLocation();
  const title = PAGE_TITLES[location.pathname] || PAGE_TITLES['/'];
  const meta = PAGE_META[location.pathname] || PAGE_META['/'];

  useEffect(() => {
    window.scrollTo(0, 0);
    // GA is loaded in public/index.html (cookieless, consent denied by default).
    // Automatic page views are off there, so this sends one per route, including the first.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      {meta.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(meta.structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Nav with reading progress bar and active-state awareness for project pages
function Nav() {
  const location = useLocation();
  const isProjectPage = PROJECT_ROUTES.has(location.pathname);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isProjectPage) { setProgress(0); return; }
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [isProjectPage, location.pathname]);

  return (
    <nav className="nav-header">
      <div className="nav-inner">
        <div className="nav-links">
          <NavLink 
            exact 
            to="/" 
            className="nav-link" 
            activeClassName="nav-link-active"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </NavLink>
          <NavHashLink
            exact
            to="/#projects"
            className={`nav-link${isProjectPage ? ' nav-link-active' : ''}`}
            activeClassName="nav-link-active"
          >
            Work
          </NavHashLink>
          <NavLink exact to="/aboutme" className="nav-link" activeClassName="nav-link-active">About</NavLink>
          <a href="./pdf/cv.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">CV ↗</a>
          <ThemeToggle />
        </div>
      </div>
      {isProjectPage && (
        <div
          className="reading-progress"
          style={{ transform: `scaleX(${progress / 100})` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
        />
      )}
    </nav>
  );
}

// Animated route wrapper — framer motion handles exit/enter
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location.pathname}>
        <Route exact path="/"><PageTransition><Home /></PageTransition></Route>
        <Route exact path="/aboutme"><PageTransition><AboutMe /></PageTransition></Route>
        <Route exact path="/cv"><PageTransition><CV /></PageTransition></Route>
        <Route exact path="/accessibility"><PageTransition><Accessibility /></PageTransition></Route>
        <Route exact path="/everymindmatters"><PageTransition><EveryMindMatters /></PageTransition></Route>
        <Route exact path="/sgdesign"><PageTransition><SgDesign /></PageTransition></Route>
        <Route exact path="/mod"><PageTransition><Mod /></PageTransition></Route>
        <Route exact path="/shya"><PageTransition><Shya /></PageTransition></Route>
        <Route exact path="/shyl"><PageTransition><Shyl /></PageTransition></Route>
        <Route exact path="/rethink"><PageTransition><Rethink /></PageTransition></Route>
        <Route exact path="/mag"><PageTransition><Mag /></PageTransition></Route>
        <Route exact path="/defra"><PageTransition><DEFRA /></PageTransition></Route>
        <Route exact path="/naturalengland"><PageTransition><NaturalEngland /></PageTransition></Route>
        <Route exact path="/hmrc"><PageTransition><HMRC /></PageTransition></Route>
        <Route><PageTransition><NotFound /></PageTransition></Route>
      </Switch>
    </AnimatePresence>
  );
}

const LoadingFallback = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(true), 100);
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
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <RouteHandler />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Nav />
          <main id="main-content">
            <Suspense fallback={<LoadingFallback />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <BackToTopButton />
          <footer className="footer">
            <p className="footer-identity">Julien Crésus-Ashton · Senior Interaction Designer · London</p>
            <div className="footer-links">
              <a href="mailto:cresusjulien@gmail.com" className="footer-link">cresusjulien@gmail.com</a>
              <span className="footer-sep"> — </span>
              <a href="https://www.linkedin.com/in/juliencresus/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn ↗</a>
              <span className="footer-sep"> — </span>
              <Link to="/accessibility" className="footer-link">Accessibility</Link>
            </div>
          </footer>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
