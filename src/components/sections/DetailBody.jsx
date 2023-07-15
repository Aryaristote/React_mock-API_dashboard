import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom'; 

import UserTabOne from '../subSection/UserTabOne';
import UserTabTwo from '../subSection/UserTabTwo';
import UserTabThree from '../subSection/UserTabThree';
import UserTabFour from '../subSection/UserTabFour';
import UserTabFive from '../subSection/UserTabFive';
import UserTabSix from '../subSection/UserTabSix';

// import UserTabs from './subSection/UserTabs'

export default function DetailBody(props) {
    const { id } = useParams();
    const [itemData, setItemData] = useState(null);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1);
    // const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://649895369543ce0f49e22cc6.mockapi.io/users/${id}`); // Replace with your API endpoint
                const data = await response.json(); 
                setItemData(data);
        } catch (error) {
                console.error('Error fetching item data:', error);
            }
        };
    
        fetchData();
    }, [id]);

    const navigateToHome = () => {
        navigate('/home');
    };

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='details-body'>
            <div className="body-content"> 
                <section className='up-content'>
                    <BsArrowLeft onClick={navigateToHome} className='backIcon'/>
                    <div className='upHeader'>
                        <h1>User Details</h1>
                        <div className='header-btn'>
                            <button>Blacklist User</button>
                            <button>Activate User</button>
                        </div>
                    </div>
                </section>

                {itemData ? (
                    <div>
                        <section className="down-content">
                            <div className="content-prf">
                                <div className="userPrf">
                                    {/* <img src={user} className="profileImg" alt="logo" /> */}
                                    <div className="profileImg">
                                        <BiUser className='prfIcon' />
                                    </div>
                                    <div className='profileNames'>
                                        <div>
                                            <b className='Name'>{itemData.username}</b>
                                        </div>
                                        <div>
                                            <b className='descrpt'>LSQFf587g90</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="userRate">
                                    <div className="rateContent">
                                        <b>User's Tier</b>
                                        <div className='stars'>
                                            <AiFillStar className='startIcon' />
                                            <AiOutlineStar className='startIcon' />
                                            <AiOutlineStar className='startIcon' />
                                        </div>
                                    </div>
                                </div>
                                <div className="userFinance">
                                    <b>₦200,000.00</b>
                                    <div>
                                        <small>9912345678/Providus Bank</small>
                                    </div>
                                </div>
                            </div>
                            <div className="navProfile">
                                <div className="navContent">
                                    <div className={`tab ${activeTab === 1 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(1)}>
                                        <h4>General Details</h4>
                                    </div>
                                    <div className={`tab ${activeTab === 2 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(2)}>
                                        <h4>Documents</h4>
                                    </div>
                                    <div className={`tab ${activeTab === 3 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(3)}>
                                        <h4>Bank Details</h4>
                                    </div>
                                    <div className={`tab ${activeTab === 4 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(4)}>
                                        <h4>Loans</h4>
                                    </div>
                                    <div className={`tab ${activeTab === 5 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(5)}>
                                        <h4>Savings</h4>
                                    </div>
                                    <div className={`tab ${activeTab === 6 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(6)}>
                                        <h4>App and System</h4>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {activeTab === 1 && <UserTabOne itemData={itemData}/>}
                        {activeTab === 2 && <UserTabTwo />}
                        {activeTab === 3 && <UserTabThree />}
                        {activeTab === 4 && <UserTabFour />}
                        {activeTab === 5 && <UserTabFive />}
                        {activeTab === 6 && <UserTabSix />}
                    </div>
                    ) : (
                        <Loading />
                    )} 
            </div>
        </div>
    )
}
