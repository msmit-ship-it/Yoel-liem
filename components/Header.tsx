
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-gojek-green p-4 flex items-center gap-4 shadow-md">
      <div className="relative flex-grow">
        <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          placeholder="Cari layanan, makanan, & tujuan"
          className="w-full bg-white h-10 pl-10 pr-4 rounded-full text-sm focus:outline-none"
        />
      </div>
      <div>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <i className="fa-solid fa-user text-gray-600"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
