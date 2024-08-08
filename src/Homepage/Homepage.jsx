import React from 'react';
import Info from './Info.jsx';
import Services from './Services.jsx';

const Homepage = () => {
    return (
        <>
            <hr style=
                {{
                    color: "black",
                    height: 3
                }}
            />
            <Info vertical="20%" horizontal="10%"/>
            <container>
            <Services />
            </container>
        </> 
    )
}

export default Homepage;