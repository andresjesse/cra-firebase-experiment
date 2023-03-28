import AdminBooksCreatePage from "@/pages/Admin/Books/Create/index.page";
import AdminBooksPage from "@/pages/Admin/Books/index.page";
import AdminBooksShowPage from "@/pages/Admin/Books/[id]/index.page";
import AdminPage from "@/pages/Admin/index.page";
import HomePage from "@/pages/Home/index.page";
import LoginPage from "@/pages/Login/index.page";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProtectedOutlet from "./_ProtectedOutlet";

export const RouterPaths = {
  INDEX: "/",
  LOGIN: "/login",
  ADMIN: {
    INDEX: "/admin",
    BOOKS: {
      INDEX: "books",
      CREATE: "create",
      SHOW: ":id",
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
          <Route
            path={RouterPaths.ADMIN.BOOKS.SHOW}
            element={<AdminBooksShowPage />}
          />
        </Route>
      </Route>
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
