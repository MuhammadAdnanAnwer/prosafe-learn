import { useEffect } from 'react';

export default function Module2() {
  useEffect(() => {
    document.title = 'Module 2 - Structure of Health & Safety Management Systems';
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Module 2: Structure of Health & Safety Management Systems</h1>
      <p style={{ marginTop: '1rem' }}>
        Content for this module will be added soon.
      </p>
    </div>
  );
}