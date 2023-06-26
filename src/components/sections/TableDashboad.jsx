import React from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi"

const TableDashboad = () => {
    return (
        <div className='down-block'>
            <table className="styled-table"> 
                <thead>
                    <tr>
                        <th>organization</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Date joined</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls one'>Inactive</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr class="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls two'>Peding</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr class="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls three'>Active</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr class="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls four'>Blacklisted</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboad;