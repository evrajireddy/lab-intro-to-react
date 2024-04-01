import React from "react";
import "../index.css";


function UserProfile(props) {
    const profile = props.profile;
    return <div class="solid-border user-profile">
        <div class="container">
            <div class="image">
                <img src="../src/profile.png" />
            </div>
            <div class="text">
                <strong><div>{profile.name}</div></strong>
                <div>{profile.job}</div>
                <div>{profile.description}</div>
            </div>
        </div>
    </div>
}

export default UserProfile;