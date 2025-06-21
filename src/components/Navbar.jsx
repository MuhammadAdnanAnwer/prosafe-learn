import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: 'green', padding: '10px' }}>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', margin: 0 }}>
        <li><Link style={{ color: 'white' }} to="/signup">Sign up / Sign in</Link></li>
        <li><Link style={{ color: 'white' }} to="/introduction">My Introduction</Link></li>
        <li><Link style={{ color: 'white' }} to="/modules">Modules</Link></li>
        <li><Link style={{ color: 'white' }} to="/ai-tools">AI Tools</Link></li>
        <li><Link style={{ color: 'white' }} to="/interview-preparation">Interview Preparation</Link></li>
        <li><Link style={{ color: 'white' }} to="/mock-tests">Mock Tests</Link></li>
        <li><Link style={{ color: 'white' }} to="/more">More</Link></li>
      </ul>
    </nav>
  );
}