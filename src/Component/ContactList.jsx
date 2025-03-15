const ContactList = ({ contacts, selectedContact, onSelect }) => {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => onSelect(contact)}
              className=" border border-gray-400 w-full mx-2 rounded my-1 hover:cursor-pointer "
            >
              {" "}
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
