import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contacts/Contact";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Ceo from "./Components/Contacts/Ceo";
import Cto from "./Components/Contacts/Cto";
import Others from "./Components/Contacts/Others";
import Template from "./Template";

function App() {
  const router = createBrowserRouter([
    {
      element: <Template />,
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
          path: "/contact",
          element: <Contact />,
          children: [
            { path: "ceo", element: <Ceo /> },
            { path: "cto", element: <Cto /> },
            { path: ":name", element: <Others /> },
          ],
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
