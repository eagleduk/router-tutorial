
const profileData = {
    velopert: {
        name: "velopert",
        description: "fastCampus teacher"
    },
    homer: {
        name: "homer simson",
        description: "simson family father"
    }
}

function Profile({ match }) {
    const { username, id } = match.params;
    console.log(username, id);

    const profile = profileData[username];

    if(!profile) {
        return <div> Cannot find User. </div>
    }


    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    )
}

export default Profile;