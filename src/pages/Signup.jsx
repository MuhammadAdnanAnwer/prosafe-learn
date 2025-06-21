import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For Vite + React Router

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Learner',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    navigate('/my-introduction'); // redirect after signup
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', background: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Sign Up</h2>

        <input name="name" placeholder="Name" onChange={handleChange} required style={inputStyle} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required style={inputStyle} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required style={inputStyle} />
        
        <select name="role" onChange={handleChange} style={{ ...inputStyle, marginBottom: '1rem' }}>
          <option value="Learner">Learner</option>
          <option value="HSE Professional">HSE Professional</option>
        </select>

        <button type="submit" style={buttonStyle}>Create Account</button>

        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};