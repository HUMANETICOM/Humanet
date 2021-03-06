
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
// import Basics from "views/IndexSections/Basics.js";
// import Navbars from "views/IndexSections/Navbars.js";
// import Tabs from "views/IndexSections/Tabs.js";
// import Pagination from "views/IndexSections/Pagination.js";
// import Notifications from "views/IndexSections/Notifications.js";
// import Typography from "views/IndexSections/Typography.js";
// import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
// import Signup from "views/IndexSections/Signup.js";
// import Examples from "views/IndexSections/Examples.js";
// import Download from "views/IndexSections/Download.js";
import Abouthandset from "views/IndexSections/abouthandset.js";
import Scanme from "views/IndexSections/scanme.js";
import Testimonial from "./IndexSections/Testimonial";

export default function Index() {
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Abouthandset/>
          <Scanme/>
          <NucleoIcons />
          {/* <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <Signup />
          <Examples />
          <Download /> */}
          <Testimonial/>
        </div>
        <Footer />
      </div>
    </>
  );
}
