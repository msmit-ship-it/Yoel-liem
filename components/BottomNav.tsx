
import React from 'react';
import { type ActiveScreen } from '../types';

interface BottomNavProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
}

const NavItem: React.FC<{
  label: ActiveScreen;
  iconClass: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, iconClass, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-xs transition-colors duration-200 ${
      isActive ? 'text-gojek-green' : 'text-gray-500'
    }`}
  >
    <i className={`text-2xl ${iconClass}`}></i>
    <span className="mt-1 font-semibold">{label}</span>
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems: { label: ActiveScreen; icon: string }[] = [
    { label: 'Home', icon: 'fa-solid fa-house' },
    { label: 'Promos', icon: 'fa-solid fa-tag' },
    { label: 'Orders', icon: 'fa-solid fa-receipt' },
    { label: 'Chat', icon: 'fa-solid fa-comment-dots' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            iconClass={item.icon}
            isActive={activeScreen === item.label}
            onClick={() => setActiveScreen(item.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
