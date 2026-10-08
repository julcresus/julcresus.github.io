// Per-route titles and descriptions. Used by the app (Helmet) and by
// scripts/prerender-routes.js, so keep this file to plain data with no imports.
export const PAGE_TITLES = {
  '/': 'Julien Crésus-Ashton | Senior Interaction Designer',
  '/aboutme': 'About — Julien Crésus-Ashton',
  '/cv': 'Curriculum Vitae — Julien Crésus-Ashton',
  '/accessibility': 'Accessibility — Julien Crésus-Ashton',
  '/hmrc': 'HMRC Wales — Julien Crésus-Ashton',
  '/naturalengland': 'Natural England — Julien Crésus-Ashton',
  '/defra': 'DEFRA — Julien Crésus-Ashton',
  '/shyl': 'Shy Lifestyle — Julien Crésus-Ashton',
  '/rethink': 'Rethink Mental Illness — Julien Crésus-Ashton',
  '/shya': 'Shy Aviation — Julien Crésus-Ashton',
  '/mag': 'McArthurGlen — Julien Crésus-Ashton',
  '/mod': 'Armed Forces Recruitment — Julien Crésus-Ashton',
  '/everymindmatters': 'Every Mind Matters — Julien Crésus-Ashton',
  '/sgdesign': 'Societe Generale — Julien Crésus-Ashton',
};

export const PAGE_META = {
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
  '/cv':             { description: 'Curriculum vitae for Julien Crésus-Ashton, Senior Interaction Designer in London. SC cleared. HMRC, DEFRA, Natural England and consumer apps.' },
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
