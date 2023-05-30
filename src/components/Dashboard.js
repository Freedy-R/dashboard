import '../style/style.css'
import Profile from './elements/Profile'
import Sections from './elements/Sections';
const Dashboard = () => {
    return (
        <>
            <section className="dashboard">
                <Profile />
                <Sections />
            </section>
        </>
    );
}

export default Dashboard;