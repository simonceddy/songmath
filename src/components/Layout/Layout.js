import React from 'react';
import NavButton from '../NavButton/NavButton';

function Layout({ children }) {
  return (
    <div className="min-h-full w-full md:w-4/5 flex flex-col bg-blue-800 mx-auto">
      <div className="mx-3 mt-2 flex flex-row justify-start">
        <NavButton to="/" exact>Note Frequencies</NavButton>
        <NavButton to="/bpm" exact>BPM Beat Calculator</NavButton>
        {/* <NavButton to="/settings" exact>Settings</NavButton> */}
      </div>
      <div className="flex-1 mx-3 p-2 bg-blue-200">
        {children}
      </div>
    </div>
  );
}

export default Layout;
