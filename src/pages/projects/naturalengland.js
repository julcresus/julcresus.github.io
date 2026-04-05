import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function NaturalEngland() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Natural England / DEFRA / Protected Sites Monitoring</p>
        <p className="tags_">UX Design, Interaction Design, Service Design · 2024–2025</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/naturalengland/picture1.png'} alt="NRMS service overview" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — service overview</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/naturalengland/picture2.png'} alt="NRMS survey management" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — survey management</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/naturalengland/picture3.png'} alt="NRMS monitoring specification" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — monitoring specification</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/naturalengland/picture4.png'} alt="NRMS site map view" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — site map</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/naturalengland/picture5.png'} alt="NRMS survey creation flow" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — survey creation</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          Natural England looks after protected sites across England: habitats, wildlife areas, geological sites. Keeping on top of them means sending surveyors into the field regularly, collecting data, and feeding it back into a central picture of how each site is doing.
          <br /><br />
          Before this project, that process ran on iPads, paper files and a patchwork of legacy systems. Surveyors took notes in the field, managers tried to make sense of it back at the office. There was no single place to plan surveys, track what had been done, or see the condition of a site across time.
          <br /><br />
          The aim was to replace that with a GOV.UK service that actually matched how people worked.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          The users came in two types with quite different needs. Field surveyors needed something they could use on site: clear, focused, not demanding too much context-switching when they were outdoors trying to record what they saw. Managers needed a higher-level view: which sites had been surveyed, what needed attention, what surveys still needed scheduling.
          <br /><br />
          The data itself was complex. Different types of protected site have different monitoring requirements, different species to look for, different reporting frameworks. On top of that, some information is sensitive, and access to certain site data depended on a user's role and clearance level. Designing screens that showed the right information to the right person, without creating confusion about what was visible or why, took real care.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          The service had a few main areas. A site overview page was one of the earlier iterations that research pushed us to add. Users were getting dropped into survey detail without enough context about the site itself. A landing page with key links and a summary of recent activity made it significantly easier to orientate.
          <br /><br />
          From there, surveyors could access the surveys they needed to complete, with the specific monitoring questions and data fields relevant to their site. Managers could create new surveys and assign them to particular sites and teams.
          <br /><br />
          Journey maps helped us work through the different user paths early on, and the GOV.UK Prototype Kit let us test interactions with real users rather than static mockups.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          We ran several rounds of usability testing with ecologists and field surveyors. One clear finding was the missing site landing page. Users kept losing their bearings navigating straight into survey detail. That came directly from testing and was one of the more tangible moments where research reshaped the design.
          <br /><br />
          Working with expert users was one of the more interesting aspects. Ecologists and surveyors know their domain deeply. They had strong opinions about how data should be structured and what information mattered most. Getting designs in front of them early and often was the only way to make sure we were reflecting that knowledge rather than designing around it.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The service continues to be developed and tested in active sprints. The design work contributed to replacing a paper and iPad-based workflow with a structured digital service that works for both field and office-based users.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default NaturalEngland;
