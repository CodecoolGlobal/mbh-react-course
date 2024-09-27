import React, { useState } from 'react';

function CatCounter(props) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    props.onGlobalClick();
  };

  return (
    <div>
      <p>Clicks: {clickCount}</p>
      <button onClick={handleClick}>Pet the Cat</button>
    </div>
  );
}

export default CatCounter;
