import LineChart from "./AllCharts";
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
                        <table className="customer_table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Total Sale</th>
                                    <th>Remaining Item</th>
                                    <th>Hire date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>CEO</td>
                                    <td>100K</td>
                                    <td>20K</td>
                                    <td>02.05.2022</td>
                                </tr>
                            </tbody>
                        </table>
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