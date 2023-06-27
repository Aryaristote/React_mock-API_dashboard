import { React, useState } from 'react';
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import PaginationDashboad from './PaginationDashboad';


const BodyContent = () => {
    const [show, setSHow] = useState(false);
    
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