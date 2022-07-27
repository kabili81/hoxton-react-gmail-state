import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";
import { useState } from "react";
import emails from "./data/emails";

type Email = {
  id:number,
    sender: string,
    title: string,
    starred: boolean,
    read: boolean
}

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails)
  console.log(initialEmails);

  function toggleRead(email: Email) {
  const emailsCopy = structuredClone(emails)

  const targetEmail = emailsCopy.find(target => target.id === email.id)
    targetEmail.read = !targetEmail.read

    setEmails(emailsCopy)
  }

  function toggleStarred(email: Email) {
    const emailsCopy = structuredClone(emails)

    const targetEmail = emailsCopy.find(target => target.id === email.id)
      targetEmail.starred = !targetEmail.starred
  
      setEmails(emailsCopy)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map(email => 
      <div className={email.read ? "email read":"email unread"} >
        <input type="checkbox" checked={email.read} onClick={() => {
          toggleRead(email)
        }}/>
        <input className="star-checkbox" type="checkbox" checked={email.starred} onClick={() => {
          toggleStarred(email)}}/>
        <span className="sender">{email.sender}</span>
        <span className="title">{email.title}</span>
        </div>)}
        </main>
    </div>
  );
}

export default App;
