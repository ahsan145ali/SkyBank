import Slogan from "./Slogan";

const Info = ({ vertical, horizontal }) => {
    return (
        <>
            <h2 style={{position: "fixed", top: vertical, right: horizontal}}>Join Sky Today for <br/>Cashback <br/>Benefits</h2>
            <Slogan vertical={vertical} horizontal={horizontal}/>
        </>
    )
}

export default Info;