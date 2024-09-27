**Redux**

Redux is a predictable state container for JavaScript applications. It centralizes the management of application state, making it easier to reason about and debug. Key principles of Redux include:

- **Single Source of Truth:** All application state is stored in a single object called the Redux store.
- **State is Read-Only:** The only way to change the state is by dispatching actions.
- **Changes are Made with Pure Functions:** Reducers are pure functions that take the previous state and an action, returning a new state.

**Redux Toolkit**

Redux Toolkit is a library that simplifies the development of Redux applications by providing a set of utility functions and tools. It offers a more concise and efficient way to write Redux code. Some of the key benefits of using Redux Toolkit over Redux include:

- **Simplified state management:** The `createSlice` API simplifies the creation of reducers.
- **Immer integration:** Uses Immer for immutable state updates, making it easier to reason about state changes.
- **Built-in tools:** Provides tools like `createAsyncThunk` for handling asynchronous actions, reducing boilerplate code.

**Why use Redux Toolkit over Redux?**

- **Reduced boilerplate:** Redux Toolkit eliminates the need for writing boilerplate code, making your Redux code more concise and easier to maintain.
- **Improved readability:** The `createSlice` API and Immer integration make your Redux code more readable and understandable.
- **Simplified asynchronous actions:** `createAsyncThunk` simplifies the handling of asynchronous actions, making your code more organized and easier to test.

In summary, Redux Toolkit offers significant benefits over traditional Redux, making it a great choice for developing Redux applications. It simplifies state management, improves code readability, and provides a more enjoyable development experience.

## **Redux Toolkit and Project Deployment**

### **Actions, Reducers, and the Redux Store**

- **Actions:** Plain JavaScript objects that describe the type of change that needs to be made to the state.
- **Reducers:** Pure functions that take the previous state and an action, returning a new state.
- **Redux Store:** Holds the application's state and provides methods to dispatch actions and access the current state.

### **Integrating Redux Toolkit with a React Application**

1. **Install Redux Toolkit:**
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
2. **Create a Redux store:**

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    // Your reducers
  },
});

function App() {
  return <Provider store={store}>{/*rest of your app*/}</Provider>;
}

export default App;
```

3. **Define reducers using `createSlice`:**

```javascript
import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  // starting point
  initialState: { flag: false },
  reducers: {
    // actions for manipulate state
    toggle: (state) => {
      state.flag = !state.flag;
    },
  },
});
```

4. **Connect components to the Redux store:**

```javascript
import { useDispatch, useSelector } from "react-redux";

const { toggle } = toggleSlice.actions;
const toggleReducer = toggleSlice.reducer;

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

function Toggler() {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.toggle.flag);

  return (
    <button onClick={() => dispatch(toggle())}>{flag ? "On" : "Off"}</button>
  );
}
```

### **Deploying a React Application to Vercel**

1. **Create a Vercel account:** Sign up for a free Vercel account.
2. **Initialize your project:** Create a new project on Vercel and connect your GitHub repository.
3. **Deploy:** Vercel will automatically build and deploy your application.

## **Practice: Building a Counter App with Redux Toolkit**

**Create a React application with a counter component.**

1. **Set up Redux Toolkit:** Create a Redux store and a reducer using `createSlice`.
2. **Connect the component to Redux:** Use `useSelector` and `useDispatch` to access the state and dispatch actions.
3. **Implement increment and decrement actions:** Define actions using `createSlice`.
4. **Update the counter state in the reducer:** Handle the increment and decrement actions in the reducer.

This example demonstrates how to use Redux Toolkit to manage state in a React application. You can extend this to more complex scenarios by creating multiple reducers and actions to manage different parts of your application's state.
