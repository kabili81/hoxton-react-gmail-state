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

// Udhëzimet
// - Vendosni gjendjen duke përdorur useState dhe fillestare Emails
// - Paraqisni një listë emailesh nga shteti në mënyrë që të duket e ngjashme me pamjen e ekranit
// - Krijo një funksion toggleRead që përditëson veçorinë e leximit të emailit të synuar në gjendje, kur një përdorues klikon në kutinë e kontrollit
// - Krijo një funksion toggleStar që përditëson pronën e shënuar me yll të emailit të synuar në gjendje, kur një përdorues klikon në yllin
// - Sigurohuni që këto ndryshime të hyjnë në fuqi në ndërfaqen e përdoruesit

// - Nuk mund ta besoj se duhet ta them këtë, por sigurohuni që aplikacioni juaj të funksionojë dhe nëse nuk mund ta bëni atë të funksionojë, dërgoni një mesazh në #mbështetje 🙈 🙈 🙈 🙈 🙈

// Këshilla
// - Injoro komponentin Header për momentin
// - Mund të përdorni CSS në app.css për të ndihmuar në stilimin e listës suaj të emaileve ose për të krijuar stilet tuaja
// - Array.map është një metodë e dobishme për paraqitjen e listave dhe modifikimin e gjendjes
// - Mos harroni të përdorni atributin kyç kur jepni listat në react

// Sfida 1
// - Merrni kutinë e kontrollit Hide Read për të funksionuar në seksionin e menysë së majtë. Do t'ju duhet të përdorni gjendjen për të mbajtur gjurmët e ndryshimeve dhe do t'ju duhet një funksion për të filtruar emailet përpara se ato të jepen, p.sh. getReadEmails (email)

// Sfida 2
// - Merrni kutinë hyrëse të menysë së majtë dhe artikujt e menysë me yll që të funksionojnë kur klikoni. Do t'ju duhet të përdorni gjendjen për të mbajtur gjurmët e ndryshimeve, p.sh. aktualTab dhe do t'ju duhet një funksion për të filtruar emailet përpara se të jepen, p.sh. getStarredEmails(email)

// Sfida 3
// - Zëvendësoni pikëpyetjet e koduara në menynë e majtë

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
      <main className="emails">{emails.map(item => 
      <li className="elements">
        <input id="hide-read" type="checkbox"></input>
        
        <span className="sender">{item.sender}</span>
        <span className="title">{item.title}</span>
        </li>)}
        </main>
    </div>
  );
}

export default App;
