import '../App.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          textDecoration: 'none',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '4px',
          transition: 'opacity 0.3s'
        }}
        onMouseOver={(e) => e.target.style.opacity = '0.8'}
        onMouseOut={(e) => e.target.style.opacity = '1'}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
