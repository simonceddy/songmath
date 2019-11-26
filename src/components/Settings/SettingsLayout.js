import React from 'react';

function SettingsLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default SettingsLayout;
