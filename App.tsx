
import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import PromosScreen from './screens/PromosScreen';
import OrdersScreen from './screens/OrdersScreen';
import ChatScreen from './screens/ChatScreen';
import { type ActiveScreen } from './types';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('Home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Promos':
        return <PromosScreen />;
      case 'Orders':
        return <OrdersScreen />;
      case 'Chat':
        return <ChatScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen font-sans bg-white shadow-lg flex flex-col">
      <div className="flex-grow pb-20"> 
        {renderScreen()}
      </div>
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default App;
