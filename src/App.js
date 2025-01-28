import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Error from "./components/Error";

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <div className="m-5 w-full h-full">
      <Header />
      <Outlet />
    </div>
  );
};

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);
const router = createBrowserRouter([{ path: "*", element: <Layout /> }]);
root.render(<App />);

function Layout() {
  return (
    <Routes errorElement={<Error />}>
      <Route path="/" element={<AppLayout />} errorElement={<Error />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Body />
            </Suspense>
          }
          errorElement={<Error />}
        />{" "}
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <About />
            </Suspense>
          }
          errorElement={<Error />}
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Contact />
            </Suspense>
          }
          errorElement={<Error />}
        />
        <Route
          path="/restaurants/:resId"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <RestaurantMenu />
            </Suspense>
          }
          errorElement={<Error />}
        />
      </Route>
    </Routes>
  );
}

function App() {
  return <RouterProvider router={router} />;
}
