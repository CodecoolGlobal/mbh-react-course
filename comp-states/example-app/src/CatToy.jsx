import React, { useState } from 'react';

function CatToy() {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Cat Toy</button>
      {isClicked && <p>Cat Toy is Active!</p>}
    </div>
  );
}

export default CatToy;
