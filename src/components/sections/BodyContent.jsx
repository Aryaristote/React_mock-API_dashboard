import { React, useState, useEffect } from 'react';
import { fetchData } from '../../axios/apiService';
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import PaginationDashboad from './PaginationDashboad';

const BodyContent = () => {
    const [show, setSHow] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
        const responseData = await fetchData();
        setData(responseData);
        };

        getData();
    }, []);
    
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

            { data ? (
                <p>{data.username}</p>
                ) : (
                <p>Loading...</p> 
            )}
        </div>
    )
}

export default BodyContent;