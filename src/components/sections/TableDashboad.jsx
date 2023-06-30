import { React, useEffect, useState } from 'react';
import { BiDotsVerticalRounded, BiFilter } from "react-icons/bi"
import Filter from './Filter';
import { useNavigate } from 'react-router-dom';

const USER_STATUS = ['Pending', 'Blacklisted', 'Active', 'Inactive'];
const getUserStatus = () => {
    const idx = Math.floor(Math.random() * USER_STATUS.length - 1);
    return USER_STATUS[idx < 0 ? (idx * -1) : idx];
}

const TableDashboad = (props) => {
    const [showFilter, setShowFilter] = useState(false);
    const {userData} = props;
    const navigate = useNavigate();

    const EditedData = userData.map((item) => {

        return {
            ...item,
            jobStatus: getUserStatus(),
        }
    })

    const handleClick = (id) => {
        navigate('/user-details/'+id);
    }

    return (
        <div className='down-block'>
            { showFilter ? <Filter /> : null }

            <table className="styled-table"> 
                <thead>
                    <tr>
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            organization <BiFilter className='filterIcn' />
                        </th>
                        <th>
                            Username <BiFilter className='filterIcn' />
                        </th>
                        <th>
                            Email <BiFilter className='filterIcn' />
                        </th>
                        <th>
                            Phone number <BiFilter className='filterIcn' />
                        </th>
                        <th>
                            Date joined <BiFilter className='filterIcn' />
                        </th>
                        <th style={{ width: '11%' }}>
                            Status <BiFilter className='filterIcn' />
                        </th>
                        <th style={{ width: '2%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {EditedData.map((item) => (
                        <tr key={item.id} id={item.id} className="active-row" onClick={() => handleClick(item.id)}>
                            <td>{item.company}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.createdAt}</td>
                            <td>
                                <span className={item.jobStatus}>{item.jobStatus}</span>
                            </td>
                            <td className='moreLine'><BiDotsVerticalRounded className='moreIcon'/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboad;