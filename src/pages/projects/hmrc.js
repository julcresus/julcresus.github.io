import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function HMRC() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">HMRC — HM Revenue & Customs</p>
        <p className="tags_">UX Design, UI Design, User Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/hmrc/picture1.png'} alt="HMRC Welsh start page" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — Welsh start page (Cymraeg)</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/hmrc/picture2.png'} alt="HMRC postcode search" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — postcode search with bilingual toggle</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/hmrc/picture3.png'} alt="HMRC search results" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — search results</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/hmrc/picture4.png'} alt="HMRC property details" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — property details</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/hmrc/picture5.png'} alt="HMRC challenge scenario selection" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — challenge scenario selection</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          HM Revenue & Customs (HMRC) is the UK's tax, payments and customs authority, responsible for collecting taxes and administering benefits and credits.
          <br /><br />
          This ongoing project focuses on improving digital services for citizens in Wales, helping them access and manage property-related information. The challenge involves simplifying complex regulatory processes into clear, accessible digital experiences.
          <br /><br />
          Working as part of the User-Centred Design (UCD) team at Cognizant, I contribute to designing and iterating prototypes based on continuous user research and testing across multiple devices.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          As an Interaction Designer on the UCD team, I translate user research insights and policy requirements into working prototypes using the GOV.UK Prototype Kit.
        </p>
        <ul className="description">
          <li>Designing and building interactive prototypes based on user research findings</li>
          <li>Implementing GOV.UK Design System patterns and components</li>
          <li>Creating conditional routing for different user journeys</li>
          <li>Building bilingual Welsh/English experiences</li>
          <li>Collaborating with content designers, translators, and researchers</li>
          <li>Iterating designs through regular sprint cycles</li>
        </ul>
        <p className="description">
          The work requires balancing user needs with regulatory requirements while ensuring accessibility compliance and clear user guidance throughout.
        </p>

        <p className="sub-title">Process</p>
        <p className="description">
          User research guides the design at every stage, with regular testing sessions including diverse participant groups. This helps identify pain points and validate design decisions before moving forward.
          <br /><br />
          Following GOV.UK Design System principles, we focus on simplifying complex processes, using clear language, and providing contextual help where users need it most.
          <br /><br />
          Regular collaboration with user researchers, content designers, service designers, and stakeholders ensures the design meets both user needs and policy requirements.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The project continues to develop through regular testing and iteration, with ongoing improvements based on user feedback and research insights. The work contributes to making government services more accessible and easier to use for citizens in Wales.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default HMRC;
