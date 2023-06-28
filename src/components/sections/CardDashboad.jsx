import React from 'react';
import { FiUsers, FiUserCheck, FiFileText, FiDatabase  } from "react-icons/fi";


const CardDashboad = (props) => {
    const {userData} = props;

    return (
        <div className='card-list'>
            <div className="card-content">
                <div className='icon'>
                    <FiUsers className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>USERS</b></h4>
                    <h1>{userData ? userData.length : "..."}</h1>
                </div>
            </div>
            <div className="card-content">
                <div className='icon2'>
                    <FiUserCheck className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Active Users</b></h4>
                    <h1>2,458</h1>
                </div>
            </div>
            <div className="card-content">
                <div className='icon3'>
                    <FiFileText className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Users with Loans</b></h4>
                    <h1>3,458</h1>
                </div>
            </div>
            <div className="card-content">
                <div className='icon4'>
                    <FiDatabase className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Users with Savings</b></h4>
                    <h1>4,458</h1>
                </div>
            </div>
        </div>
    )
}

export default CardDashboad;