import React from 'react'
import Nav from './sections/Nav'
import BodyContent from './sections/BodyContent'
import Sidebar from './sections/Sidebar'

const Home = () => {
  return (
    <section>
        <Nav />

        <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar />
            <div id="overlay" className="overlay"></div>

            <BodyContent />
        </div>
    </section>
  );
};

export default Home;
