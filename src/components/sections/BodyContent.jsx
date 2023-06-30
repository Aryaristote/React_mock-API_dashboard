import { React, useState, useEffect } from 'react';
import { fetchData } from '../../axios/apiService';
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import Loading from './Loading';


// import PaginationDashboad from './PaginationDashboad';
// import { FiArrowDown, FiArrowRight, FiArrowLeft } from "react-icons/fi"

const BodyContent = () => {
    const [data, setData] = useState(null);
    const userData = data;
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

            const userData = responseData;
            

            if (responseData !== null) {
                setData(responseData.slice(0, itemsToShow));
                setLoading(false);
            }
        };

        getData();
    }, [itemsToShow]);
    

    const handleSelectChange = (event) => {
        const selectedValue = parseInt(event.target.value) + itemsToShow;
        setItemsToShow(selectedValue);
    };
    
    
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

        <div>
            <select value={itemsToShow} onChange={handleSelectChange}>
                <option value={0}>0</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </div>
            
            {/* <PaginationDashboad /> */}
        </div>
    )
}

export default BodyContent;