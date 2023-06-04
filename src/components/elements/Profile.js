import ProfileSections from "./ProfileSections";
const Profile = () => {
    return (
        <>
            <section className="dashboard_profile">
                <figure>
                    <img src="" alt="logo" />
                    <figcaption>Company</figcaption>
                </figure>
                <ProfileSections/>
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