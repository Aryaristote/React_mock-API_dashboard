import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import user from '../../img/user.png';

export default function DetailBody() {
  return (
    <div className='details-body'>
        <div className="body-content">
            <div className='up-content'>
                <BsArrowLeft className='backIcon'/>
                <div className='upHeader'>
                    <h1>User Details</h1>
                    <div className='header-btn'>
                        <button>Blacklist User</button>
                        <button>Activate User</button>
                    </div>
                </div>
            </div>
            <div className="down-content">
                <div className="content-prf">
                    <div className="userPrf">
                        <img src={user} className="profileImg" alt="logo" />
                        <div className='profileNames'>
                            <div>
                                <b className='Name'>Kalume Ernest</b>
                            </div>
                            <div>
                                <b className='descrpt'>LSQFf587g90</b>
                            </div>
                        </div>
                    </div>
                    <div className="userRate">
                        <h3>User's Tier</h3>
                        <div className='stars'>
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </div>
                    </div>
                    <div className="userFinance">
                        <h2>N-2348 2435</h2>
                        <small>7843743439/small</small>
                    </div>
                </div>
                <div className="navProfile">
                    <div className="navContent">
                        <div><h4>General Details</h4></div>
                        <div><h4>Documents</h4></div>
                        <div><h4>Bank Details</h4></div>
                        <div><h4>Loans</h4></div>
                        <div><h4>Savings</h4></div>
                        <div><h4>App and System</h4></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
