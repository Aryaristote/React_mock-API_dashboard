import React, { useEffect, useState } from 'react';
import { 
    FaBars, FaBriefcase, FaArrowDown, FaUsers, FaHome, FaUsersCog, FaPiggyBank,
    FaHandHoldingWater, FaUserCheck, FaUserMinus, FaMoneyBillAlt
} from "react-icons/fa";


const Sidebar = (props) => {
    const [newActiveTab, setNewactiveTab] = useState(''); 
    // const {activeTab, setActiveTab} = props; 
    // console.log(activeTab);

    const handleTabClick = (tabNumber) => {
        const value = tabNumber;
        setNewactiveTab(tabNumber);
        props.onValueChange(value);
    };

    return(
        <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
            <a id="btn-collapse" className="sidebar-collapser"><FaBars /></a>
            <div className="image-wrapper">
                <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
            </div>
            <div className="sidebar-layout">
                <div className="sidebar-content">
                    <nav className="menu open-current-submenu">
                        <ul>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaBriefcase />
                                    </span>
                                    <span className="menu-title">Switch Organization <FaArrowDown /></span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaHome />
                                    </span>
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li className="menu-header"><span> CUSTOMERS </span></li>
                            
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Users</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                                    <span className="menu-icon">
                                        <FaUsersCog />
                                    </span>
                                    <span className="menu-title">Guarantors</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                                    <span className="menu-icon">
                                        <FaMoneyBillAlt />
                                    </span>
                                    <span className="menu-title">Loans</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>
                                    <span className="menu-icon">
                                        <FaPiggyBank />
                                    </span>
                                    <span className="menu-title">Savings</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>
                                    <span className="menu-icon">
                                        <FaHandHoldingWater />
                                    </span>
                                    <span className="menu-title">Loan Requests</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 6 ? 'active' : ''}`} onClick={() => handleTabClick(6)}>
                                    <span className="menu-icon">
                                        <FaUserCheck />
                                    </span>
                                    <span className="menu-title">Whitelist</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className={`tab ${newActiveTab === 7 ? 'active' : ''}`} onClick={() => handleTabClick(7)}>
                                    <span className="menu-icon">
                                        <FaUserMinus />
                                    </span>
                                    <span className="menu-title">Karma</span>
                                </a>
                            </li>
                            <li className="menu-header"><span> BUSINESS </span></li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Organization</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Loan Products</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Savings Products</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Fees and Charges</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Transactions</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Services</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Service Account</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Settlements</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Reports</span>
                                </a>
                            </li>
                            <li className="menu-header"><span> SETTINGS </span></li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Preferences</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Fees and Pricing</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        <FaUsers />
                                    </span>
                                    <span className="menu-title">Audit Logs</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;