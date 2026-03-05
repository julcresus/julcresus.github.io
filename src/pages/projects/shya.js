import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Shya() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Shy Aviation</p>
        <p className="tags_">UX Design, User Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya/shya_1.webp'} alt="Shy Aviation latest UI screens" loading="eager" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Latest UI screens</h5>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Project description</p>
        <p className="description">
          As a global aviation charter leader, Shy Aviation grants access to every aircraft in the market. Their services encompass:
        </p>
        <ul className="description">
          <li>Private jet charter</li>
          <li>Aircraft management</li>
          <li>Aircraft sales and acquisitions</li>
          <li>Expert consulting</li>
        </ul>
        <p className="description">
          Their unwavering commitment is simple: delivering an unmatched level of service. With a dedicated team of experienced professionals, they tailor solutions to meet each client's unique needs. Shy Aviation prioritizes sustainability, actively reducing their environmental impact through sustainable aviation fuel and innovative fuel efficiency technologies.
          <br /><br />
          To enhance the user experience, they've partnered with Dam Digital to develop a cutting-edge online tool for user-friendly bookings of private flights, helicopters, and group charters.
        </p>

        <a href="/" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Shya;
