import { Chart as ChartJS,LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from "chart.js"
import { Line, Pie } from "react-chartjs-2";

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
    const data = {
        labels: ['Tablet', 'Desktop', 'Mobile'],
        datasets: [{
            data: [2.5,79.2,17.3],
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