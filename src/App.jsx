import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './img/new_logo.jpg';
import Home from './components/Home'
import UserDetails from './components/UserDetails';

import './style/index.scss';

function App() {

  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <header className="container App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-details/:id" element={<UserDetails />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
