import React from "react";
//import "./index.css";


function ContactUserCard(props) {
    const contact = props.contact;

    return <div class="solid-border contact">
        <div class="container">
            <div class="image">
                <img src="../src/profile.png" />
            </div>
            <div class="text">
                
                <strong><div>{contact.contactName}</div></strong>
                <div>{contact.contactJob}</div>
                <div>{contact.contactDescription}</div>
            </div>
        </div>
    </div>
}

export default ContactUserCard;