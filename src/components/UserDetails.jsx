import React, { useEffect, useState } from "react";
import Nav from './sections/Nav'
import Sidebar from './sections/Sidebar'
import DetailBody from "./sections/DetailBody";
import { fetchData } from '../axios/apiService';

const UserDetails = () => {
    const [ userData, setUserData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();
            setUserData(responseData);
            setLoading(false)
        };
  
        getData();
    }, []);

    return (
        <section>
        <Nav />

        <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar />
            <div id="overlay" className="overlay"></div>

            <DetailBody userData={userData} />
        </div>
    </section>
    );
}

export default UserDetails;