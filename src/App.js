import styles from "./App.module.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createHashRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import CoinTracker from "./routes/CoinTracker";

const router = createHashRouter([
  {
    path: `/`,
    element: <Home />,
  },
  {
    path: `/to-do-list`,
    element: <ToDoList />,
  },
  {
    path: `/coin-tracker`,
    element: <CoinTracker />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
