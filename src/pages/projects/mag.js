import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function Mag() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Dam Digital / McArthurGlen</p>
        <p className="tags_">App Design, UX Design, User Research · 2022</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mag/picture1.png'} alt="McArthurGlen offer listing flow" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — corp offer listing & QR redemption flow</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mag/picture2.png'} alt="McArthurGlen Black Friday campaign responsive" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — Black Friday campaign (desktop & mobile)</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mag/picture3.png'} alt="McArthurGlen app tab navigation options" />
              <CCarouselCaption className="d-none d-md-block"><p>App wireframes — tab navigation exploration</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mag/picture4.png'} alt="McArthurGlen profile desktop wireframes" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — corp profile desktop</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mag/picture5.png'} alt="McArthurGlen offer listing components" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — offer listing component library</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          McArthurGlen is Europe's largest designer outlet group, operating over 25 centres across nine countries. The project involved redesigning and extending their shopping app, a loyalty and offers platform used by shoppers across all centres to browse deals and redeem them in-store.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          The existing app worked, but components needed updating and certain journeys needed rethinking based on how users actually behaved. The main areas of focus were offer discovery, the QR redemption flow, and onboarding.
          <br /><br />
          The QR redemption flow was one of the more interesting design problems. Shoppers use their phone camera to scan a QR code at the till to redeem an offer. That sounds simple, but in practice it happens in a busy shop environment. You need to find the right offer quickly, get to the QR code without too many steps, and have it work reliably at the till. Getting that flow tight, with the right fallbacks and clear feedback, took several iterations.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          I led the wireframing and UX design across the app and responsive web. That covered the offer browsing and filtering experience, the QR scanning and swipe-to-redeem patterns, onboarding flows, push notification preferences, and a corporate offers section for business members. Work was done in Sketch, tested with users externally, and iterated based on feedback from both research and the McArthurGlen product team.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          The project involved external user testing and regular reviews with the client. Design decisions were grounded in how shoppers actually used the app in-centre, which shaped decisions about the redemption flow in particular.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The redesigned app introduced a cleaner offer browsing experience, a more streamlined QR redemption journey, and improved onboarding for new members.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Mag;
