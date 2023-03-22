import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminBooksCreatePage from "../Admin/Books/Create/index.page";
import AdminBooksPage from "../Admin/Books/index.page";
import AdminPage from "../Admin/index.page";
import HomePage from "../Home/index.page";
import LoginPage from "../Login/index.page";
import ProtectedOutlet from "./_ProtectedOutlet";

export const RouterPaths = {
  INDEX: "/",
  LOGIN: "login",
  ADMIN: {
    INDEX: "admin",
    BOOKS: {
      INDEX: "books",
      CREATE: "create",
    },
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouterPaths.INDEX} element={<Outlet />}>
      <Route index element={<HomePage />} />
      <Route path={RouterPaths.LOGIN} element={<LoginPage />} />
      <Route path={RouterPaths.ADMIN.INDEX} element={<ProtectedOutlet />}>
        <Route index element={<AdminPage />} />
        <Route path={RouterPaths.ADMIN.BOOKS.INDEX} element={<Outlet />}>
          <Route index element={<AdminBooksPage />} />
          <Route
            path={RouterPaths.ADMIN.BOOKS.CREATE}
            element={<AdminBooksCreatePage />}
          />
        </Route>
      </Route>
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
