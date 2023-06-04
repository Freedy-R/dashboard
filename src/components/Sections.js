import { useState } from "react";
import "../style/sections.css"
const Sections = () => {
    const [listState, setListState] = useState({
        elements: [
            { id: "12", title: "Dashboard", className: "btndashboard" },
            { id: "22", title: "Insights", className: "btninsights" },
            { id: "32", title: "Channels", className: "btnchannels" }
        ]
    })
    const handleClick = (id) => {
        console.log("Clicked element ID:", id);
    }
    return (
        <>
            <section className="dashboard_sections">
                <section className="dashboard_section_nav">
                    <label htmlFor="btnBack">
                        <input className="btnBack" type="button" id="btnBack" value="<" />
                        Back
                    </label>
                    <ul>
                        <ul>
                            {listState.elements.map((element) => (
                                <li key={element.id}>
                                    <button className={element.className} onClick={() => handleClick(element.id)}>
                                        {element.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </section>
                <section className="dashboard_sections_view">
                <path d="M0,100 Q50,150 100,100 T200,100 V200 H0 Z" fill="#FF0000" />
                </section>
            </section>
        </>
    )
}
export default Sections;