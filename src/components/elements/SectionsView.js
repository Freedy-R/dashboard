import { LineChart, CustomersDevices } from "./AllCharts";
import profile from "../../assets/rating.png"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { GreenDelightsData } from "../../firebase-config"
const SectionsView = () => {
    const [employers, setEmployers] = useState([])
    const employersCollectionRef = collection(GreenDelightsData, "employers")
    useEffect(() => {
        const getEmployers = async () => {
            const data = await getDocs(employersCollectionRef)
            setEmployers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getEmployers()
    }, [])

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
                            {employers.map((employer) => {
                                return (
                                    <>
                                        <figure>
                                            <img src={[profile]} alt="profile"></img>
                                            <figcaption>{employer.name}</figcaption>
                                        </figure>
                                        <p>{employer.position}</p>
                                        <p>{employer.total_sale}</p>
                                        <p>{employer.remaining_item}</p>
                                        <p>{employer.hire_date}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="dashboard_sections_view--element"></div>
                </div>
                <div className="dashboard_sections_view--right">
                    <div className="dashboard_sections_view--element">
                        <h3>Customers time on devices</h3>
                        <CustomersDevices></CustomersDevices>
                    </div>
                    <div className="dashboard_sections_view--element"></div>
                </div>
            </section>
        </>
    )
}


export default SectionsView;