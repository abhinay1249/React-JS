import { useState, useEffect, useRef } from 'react'
import './App.css'
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import { ChatInput } from './components/ChatInput';

 
// ========================== Chat User Component ==========================

function ChatUser({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {message,sender} = props;
  /*
  if(sender === "robot"){
    return(
      <div>
        <img src="Images/robot.png" width="50"/>
        {message};
      </div>
    )
  }
  */
  return (
    <div className={
      sender === 'User'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'Robot' && (
        <img
          className="chat-message-profile"
          src={RobotProfileImage}
        />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'User' && (
        <img
          className="chat-message-profile"
          src={UserProfileImage}
        />
      )}
    </div>
  );
}
// ====================== Chat Messages Component =============================

function useAutoScroll(dependencies){

  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  },dependencies);
  return containerRef;
}
function ChatMessages({ chatMessages}) {

  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatUser
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App(){
  const [chatMessages, setChatMessages] = useState([]);
  // const [chatMessages,setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages=array[1]
  return (
    <div className="app-container">
      <div className="welcome-message">
        {chatMessages.length === 0 && <p>Welcome to the Chatbot Project! Send a message using the text-box below</p>}
      </div>
        <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
