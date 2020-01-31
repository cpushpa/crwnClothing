import React from "react";
import "./HomePage.styles.scss";

import Directory from "../../components/Directory/Directory.component.jsx";

const HomePage=()=>{
    return(
        <div className="homepage">
            <Directory />
        </div>
    );
};

export default HomePage;