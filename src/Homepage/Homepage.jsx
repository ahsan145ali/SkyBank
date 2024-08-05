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
            <Info vertical="20%" horizontal="10%"/>
            <Services />
        </>
    )
}

export default Homepage;