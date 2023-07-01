import { React, useState, useEffect } from 'react';
import { fetchData } from '../../axios/apiService';
import user from '../../img/user.png';
import logo from '../../img/Lendsqr.jpg';
import { FaSearch } from "react-icons/fa"; 
import { FaBell } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Nav = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(20);
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showResultBlk, setShowResultBlk] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

            if (responseData !== null) {
                // const formatted = formatUserData(responseData);
                setData(responseData);
                setFilteredData(responseData.slice(0, itemsToShow));
                setLoading(false);
            }
        };

        getData();
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = parseInt(event.target.value) + itemsToShow;
        setItemsToShow(selectedValue);
        setFilteredData([...data.slice(0, selectedValue)]);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = data.filter((username) => {
            return username && username.username && username.username.toLowerCase().includes(input)
        });
        setFilteredData(results);
        setShowResultBlk(true);
    };

    const handleClick = () => {
        setInput(0); 
    };

    const displayStyle = input.length > 0 ? { display: 'inline' } : { display: 'none' };

    return(
        <nav className='navBar'>
            <div className='nav-content'>
                <div className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <b>lendsqr</b>
                </div>
                <div className='nav-left'>
                    <div>
                        <form onSubmit={handleSubmit} className='search'>
                            <input type="search" 
                                className="searchTerm" placeholder="Search for anything?"
                                value={input} onChange={handleChange} >
                            </input>
                            <button type="submit" className="searchButton">
                                <FaSearch className='searchIcn' />
                            </button>
                        </form>
                    </div>

                    { loading ? (
                       <p></p>
                    ):(
                        <div className='searchResult' style={displayStyle}>
                            <div className='sResult-ctn'>
                                <div className='title-sec'>
                                    <h2>{filteredData.length} Result{filteredData.length > 0 ? 's' : ''}</h2>
                                    <MdCancel className='cancelIcn' onClick={handleClick} />
                                </div>
                                {filteredData.map((item) => (
                                    <div className="result-sec">
                                        <li>{item.username}</li>
                                    </div>
                                ))}  
                            </div>
                        </div>
                    )}
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