import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function EveryMindMatters() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Every Mind Matters</p>
        <p className="tags_">UX Design, Interaction Design, User Research · 2019</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture7.webp'} alt="Every Mind Matters user flow diagram" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>UX — user flow diagram</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture8.webp'} alt="Every Mind Matters lo-fi wireframes" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — lo-fi screen overview</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture1.webp'} alt="Every Mind Matters home screen" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — home screen & action overview</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture2.webp'} alt="Every Mind Matters mental health topics" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — mental health topics</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture3.webp'} alt="Every Mind Matters helping others flow" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — helping others flow</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture4.webp'} alt="Every Mind Matters mental health quiz" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — mental health quiz</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture5.webp'} alt="Every Mind Matters urgent support screen" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — urgent support</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture6.webp'} alt="Every Mind Matters action library" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — action library</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          Every Mind Matters is a Public Health England and NHS initiative that helps people take practical steps to look after their mental health. The project focused on designing the structure and key journeys for the new website, with a particular emphasis on the mental health quiz, a tool to help users understand what kind of support they might need.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          Designing for mental health means designing for people who may already be overwhelmed. Users experiencing anxiety don't respond well to busy, information-heavy screens. Research sessions with people affected by anxiety and low mood shaped the design in specific ways: blue and yellow were found to be the most calming colour combination, content had to be kept short and focused, and the number of decisions per screen was deliberately kept low to reduce cognitive load.
          <br /><br />
          Making it work on mobile was a priority from the start. The people most likely to use the service in a difficult moment are on their phones, not at a desktop.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          The main focus was the mental health quiz: a branching flow that helped users identify what kind of support would be most relevant to them, from self-help techniques through to urgent support pathways. Getting the structure right meant thinking carefully about how to ask sensitive questions without creating anxiety in the process of seeking help.
          <br /><br />
          I also worked on the overall site architecture, including the mental health topics section and the "helping others" flow for people supporting someone else. All design was done in Figma and Sketch using the GOV.UK Design System.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          The project ran for around five months with a team that included user researchers and service designers. Research with real users fed directly into design decisions, particularly around the quiz flow and the amount of information shown per screen.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The project delivered a full interactive Figma prototype to NHS Digital, alongside content blueprints and code guidance for the development team. Parts of the work fed into the live Every Mind Matters service.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default EveryMindMatters;
