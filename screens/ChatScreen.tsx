
import React from 'react';

const ChatScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
       <i className="fa-solid fa-comment-dots text-6xl text-gojek-green mb-4"></i>
      <h1 className="text-2xl font-bold text-gray-800">Chat</h1>
      <p className="text-gray-600 mt-2">Your chat inbox is empty.</p>
    </div>
  );
};

export default ChatScreen;
