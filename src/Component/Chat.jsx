const Chat = ({ onTextChange, text, contact }) => {
  return (
    <section>
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => onTextChange(contact, e.target.value)}
        className="border border-gray-400 rounded w-60 h-30 px-2 py-2"
      />
      <br />
      <button className="border border-gray-400 w-60  rounded ">
        Send to {contact.email}
      </button>
    </section>
  );
};

export default Chat;
