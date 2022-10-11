import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import People from "./Components/People/People";
import UserDetails from "./Components/UserDetails/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/products", element: <Products></Products> },
        {
          path: "/people",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <People></People>,
        },
        {
          path:"people/user/:userID", 
          loader: async ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
          },
          element: <UserDetails></UserDetails>
        }
      ],
    },
    //not found custom warning component
    {
      path: "*",
      element: <div>Apnar bhul hoyeche. Dekheshone click korun.</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
