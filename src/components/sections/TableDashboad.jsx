import { React, useState } from 'react';
import { BiDotsVerticalRounded, BiFilter } from "react-icons/bi"
import Filter from './Filter';

const TableDashboad = (props) => {
    const [showFilter, setShowFilter] = useState(false);
    const {userData} = props;

    const EditedData = userData.map((item) => {
        return {
            ...item,
            jobstatus:[
                'Pending', 'Blacklisted', 'Active', 'Inactive'
            ],
        }
    })

    // EditedData = Math.floor(Math.random() * EditedData.length);

    return (
        <div className='down-block'>
            { showFilter ? <Filter /> : null }

            <table className="styled-table"> 
                <thead>
                    <tr>
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            organization <BiFilter className='filterIcn' />
                        </th>
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            Username <BiFilter className='filterIcn' />
                        </th>
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            Email <BiFilter className='filterIcn' />
                        </th>
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            Phone number <BiFilter className='filterIcn' />
                        </th>
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            Date joined <BiFilter className='filterIcn' />
                        </th>
                        <th style={{ width: '11%' }} onClick={()=> setShowFilter(!showFilter)}>
                            Status <BiFilter className='filterIcn' />
                        </th>
                        <th style={{ width: '2%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {EditedData.map((item) => (
                        <tr key={item.id} className="active-row">
                            <td>{item.company}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.createdAt}</td>
                            <td>
                                {item.jobstatus.map((Onestatus) =>(
                                    <b>{Onestatus} </b>
                                ))}
                            </td>
                            <td className='moreLine'><BiDotsVerticalRounded className='moreIcon'/></td>
                        </tr>
                    ))}
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls two'>Peding</span></td>
                        <td className='moreLine'><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls three'>Blacklisted</span></td>
                        <td className='moreLine'><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls four'>Active</span></td>
                        <td className='moreLine'><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboad;