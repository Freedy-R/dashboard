import { useState } from "react";
import "../style/sections.css"
import SectionsView from "./elements/SectionsView";
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
                <SectionsView></SectionsView>
            </section>
        </>
    )
}
export default Sections;