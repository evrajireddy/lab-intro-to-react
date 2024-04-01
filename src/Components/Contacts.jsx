import React from "react";
//import "./index.css";
import ContactUserCard from "./ContactUserCard";

function Contacts(props) {


    const contacts = props.contacts
    const renderContacts = contacts.map((contactObj) =>
        <ContactUserCard contact={contactObj} />);


    return <div class="solid-border contacts">
        <h3>Contacts</h3>
        {renderContacts}
    </div>
}

export default Contacts;