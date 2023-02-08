import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Restaurant from "./src/components/Body/Restaurant";
import RestaurantList from "./src/components/Body/RestaurantList";
import RestauratCardShimmer from "./src/components/Body/RestauratCardShimmer";
import Error from "./src/components/Error";
import Navbar from "./src/components/Header/Navbar";
import useOnline from "./src/components/Header/utils/useOnline";

const About = lazy(()=> import("./src/components/About"))
const Instamart = lazy(()=> import("./src/components/Instamart")) 
const App = () => {

  const isOnline= useOnline();
  return (
    <div>
      {isOnline ?  <>
      <Navbar />
      <Outlet />

      </> : <>
      <h1>No internet</h1>
      Try : 
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnectig to Wi-Fi</li>
        <li>Running Windows Network Diagnostics</li>
      </ul>
      </>}
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
    }, {
      path:"/about",
      element:(
        <Suspense fallback={<h1>Loading....</h1>}>
          <About />
        </Suspense>
      )
    },
  
    {
      path:"/restaurant/:id",
      element:<RestaurantList />
    }, {
      path:"/instamart",
      element: (
        <Suspense fallback={<RestauratCardShimmer />}>
          <Instamart />
        </Suspense>
      )
    }
 ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={app} />);

export default App
