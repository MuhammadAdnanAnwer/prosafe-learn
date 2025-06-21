import { useEffect } from 'react';

export default function Module7() {
  useEffect(() => {
    document.title = 'Module 7 - Manual Handling & Ergonomic Risk Control';
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Module 7: Manual Handling & Ergonomic Risk Control</h1>
      <p style={{ marginTop: '1rem' }}>
        Content for this module will be added soon.
      </p>
    </div>
  );
}