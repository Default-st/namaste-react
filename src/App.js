import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/UserCpntext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Satyansh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        <Route
          path="/cart"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Cart />
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
