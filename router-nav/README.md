### **Introduction to React Router**

React Router is a popular library for managing navigation in React applications. It provides a declarative way to define routes and handle URL changes.

### **Setting Up Navigation with createBrowserRouter**

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ... your components

const router = createBrowserRouter([
  // Define your routes here
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### **Creating Routes and Navigation Links**

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### **Nested Routes and Route Parameters**

```javascript
// previous codes...

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/adam">Adam</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function User(props) {
  const { username } = useParams();
  return <h1>User: {username}</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/:username",
        element: <User />,
      },
    ],
  },
]);
```

### **Implementing Navigation in a React Application**

1. **Install React Router:**
   ```bash
   npm install react-router-dom
   ```
2. **Define routes using `createBrowserRouter`**.
3. **Render the router using `RouterProvider`**.
4. **Create navigation links using `Link` components**.

## **Challenge: Build a Simple E-commerce Application**

Create a basic e-commerce application with a product list, product detail pages.

**Requirements:**

- **Product List:**
  - Display a list of products with images, names, and prices.
  - Each product should have a link to its detail page.
- **Product Detail Page:**
  - Display the product's image, name, description, and price.
  - Include a "Add to Cart" button.

**Example Product Data:**

```javascript
const products = [
  {
    id: 1,
    name: "Product A",
    price: 19.99,
    image: "product-a.jpg",
    description: "Description for Product A",
  },
  // ... more products
];
```
