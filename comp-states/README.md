### **Creating Functional Components**

**Basic Functional Component:**

```javascript
import React from "react";

function Cat(props) {
  return (
    <div>
      <h1>Meet {props.name}</h1>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
```

### **Understanding and Using Props**

Props are used to pass data from parent components to child components.

```javascript
import React from "react";
import Cat from "./Cat";

function CatList() {
  const cats = [
    { name: "Whiskers", image: "whiskers.jpg" },
    { name: "Mittens", image: "mittens.jpg" },
  ];

  return (
    <div>
      {cats.map((cat) => (
        <Cat key={cat.name} name={cat.name} image={cat.image} />
      ))}
    </div>
  );
}
```

### **Event Handling**

Use the `onClick` event handler to trigger actions when a user clicks on an element.

```javascript
import React, { useState } from "react";

function CatCounter() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <p>Clicks: {clickCount}</p>
      <button onClick={handleClick}>Pet the Cat</button>
    </div>
  );
}
```

### **Introduction to State**

State is a way to store data within a component that can change over time.

### **Managing State with useState Hook**

```javascript
import React, { useState } from "react";

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
```

### **Lifting State Up**

Sometimes, state needs to be managed at a higher level to share it between multiple components.

```javascript
import React, { useState } from "react";
import CatCounter from "./CatCounter";

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
```
