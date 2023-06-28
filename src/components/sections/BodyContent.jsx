import { React, useState, useEffect } from 'react';
import { fetchData } from '../../axios/apiService';
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import Loading from './Loading';
import PaginationDashboad from './PaginationDashboad';

const BodyContent = () => {
    // const [show, setSHow] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const userData = null;

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();
            setData(responseData);
            setLoading(false)
        };

        getData();
    }, []);
    
    return (
        <div className="content body-content">
            <div className='up-block'>
                <div>
                    <h1 className='title'>Users</h1>
                </div>
                <CardDashboad userData={data}/> 
            </div>

            { loading ? (
                <Loading />
            ):

            (<TableDashboad userData={data} />)

            }
            
            
            <PaginationDashboad />
        </div>
    )
}

export default BodyContent;