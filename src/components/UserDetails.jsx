import React from "react";
import Nav from './sections/Nav'
import Sidebar from './sections/Sidebar'
import DetailBody from "./sections/DetailBody";

const UserDetails = () => {
    return (
        <section>
        <Nav />

        <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar />
            <div id="overlay" className="overlay"></div>

            <DetailBody />
        </div>
    </section>
    );
}

export default UserDetails;