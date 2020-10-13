import React from "react";
import PersonImage from "../../assets/images/person.jpeg";
import "./chat.css";

const Chat = () => {
  return (
    <article className="chat-item">
      <img className="avatar" src={PersonImage} alt="contact person" />
      <div>
        <div className="user-info">
          <h3>Finn</h3>
          <p>7:38 PM</p>
        </div>

        <p className="last-message">
          Listen I have had a pretty messed up day...
        </p>
      </div>
    </article>
  );
};

export default Chat;
