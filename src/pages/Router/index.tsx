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
import AdminBooksChaptersPage from "../Admin/Books/[id]/Chapters/index.page";
import AdminBooksChaptersShowPage from "../Admin/Books/[id]/Chapters/[chid]/index.page";

import ProtectedOutlet from "./_ProtectedOutlet";

export const RouterPaths = {
  INDEX: "/",
  LOGIN: "/login",
  ADMIN: {
    INDEX: "/admin",
    BOOKS: {
      INDEX: "books",
      CREATE: "create",
      SHOW: {
        INDEX: ":id",
        CHAPTERS: {
          INDEX: "chapters",
          SHOW: ":chid",
        },
      },
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
          <Route path={RouterPaths.ADMIN.BOOKS.SHOW.INDEX} element={<Outlet />}>
            <Route index element={<AdminBooksShowPage />} />

            <Route
              path={RouterPaths.ADMIN.BOOKS.SHOW.CHAPTERS.INDEX}
              element={<Outlet />}
            >
              <Route index element={<AdminBooksChaptersPage />} />
              <Route
                path={RouterPaths.ADMIN.BOOKS.SHOW.CHAPTERS.SHOW}
                element={<AdminBooksChaptersShowPage />}
              />
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
