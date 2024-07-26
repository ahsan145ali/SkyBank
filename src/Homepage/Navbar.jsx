import skyLogo from './skyLogo.jpeg';

const Navbar = () => {
    return (
        <>
        {/* The left property is just 50 - half the width */}
        <img style={{height: "6%", width: "5%", position: "fixed", top: "2%", left: "47.5%"}} src={skyLogo} alt="Sky Logo"/>
            <button style={{position: "fixed", top: "2%", right: "2%"}}>Login</button>
        </>
    )
}

export default Navbar;