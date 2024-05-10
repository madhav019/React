import React, { lazy, Suspense, useContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./contexts/UserContext";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  return (
    <ReduxProvider store={store}>
      <UserContext.Provider value={{ loggedInUser: "Madhav" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </ReduxProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={() => <h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={() => <h1>Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={() => <h1>Loading</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resturantId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
