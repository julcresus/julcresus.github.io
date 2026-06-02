import { useState, useEffect } from 'react';

const SESSION_KEY = 'portfolio-access';

function ProtectedSection({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') setUnlocked(true);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const pw = process.env.REACT_APP_PORTFOLIO_PASSWORD;
    if (pw && input === pw) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setUnlocked(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="protected-gate">
      <h2 className="sub-title">Detailed artefacts</h2>
      <p className="description">
        Additional process artefacts, annotated screens and research outputs for this project
        are available on request. Request access at{' '}
        <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a>,
        or enter the password below if you already have it.
      </p>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false); }}
          placeholder="Password"
          className="password-input"
          aria-label="Enter portfolio password"
          autoComplete="current-password"
        />
        <button type="submit" className="password-submit">View</button>
      </form>
      {error && <p className="password-error" role="alert">Incorrect password.</p>}
    </div>
  );
}

export default ProtectedSection;
