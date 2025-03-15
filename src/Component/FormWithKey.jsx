import {useState} from 'react';

import Chat from "./Chat";
import ContactList from "./ContactList";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const FormWithKey = () => {
    const [to,setTo] = useState(contacts[0]);
    const [message,setMessage] = useState({});

    const handleMessageChange =(contact,text) =>{
        setMessage(pre=>({
            ...pre,
            [contact.id]:text
        }));
    }

  return (
  <div className="flex   border border-gray-400 rounded px-2 py-3 w-2/3 h-1/3 gap-5">
    <ContactList
      contacts = {contacts}
      selectedContact = {to}
      onSelect = {setTo}
      className = "w-1/3 h-2/3 "
    />
    <Chat 
        key = {to.id}
        contact = {to}
        text = {message[to.id]|| ""}
        onTextChange = {handleMessageChange}
        className = "w-2/3 h-1/3"
    />
  </div>
  );
};

export default FormWithKey;
