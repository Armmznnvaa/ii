import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import UserRoot from "./UserRoot/UserRoot";
import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserRoot/>,
      children:[
        {
          path:"/Home",
          element:<Home/>
        },
        {
          path:"/Add",
          element:<Add/>
        }
      ]
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
