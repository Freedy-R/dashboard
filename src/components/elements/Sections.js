const Sections = () => {
    return(
        <>
         <section className="dashboard_sections">
                    <section className="dashboard_section_nav">
                        <label for="btnBack">
                            <input className="btnBack" type="button" id="btnBack" value="<" />
                            Back
                        </label>
                        <ul>
                            <li>
                            <button className="thing">Dashboard</button>
                            </li>
                            <li>
                            <button className="thing">Insights</button>
                            </li>
                            <li>
                            <button className="thing">Channels</button>
                            </li>
                        </ul>
                    </section>
                    <section class="dashboard_sections_view"></section>
                </section>
        </>
    )
}
export default Sections;