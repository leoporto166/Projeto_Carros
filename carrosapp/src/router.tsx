import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { New } from "./pages/dashboard/new";
import { Datails } from "./pages/details";
import { Layout } from "./components/layout";
import { Private } from "./routes/Private";

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
                element: 
                <Private>
                    <Dashboard></Dashboard>
                </Private>,
                path: "/dashboard"
            },
            {
                element: 
                <Private>
                    <New></New>
                </Private>,
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
