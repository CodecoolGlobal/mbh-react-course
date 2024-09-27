**Components:**

- Building blocks of React applications.
- Can be functional or class-based.
- Render JSX to represent the UI.
- Receive props to customize their behavior.

**JSX:**

- Syntax extension for JavaScript that makes it easier to write HTML-like structures.
- Transpiled into regular JavaScript code.
- Allows for conditional rendering and dynamic content.

**Virtual DOM:**

- A lightweight, in-memory representation of the real DOM.
- React uses it to efficiently update the UI by calculating the minimum necessary changes.
- Improves performance by avoiding direct manipulation of the real DOM.

**Props:**

- Immutable values passed from parent components to child components.
- Used to customize the behavior of child components.
- Cannot be modified directly within the child component.

**State:**

- Mutable data stored within a component.
- Used to manage the component's internal state and trigger re-renders.
- Managed using the `useState` hook in functional components.

**Event Handling:**

- React uses synthetic events that are cross-browser compatible.
- Attach event handlers to elements using JSX attributes.
- Use the `onClick`, `onChange`, `onSubmit`, and other event handlers.

**Lifting State Up:**

- When multiple components need to share state, it's often better to lift the state up to a common ancestor.
- This allows for centralized management.

**Functional Components:**

- Simpler and more declarative than class components.
- Use hooks like `useState` and `useEffect` to manage state and side effects.
- Often preferred for most use cases.

**Class Components:**

- Traditionally used for managing state and lifecycle methods.
- Less common in modern React development.
- Can still be used for complex components or when dealing with legacy code.

**Hooks:**

- Reusable functions that allow you to access React features without writing class components.
