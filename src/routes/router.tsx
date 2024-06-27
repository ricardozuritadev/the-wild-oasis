import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "ui/AppLayout";
import Dashboard from "pages/Dashboard";
import Bookings from "pages/Bookings";
import Cabins from "pages/Cabins";
import Users from "pages/Users";
import Settings from "pages/Settings";
import Account from "pages/Account";
import Login from "pages/Login";
import PageNotFound from "pages/PageNotFound";
import GlobalStyles from "styles/global-styles";

export const router = createBrowserRouter([
    {
        element: (
            <>
                <GlobalStyles />
                <AppLayout />
            </>
        ),
        errorElement: (
            <>
                <GlobalStyles />
                <PageNotFound />
            </>
        ),
        children: [
            {
                index: true,
                element: <Navigate replace to="dashboard" />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "bookings",
                element: <Bookings />
            },
            {
                path: "cabins",
                element: <Cabins />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "account",
                element: <Account />
            }
        ]
    },
    {
        path: "login",
        element: <Login />
    }
]);
