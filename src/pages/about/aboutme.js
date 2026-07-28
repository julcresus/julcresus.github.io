import '../../App.css';
import { NavHashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <div className="about-page">
      <p className="section-label">About</p>
      <Row className="g-5 align-items-start">
        <Col xs={12} sm={4} md={4}>
          <img
            className="about-photo"
            src="./img/me.webp"
            width={340}
            alt="Julien Crésus-Ashton portrait"
            loading="eager"
          />
        </Col>
        <Col xs={12} sm={8} md={8} className="about-text">
          <h1 className="project-title">Bonjour!</h1>
          <p className="about-lead">
            I'm <strong className="fg-strong">Julien Crésus-Ashton</strong>, a Paris-born, London-based Senior Interaction Designer with eight years of experience. I design critical public services for <strong className="fg-strong">HMRC</strong> and <strong className="fg-strong">DEFRA</strong>, as well as premium consumer apps for the private sector.
          </p>
          <p>
            I care about <strong className="fg-strong">accessibility as a baseline</strong>, not a box to tick. Whether I am balancing business goals for a lifestyle app or meeting strict government standards, I focus on making complex things simple. I work closely with research, product and engineering to make sure we build the right thing.
          </p>
          <p>
            My approach is straightforward: <strong className="fg-strong">most design problems are evidence problems.</strong> The work I am proudest of started with watching someone struggle. It could be a user hitting an English-only error message, or a customer trying to book a flight on a confusing interface. I would always rather <strong className="fg-strong">put a rough prototype in front of users this week</strong> than present a polished one next month.
          </p>
          <p>
            Outside of work, I enjoy playing rugby and baking.
          </p>
          <p>
            I'm always open to connecting, reach me at{' '}
            <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a>{' '}
            or on{' '}
            <a href="https://www.linkedin.com/in/juliencresus/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>.
          </p>
        </Col>
      </Row>
      <NavHashLink to="/#projects" className="about-back">← Back</NavHashLink>
    </div>
  );
}

export default AboutMe;
