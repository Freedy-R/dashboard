import LineChart from "./AllCharts";
import profile from "../../assets/rating.png"

const SectionsView = () => {
    return (
        <>
            <section className="dashboard_sections_view">
                <div className="dashboard_sections_view--left">
                    <div className="dashboard_sections_view--element">
                        <h3>Customers by time of the day</h3>
                        <select id="period">
                            <option value="year">This Year</option>
                            <option value="month">This Month</option>
                            <option value="day">This Day</option>
                            <option value="week">This Week</option>
                        </select>
                        <LineChart></LineChart>
                    </div>
                    <div className="dashboard_sections_view--element">
                        <h3>Employers</h3>
                        <div className="customers_table">
                            <p><b>Name</b></p>
                            <p><b>Position</b></p>
                            <p><b>Total Sale</b></p>
                            <p><b>Remaining Item</b></p>
                            <p><b>Hire Date</b></p>
                            {/* dynamically added to table */}
                            <figure>
                                <img src={[profile]} alt="profile"></img>
                                <figcaption>John</figcaption>
                            </figure>    
                            <p>Manager</p>
                            <p>100K</p>
                            <p>10K</p>
                            <p>10.05.2022</p>
                        </div>
                    </div>
                    <div className="dashboard_sections_view--element"></div>
                </div>
                <div className="dashboard_sections_view--right">
                    <div className="dashboard_sections_view--element"></div>
                    <div className="dashboard_sections_view--element"></div>
                </div>
            </section>
        </>
    )
}


export default SectionsView;