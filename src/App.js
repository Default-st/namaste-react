import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
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
        <Route index element={<Body />} errorElement={<Error />} />
        <Route path="/about" element={<About />} errorElement={<Error />} />
        <Route path="/contact" element={<Contact />} errorElement={<Error />} />
        <Route
          path="/restaurants/:resId"
          element={<RestaurantMenu />}
          errorElement={<Error />}
        />
      </Route>
    </Routes>
  );
}

function App() {
  return <RouterProvider router={router} />;
}
