import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './img/new_logo.jpg';
import Home from './components/Home'
import UserDetails from './components/UserDetails';

import { Provider } from 'react-redux';
import store from './components/redux/store';

import './style/index.scss';

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App;
