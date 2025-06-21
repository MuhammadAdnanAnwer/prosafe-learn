import { useEffect } from 'react';

export default function Module3() {
  useEffect(() => {
    document.title = 'Module 3 - Risk Management: People & Process Awareness';
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Module 3: Risk Management: People & Process Awareness</h1>
      <p style={{ marginTop: '1rem' }}>
        Content for this module will be added soon.
      </p>
    </div>
  );
}