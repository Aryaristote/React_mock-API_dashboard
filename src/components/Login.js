// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform login logic or API call here
      // You can access the entered email and password using the 'email' and 'password' variables
  
      // Reset form fields
      setEmail('');
      setPassword('');
    };
  
    return (
        <div className='App-body'>
          <div className='body-left'>
            {/* Left block  */}
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
                    <input autoComplete="false" placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
    )
}

export default Login;