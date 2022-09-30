import styles from "./App.module.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import CoinTracker from "./routes/CoinTracker";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
  {
    path: `${process.env.PUBLIC_URL}/to-do-list`,
    element: <ToDoList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/coin-tracker`,
    element: <CoinTracker />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
