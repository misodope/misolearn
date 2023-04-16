import App from "../pages/App";
import { Dashboard } from "../pages/Dashboard";
import { About } from "../pages/About";
// For React Router Routes
export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
