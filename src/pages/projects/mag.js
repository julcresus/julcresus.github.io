import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function Mag() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Dam Digital — McArthurGlen</p>
        <p className="tags_">App Design, Responsive Web Design, UX Research</p>

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
          McArthurGlen is Europe's leading designer outlet group, operating over 25 centres across 9 countries. Dam Digital is the digital agency behind McArthurGlen's apps and web platforms.
          <br /><br />
          This project focused on redesigning the McArthurGlen shopping app (V2) — a loyalty and offers platform used by shoppers across all centres. The work covered the full app experience, from onboarding and offer discovery through to in-store QR code redemption.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          As UX Designer at Dam Digital, I led the wireframing and UX design across the McArthurGlen app and responsive web projects.
        </p>
        <ul className="description">
          <li>Designing end-to-end user flows for offer browsing, filtering, and redemption</li>
          <li>Wireframing mobile app screens and responsive web layouts in Sketch</li>
          <li>Designing the QR code scanning and swipe-to-redeem interaction patterns</li>
          <li>Creating onboarding flows and push notification preference screens</li>
          <li>Collaborating with developers and the McArthurGlen product team</li>
          <li>Iterating designs based on user research and stakeholder feedback</li>
        </ul>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The redesigned app introduced a cleaner offer browsing experience, a streamlined QR-based redemption flow, and improved onboarding — helping shoppers discover and use their exclusive club benefits more easily across McArthurGlen's centres.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Mag;
