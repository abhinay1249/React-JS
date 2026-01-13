import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css' 


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
