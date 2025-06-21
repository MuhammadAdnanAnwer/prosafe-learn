const fs = require('fs');
const path = require('path');

const modules = [
  'Importance of Managing Workplace Health & Safety',
  'Structure of Health & Safety Management Systems',
  'Risk Management: People & Process Awareness',
  'Monitoring and Measuring HSE Performance',
  'Workplace Hazards & Safe Practices',
  'Safe Movement of People and Vehicles',
  'Manual Handling & Ergonomic Risk Control',
  'Safe Use of Tools and Equipment',
  'Electrical Safety Measures',
  'Fire Prevention and Emergency Planning',
  'Control of Hazardous Substances (Chemical/Biological)',
  'Managing Physical & Mental Health Hazards'
];

const outputDir = path.join(__dirname, 'modules');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

modules.forEach((title, index) => {
  const num = index + 1;
  const fileName = `Module${num}.jsx`;
  const filePath = path.join(outputDir, fileName);

  const jsxContent = `
import { useEffect } from 'react';

export default function Module${num}() {
  useEffect(() => {
    document.title = 'Module ${num} - ${title}';
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46' }}>Module ${num}: ${title}</h1>
      <p style={{ marginTop: '1rem' }}>
        Content for this module will be added soon.
      </p>
    </div>
  );
}
`.trim();

  fs.writeFileSync(filePath, jsxContent, 'utf8');
  console.log(`✅ Created: ${fileName}`);
});

console.log('\n✅ All 12 module files created in /src/pages/modules/\n');
