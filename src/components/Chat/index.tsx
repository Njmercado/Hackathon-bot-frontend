// src/components/Chat.jsx
import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const newMessage = {
      id: (messages?.length ?? 0) + 1,
      text: input,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat">
      <h2>Chat con IA</h2>
      <div className="chat-window">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe un mensaje..." 
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
