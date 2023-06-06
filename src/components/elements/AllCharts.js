import { Chart as ChartJS,LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from "chart.js"
import { Line, Pie } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { GreenDelightsData } from "../../firebase-config"
import { useState,useEffect } from "react";
ChartJS.register(
    LineElement,
    ArcElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
);

export const LineChart = () => {
    const [customer_visit, setCustomer_visit_devices] = useState([])
    const customer_visitCollectionRef = collection(GreenDelightsData, "customer_visit")
    useEffect(() => {
        const getCustomer_visit_devices = async () => {
            const data = await getDocs(customer_visitCollectionRef)
            setCustomer_visit_devices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCustomer_visit_devices()
    }, [])
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Customers',
            data: [30, 33, 60, 22, 58, 22],
            borderColor: 'red',
            backgroundColor: 'blue',
            tension: 0.4
        }]
    }
    const options = {}
    return (
        <>
            <div className="customerVisit">
                <Line data={data} options={options}></Line>
            </div>
        </>
    )
}
export const CustomersDevices = () => {
    const [time_devices, setTime_devices] = useState([])
    const customer_devicesCollectionRef = collection(GreenDelightsData, "customer_devices")
    useEffect(() => {
        const getTime_devices = async () => {
            const data = await getDocs(customer_devicesCollectionRef)
            setTime_devices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getTime_devices()
    }, [])

    const tabletTime = time_devices.map(deviceTime => deviceTime.time_on_tablet)
    const desktopTime = time_devices.map(deviceTime => deviceTime.time_on_desktop)
    const mobileTime = time_devices.map(deviceTime => deviceTime.time_on_mobile)  
    
    const data = {
        labels: ['Tablet', 'Desktop', 'Mobile'],
        datasets: [{
            data: [tabletTime,desktopTime,mobileTime],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
        }],   
    }
    const options = {
        type: 'pie',
        data: data,
    }
    return (
        <>
            <div className="customersDevices">
                <Pie data={data} options={options}></Pie>
            </div>
        </>
    )
}