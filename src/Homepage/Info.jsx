import Slogan from "./Slogan";

const Info = ({ vertical, horizontal }) => {
    return (
        <>
            <h1 style={{position: "fixed", top: vertical, left: horizontal}}>Join Sky Today for <br/>Cashback <br/>Benefits</h1>
            <Slogan vertical={vertical} horizontal={horizontal}/>
        </>
    )
}

export default Info;
