import ProfileSections from "./elements/ProfileSections";
import logo from "../assets/logo.png"
import "../style/profile.css"
const Profile = () => {
    return (
        <>
            <section className="dashboard_profile">
                <figure className="dashboard_profile_element">
                    <img src={logo} alt="logo" />
                    <figcaption>Green Delights</figcaption>
                </figure>
                <ProfileSections />
                <figure className="dashboard_profile_element">
                    <img alt="profile" className="profile" />
                    <figcaption>Name of profile</figcaption>
                </figure>
            </section>
        </>
    )
}
export default Profile;