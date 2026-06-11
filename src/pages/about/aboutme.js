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
          <p>
            I'm Julien, a Paris-born, London-based Senior Interaction Designer with eight years of experience. I work mainly in government, designing services for HMRC, DEFRA, and the Ministry of Defence, where the people using what you build often have no choice but to use it.
          </p>
          <p>
            I care about accessibility as a baseline, not a box to tick. I work well across research, product and development, and I'm comfortable moving between different kinds of teams.
          </p>
          <p>
            My approach is simple: most design problems are evidence problems. The work I'm proudest of started with watching someone struggle, whether a Welsh speaker hitting an English-only error message or a manager redeploying staff during a disease outbreak from a sprawling spreadsheet. The design followed from there. I'd rather put a rough prototype in front of users this week than present a polished one next month.
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
