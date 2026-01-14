import{ useState } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  
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
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
      }
    ];

    setInputText('');
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinner} className="loading-spinner"/>,
        sender: 'Robot',
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
      }
    ]);
    const response = await (Chatbot.getResponseAsync(inputText));
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'Robot',
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
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