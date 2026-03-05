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
            I'm Julien, a Paris-born and London-based UX Designer, passionate about creating meaningful and user-centered experiences through empathy and problem-solving.
          </p>
          <p>
            With a background in UX design, I've dedicated my career to the art of crafting digital solutions that not only look fantastic but also work seamlessly to meet the needs of users.
          </p>
          <p>
            In my free time, I enjoy playing rugby and experimenting in the kitchen, baking delicious treats. My portfolio showcases various projects, from user-friendly mobile apps to engaging web platforms.
          </p>
          <p>
            I'm always open to connecting with fellow designers and potential collaborators. Feel free to get in touch via email at{' '}
            <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a>{' '}
            or connect with me on{' '}
            <a href="https://www.linkedin.com/in/juliencresus/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </Col>
      </Row>
      <a href="/" className="about-back">← Back</a>
    </div>
  );
}

export default AboutMe;
