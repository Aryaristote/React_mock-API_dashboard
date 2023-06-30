import { React, useState, useEffect } from 'react';
import { fetchData } from '../../axios/apiService';
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import Loading from './Loading';

import { FiArrowDown, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const BodyContent = () => {
    const [data, setData] = useState(null);
    const userData = data;
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(100);
    const [input, setInput] = useState('');

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

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

    // const fetchData = (value) => {
    //     fetch('https://649895369543ce0f49e22cc6.mockapi.io/users')
    //     .then(response => response.json())
    //     .then((json) => {
    //         const results = json.filter((username) => {
    //             return username && username.username && username.username.toLowerCase().includes(value)
    //         });
    //         console.log(results);
    //     });
    // };

    const handleChange = (value) => {
        setInput(value);
        // fetchData(value);
    };
    
    
    return (
        <div className='details-body'>
            <div className="content body-content">

                <div>
                    <input type="search" value={input} onChange={(e) => handleChange(e.target.value)} />
                    {/* <button onClick={handleSearch}>Search</button> */}
                </div>

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
                        <TableDashboad userData={data} />

                        <div className='pagination'>
                            <div className='pag-content'>
                                <p>Showing</p>
                                    <select value={itemsToShow} onChange={handleSelectChange}>
                                        <option value={0}>See More<FiArrowDown /></option>
                                        <option value={2}>2 More<FiArrowDown /></option>
                                        <option value={3}>3 More<FiArrowDown /></option>
                                        <option value={10}>10 More<FiArrowDown /></option>
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