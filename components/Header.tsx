
import React from 'react';

const ChefHatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        <path d="M19 14h-2v-2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v4h18v-4c0-1.1-.9-2-2-2zm-9 4H8v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center py-8 px-4">
      <div className="inline-flex items-center gap-4">
        <ChefHatIcon />
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
                Leftover Smart Recipe Genie
            </h1>
            <p className="text-md md:text-lg text-gray-600 mt-1">
                Turn your leftovers into delightful meals!
            </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
