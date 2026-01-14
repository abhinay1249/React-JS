import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css' 

function App(){

  const [chatMessages, setChatMessages] = useState([]);
  // const [chatMessages,setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages=array[1]

  useEffect(()=>{
    Chatbot.addResponses({
      'goodbye':'GoodBye.Have a Great Day!',
      'give me a unique id':function(){
        return `Sure! Here is the unique id: ${crypto.randomUUID()}`;
      }
    });
  },[]);

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
