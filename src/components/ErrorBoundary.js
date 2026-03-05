import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>Oops! Something went wrong.</h1>
          <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Go to Homepage
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
