import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import "../assets/css/app.css";

function ContentWrapper() {
  return (
    <div>
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
      {/* End of Page Wrapper */}
    </div>
  );
}
export default ContentWrapper;
