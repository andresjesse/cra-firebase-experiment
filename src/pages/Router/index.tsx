import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "../Admin/index.page";
import HomePage from "../Home/index.page";
import LoginPage from "../Login/index.page";
import ProtectedRoute from "./_ProtectedRoute";

export enum Routes {
  HOME = "/",
  LOGIN = "/login",
  ADMIN = "/admin",
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
  {
    path: Routes.ADMIN,
    element: (
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
