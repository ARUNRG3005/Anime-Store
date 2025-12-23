import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Signup from "./pages/Signup";
import Loader from "./components/Loader";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/admin", element: <AdminPage /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> }
      ]
    }
  ]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0e0e0e"
        }}
      >
        <Loader />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}
