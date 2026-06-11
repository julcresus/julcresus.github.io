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
import Lightbox from './components/Lightbox';
import ReactGA from 'react-ga4';

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
const Accessibility = lazy(() => import("./pages/accessibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

const EveryMindMatters = lazy(() => import("./pages/projects/everymindmatters"));
const SgDesign = lazy(() => import("./pages/projects/sgdesign"));
const Mod = lazy(() => import("./pages/projects/mod"));
const Mag = lazy(() => import("./pages/projects/mag"));

const PAGE_TITLES = {
  '/': 'Julien Crésus-Ashton | Senior Interaction Designer',
  '/aboutme': 'About — Julien Crésus-Ashton',
  '/accessibility': 'Accessibility — Julien Crésus-Ashton',
  '/hmrc': 'HMRC Wales — Julien Crésus-Ashton',
  '/naturalengland': 'Natural England — Julien Crésus-Ashton',
  '/defra': 'DEFRA — Julien Crésus-Ashton',
  '/shyl': 'Shy Lifestyle — Julien Crésus-Ashton',
  '/rethink': 'Rethink Mental Illness — Julien Crésus-Ashton',
  '/shya': 'Shy Aviation — Julien Crésus-Ashton',
  '/mod': 'Armed Forces Recruitment — Julien Crésus-Ashton',
  '/everymindmatters': 'Every Mind Matters — Julien Crésus-Ashton',
  '/sgdesign': 'Societe Generale — Julien Crésus-Ashton',
};

const PAGE_META = {
  '/': {
    description: 'Senior Interaction Designer with eight years of experience across government, consumer and fintech. Currently at Cognizant, London.',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Julien Crésus-Ashton",
      "jobTitle": "Senior Interaction Designer",
      "url": "https://juliencresus.com",
      "email": "cresusjulien@gmail.com",
      "sameAs": ["https://www.linkedin.com/in/juliencresus/"],
      "address": { "@type": "PostalAddress", "addressLocality": "London", "addressCountry": "GB" }
    }
  },
  '/aboutme':        { description: 'About Julien Crésus-Ashton — Senior Interaction Designer, London. Eight years across government, consumer and fintech. Currently at Cognizant.' },
  '/accessibility':  { description: 'Accessibility statement for juliencresus.com: WCAG 2.2 AA target, what\'s in place, known issues, and how to report a problem.' },
  '/hmrc':           { description: 'Interaction design for HMRC\'s Welsh Council Tax challenge service — bilingual UX, conditional routing, GOV.UK Prototype Kit.' },
  '/naturalengland': { description: 'Service design for Natural England\'s protected sites monitoring programme — field survey tools, GOV.UK prototype, user research.' },
  '/defra':          { description: 'UX for DEFRA/APHA People Planner — complex scheduling tool built within PowerBI\'s constraints, with regular user testing with APHA managers.' },
  '/shyl':           { description: 'App UX design for Shy Lifestyle, a luxury concierge and travel service — competitive research, booking flows, premium mobile app.' },
  '/rethink':        { description: 'UX design for Rethink Mental Illness donation module redesign — reducing friction, accessibility, improving conversion for one-time and recurring giving.' },
  '/shya':           { description: 'UX and research for Shy Aviation\'s self-serve booking tool — private jet and helicopter charter flows, corporate client journeys.' },
  '/mag':            { description: 'App UX design for McArthurGlen\'s shopping loyalty platform — offer browsing, QR redemption flow, onboarding redesign.' },
  '/mod':            { description: 'UX design for the Armed Forces Recruitment Process — GOV.UK design system, React prototyping, multi-branch candidate journey.' },
  '/everymindmatters': { description: 'UX for Every Mind Matters mental health service — branching quiz flow, cognitive load reduction, GOV.UK design system.' },
  '/sgdesign':       { description: 'Interaction design for SG Markets FX trading platform — tile-based workspace, bulk trade workflows, financial design systems.' },
};

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
    if (TRACKING_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
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
        <Link to="/" className="nav-logo">julien crésus-ashton</Link>
        <div className="nav-links">
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

// Animated route wrapper — key change triggers CSS enter animation on navigation
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.key} className="route-transition">
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/accessibility" component={Accessibility} />
        <Route exact path="/everymindmatters" component={EveryMindMatters} />
        <Route exact path="/sgdesign" component={SgDesign} />
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
    </div>
  );
}

// Opens full-size carousel images on click or Enter/Space, via event delegation.
// Carousel images are rendered by CoreUI, so they're made focusable here rather than in JSX.
function LightboxManager() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const open = img => setLightbox({ src: img.src, alt: img.alt, trigger: img });

    const handleClick = e => {
      const img = e.target.closest('.carousel-item img');
      if (img) open(img);
    };
    const handleKey = e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const img = e.target.closest?.('.carousel-item img');
      if (img) {
        e.preventDefault();
        open(img);
      }
    };

    const makeFocusable = () => {
      document.querySelectorAll('.carousel-item img:not([tabindex])').forEach(img => {
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
      });
    };
    makeFocusable();
    const observer = new MutationObserver(makeFocusable);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  if (!lightbox) return null;

  const close = () => {
    const { trigger } = lightbox;
    setLightbox(null);
    trigger?.focus();
  };

  return <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={close} />;
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
          <LightboxManager />
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
