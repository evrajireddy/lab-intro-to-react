import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"

function App() {
  const profileData = {
    profile: {
      name: 'Jordan Walke', job: 'React Creator', description: 'Lorem Ipsem'
    },
    posts: [
      { postTitle: 'Title', postDescription: 'Lorem Ipsem' },
      { postTitle: 'Title', postDescription: 'Lorem Ipsem' },
      { postTitle: 'Title', postDescription: 'Lorem Ipsem' }
    ],
    contacts: [
      { contactName: 'Jordan Walke', contactJob: 'React Creator', contactDescription: 'Lorem Ipsem' },
      { contactName: 'Jordan Walke', contactJob: 'React Creator', contactDescription: 'Lorem Ipsem' },
      { contactName: 'Jordan Walke', contactJob: 'React Creator', contactDescription: 'Lorem Ipsem' }
    ]
  }

  return <div>
    <NavBar /> 
    <div class="full-width">
      <div class="left-section">
        <UserProfile profile={profileData.profile} /> <br /> <br /><br />
        <Posts posts={profileData.posts} />
      </div>
      <div class="right-section">
        <Contacts contacts={profileData.contacts} />
      </div>
    </div>
  </div>
}

export default App;
