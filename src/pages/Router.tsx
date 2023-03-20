import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home/index.page";
import LoginPage from "./Login/index.page";

export enum Routes {
  HOME = "/",
  LOGIN = "/login",
}

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.LOGIN,
    element: <LoginPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
