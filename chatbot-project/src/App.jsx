import { useState, useEffect, useRef } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput';

 

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
