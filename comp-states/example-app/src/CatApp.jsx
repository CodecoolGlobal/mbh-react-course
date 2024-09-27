import React, { useState } from 'react';
import CatCounter from './CatCounter';

function CatApp() {
  const [globalClickCount, setGlobalClickCount] = useState(0);

  const handleGlobalClick = () => {
    setGlobalClickCount(globalClickCount + 1);
  };

  return (
    <div>
      <CatCounter onGlobalClick={handleGlobalClick} />
      <p>Total Clicks: {globalClickCount}</p>
    </div>
  );
}

export default CatApp;
