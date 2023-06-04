import ProfileSections from "./elements/ProfileSections";
import logo from "../assets/logo.png"
import "../style/profile.css"
const Profile = () => {
    return (
        <>
            <section className="dashboard_profile">
                <figure>
                    <img src={logo} alt="logo" />
                    <figcaption>Green Delights</figcaption>
                </figure>
                <ProfileSections />
                <section>
                    <figure className="dashboard_profile_element">
                        <img alt="profile" className="profile" />
                        <figcaption>Name of profile</figcaption>
                    </figure>
                    
                </section>
            </section>
        </>
    )
}
export default Profile;