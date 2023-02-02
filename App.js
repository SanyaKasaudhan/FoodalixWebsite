import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Restaurant from "./src/components/Body/Restaurant";
import RestaurantList from "./src/components/Body/RestaurantList";
import Error from "./src/components/Error";
import Navbar from "./src/components/Header/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

    </div>
  )
}

const app = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    children:[{
      path:"/",
      element: <Restaurant />
    }, 
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/restaurant/:id",
      element:<RestaurantList />
    }
 ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={app} />);

export default App
