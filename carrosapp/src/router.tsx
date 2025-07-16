import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/indes";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { New } from "./pages/dashboard/new";
import { Datails } from "./pages/details";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        children: [
            {
                element: <Home></Home>,
                path: "/"
            },
            {
                element: <Login></Login>,
                path: "/login"
            },
            {
                element: <Register></Register>,
                path: "/register",
            },
            {
                element: <Dashboard></Dashboard>,
                path: "/dashboard"
            },
            {
                element: <New></New>,
                path: "/dashboard/new"
            },
            {
                element: <Datails></Datails>,
                path: "/details/:id"
            }

    ]
    }
])

export default router
