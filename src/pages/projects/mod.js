import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: './img/mod/mod-4.webp', alt: "MoD recruitment landing page and branch selection", loading: 'lazy', caption: "Prototype — landing page & branch selection" },
  { src: './img/mod/mod-0.webp', alt: "User flow workshop with stakeholders", loading: 'lazy', caption: "Research — user flow workshop" },
  { src: './img/mod/mod-1.webp', alt: "Mobile wireframes for eligibility check and account creation", loading: 'lazy', caption: "Wireframes — eligibility check & account creation" },
  { src: './img/mod/mod-2.webp', alt: "Mobile wireframes for candidate dashboard and application form", loading: 'lazy', caption: "Wireframes — candidate dashboard & application" },
  { src: './img/mod/mod-3.webp', alt: "Mobile wireframes for assessment booking and results", loading: 'lazy', caption: "Wireframes — assessment booking & results" },
  { src: './img/mod/mod-5.webp', alt: "Pre-production Salesforce prototype showing candidate dashboard", loading: 'lazy', caption: "Prototype — candidate dashboard & profile" }
];

function Mod() {
  return (
    <ProjectLayout 
      title="MoD — Armed Forces Recruitment Process"
      client="Ministry of Defence" agency="Methods" year="2019–2020" duration="5 months" role="UX Design · Prototyping" team="Largely independent, after an initial team of three" 
      route="/mod"
    >
      <AccessibleCarousel images={IMAGES} />

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          The Armed Forces Recruiting Process (AFRP) aimed to redesign recruitment for the Royal Navy, British Army, and Royal Air Force, putting the candidate at the centre while helping each service attract the right number and quality of recruits.
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          I was the UX Designer on a five-month project that was cut short by the pandemic. The team initially included a service designer and another UX designer, though I worked independently for most of the engagement.
          <br /><br />
          I used the GOV.UK Design System with React and Express.JS to prototype the candidate journey, an approach that made collaboration with researchers and stakeholders faster and more transparent than traditional design tools.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The project delivered a coded online mockup built with React, Bootstrap, and the GOV.UK design kit, focused on the main candidate journey. The AFRP development team used it as a foundation to build a working prototype in Salesforce, which then went through internal testing across the different Armed Forces branches.
        </p>
    </ProjectLayout>
  );
}

export default Mod;
