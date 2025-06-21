import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyIntroduction() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'My Introduction - ProSafe Learn';
  }, []);

  const handleNavigate = (page) => {
    navigate(`/${page}`);

  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Welcome to ProSafe Learn!</h1>
      <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
        You are successfully logged in. Explore the tools and start learning.
      </p>

      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={() => handleNavigate('interview-preparation')} style={buttonStyle}>
          Go to Interview Preparation
        </button>
        <button onClick={() => handleNavigate('mock-tests')} style={buttonStyle}>
          Take a Mock Test
        </button>
        <button onClick={() => handleNavigate('ai-tools')} style={buttonStyle}>
          Explore AI Tools
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#10b981',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
};