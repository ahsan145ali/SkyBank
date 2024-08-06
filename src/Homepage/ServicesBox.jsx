import Service from "./Service";
import '../App.css';

const ServicesBox = () => {
    return (
        <>
            <table style={{position: "fixed", top: "40%", left: "25%", borderSpacing: "30px"}}>
                <Service />
            </table>
        </>
    )
}

export default ServicesBox;