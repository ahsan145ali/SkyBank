import React from 'react';
import Info from './Info.jsx';
import Services from './Services.jsx';

const Homepage = () => {
    return (
        <>
            {/*<Navbar />*/}
            <hr style=
                {{
                    color: "black",
                    backgroundColor: "black",
                    height: 3,
                    marginTop: "6em"
                }}
            />
            <div style={{backgroundColor: "white", zIndex: 5}}>
            <Info vertical="20%" horizontal="10%"/>
            <Services />
            </div>
        </> 
    )
}

export default Homepage;