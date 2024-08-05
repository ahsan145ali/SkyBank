import Service from "./Service";
import '../App.css';

const ServicesBox = () => {
    return (
        <>
        <div style={{positionbackgroundColor: "blue", top: "50vh"}}>
            <table style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "200vh"}}>
                <Service />
            </table>
        </div>
        </>
    )
}

export default ServicesBox;