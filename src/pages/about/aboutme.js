import '../../App.css';
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
          <p className="project-title">Bonjour!</p>
          <p>
            I'm Julien, a Paris-born UX Designer based in London, with seven years of experience working across government services, fintech, and consumer products.
          </p>
          <p>
            Outside of work, I enjoy playing rugby and baking.
          </p>
          <p>
            I'm always open to connecting — reach me at{' '}
            <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a>{' '}
            or on{' '}
            <a href="https://www.linkedin.com/in/juliencresus/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>.
          </p>
        </Col>
      </Row>
      <a href="/#projects" className="about-back">← Back</a>
    </div>
  );
}

export default AboutMe;
