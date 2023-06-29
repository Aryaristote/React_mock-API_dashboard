import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import user from '../../img/user.png';

export default function DetailBody(props) {
    const { selectedId } = props;
    const selectedItem = items.find((item) => item.id === selectedId);
    
    console.log(selectedItem)

    return (
        <div className='details-body'>
            <div className="body-content">
                <section className='up-content'>
                    <BsArrowLeft className='backIcon'/>
                    <div className='upHeader'>
                        <h1>User Details</h1>
                        <div className='header-btn'>
                            <button>Blacklist User</button>
                            <button>Activate User</button>
                        </div>
                    </div>
                </section>
                <section className="down-content">
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
                            <div className='navItem active'>
                                <h4>General Details</h4>
                            </div>
                            <div className='navItem'>
                                <h4>Documents</h4>
                            </div>
                            <div className='navItem'>
                                <h4>Bank Details</h4>
                            </div>
                            <div className='navItem'>
                                <h4>Loans</h4>
                            </div>
                            <div className='navItem'>
                                <h4>Savings</h4>
                            </div>
                            <div className='navItem'>
                                <h4>App and System</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="showDetails">
                    <div className='details-content'>
                        <div className="section">
                            <div className="secHeader">
                                <h2>Personal information</h2>
                            </div>
                            <div className="secBody">
                                <div className="infoSec">
                                    <div className='block'>
                                        <div className="up">
                                            <b>Full Name</b>
                                            <div>
                                                <b>Kalume Ernest</b>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <b>Marital Status</b>
                                            <div>
                                                <b>Single</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Phone Number</b>
                                            <div>
                                                <b>07060780922</b>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <b>Children</b>
                                                <div>
                                                    <b>None</b>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Email Address</b>
                                            <div>
                                                <b>aryaristote@gmail.com</b>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <b>Type of residence</b>
                                            <div>
                                                <b>Parent’s Apartment</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Bvn</b>
                                            <div>
                                                <b>07060780922</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Gender</b>
                                            <div>
                                                <b>Female</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="secHeader">
                                <h2>Education and Employment</h2>
                            </div>
                            <div className="secBody">
                                <div className="infoSec">
                                    <div className='block'>
                                        <div className="up">
                                            <b>level of education</b>
                                            <div>
                                                <b>B.Sc</b>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <b>office email</b>
                                                <div>
                                                    <b>grace@lendsqr.com</b>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>employment status</b>
                                            <div>
                                                <b>Employed</b>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <b>Monthly income</b>
                                                <div>
                                                    <b>₦200,000.00- ₦400,000.00</b>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>sector of employment</b>
                                            <div>
                                                <b>FinTech</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>loan repayment</b>
                                            <div>
                                                <b>40,000</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Duration of employment</b>
                                            <div>
                                                <b>2 years</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="secHeader">
                                <h2>Socila</h2>
                            </div>
                            <div className="secBody">
                                <div className="infoSec">
                                    <div className='block'>
                                        <div className="up">
                                            <b>Twitter</b>
                                            <div>
                                                <b>@grace_effiom</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Facebook</b>
                                            <div>
                                                <b>Grace Effiom</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Instagram</b>
                                            <div>
                                                <b>@grace_effiom</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="secHeader">
                                <h2>Guarantor</h2>
                            </div>
                            <div className="secBody">
                                <div className="infoSec">
                                    <div className='block'>
                                        <div className="up">
                                            <b>full Name</b>
                                            <div>
                                                <b>Debby Ogana</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Phone Number</b>
                                            <div>
                                                <b>07060780922</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Email Address</b>
                                            <div>
                                                <b>debby@gmail.com</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className="up">
                                            <b>Relationship</b>
                                            <div>
                                                <b>Sister</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
