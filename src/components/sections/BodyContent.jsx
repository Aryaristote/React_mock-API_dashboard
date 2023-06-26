import React from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi"
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import PaginationDashboad from './PaginationDashboad';


const BodyContent = () => {
    return (
        <div className="content body-content">
            <div className='up-block'>
                <div>
                    <h1 className='title'>Users</h1>
                </div>
                
                <CardDashboad /> 
            </div>
            <TableDashboad />
            <PaginationDashboad />
        </div>
    )
}

export default BodyContent;