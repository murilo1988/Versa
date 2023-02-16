import React from "react";
import "./Message.css";

function Message(msg, type) {
  return (
    <div className={`message_${type}`}>
      <p>{msg}</p>
    </div>
  );
}

export default Message;
