import React, { useEffect, useState } from 'react';
import Nav from './sections/Nav'
import Sidebar from './sections/Sidebar'
import BodyContent from './sections/BodyContent'
import SidebarUser from './subSection/SidebarUser';
import Loans from './subSection/Loans';
import Saving from './subSection/Saving';
import Request from './subSection/Request';
import Whitelist from './subSection/Whitelist';
import Karma from './subSection/Karma';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChildValue = (value) => {
    setActiveTab(value);
    console.log(activeTab)
  };

  return (
    <section>
        <Nav />

        <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar onValueChange={handleChildValue} />
            <div id="overlay" className="overlay"></div>
            
            {activeTab === 1 && <BodyContent />}
            {activeTab === 2 && <SidebarUser />}
            {activeTab === 3 && <Loans />}
            {activeTab === 4 && <Saving />}
            {activeTab === 5 && <Request />}
            {activeTab === 6 && <Whitelist />}
            {activeTab === 7 && <Karma />}
        </div>
    </section>
  );
};

export default Home;
