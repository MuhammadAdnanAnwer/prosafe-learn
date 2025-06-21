import { useState, useEffect } from 'react';

export default function AITools() {
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [hazards, setHazards] = useState('');
  const [report, setReport] = useState('');

  useEffect(() => {
    document.title = 'AI Tools - ProSafe Learn';
  }, []);

  const handleGenerate = () => {
    // Simulated AI result (replace this with API call later)
    const output = `
      HSE REPORT

      Job Type: ${jobType}
      Location: ${location}
      Identified Hazards: ${hazards}

      Summary:
      Based on the input, ensure proper PPE, establish barricades, and conduct toolbox talks before the task begins. Continuous monitoring recommended.
    `.trim();

    setReport(output);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#065f46', marginBottom: '1.5rem' }}>AI HSE Report Generator</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Job Type:</label>
        <input type="text" value={jobType} onChange={(e) => setJobType(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Work Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Hazards:</label>
        <textarea value={hazards} onChange={(e) => setHazards(e.target.value)} style={textareaStyle}></textarea>
      </div>

      <button onClick={handleGenerate} style={buttonStyle}>Generate Report</button>

      {report && (
        <div style={reportStyle}>
          <h3>Generated Report:</h3>
          <pre>{report}</pre>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '4px',
  marginBottom: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  ...inputStyle,
  height: '100px',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#10b981',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '1rem',
};

const reportStyle = {
  marginTop: '2rem',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f0fdf4',
  whiteSpace: 'pre-wrap',
};