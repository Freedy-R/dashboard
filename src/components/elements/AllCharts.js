import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
);

const LineChart = () => {
    const data = {
        labels: ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday', 'Friday', 'Saturday' ],
        datasets: [{
            label: 'Customers',
            data: [30, 33, 60,22,58,22],
            borderColor: 'red',
            backgroundColor: 'blue',
            tension: 0.4
        }]
    }
    const options = {

    }
    return (
        <>
            <div  className="customerVisit">
                <Line data={data} options={options}></Line>
            </div>
        </>
    )
}
export default LineChart;