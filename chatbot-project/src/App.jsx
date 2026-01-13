import { useState, useEffect, useRef } from 'react'
import './App.css'



function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'User',
        id: crypto.randomUUID()
      }
    ];

    setInputText('');
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src="Images/loading-spinner.gif" className="loading-spinner"/>,
        sender: 'Robot',
        id: crypto.randomUUID()
      }
    ]);
    const response = await (Chatbot.getResponseAsync(inputText));
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'Robot',
        id: crypto.randomUUID()
      }
    ]);
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }
  
  return (
    <div className="input-area-container">
      <input
        className="input-area"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText} // Controlled Input
      />
      <button
        className="send-button"
        onClick={sendMessage}
      >Send</button>
    </div>
  );
}

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
          src="Images/robot.png"
        />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'User' && (
        <img
          className="chat-message-profile"
          src="Images/user.png"
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
