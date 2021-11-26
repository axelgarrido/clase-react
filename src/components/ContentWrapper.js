import React from 'react';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer'
import '../assets/css/app.css'

function ContentWrapper() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content"></div>
          <TopBar />
          <ContentRowTop />
          {/* End of MainContent */}
          <Footer />
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </div>
  );
}
export default ContentWrapper;