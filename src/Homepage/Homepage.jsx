import React from 'react';
import Info from './Info.jsx';
import Services from './Services.jsx';
import Navbar from './Navbar.jsx';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <hr style=
                {{
                    color: "black",
                    backgroundColor: "black",
                    height: 3,
                    marginTop: "6em"
                }}
            />
            <Info vertical="20%" horizontal="10%"/>
            <div style={{backgroundColor: "blue"}}>
            <Services />
            </div>
        </> 
    )
}

export default Homepage;