import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function HMRC() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">HMRC / Welsh Council Tax Service</p>
        <p className="tags_">UX Design, Interaction Design, User Research · 2023–Present</p>

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
          Wales has its own Council Tax system. Properties there are banded differently from England: nine bands instead of eight, valued against 2003 prices rather than 1991, with 22 local authorities each setting their own rates. Citizens in Wales who think their band is wrong have the right to challenge it. They also have the legal right to do that in Welsh.
          <br /><br />
          The service existed for England. The Welsh side didn't. I was brought in as the sole interaction designer to build it out.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          The starting point was an English-language service that worked well for English users. Adapting it for Wales wasn't just translation. The policies are different, the band system is different, and a meaningful part of the user base would want to complete the whole journey in Welsh.
          <br /><br />
          The people we were designing for weren't technical users. Many were dealing with the service because they felt they'd been charged the wrong amount. Already a stressful starting point. Getting the language wrong, or sending someone down the wrong route because of a conditional logic error, would have real consequences.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          I owned all interaction design on the project, working with a content designer and Welsh-speaking members of the team to get the language right, and with user researchers who ran regular testing sessions throughout.
          <br /><br />
          The service involved some genuinely tricky interaction problems.
        </p>
        <p className="description">
          <strong>The bilingual toggle.</strong> Users could switch between Welsh and English at the start of the journey, and that choice had to hold consistently across every screen, every route, and every error state. There was no content management system, so language state had to be handled through the prototype code itself. Working out the right structure for that, and then checking every conditional route with the Welsh-speaking team to make sure nothing slipped through, took real care.
        </p>
        <p className="description">
          <strong>Conditional routing.</strong> The challenge journey has several branches depending on a user's situation: whether they're the current resident, a previous owner, what grounds they're challenging on. Each of those scenarios needed its own flow. Getting the logic right in the GOV.UK Prototype Kit meant thinking carefully about how the routes connected and where they could break.
        </p>
        <p className="description">
          <strong>Wales-specific content and data.</strong> The service needed to surface Welsh-specific property information and reflect the differences in how the Welsh system works: different band ranges, different valuation dates, different local authority structures. That meant working closely with policy and research teams to make sure the design reflected how the system actually worked, not how the English version worked.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          User research ran throughout. Testing sessions included Welsh speakers, people unfamiliar with the challenge process, and people accessing the service on mobile. Findings fed directly back into the design. If something was confusing in testing, we changed it before the next round.
          <br /><br />
          Working as the only interaction designer meant I made most of the daily design calls independently, but always in close collaboration with the content designer, researchers, and the wider team. The bilingual work especially required constant back-and-forth. There's no shortcut for having someone fluent in Welsh check whether an interaction label makes sense in context.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The service continues to be developed and tested in active sprints. The prototypes are built in the GOV.UK Prototype Kit using HTML and CSS, and have been used in multiple rounds of usability testing with real users in Wales.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default HMRC;
