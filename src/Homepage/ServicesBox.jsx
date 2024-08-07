import Service from "./Service";

const ServicesBox = () => {
    return (
        <div style={{backgroundColor: "blue"}}>
            <table style={{position: "fixed", top: "40%", left: "25%", borderSpacing: "30px"}}>
                <Service />
            </table>
        </div>
    )
}

export default ServicesBox;