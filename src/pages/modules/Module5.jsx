import { useEffect } from 'react';

export default function Module5() {
  useEffect(() => {
    document.title = 'Module 5 - Workplace Hazards & Safe Practices';
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Module 5: Workplace Hazards & Safe Practices</h1>
      <p style={{ marginTop: '1rem' }}>
        Content for this module will be added soon.
      </p>
    </div>
  );
}