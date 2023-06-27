import { React, useState } from 'react';
import { BiDotsVerticalRounded, BiFilter } from "react-icons/bi"
import Filter from './Filter';

const TableDashboad = () => {
    const [showFilter, setShowFilter] = useState(false);

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
                        <th onClick={()=> setShowFilter(!showFilter)}>
                            Status <BiFilter className='filterIcn' />
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr clasNames="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls one'>Inactive</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls two'>Peding</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls three'>Blacklisted</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td><span className='activeCls four'>Active</span></td>
                        <td><BiDotsVerticalRounded className='moreIcon'/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboad;