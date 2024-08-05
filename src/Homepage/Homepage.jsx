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
            <div class="card">
                <div class="content">
                    <p class="heading">Balance
                        <span class="balance" >
                            £20,000
                        </span>
                        </p>

                    <p class="para">
                        Click here to view your transactions &rsaquo;
                   </p>
                </div>
            </div>
            <Info vertical="20%" horizontal="10%"/>
            <Services />
        </>
    )
}

export default Homepage;