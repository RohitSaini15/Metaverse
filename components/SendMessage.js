import { useMoralis } from "react-moralis";
import { useState, useRef, useEffect } from "react";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const message = useRef("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.current.value) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message.current.value,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .catch((err) => console.log("message save error", err));

    endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth" });
    message.current.value = "";
  };

  return (
    <form className="flex w-11/12 px-6 py-5 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 fixed bottom-10 bg-black opacity-80">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        type="text"
        placeholder={"Enter a message " + user.getUsername() + "..."}
        ref={message}
      ></input>
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
