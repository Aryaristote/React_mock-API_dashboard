import React from 'react';
import user from '../../img/user.png';
import logo from '../../img/Lendsqr.jpg';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Nav = () => {
    return(
        <nav className='navBar'>
            <div className='nav-content'>
                <div className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <b>lendsqr</b>
                </div>
                <div className='nav-left'>
                    <div className='search'>
                        <input type="text" className="searchTerm" placeholder="Search for anything?"></input>
                        <button type="submit" className="searchButton">
                            <FaSearch className='searchIcn' />
                        </button>
                    </div>
                    <div className='profile'>
                        <div>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#"><FaBell className='notifIcn' /></a></li>
                        </div>
                        <div className='profile-opt'>
                            <div className='prof-content'>
                                <img src={user} className="App-logo" alt="logo" />
                                <p>User Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;