import React from 'react'

export default function UserTabOne(props) {
    const {itemData} = props;

    return (
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
                                        <b>{itemData.username}</b>
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
                                        <b>{itemData.phoneNumber}</b>
                                    </div>
                                </div>
                                <div className="down">
                                    <b>Children</b>
                                        <div>
                                            <b>{itemData.NumChild}</b>
                                        </div>
                                </div>
                            </div>
                            <div className='block'>
                                <div className="up">
                                    <b>Email Address</b>
                                    <div>
                                        <b>{itemData.email}</b>
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
                                        <b>{itemData.gender}</b>
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
                                        <b>Bachlord Degree</b>
                                    </div>
                                </div>
                                <div className="down">
                                    <b>office email</b>
                                        <div>
                                            <b>{itemData.email}</b>
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
                                            <b>₦{itemData.bankAmount} - ₦400,000.00</b>
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
    )
}


// new React project shortcut 
