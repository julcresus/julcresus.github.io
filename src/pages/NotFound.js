import '../App.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found-code">404</p>
      <p className="not-found-message">Page not found.</p>
      <Link to="/" className="about-back">← Back to home</Link>
    </div>
  );
}

export default NotFound;
