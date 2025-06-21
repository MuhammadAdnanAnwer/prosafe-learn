import { useEffect } from 'react';

export default function Module1() {
  useEffect(() => {
    document.title = 'Module 1 - Importance of Managing Workplace Health & Safety';
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Module 1: Importance of Managing Workplace Health & Safety</h1>
      <p style={{ marginTop: '1rem' }}>
        Content for this module will be added soon.
      </p>
    </div>
  );
}