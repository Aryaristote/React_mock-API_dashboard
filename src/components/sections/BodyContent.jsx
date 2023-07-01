import { React, useState, useEffect } from 'react';
import { fetchData } from '../../axios/apiService';
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import Loading from './Loading';

import { FiArrowDown, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const USER_STATUS = ['Pending', 'Blacklisted', 'Active', 'Inactive'];
const getUserStatus = () => {
    const idx = Math.floor(Math.random() * USER_STATUS.length - 1);
    return USER_STATUS[idx < 0 ? (idx * -1) : idx];
}
const formatUserData = (data) => {
    return data.map((item) => {
        return {
            ...item,
            jobStatus: getUserStatus(),
        }
    })
}

const BodyContent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

            if (responseData !== null) {
                const formatted = formatUserData(responseData);
                setData(formatted);
                setFilteredData(formatted.slice(0, itemsToShow));
                setLoading(false);
            }
        };

        getData();
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = parseInt(event.target.value) + itemsToShow;
        setItemsToShow(selectedValue);
        setFilteredData([...data.slice(0, selectedValue)]);
    };

    const handleChange = (value) => {
        setInput(value); 
        const results = data.filter((username) => {
            return username && username.username && username.username.toLowerCase().includes(value)
        });
        console.log(results)
        setFilteredData(results);
    };
    
    return (
        <div className='details-body'>
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

                (
                    <div>
                        <TableDashboad userData={filteredData} />

                        <div className='pagination'>
                            <div className='pag-content'>
                                <p>Showing</p>
                                    <select value={itemsToShow} onChange={handleSelectChange}>
                                        <option>See More<FiArrowDown /></option>
                                        <option value={20}>Show 20<FiArrowDown /></option>
                                        <option value={40}>Show 40<FiArrowDown /></option>
                                        <option value={50}>Show 50<FiArrowDown /></option>
                                        <option value={100}>Show All<FiArrowDown /></option>
                                    </select>
                                <p>out of 200</p>
                            </div>
                            <div className="pag-btn">
                                <div className="btn-block">
                                    <div className='pagBtn'><FiArrowLeft /></div>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>...</p>
                                    <p>15</p>
                                    <p>16</p>
                                    <div className='pagBtn'><FiArrowRight /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default BodyContent;