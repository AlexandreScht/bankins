import React,{ useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import useAppContext from './hooks/AppContext.jsx';

function App() {
  const { services: { login } } = useAppContext();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    try {
      const [err, res] = await login({ email, password });
      if (err && !res) {
        setError('Invalid email or password');
      } else {
        setError(null);
        // navigate.push('/users');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
