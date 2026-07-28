import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: '/img/esfa.webp', alt: "ESFA project screen", loading: 'lazy', caption: "GOV.UK prototype — React / Express.js" }
];

function Esfa() {
  return (
    <ProjectLayout 
      title="ESFA — Education & Skills Funding Agency"
      client="ESFA" agency="Methods" year="2020" role="UX Design · Prototyping" 
      route="/esfa"
    
      carousel={<AccessibleCarousel images={IMAGES} />}
    >

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          The ESFA is accountable for funding education and training for children, young people and adults. It is the result of the combination of the former responsibilities of the Education Funding Agency (EFA) and Skills Funding Agency (SFA).
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          I've worked on the MyESFA service ("View your payments" and "Subcontractor Declaration Tool") and the National Funding Formula from January to November 2020.
          <br /><br />
          For prototyping and making user journeys more accessible, I used the GOV.UK Design System with React and Express.JS. In order to collaborate with the researchers, other UX Designers and stakeholders, it was much easier, quicker and safer than using software-based design (Figma, Sketch). Indeed, it required following the GDS regulations and the GOV.UK Design System was perfectly designed based on that.
        </p>
    </ProjectLayout>
  );
}

export default Esfa;
