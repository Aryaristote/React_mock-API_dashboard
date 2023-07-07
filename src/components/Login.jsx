import React, { useEffect, useState } from 'react';
import { fetchData } from '../axios/apiService';
import { useNavigate } from 'react-router-dom';

const useGetUserData = () => {
  const [ userData, setUserData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
      const getData = async () => {
          const responseData = await fetchData();
          setUserData(responseData);
          setLoading(false)
      };

      getData();
  }, []);

return { loading, userData };
}

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, userData } = useGetUserData();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const user = userData.find(u => (
        u.email === email && u.password === password)
      );
      navigate('/home');
    };

    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="App container">
        <div className='App-body' >
          <div className='body-left'>
          </div>
          
          <div className='body-right'>
            <div className='right-content'>
              <div className='header'>
                <h3>Welcome</h3>
                <small>Enter details to login</small>
              </div>
              <div className='input'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input autoComplete="false" placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <input autoComplete="false" 
                      className='password-input'
                      type={showPassword ? 'text' : 'password'}
                      value={password} 
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)} required />
                      <div className="toggle-password" onClick={handleTogglePassword}>
                        {showPassword ? 'Hide' : 'Show'}
                      </div>
                  </div>
                  <div className='forgetPass'>
                    <a href="/forgot-password" className="">Forgot Password?</a>
                  </div>
                  <div className='submitBtn'>
                    <button type="submit">Log In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login;